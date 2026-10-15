# KAED v2 proposal (rev 2): Itchan Kala's integration hierarchy, drawn as an architect's sketch

Paper: Asif, Yusof, Azmin, Abdullah, Sanusi (2025), "Human-Centric Planning of Traditional Islamic
Settlements: A Space Syntax Study of Itchan Kala, Khiva", Planning Malaysia 23(6), 954-968. Read in full;
text extracted with pypdf, figure pages rendered with pypdfium2 and inspected as images
(`clips-v2/.qa/KAED/p7, p9, p10, p11, p13.png`; zooms `fig6.png`, `fig89.png`). Page refs are printed
page numbers (PDF page = printed - 953). The previous golden-hour-model version is kept as
`PROPOSAL-v1.md`.

## Headline result
The authors lead with this in the abstract (p. 954), the Findings (pp. 960-966) and the conclusion
(p. 967): **Itchan Kala is a clear public-to-private hierarchy.** The **main market street
(Palvon-Qori ko'chasi) is the most integrated route in the city** (visual connectivity Fig. 4, visual
integration Fig. 5, axial global integration Fig. 6, where it "dominates the integration values",
p. 963). The **Juma Masjid sits at its midpoint** (p. 961). A **perpendicular street (Tashpulatov
ko'chasi) is the second axis**, linking the **northern and southern accommodation zones directly to the
mosque** (pp. 963-964). Away from the spine, integration falls to the quiet residential quarters.
Those quarters are also **more controllable**, while the market street has low controllability
(Fig. 7, p. 965).

**The only numeric results in the paper** are the two correlations between integration and
controllability (Figs. 8-9, p. 966):
- global (R = n): **R = -0.205**, "weakly negative": the more integrated a street, the less
  controllable (the market street);
- local (R = 3): **R = +0.149**, "slightly positive": in the pedestrian-scale neighbourhood lanes,
  locally integrated also means somewhat more controllable (the residential quarters).
(Plot labels print "R = -0.205001" and "R = 0.14984"; the text rounds them to -0.205 and +0.149. We use
the text's values.)

**What I chose.** The headline is the integration hierarchy (Fig. 6). It is a geography, so the
subject, the city plan, carries it directly. The paper gives no per-street integration numbers: Fig. 6
shows colour classes only, with no numeric scale. So the hierarchy is shown with the paper's own colour
classes and labels, not numbers. The two R values are real and printed. They go on the plan as the
architect's closing margin note, tied to the places that illustrate them (the market street for
-0.205, a residential lane cluster for +0.149), in the paper's own words. They are weak correlations
and are labelled as such. I rejected plotting Figs. 8-9 as a scatter chart: a chart would turn the clip
into a slide, and the plan already shows where each tendency happens.

## The data on screen
- **The plan:** Itchan Kala's wall outline, gates, Ko'hna Ark notch, caravanserai block, street
  network and simplified building footprints, traced from Figure 6 (base map OpenStreetMap, p. 959).
  Rotated about 21 degrees so the market street is horizontal.
- **Street colours:** each street gets the class it has in Fig. 6, laid on in marker and watercolour:
  red (Palvon-Qori market street), orange (Tashpulatov, plus short orange links by the caravanserai and
  into the southern zone), yellow/yellow-green (Boyaqchilar ko'chasi, the secondary ring), green/cyan
  (lanes inside the accommodation zones, Palvon Mahmud ko'chasi, perimeter streets), blue (the NW and NE
  wall-side streets, lowest). Qualitative classes, exactly as the figure shows. No numeric scale.
- **Hand-lettered labels (paper wording):** "Juma Masjid", "Main market street", "Accommodation zone"
  (x2, on the two pencil circles from Fig. 6).
- **Annotations:**
  - at the market street: "most integrated · low controllability" (p. 963, p. 965);
  - at an accommodation zone: "quieter lanes · higher controllability" (p. 965);
  - margin note, last: "integration vs controllability" / "city-wide correlation −0.205 · local +0.149" / "both weak"
    (p. 966). No "R" notation on screen (R is also the analysis radius).

## Storyboard (0-3 s)
Sheet of warm cartridge/tracing paper. Title top-left in the left margin. The plan sits centre-right,
with annotations in the right margin.
- **0.0-0.6 s:** fast ink linework draws itself: wall outline with bastions, the street edges, block
  outlines (a quick loose hand, slight overshoot at corners).
- **0.5 s:** ink plan nearly complete (wall and main streets done, blocks finishing). A red marker
  stroke is starting from the Juma Masjid outward along the market street. The "Juma Masjid" lettering
  begins.
- **1.5 s:** the red market street is fully stroked, labelled "Main market street".
  The orange Tashpulatov stroke has run north and south from beside the mosque into the two pencil
  circles, lettered "Accommodation zone". Yellow and green washes are bleeding into the secondary
  streets. The finding is readable: one street at the heart, the mosque on it, homes linked but set
  back.
- **2.5 s:** full Fig. 6 colouring, with cyan and blue washes along the walls and in the residential
  lanes. The annotations are lettered with leader lines: "low controllability" at the spine, "higher
  controllability" at a zone. The margin note "city-wide correlation −0.205 · local +0.149 / both weak" is finishing.
  Hold.

## Title
**"Market and mosque most connected; homes kept private"** (7 words).

## Swap test
Only this paper has Itchan Kala's own plan with a red Palvon-Qori market street crossed at the Juma
Masjid by an orange Tashpulatov street, annotated with its city-wide correlation −0.205 / local +0.149.

## Visual style and medium
KAED technique: **architect's presentation sketch**. 2D (SVG/canvas): black fineliner ink that draws
itself stroke by stroke, then alcohol-marker strokes (streaky, overlapping, darker where strokes cross)
and watercolour washes (soft bleeding edges, paper grain). Hand-lettered architectural capitals.
It serves the data because an architect's plan sketch is exactly how a planning finding is presented.
Figure 6 is already a coloured line-over-plan drawing, so re-drawing it in ink and marker keeps the
paper's geometry and colour classes faithful. The order of colouring (hot marker first, cool washes
last) makes the hierarchy build up in front of the viewer.

## Uncertain / to verify
- Street geometry and per-street colour classes are traced by eye from the raster Fig. 6 (no data
  file). The plan is simplified, "after Fig. 6".
- Fig. 6 has no north arrow. "North/south" follows the text (p. 964). No compass is drawn.
- The R values are weak correlations. Showing them risks a viewer over-reading them; the annotation keeps
  the paper's wording ("weakly negative / slightly positive") to avoid that. If the user finds the
  margin note too dense for 3 s, drop it: the hierarchy alone is the headline.
- Controllability words come from Fig. 7 and its text (p. 965). No controllability colours are drawn,
  to avoid mixing two colour maps.
- Gate spelling varies in the paper ("Palvon" p. 960, "Pavlon" p. 962). The gate is not labelled.
