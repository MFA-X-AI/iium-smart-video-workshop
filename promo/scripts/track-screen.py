"""Track the laptop screen through the over-the-shoulder take (for screen replacement).

Brightness detection is only clean on the last frame (early frames have a dim left edge), so:
take the last frame's detected quad, then walk BACKWARD frame by frame: Lucas-Kanade flow on
features inside a mask around the laptop (bezel, screen edge, keyboard), forward-backward check,
RANSAC homography, and carry the corners through it. Writes _scratch/m1/track.json
(corners per frame, TL TR BR BL) and debug overlays.
Usage: uv run --no-project --with opencv-python-headless --with numpy python promo/scripts/track-screen.py
"""
import json
from pathlib import Path

import cv2
import numpy as np

D = Path(__file__).resolve().parent.parent / "_scratch" / "m1"
frames = sorted(D.glob("f*.png"))
det = json.loads((D / "corners.json").read_text())
gray = [cv2.cvtColor(cv2.imread(str(f)), cv2.COLOR_BGR2GRAY) for f in frames]

corners = [None] * len(frames)
corners[-1] = np.array(det[-1]["corners"], np.float32)  # raw detection on the clean last frame


def laptop_mask(q, shape):
    m = np.zeros(shape, np.uint8)
    cv2.fillConvexPoly(m, q.astype(np.int32), 255)
    return cv2.dilate(m, np.ones((61, 61), np.uint8))  # include the bezel and part of the keyboard


for i in range(len(frames) - 1, 0, -1):
    a, b = gray[i], gray[i - 1]
    q = corners[i]
    p0 = cv2.goodFeaturesToTrack(a, 400, 0.01, 7, mask=laptop_mask(q, a.shape))
    p1, st, _ = cv2.calcOpticalFlowPyrLK(a, b, p0, None, winSize=(21, 21), maxLevel=3)
    pb, st2, _ = cv2.calcOpticalFlowPyrLK(b, a, p1, None, winSize=(21, 21), maxLevel=3)
    good = (st.ravel() == 1) & (st2.ravel() == 1) & (np.linalg.norm(p0 - pb, axis=2).ravel() < 1.0)
    H, _ = cv2.findHomography(p0[good], p1[good], cv2.RANSAC, 2.0)
    corners[i - 1] = cv2.perspectiveTransform(q.reshape(-1, 1, 2), H).reshape(4, 2)


# Chained tracking drifts (~30 px by frame 38), so snap each side to the real screen edge:
# the bright screen against the dark bezel is a strong luminance step. Search +-R px along the
# side's normal for the largest step (bright inside -> dark outside), fit a line, intersect sides.
def refine(q, g, R=40):
    g = cv2.GaussianBlur(g, (5, 5), 0).astype(np.float32)
    h, w = g.shape
    cen = q.mean(0)
    lines = []
    for k in range(4):
        a, b = q[k], q[(k + 1) % 4]
        d = (b - a) / np.linalg.norm(b - a)
        n = np.array([-d[1], d[0]])
        if np.dot(n, (a + b) / 2 - cen) < 0:
            n = -n  # outward normal
        pts = []
        for s in np.linspace(0.08, 0.92, 40):
            p = a + (b - a) * s
            offs = np.arange(-R, R + 1)
            xy = p + offs[:, None] * n
            xs, ys = xy[:, 0].clip(0, w - 1).astype(int), xy[:, 1].clip(0, h - 1).astype(int)
            prof = g[ys, xs]
            step = prof[:-4] - prof[4:]  # inside minus outside, 4 px apart
            # Take the qualifying edge NEAREST the tracked line, not the strongest: below the screen
            # the bezel-to-keyboard edge is also strong and pulled the bottom side down.
            cand = np.where(step > 0.6 * step.max())[0] if step.max() > 25 else []
            if len(cand):
                j = int(cand[np.abs(cand + 2 - R).argmin()])
                pts.append(xy[j + 2])
        if len(pts) < 8:
            lines.append(None)
            continue
        vx, vy, x0, y0 = cv2.fitLine(np.array(pts, np.float32), cv2.DIST_HUBER, 0, 0.01, 0.01).ravel()
        lines.append((np.array([x0, y0]), np.array([vx, vy])))
    out = q.copy()
    for k in range(4):  # corner k is the intersection of side k-1 and side k
        l1, l2 = lines[k - 1], lines[k]
        if l1 is None or l2 is None:
            continue
        A = np.array([l1[1], -l2[1]]).T
        t = np.linalg.solve(A, l2[0] - l1[0])
        out[k] = l1[0] + t[0] * l1[1]
    return out


corners = [refine(c, g) for c, g in zip(corners, gray)]
# Light temporal smoothing removes residual edge-fit jitter.
arr = np.array(corners)
pad = np.pad(arr, ((2, 2), (0, 0), (0, 0)), mode="edge")
corners = [pad[i:i + 5].mean(0) for i in range(len(arr))]

out = [{"frame": f.name, "corners": c.round(2).tolist()} for f, c in zip(frames, corners)]
(D / "track.json").write_text(json.dumps(out, indent=1))
for idx in (0, len(frames) // 2, len(frames) - 1):
    img = cv2.imread(str(frames[idx]))
    cv2.polylines(img, [corners[idx].astype(np.int32)], True, (0, 255, 0), 3)
    cv2.imwrite(str(D / f"track-{idx:03d}.png"), img)
print("tracked", len(out), "frames; first", corners[0].round().tolist())
