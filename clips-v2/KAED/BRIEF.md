# Astra brief: KAED v2 clip (Itchan Kala integration hierarchy, architect's sketch)

Read `clips/BRIEF_OPEN.md` for the general rules (no UI chrome, title position, no attribution in the
clip, bottom-right 980x300 px kept clear, `?t=` freeze), except where this brief overrides them.
**Overrides:** the visual style is NOT BRIEF_OPEN's "architectural model / golden-hour drone flyover".
It is an **architect's presentation sketch: ink linework drawing itself, then marker/watercolour
colour**, in 2D. The on-plan annotations and margin note below are required content, not UI chrome.
Do NOT modify anything in `clips/`, and do not reuse v1's (`clips/KAED/`) invented town layout.

The full proposal is `clips-v2/KAED/PROPOSAL.md`; its content is repeated here. Reference images:
- `clips-v2/.qa/KAED/fig6.png` (1518x1474): **Figure 6, axial global integration map. The source for
  the plan and every street's colour. Open it and trace from it.**
- `clips-v2/.qa/KAED/p11.png` (Fig. 7 controllability; for reference only, do NOT draw its colours),
  `p9.png` (Fig. 5), `fig89.png` (Figs. 8-9, the R values).
- Paper text: `clips-v2/.qa/KAED/text.txt` (PDF page = printed page - 953).

## Headline result (what the clip must show)
Itchan Kala is a public-to-private hierarchy (Fig. 6, p. 963; abstract p. 954; conclusion p. 967):
- the **main market street (Palvon-Qori ko'chasi) is the most integrated route**, with the **Juma
  Masjid at its midpoint** (p. 961);
- a **perpendicular street (Tashpulatov ko'chasi)** is the second axis, linking the **northern and
  southern accommodation zones** directly to the mosque (pp. 963-964);
- integration falls away to the quiet residential lanes at the walls. The market street has low
  controllability and the residential quarters higher controllability (Fig. 7, p. 965);
- the only numbers: integration vs controllability **R = -0.205 globally (R=n)** ("weakly negative")
  and **R = +0.149 locally (R=3)** ("slightly positive") (Figs. 8-9, p. 966).

## Geometry: trace Figure 6
Anchors read by eye in fig6.png pixel coordinates (x, y). Refine every one against the image:
- **Wall outline:** NW corner ~(428, 88); north gate ~(745, 60); NE corner ~(1062, 245); east wall to
  ~(915, 660); the caravanserai block outside the east wall ~(880-1000, 660-960); east gate ~(950, 940);
  SE corner ~(790, 1430); south gate ~(515, 1445); SW corner ~(20, 1228); west wall up to ~(130, 815);
  Ko'hna Ark notch (pale block) ~(40-200, 545-770). Crenellation ticks along the outer edge.
- **Red, market street:** ~(130, 615) at the Ark to ~(820, 885) near the east gate; deepest red
  ~(400, 720)-(810, 880).
- **Juma Masjid:** block just south of the market street ~(510-640, 800-900); crescent icon ~(560, 855).
  Draw it as a sketched hatched block (hypostyle hall) with a small minaret circle. Other crescents in
  the figure are other mosques: don't label them.
- **Orange, Tashpulatov:** north gate ~(760, 40), ~(745, 150), ~(700, 470), ~(660, 640), crossing the
  market street ~(620, 810), south ~(560, 1000), ~(515, 1110), south gate ~(505, 1440) (fading to
  yellow-green in the south). Also orange: the branch ~(470, 780)-(370, 1060) and the short links
  round the caravanserai ~(690-820, 760-890).
- **Accommodation zone circles** (thin pencil, as in Fig. 6): north ~(695, 345) r~150; south
  ~(430, 1090) r~150.
- **Yellow / yellow-green:** Boyaqchilar ko'chasi ~(400, 570)-(870, 640); the secondary ring round the
  core; east-side street ~(1020, 280)-(840, 900).
- **Green / cyan:** lanes inside both zones, Palvon Mahmud ko'chasi ~(160, 1170)-(290, 920), west and
  south perimeter streets.
- **Blue:** NW perimeter ~(345, 270)-(430, 88)-(760, 90); NE wall street ~(1060, 250)-(915, 660); short
  southern lane ~(270, 1220)-(410, 1190).
- **Blocks:** simplified footprints of the beige areas (white = streets and courts). The squares at
  ~(210, 740), ~(440, 1060), ~(640, 1030), ~(720, 810) are courtyards: draw them as open courts.

Simplify minor lanes freely, but the two axes, their crossing at the Juma Masjid, the zone circles and
the wall shape must be recognisable to the authors of Fig. 6.

**Orientation and layout (1920x1080):** rotate the traced plan about -21 degrees (counter-clockwise on
screen) about its centre so the market street is horizontal. By my estimate the rotated plan is about
910 x 1300 fig-px. Scale it to about 950 px tall and centre it near (1000, 540). That puts:
- the market street at about y 620, running x 530-1080;
- the south zone centre near (870, 870);
- the SE wall corner near (1205, 1005).
Verify this by projecting points; adjust it, don't trust my arithmetic. Title in the left margin
(x < 500). Annotations and the margin note in the right margin (x 1230-1860, y < 760). **The bottom-right
980x300 px (x > 940, y > 780) must not contain the title, any label or annotation, the red or orange
strokes, or the Juma Masjid.** Only the southern wall, blue/cyan lanes and paper may pass through it.
Check at every frame from 0 to 3 s.

## Storyboard (0-3 s)
- **0.0-0.6 s:** black fineliner ink draws itself fast: wall and bastions, street edges, block
  outlines. Loose confident hand, slight overshoots at corners, varying line weight.
- **0.5 s:** plan nearly drawn. A red marker stroke is starting at the Juma Masjid and running both
  ways along the market street. "JUMA MASJID" lettering is being written.
- **0.6-1.2 s:** red marker completes the market street (streaky, 2-3 overlapping passes, darker at
  overlaps). "MAIN MARKET STREET" lettered along it.
- **0.9-1.5 s:** orange marker runs north and south along Tashpulatov from beside the mosque into the
  two pencil circles; "ACCOMMODATION ZONE" lettered at each.
- **1.5 s:** red and orange done, yellow/green washes bleeding into the secondary streets. The finding
  reads.
- **1.4-2.3 s:** watercolour washes spread outward by class: yellow, green, cyan, then blue along the
  walls (soft wet edges, pigment pooling at the edges).
- **1.8-2.6 s:** annotations lettered with thin leader lines. At the market street:
  "most integrated · low controllability". At one accommodation zone: "quieter lanes · higher
  controllability". Then the right-margin note, boxed in a thin ink rule:
  "integration vs controllability" / "city-wide correlation −0.205 · local +0.149" / "both weak".
  Exactly this wording. Do NOT write "R =", "R=n" or "R=3" anywhere on screen (in space syntax R also
  means the analysis radius, so it is ambiguous).
- **2.5 s:** everything coloured and annotated; the margin note is finishing. Hold to 3.0 s and beyond.

The colouring order (hot first, cool last) is an animation device for reading the hierarchy; say so
in the HTML comment. Use a proper minus sign (U+2212) in −0.205.

## Title
Top-left, in the sheet's left margin, architect's hand-lettering or a refined drafting typeface:
**"Market and mosque most connected; homes kept private"**. No eyebrow, no citation. A light paper-tone
scrim only if needed.

## Style
- Sheet: warm off-white cartridge or tracing paper with subtle grain and a faint grid or margin rule.
- Ink: black or sepia fineliner, stroke-by-stroke draw-on (SVG stroke-dashoffset, or canvas with
  jitter). Motion like a real hand: fast strokes, brief pauses between strokes.
- Colour: alcohol-marker strokes for red and orange (streaks, overlaps, slight bleed); watercolour
  washes for yellow to blue (granulation, soft blooms). Use the Fig. 6 ramp hues, slightly
  desaturated to marker/watercolour tones, but keep red vs blue unmistakable.
- Lettering: hand-drawn architectural capitals, all real text from the paper, readable at half scale.
- No legend, no scale bar, no compass, no numbers except the two R values.

## Honesty (HTML comment at the top)
From the paper: the plan traced from Fig. 6 (p. 963; base map OpenStreetMap, p. 959); per-street
integration class (Fig. 6); label wording (Fig. 6); Juma Masjid at the midpoint of the market street
(p. 961); Tashpulatov linking the accommodation zones to the mosque (pp. 963-964); market street low vs
residential higher controllability (Fig. 7, p. 965); R = −0.205 global and R = +0.149 local (Figs. 8-9,
p. 966).
Artistic licence: rotation, simplification of lanes and footprints, sketch rendering, colouring order
and timing, the mosque's drawn minaret.

## Hard constraints
- One self-contained `clips-v2/KAED/index.html`, 1920x1080, auto-plays, `?t=<seconds>` freezes it
  deterministically (captured frame by frame at 30 fps for 3 s). Any paper/brush noise must be seeded,
  not random per load.
- 2D: canvas/SVG; small pinned jsDelivr libs are OK. No other CDNs, no build step.
- No citation/attribution in the clip. Keep the bottom-right 980x300 px free of the title and key
  action.
- Scientifically honest; the lead author will watch. No invented numbers; the only numbers on screen are
  −0.205 and +0.149.
- Write only inside `clips-v2/KAED/` and `clips-v2/.qa/`. Never launch a browser. Syntax-check the
  script with `node --check` on an extracted copy. Write `clips-v2/KAED/NOTES.md`: what you traced and
  how, the layout check against the bottom-right zone, and what you expect at 0.5, 1.5 and 2.5 s.
