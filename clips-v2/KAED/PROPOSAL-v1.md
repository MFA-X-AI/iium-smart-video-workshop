# KAED v2 proposal: Itchan Kala's real integration map, lit up on a golden-hour model

Paper: Asif, Yusof, Azmin, Abdullah, Sanusi (2025), "Human-Centric Planning of Traditional Islamic
Settlements: A Space Syntax Study of Itchan Kala, Khiva", Planning Malaysia. PDF read in full (15 pp.;
text extracted with pypdf, figure pages rendered with pypdfium2 and inspected as images:
`clips-v2/.qa/KAED/p7.png, p9.png, p10.png, p11.png, p13.png`, zoomed `fig6.png`, `fig89.png`).
Page refs below are printed page numbers (PDF page = printed - 953).

## Why v1 fails the swap test
v1 is an invented walled town with streets glowing in made-up colour families. Any space-syntax paper
on any medina could use it. Nothing in it is Itchan Kala's plan, and nothing is this paper's map.

## Fingerprint
**The paper's own axial integration map of Itchan Kala (Figure 6, p. 963):** within the real walls,
one street dominates, the red **main market street (Palvon-Qori ko'chasi)** running from the Ko'hna Ark
(west) to the Palvon gate / Allakuli Khan caravanserai (east), with the **Juma Masjid at its midpoint**
(p. 961). A **second, orange street running perpendicular (Tashpulatov ko'chasi)** links the two circled
**accommodation zones** in the north and south directly to the Juma Masjid (pp. 963-964). Integration
then cools street by street to blue lanes along the walls, the residential quiet zones (p. 964; the
paper's "graduated privacy"). That exact pattern, on that exact plan, is theirs alone.

Supporting (not on screen, see "Considered and rejected"): global integration vs controllability
R = -0.205 (Fig. 8, p. 966; plot label "R = -0.205001"), local R3 vs controllability R = +0.149
(Fig. 9, p. 966; label "R = 0.14984"). Axis ranges printed on the plots: Integration [HH] 0.668179 to
2.14335; controllability 0.0974026 to 0.706897; Integration [HH] R3 2.58873 to 10.4983.

## The data/finding on screen
- **Geometry:** the Itchan Kala wall outline, the street network, and simplified building footprints
  traced from Figure 6 (whose base map is OpenStreetMap, p. 959). Includes the recognisable features:
  the rectangular crenellated wall, the Ko'hna Ark notch on the west side, the caravanserai block
  outside the east wall, the north and south gates.
- **Colour per street:** each axial line gets the colour it has in Figure 6, read by eye from the
  figure and mapped onto the paper's own ramp (red = high global integration, through orange, yellow,
  green, cyan, to blue = low). Concretely from Fig. 6:
  - red: Palvon-Qori ko'chasi, the main market street, strongest between the museums strip and the
    caravanserai, passing the Juma Masjid;
  - orange: Tashpulatov ko'chasi (N-S, perpendicular, crossing the market street next to the Juma
    Masjid and continuing south), plus the short orange branches around the caravanserai and the
    orange diagonal into the southern accommodation zone;
  - yellow / yellow-green: Boyaqchilar ko'chasi and the ring of secondary streets around the core;
  - green / cyan: the lanes inside the accommodation zones, Palvon Mahmud ko'chasi, perimeter streets;
  - blue: the northern and north-eastern perimeter streets hugging the wall (lowest).
  These are qualitative colour classes exactly as the figure shows them. **No numeric values are
  given per street in the paper, so none are shown.**
- **Labels (the paper's own wording from Fig. 6):** "Main market street", "Juma Masjid" (Fig. 6 writes
  "Masjid Juma"; either is the paper's), and "Accommodation zone" on the two circles. Nothing else.
- **No legend** (BRIEF_OPEN forbids UI chrome). The red-to-blue order is carried by the reveal order
  and the title.

## Storyboard (0-3 s)
Camera: golden-hour drone view of a physical architectural model of Itchan Kala, oriented so the market
street runs roughly left-to-right across the frame, pitched about 45-55 degrees, slow descending push
toward the Juma Masjid. Model left of centre and above the bottom-right citation zone.

- **0.0-0.4 s:** the real walled plan in warm clay and low sun; streets are pale, unlit grooves.
- **0.5 s:** the market street is igniting red from the Juma Masjid outward toward the Ark and the east
  gate (about half its length lit). "Juma Masjid" label fades in at the mosque. Everything else is
  still unlit clay. Viewer reads: one street matters, and a mosque sits on it.
- **1.5 s:** the red market street is complete, labelled "Main market street". The orange Tashpulatov
  street has run north and south from beside the mosque into the two faint circles marked
  "Accommodation zone"; yellow and green secondary streets are spreading out from these two axes.
  Finding has landed: market + mosque at the centre, homes connected to it.
- **2.5 s:** the whole network is coloured as in Figure 6: warm core, cool cyan-to-blue lanes along
  the walls and inside the residential quarters. The residential courtyards stay in shadow; the
  camera is closer and lower. This is the thumbnail frame.

The reveal order is by integration class (red first, blue last): an animation device to read the
hierarchy, not a claim that integration spreads.

## Title (top-left)
**"Market and mosque at the heart, homes kept private"** (9 words; shorter fallback:
"Market and mosque at the heart").

## Swap test
Only this paper has Itchan Kala's own wall outline with a red Palvon-Qori market street crossed by an
orange Tashpulatov street at the Juma Masjid; another medina or another space-syntax paper would have a
different plan and a different red line.

## Visual style and medium
Keep KAED's table style: architectural model / golden-hour drone flyover, 3D (three.js). The change is
the content: the model is built from the paper's plan and the streets carry the paper's own colour
map, like a presentation model with coloured inlays. 3D earns its place: raking low sun gives the dense
courtyard fabric depth, so the "private" quarters read as enclosed shadowed pockets beside the glowing
public spine.

## Considered and rejected
- **Correlation flip (R = -0.205 global vs +0.149 local, Figs. 8-9).** Real and quotable, but two
  scatter plots with weak correlations cannot be read in 3 s by a non-expert and would look like a
  dashboard. Possible as a later alternative if the user wants numbers on screen.
- **Visual integration VGA map (Fig. 5)** as a painted heat field. Also fingerprinted, but the axial
  map reads more clearly as "streets" at montage speed.

## Uncertain / to verify
- Street geometry and per-street colours are traced by eye from a raster figure (no data file). The
  traced plan is "after Figure 6", simplified; minor lanes may be merged or omitted.
- Fig. 6 has no north arrow; "north/south" follows the paper's text (accommodation zones at the
  northern and southern ends, p. 964). The figure's orientation is kept apart from a rotation to make
  the market street run horizontally.
- The paper's colour ramp has no numeric scale on Fig. 6; we do not attach the Fig. 8 HH range to it.
- Street names are as printed on the figure (Palvon Qori, Tashpul tov [Tashpulatov], Boyaqchilar,
  Palvon Mahmud ko'chasi). The paper spells the east gate both "Palvon" (p. 960) and "Pavlon" (p. 962).
- The PDF header says "Volume 23 Issue 6 (2025)"; citations.json has 23(39). Not a clip issue, but
  worth a glance before the edit.
