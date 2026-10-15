# Astra brief: KICT v2 clip (pupil distance from eye corners: overestimate, then calibration)

Read `clips/BRIEF_OPEN.md` for the general rules (no UI chrome, title position, no attribution in the
clip, bottom-right 980x300 px kept clear, `?t=` freeze), except where this brief overrides them.
**Overrides:** BRIEF_OPEN asks you to invent three concepts; here the concept is fixed (below). Write a
short NOTES.md (what you built, what's from the paper, your own frame-by-frame critique at 0.5/1.5/2.5 s)
and build this. The on-scene numeric annotations below are required content, not UI chrome (draw them
as neon leader-line labels in the scene, not as cards/panels).
Do NOT modify anything in `clips/`. v1 (`clips/KICT/`) showed a generic point-cloud head with a
pupil-to-pupil line; v2 must show the paper's RESULT. You may look at v1 for technique but build fresh.
Paper text (if you need it): `clips-v2/.qa/KICT/paper.txt`.

## Hard constraints
- One self-contained `clips-v2/KICT/index.html`, 1920x1080, auto-plays, `?t=<seconds>` freezes it
  deterministically (it will be captured frame by frame at 30 fps for 3 s). No Math.random without a
  seeded PRNG; everything a pure function of t.
- 3D: three.js from jsDelivr via an import map, pinned version (use three@0.169.0 + addons, e.g.
  UnrealBloomPass). No other CDNs (no Google Fonts): use system font stacks
  (e.g. "Segoe UI", "Bahnschrift", Consolas, monospace). No build step.
- No citation/attribution in the clip. Keep the bottom-right 980x300 px (x > 940, y > 780) free of the
  title, labels and the key action (the face's lower cloud may pass behind it).
- Scientifically honest; an expert author will watch. HTML comment at the top: what comes from the paper
  (with page refs) vs artistic licence (the face shape is a generic stand-in, not a subject; the
  offsets are the paper's mean bias values drawn at true mm scale relative to a 63.59 mm reference).
- Every number on screen must be exactly as below (use the true minus sign "−", "mm" units). Do NOT
  show RMSE. Do not invent any other number.
- Never launch a browser. Check your module with `node --check` (extract the module to a .mjs in
  clips-v2/.qa/KICT/). Wrap interpolated numbers in GLSL in parentheses.

## Layout (1920x1080)
- Title centred at the top (y ~ 60-160), with a subtle dark gradient scrim.
- Face centred around x ~ 900, eyes at y ~ 470; PD span ~620 px wide (so 1 mm ≈ 9.75 px), left eye
  proxy ~ x 590, right ~ x 1210. Chin can go down to ~ y 1000 but the bottom-right zone must only
  contain dim cloud dots.
- Proxy/calibrated labels: place them above/right of the right eye end (x 1250-1880, y 250-700) and
  the caveat band label below the beam end but above y 780 or in the left margin. Keep everything
  readable when the video is scaled to 1/3.


## What the paper did (for context)
Standard 468-landmark MediaPipe FaceMesh has no pupil or iris landmarks. The authors (p. 440):
- take the eye-corner (canthus) landmarks, right eye L33 (lateral) + L133 (medial), left eye
  L263 (lateral) + L362 (medial);
- use the midpoint of each eye's two corners as an eye-centre proxy (Eq. 5-6);
- convert landmark units to mm by assuming the eye-opening width (palpebral fissure width, corner to
  corner) is the Malay young-adult norm of **29.10 mm** (Eq. 4, Table I);
- direct proxy PD = distance between the two midpoints x that scale (Eq. 7);
- then a nested AutoML model (outer repeated 5-fold x 10, inner 4-fold) calibrates this against
  ground-truth PD. 44 subjects; mean ground-truth PD **63.59 mm** (Table I).

## Headline result
Measuring pupil distance from eye corners alone **overestimates it: bias +2.83 mm, MAE 4.26 mm**. The
learned calibration **removes that systematic overestimate: bias −0.08 mm, MAE 3.51 mm**, and
predictions within ±5 mm rise from **59.09 % to 75.00 %** (Table II, p. 442; text p. 443; abstract
p. 438). The authors say "the main benefit of AutoML was not simply reducing error magnitude but
reducing systematic bias" (Sec. IV-F, p. 443).
Honest caveat the authors stress (Sec. IV-H, p. 444): the Bland-Altman limits of agreement stay wide,
**−8.45 to +8.30 mm**, so it is an approximate research/screening proxy, not a replacement for a
clinical pupillometer.

Numbers deliberately NOT on screen: RMSE (the paper prints 4.22 mm in the text and 4.23 mm in Table II;
avoid the inconsistency), confidence intervals, Table III model frequencies.

## The data on screen (all from Table II / Table I)
| On screen | Value | Source |
|---|---|---|
| landmark count | 468 | title, p. 440 |
| normative eye-opening width | 29.10 mm | Table I, Eq. 4 |
| direct proxy | bias +2.83 mm, MAE 4.26 mm | Table II |
| calibrated | bias −0.08 mm, MAE 3.51 mm | Table II |
| optional small line | within ±5 mm: 59.09 % → 75.00 % | Table II |
| honest caveat | limits of agreement −8.45 to +8.30 mm | Table II, p. 444 |
| optional | 44 subjects | Table I |

## Staging it in the subject (not a chart)
The subject is a face measured by its landmarks, so the result is staged ON the face as a measuring
line at TRUE mm scale:
- A neon point-cloud face: 468 dots (a plausible FaceMesh-like frontal face), faint wireframe
  triangulation between neighbours.
- The four canthus landmarks flare. Short bright segments join each eye's two corners (the eye-opening
  width) with a tag "29.10 mm" on one of them: that is the ruler the method uses.
- The two corner midpoints appear as crosshair nodes. A white-cyan reference span sits at the
  ground-truth distance, anchored at the left eye proxy: tag "true PD" (the face is a generic average
  face; the reference span is the paper's mean 63.59 mm and is the anchor for the error offsets).
- The **direct proxy** measuring beam (hot magenta) shoots across from the left proxy and **overshoots**
  the true-PD tick by **2.83 mm at true scale** (the face is big enough that PD spans ~620 px, so
  1 mm ≈ 9.7 px and 2.83 mm ≈ 27 px: visible without exaggeration). A mm-graduated wireframe
  ruler/loupe around the right end makes the overshoot readable (a loupe must state its magnification,
  e.g. "×4", and keep true proportions). Label: "eye-corner estimate  +2.83 mm too wide on average ·
  mean error 4.26 mm".
- **Calibration:** a scanning wireframe sweep (the learned correction) passes along the beam; the
  overshoot retracts to land essentially on the true tick (−0.08 mm, i.e. 0.8 px short: visually on
  it), and the beam changes colour magenta → cyan/green. Label: "after calibration  −0.08 mm bias ·
  mean error 3.51 mm".
- **Honest spread:** then a faint translucent band appears around the beam end spanning −8.45 to
  +8.30 mm (≈ 162 px at true scale), with a small label "individual errors still up to ~8 mm: a
  research proxy, not a clinical tool" (or "limits of agreement −8.45 to +8.30 mm"). Never implies the
  estimate became exact.

## Storyboard (0-3 s)
- **0.0-0.5 s:** the point cloud resolves into the face (dots streaming into place), faint wireframe
  mesh. By 0.5 s: face readable, four canthus corners flaring, eye-width segments lit with "29.10 mm",
  midpoint crosshairs appearing, true-PD reference span drawn.
- **0.5-1.1 s:** the magenta proxy beam fires across and overshoots; the loupe/ruler at its right end
  shows the +2.83 mm overshoot; label "+2.83 mm too wide · mean error 4.26 mm" types on.
  **At ~1.0 s the overshoot is the frame.**
- **1.1-1.7 s:** calibration sweep; beam retracts onto the true tick, recolours. Label "−0.08 mm bias ·
  mean error 3.51 mm". **At 1.5 s:** both states readable: a magenta ghost of the old overshoot still
  faintly visible past the tick, the new cyan end on the tick. Finding lands by ~1.8 s.
- **1.8-3.0 s:** hold; the old ghost fades to a thin dim outline (keep it faintly visible for the
  before/after); the ±8 mm agreement band fades in around the end with its caveat label; slow subtle
  camera parallax. **At 2.5 s:** the full result: before ghost, after beam, the four numbers, the
  band.

## Title (centred, top)
**"Calibration cancels the eye-corner overestimate"**, small subtitle beneath: "pupil distance from
468 face landmarks".

## Swap test
Only this paper measures pupil distance from four FaceMesh eye-corner landmarks scaled by a 29.10 mm
eye-width norm, and reports that direct proxy overshooting by +2.83 mm until calibration brings bias to
−0.08 mm; another PD or face-landmark paper would have different landmarks, a different scale
reference and different numbers.

## Visual style and medium
KICT technique: **neon point cloud and wireframe on black**. Three.js (pinned 0.169.0), true black
background, additive-blended points with bloom, thin 1 px wireframe edges, scanner sweep lines, HUD-free
annotations drawn as thin neon leader lines with a monospace/technical sans (e.g. JetBrains Mono / Space
Grotesk-like, but only system or inline-safe fonts, no Google CDN unless BRIEF_OPEN allows). Palette:
cool cyan-white for the face cloud, amber for the canthus landmarks, hot magenta for the biased proxy,
cyan-green for the calibrated result. Motion language: digital, precise: points snap into place, beams
fire and retract with overshoot-damped easing, a scan sweep does the calibration. The technique suits
the paper because its entire input IS a 468-point landmark cloud; the measurement lives inside that
cloud, in millimetres.
