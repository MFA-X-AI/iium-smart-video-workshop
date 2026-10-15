# Astra brief: KAED v2 clip (Itchan Kala integration map)

Read `clips/BRIEF_OPEN.md` for the general rules (no UI chrome, title position, no attribution in the
clip, bottom-right 980x300 px kept clear, `?t=` freeze), except where this brief overrides them.
Do NOT modify anything in `clips/` (v1 lives in `clips/KAED/`; you may read it for its craft, e.g.
crenellated walls and golden-hour lighting, but its town layout and colour scheme are invented and
must not be reused).

The research is already done. The full proposal is below (copied from `clips-v2/KAED/PROPOSAL.md`).
You do not need to re-read the paper, but the reference images are there for you:

- `clips-v2/.qa/KAED/fig6.png` (1518x1474): **Figure 6, the axial integration map. This is your source
  for the plan and the street colours. Open it and trace from it.**
- `clips-v2/.qa/KAED/p9.png` (Fig. 5 visual integration), `p11.png` (Fig. 7 controllability; do NOT
  use its colours), `p7.png` (Fig. 3 illustrated layout, useful for building character only).
- Paper text: `clips-v2/.qa/KAED/text.txt` (PDF page = printed page - 953).

---

## The idea in one line
A golden-hour architectural model of the **real** Itchan Kala plan (traced from Figure 6), whose
streets light up in the paper's own integration colours: the red market street through the Juma Masjid
first, then the orange perpendicular street to the two accommodation zones, then everything cooling
to blue at the walls.

## Fingerprint (from the paper)
Figure 6 (p. 963): the main market street (Palvon-Qori ko'chasi) dominates global integration (red),
with the Juma Masjid at its midpoint (p. 961). A prominent perpendicular street (Tashpulatov
ko'chasi, orange) links the northern and southern accommodation zones directly to the Juma Masjid
(pp. 963-964). Integration decreases away from the main street toward the residential quarters and
wall-side lanes (green, cyan, blue): "graduated privacy" (p. 964).

## Geometry: trace Figure 6
Trace in `fig6.png` pixel coordinates, then map to world units (the site is about 650 x 400 m, p. 958;
use that for proportion, the long side runs top-to-bottom in the figure). Rotate the whole plan by
roughly +20 degrees so the red market street runs nearly horizontal on screen. Approximate anchors
read by eye from fig6.png (x, y in px; refine them against the image):

- **Wall outline** (grey band with crenellation ticks): NW corner ~(428, 88); north gate notch
  ~(745, 60); NE corner ~(1062, 245); east wall down to ~(915, 660); the east side then steps out
  around the caravanserai block (large grey rectangle ~(880-1000, 660-960)); east gate area ~(950, 940);
  lower east wall down to SE corner ~(790, 1430); south gate ~(515, 1445); SW corner ~(20, 1228); west
  wall up to ~(130, 815); west Ark notch (pale lilac block) ~(40-200, 545-770).
- **Red, main market street (Palvon-Qori ko'chasi):** from the Ark ~(130, 615) to ~(820, 885) near the
  east gate. Deepest red from ~(400, 720) to ~(810, 880).
- **Juma Masjid:** crescent icon ~(560, 855) with label pointer; the mosque block sits just south of the
  market street between ~(510-640, 800-900). Other crescents (~(770, 810), ~(810, 895), ~(295, 915))
  are other mosques; do not label them.
- **Orange, Tashpulatov ko'chasi:** from the north gate ~(760, 40) down ~(745, 150), ~(700, 470),
  ~(660, 640), crossing the market street at ~(620, 810), then continuing south ~(560, 1000),
  ~(515, 1110), to the south gate ~(505, 1440) (orange fading to yellow-green in the south). Also
  orange: the branch ~(470, 780) to ~(370, 1060) into the southern zone, and the short segments around
  the caravanserai ~(690-820, 760-890).
- **Accommodation zone circles:** north centre ~(695, 345) r ~150; south centre ~(430, 1090) r ~150.
- **Yellow / yellow-green:** Boyaqchilar ko'chasi ~(400, 570) to ~(870, 640); the secondary ring of
  streets around the core; east-side street ~(1020, 280) to ~(840, 900).
- **Green / cyan:** lanes inside both accommodation zones, Palvon Mahmud ko'chasi (SW, ~(160, 1170)
  to ~(290, 920)), the perimeter streets on west and south.
- **Blue:** the NW perimeter ~(345, 270)-(430, 88)-(760, 90) and the NE wall street
  ~(1060, 250)-(915, 660); a short blue lane in the south ~(270, 1220)-(410, 1190).
- **Building footprints:** simplified blocks from the beige footprints in the figure (the white gaps
  are streets and courtyards). Extrude low (1-3 storeys) in warm clay. The squares with coloured
  outlines at ~(210, 740), ~(440, 1060), ~(640, 1030), ~(720, 810) are courtyards: keep them as open
  courts.

It is fine to simplify (merge tiny lanes, smooth kinks), but the overall plan, the two main axes and
where they meet at the Juma Masjid must be recognisable to the authors who drew Figure 6.

Colours: use a red-orange-yellow-green-cyan-blue ramp matching Fig. 6's legend. Assign each traced
street the class it has in the figure. Treat classes as qualitative; do NOT show numbers, a legend, or
a scale bar.

## Storyboard (0-3 s)
Camera: drone view of the model, pitch ~45-55 degrees, market street left-to-right, slow descending
push toward the Juma Masjid. Low golden sun raking across the model so courtyards are shadow pockets.

- **0.0-0.4 s:** the real walled plan in warm clay, streets as pale unlit grooves.
- **0.5 s:** red market street igniting from the Juma Masjid outward both ways (about half lit).
  Small label "Juma Masjid" fading in at the mosque. Everything else unlit.
- **1.5 s:** red street complete, labelled "Main market street". Orange Tashpulatov street has run
  north and south from beside the mosque into the two faint circles labelled "Accommodation zone";
  yellow/green streets spreading from these axes.
- **2.5 s:** the whole network coloured as in Fig. 6; warm core, cyan-to-blue lanes at the walls and
  in the residential quarters; residential courts in shadow. Camera closer and lower. Thumbnail frame.
- Hold to at least 3.0 s (lines fully lit, no fade-out).

Reveal order is by integration class (red, orange, yellow, green, cyan, blue), with each street drawing
from the end nearest the core. It is an animation device; say so in the HTML comment.

Labels: at most these four, using the paper's own wording: "Juma Masjid", "Main market street",
"Accommodation zone" (x2). Small, model-maker style (thin serif or architectural lettering), with a
fine leader line, readable at 1920x1080 scaled to half. No other text besides the title.

## Title
Top-left, documentary title card in a serif matching the architectural-model style:
**"Market and mosque at the heart, homes kept private"** (if it doesn't fit comfortably on two lines,
use "Market and mosque at the heart"). Subtle scrim behind it. No eyebrow, no citation.

## Composition
- Title top-left; keep the model's north end clear of it.
- Bottom-right 980x300 px (x > 940, y > 780): keep the red street, the Juma Masjid, the orange street's
  junction, and all labels out of it at every frame from 0 to 3 s (check by projecting points).
  Scenery (wall, southern blue lanes, desert ground) may pass behind it.
- Suggested framing: model centre around (860, 500) px, extending roughly x 450-1300, y 120-900.

## Style
KAED: architectural model / golden-hour drone flyover. Warm clay and balsa model on a sand base,
crenellated earthen wall with round bastions, low raking sun, soft shadows, slight tilt-shift depth of
field is fine. Street colours are "inlaid" glowing strips in the street grooves, clearly readable over
the clay, with modest bloom. The Juma Masjid may be modelled as a flat-roofed block with a single
minaret (artistic licence; say so). Do not add other landmarks not shown in Fig. 6.

## Honesty (put this in the HTML comment at the top)
From the paper: the plan (traced from Fig. 6, p. 963, whose base map is OpenStreetMap, p. 959); the
per-street integration colour class (Fig. 6); the names and label wording (Fig. 6); Juma Masjid at the
midpoint of the market street (p. 961); the perpendicular street linking the accommodation zones to the
mosque (pp. 963-964); site proportions ~650 x 400 m (p. 958).
Artistic licence: building heights and materials, lighting, camera, the timed reveal order, the
mosque's minaret, simplification of minor lanes, rotation of the plan.

## Hard constraints
- One self-contained `clips-v2/KAED/index.html`, 1920x1080, auto-plays, `?t=<seconds>` freezes it
  deterministically (it will be captured frame by frame at 30 fps for 3 s).
- 3D: three.js from jsDelivr via an import map, pinned version. No other CDNs, no build step.
- No citation/attribution in the clip. Keep the bottom-right 980x300 px free of the title and key
  action.
- Scientifically honest; the lead author will watch. No invented numbers; no numeric values on screen.
- Write only inside `clips-v2/KAED/` and `clips-v2/.qa/`. Never launch a browser. Check the module with
  `node --check`. Write `clips-v2/KAED/NOTES.md` covering what you traced, how, and the 0.5/1.5/2.5 s
  frames as you expect them.
