"""Find the laptop screen quad in each frame of the over-the-shoulder take.

The screen is the largest bright, roughly rectangular region. Per frame: threshold on brightness,
take the biggest contour, fit a 4-corner polygon, order corners (TL, TR, BR, BL). Writes
_scratch/m1/corners.json and a debug overlay of the first/middle/last frame.
Usage: uv run --no-project --with opencv-python-headless --with numpy python promo/scripts/find-screen.py
"""
import json
from pathlib import Path

import cv2
import numpy as np

D = Path(__file__).resolve().parent.parent / "_scratch" / "m1"
frames = sorted(D.glob("f*.png"))


def order(pts):
    pts = pts.reshape(4, 2).astype(np.float32)
    s, d = pts.sum(1), np.diff(pts, axis=1).ravel()
    return np.array([pts[s.argmin()], pts[d.argmin()], pts[s.argmax()], pts[d.argmax()]])  # TL TR BR BL


def quad(img):
    hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
    # Measured: the whole screen (blue, orange and the pale centre) has V > 210; his shirt tops out near V 150.
    mask = ((hsv[..., 2] > 200)).astype(np.uint8) * 255
    mask = cv2.morphologyEx(mask, cv2.MORPH_CLOSE, np.ones((9, 9), np.uint8))
    cs, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    c = max(cs, key=cv2.contourArea)
    peri = cv2.arcLength(c, True)
    for eps in (0.01, 0.02, 0.03, 0.05):
        ap = cv2.approxPolyDP(c, eps * peri, True)
        if len(ap) == 4:
            return order(ap), cv2.contourArea(c)
    return order(cv2.boxPoints(cv2.minAreaRect(c))), cv2.contourArea(c)


out = []
for f in frames:
    q, area = quad(cv2.imread(str(f)))
    out.append({"frame": f.name, "corners": q.round(2).tolist(), "area": float(area)})

# Smooth corners over time (small moving average) to kill per-frame jitter.
arr = np.array([o["corners"] for o in out])
k = 5
pad = np.pad(arr, ((k // 2, k // 2), (0, 0), (0, 0)), mode="edge")
sm = np.stack([pad[i:i + k].mean(0) for i in range(len(arr))])
for o, s in zip(out, sm):
    o["smooth"] = s.round(2).tolist()
(D / "corners.json").write_text(json.dumps(out, indent=1))

for idx in (0, len(frames) // 2, len(frames) - 1):
    img = cv2.imread(str(frames[idx]))
    cv2.polylines(img, [sm[idx].astype(np.int32)], True, (0, 0, 255), 3)
    cv2.imwrite(str(D / f"debug-{idx:03d}.png"), img)
areas = [o["area"] for o in out]
print(f"{len(out)} frames; area min {min(areas):.0f} max {max(areas):.0f}; first {sm[0].round().tolist()} last {sm[-1].round().tolist()}")
