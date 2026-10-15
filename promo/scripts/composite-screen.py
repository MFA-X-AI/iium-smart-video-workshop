"""Put a screenshot onto the laptop screen in the over-the-shoulder take (screen replacement).

Warps the screenshot into the tracked quad (_scratch/m1/track.json) on every frame, then makes it
read as an emissive laptop display: slight softness (the shot's depth of field), exposure matched to
the original screen's brightness, a faint glow spilling onto the bezel. Output keeps the take's
1536x1024 @ 24 fps so the cut script treats it like any other AI take.
Usage: uv run --no-project --with opencv-python-headless --with numpy python
       promo/scripts/composite-screen.py <screenshot.png> <out.mp4>
"""
import json
import subprocess
import sys
from pathlib import Path

import cv2
import numpy as np

PROMO = Path(__file__).resolve().parent.parent
D = PROMO / "_scratch" / "m1"
shot, out_mp4 = Path(sys.argv[1]), Path(sys.argv[2])
track = json.loads((D / "track.json").read_text())
frames = sorted(D.glob("f*.png"))
src = cv2.imread(str(shot)).astype(np.float32)
sh, sw = src.shape[:2]
src_q = np.float32([[0, 0], [sw, 0], [sw, sh], [0, sh]])
tmp = D / "comp"
tmp.mkdir(exist_ok=True)

for i, (f, t) in enumerate(zip(frames, track)):
    img = cv2.imread(str(f)).astype(np.float32)
    h, w = img.shape[:2]
    q = np.float32(t["corners"])
    H = cv2.getPerspectiveTransform(src_q, q)
    # Supersampled warp for clean small text, then back down.
    S = 2
    Hs = np.diag([S, S, 1]).astype(np.float64) @ H
    warped = cv2.warpPerspective(src, Hs, (w * S, h * S), flags=cv2.INTER_AREA)
    warped = cv2.resize(warped, (w, h), interpolation=cv2.INTER_AREA)
    mask = cv2.warpPerspective(np.ones((sh, sw), np.float32), H, (w, h))
    mask = cv2.GaussianBlur(mask, (3, 3), 0)[..., None]

    # Match exposure to the original screen (it is the brightest thing in the shot).
    inside = mask[..., 0] > 0.9
    target = img[inside].mean()
    cur = warped[inside].mean() + 1e-3
    screen = np.clip(warped * (1.12 * target / cur), 0, 255)
    screen = cv2.GaussianBlur(screen, (0, 0), 0.7)  # the shot's lens softness

    comp = img * (1 - mask) + screen * mask
    # A faint emissive glow over the bezel and nearby surfaces.
    glow = cv2.GaussianBlur(screen * mask, (0, 0), 18)
    comp = np.clip(comp + 0.18 * glow * (1 - mask), 0, 255)
    cv2.imwrite(str(tmp / f"c{i:03d}.png"), comp.astype(np.uint8))

subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-framerate", "24", "-i", str(tmp / "c%03d.png"),
                "-c:v", "libx264", "-crf", "14", "-pix_fmt", "yuv420p", str(out_mp4)], check=True)
print("wrote", out_mp4)
