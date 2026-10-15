"""Find the bright laptop-screen quad in a still. Prints corners (TL TR BR BL) in the still's pixels.
uv run --no-project --python 3.12 --with opencv-python-headless --with numpy python scripts/find-screen-quad.py <still.png>"""
import json, sys
import cv2
import numpy as np
img = cv2.imread(sys.argv[1]); g = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
_, m = cv2.threshold(g, 200, 255, cv2.THRESH_BINARY)
m = cv2.morphologyEx(m, cv2.MORPH_CLOSE, np.ones((9, 9), np.uint8))
cs, _ = cv2.findContours(m, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
c = max(cs, key=cv2.contourArea)
peri = cv2.arcLength(c, True)
for eps in (0.01, 0.02, 0.03, 0.05):
    a = cv2.approxPolyDP(c, eps * peri, True)
    if len(a) == 4: break
p = a.reshape(-1, 2).astype(float)
s = p.sum(1); d = np.diff(p, axis=1).ravel()
q = [p[np.argmin(s)], p[np.argmin(d)], p[np.argmax(s)], p[np.argmax(d)]]  # TL TR BR BL
print(json.dumps([[round(x, 1), round(y, 1)] for x, y in q]), "area", cv2.contourArea(c))
dbg = img.copy(); cv2.polylines(dbg, [np.int32(q)], True, (0, 0, 255), 2); cv2.imwrite(sys.argv[1].replace(".png", "-quad.jpg"), dbg)
