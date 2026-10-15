# Build brief: KOE v2 clip

Read clips/BRIEF_OPEN.md for the general rules (no UI chrome, title position, no attribution in the clip,
bottom-right 980x300 px kept clear, ?t= freeze), except where this brief overrides them. Ignore its
"three concepts" step: the concept is decided below. Still write a short NOTES.md (what you built, what is
on screen at 0.5/1.5/2.5 s). Do NOT look at or reuse clips/KOE/ (v1 was generic and is being replaced).
The paper text is in clips-v2/.qa/KOE/paper.txt; figures p6.png (Fig. 9, 11) in clips-v2/.qa/KOE/.

The whole point: the clip must show this paper's RESULT (torque delivered vs needed per direction),
not the general idea "heated springs move a wrist".

# KOE v2 proposal: SMA-spring wrist exoskeleton (Wahid & Badarussamin, J. Kejuruteraan 38(1) 455-463, 2026)

## Headline result
Four heated SMA springs on an arm splint delivered **more torque than the wrist model says is needed for
up-and-down motion, but not enough for side-to-side motion**:
- **Flexion: 0.332 Nm delivered vs 0.26 Nm required** (p.460 text, Fig. 11b; required from Table 2, p.459)
- **Extension: 0.328 Nm delivered vs 0.27 Nm required** (p.460, Fig. 11a; Table 2)
- **Radial and ulnar deviation: "lower torque outputs that did not meet the estimated requirement of
  0.32 Nm"** (p.460; Table 2). The paper prints no exact radial/ulnar value; Fig. 11c/d peak force is
  about 1.4 N and 1.2 N at a 6 cm arm, i.e. roughly 0.08 / 0.07 Nm (read from the plot, NOT shown as
  numbers on screen; used only to size the short arrows).
- Mechanism of the split verdict (p.460-461): flexion/extension pairs pull directly top/bottom; radial/ulnar
  use diagonal pairs (Mode 3: top-left + bottom-right; Mode 4: top-right + bottom-left, Fig. 9) and suffer
  glove friction. Torque measured at 2 A, 5 V, moment arm 6 cm (p.459).
- Secondary (not on screen except a small honesty note): slow, ~1 min per flexion-extension cycle, 0.018 Hz (Table 4).

## The data on screen (staged in the subject, not a chart)
Torque is drawn the way an engineer draws a moment: a **curved moment arrow around the wrist joint axis**.
Each direction has a **dashed "needed" tick** on its arc (the Table 2 requirement) and a solid arrow that
grows as the springs heat, to its measured value. Arc sweep is proportional to torque (one fixed scale
for all four, e.g. 0.1 Nm = 55 deg). Flexion and extension arrows sweep **past** their dashed ticks; radial and
ulnar arrows **stall well short** of theirs. The wrist moves physically with the springs that are heated.
Labels exactly: "Flexion 0.332 Nm", "needed 0.26 Nm"; "Extension 0.328 Nm", "needed 0.27 Nm";
"Radial / ulnar: below 0.32 Nm needed". Why not a bar chart: the arc around the joint IS the torque,
in the joint, next to the spring that made it.

Drawing sheet has two orthographic views, as a real engineering drawing does:
- **SIDE VIEW (large):** forearm + splint + hand, top spring pair and bottom (palm-side) spring pair.
  Here up/down (extension/flexion) happens.
- **TOP VIEW (smaller):** palm-down forearm/hand seen from above, the diagonal pair, the sideways swing.

## Storyboard (0-3 s)
- **0.0-0.7 s** Blueprint: white/cyan linework draws itself stroke by stroke on a Prussian-blue grid: both
  views, the four coils (as zig-zag coil symbols), terminal blocks, the wrist axis symbol, dimension "6 cm"
  moment arm, and the dashed "needed" ticks with labels.
- **0.5 s (seen):** most of the drawing is traced; dashed "needed 0.27 / 0.26 Nm" ticks visible on the side view.
- **0.7-1.1 s** Blueprint becomes CAD render (a sweep line fills surfaces: satin splint, fabric glove, nitinol coils).
- **1.1-1.6 s** Top pair glows red-hot, coils contract, hand tilts up (extension, ~30 deg target ROM, Table 2); extension arrow grows past its tick -> "Extension 0.328 Nm".
- **1.5 s (seen):** hand up, top coils glowing, extension arrow past dashed tick with label.
- **1.6-2.0 s** Top pair cools to grey, bottom pair glows, hand swings down (flexion); flexion arrow grows past tick -> "Flexion 0.332 Nm". Both arrows remain, labels remain. Verdict by ~2.0 s.
- **2.0-2.6 s** Top view: diagonal pair glows, hand barely yaws; short arrows stop far below dashed "needed 0.32 Nm" tick; amber label "Radial / ulnar: below 0.32 Nm needed".
- **2.5 s (seen):** full verdict: side view (two arrows past ticks), top view (two short arrows short of ticks).
- small note near the drawing title block: "motion sped up; real cycle about 1 min".

## Title (top-right)
"Heated springs bend the wrist, but not sideways"

## Swap test
Only this paper has four SMA springs in antagonistic pairs clearing 0.26/0.27 Nm with 0.332/0.328 Nm while
the diagonal radial/ulnar pairs fall short of 0.32 Nm; the pass/fail split in one drawing is its result.

## Visual style and medium
Engineering blueprint that becomes a CAD render (three.js or canvas 2.5D). Prussian-blue sheet with fine grid,
title block, white/cyan hairline strokes with dimension arrows and technical lettering (ISO-style condensed
sans). Lines draw with constant-speed stroke reveal; then a scanning fill converts to CAD shading (cool
studio light, soft AO, metallic coils). Heat is shown as SMA does it: coil glows red (as Fig. 9 marks heated
coils red) and its pitch shortens. The moment arrows stay in blueprint white/cyan (pass tick green-cyan,
shortfall amber), so the data reads as drawing annotation, not a UI.

## Hard constraints
- One self-contained clips-v2/KOE/index.html, 1920x1080, auto-plays, `?t=<seconds>` freezes deterministically
  (captured frame by frame at 30 fps for 3 s). All animation driven by a single time value t.
- 3D: three.js from jsDelivr via an import map, pinned version. 2D: canvas/SVG; small pinned jsDelivr libs OK.
  No other CDNs, no build step. Fonts: system fonts or embed nothing external (no Google Fonts).
- No citation/attribution in the clip. Keep the bottom-right 980x300 px free of the title, labels and key action
  (blueprint grid/title-block lines may continue there, but no text). Title top-right.
- Text on screen must be exactly: "Flexion 0.332 Nm", "needed 0.26 Nm", "Extension 0.328 Nm", "needed 0.27 Nm",
  "Radial / ulnar: below 0.32 Nm needed", view labels "SIDE VIEW" / "TOP VIEW", "6 cm", the small note
  "motion sped up; real cycle about 1 min", and the title. No other numbers. Do NOT print any radial/ulnar value.
  Labels must be large (>= 26 px for data labels, title >= 56 px) and readable when scaled down.
- Arc sweep proportional to torque on ONE scale for all four arrows. Radial/ulnar arrows sized to about
  0.08 and 0.07 Nm (read from Fig. 11c/d, stated in the HTML comment as approximate plot readings).
- Heated coils red/orange and visibly shorter; unheated coils grey. Correct pairs: extension = both top
  (dorsal) coils; flexion = both bottom (palm-side) coils; radial/ulnar = diagonal pairs (Fig. 9).
- Anatomy must read as a human forearm and hand (fingers, thumb), not a mitten. Wrist rotates about the wrist joint.
- Scientifically honest; the author will watch. HTML comment at the top: what comes from the paper
  (with page refs) vs artistic licence.
- Never launch a browser. Check JS with `node --check` on extracted module code.
