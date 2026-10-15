# KENMS — provincial human-capital gap

## Before building

**So what:** Indonesia's highest and lowest provincial human-capital scores remained about 19.4 points apart after nine years, revealing persistent differences in health and education outcomes that national averages can hide.

Read the supplied paper text, especially Tables 4–6 and 8 and the temporal discussion on pages 20–22. The supplied brief governs exact numbers, historical province boundaries, and the visual treatment.

Three concepts considered:

1. **Class reveal → two anchors → nine annual bars.** Real provincial shapes fill by HCI class; the two extreme provinces acquire large numeric callouts; a red connector joins them and the annual gaps build below. Strongest choice: it establishes place, ranking, and persistence in three seconds, and the completed frame works as a thumbnail. Risk: nine small bars compete with the map, so the endpoints need stronger numerals and the other values quieter type.
2. **A pair of moving annual score markers above the map.** The high and low scores step through each year while their separation persists. More immediate motion, but too many changing numbers for a short montage; it also competes with the required average-score callouts and risks confusing annual and average values.
3. **A nine-column temporal matrix beside the geography.** Each year stamps the same top and bottom province names. Clear persistence, but repetitive text becomes crowded, and the actual magnitude of the gap is less visible at thumbnail size.

Selected concept 1, following the required storyboard. No regional wave, inferred causality, or distance-as-score encoding. The red map connector is purely a link between the two provinces; only the zero-based annual bars encode gap magnitude.

## Build and verification

Built `index.html` as a dependency-free, self-contained SVG scene with the entire supplied GeoJSON embedded inline. A small spherical Mercator projection fits the historical 34-province geography to x=100–1820, y=180–813.42. Every supplied polygon ring and small island is retained. Yogyakarta uses its actual path with a thin black outline, without enlargement or displacement.

Warm paper, a faint 12-column grid, two heavy black rules, six blue classes, and Helvetica/Arial typography establish the Swiss layout. Signal red is confined to the connector, annual bars, and annual gap values. The two average HCI numerals are black. The class key runs from Very low to Very high; its squares fill in the same class sequence as the map.

Revision 2 strengthens the headline to 42 px / weight 800 and the province names to weight 900, with a fine same-colour stroke to preserve the heavier appearance on the local font fallback. The lightest classes are now clearly blue (`#a5bbd9` and `#88a5cd`), still lighter than the remaining four classes. Papua acquires a 1.5 px dark outline exactly when its fill appears.

The annual gap now also appears in a 72 px bold, tabular red readout directly on the connector. Its paper knockout occupies x=1188–1438, y=550–665, centred around (1313, 608). Polygon clipping verified that this rectangle covers no land, including Sulawesi's southern arms and the small Maluku islands. Each year and exact value replaces the previous pair when the corresponding bar lands: 2011 at 1.32 seconds through 2019 at 2.04 seconds. The last landing adds the smaller comparison `2011: 19.46 points` below `2019 / 19.40 points`. There is no number interpolation.

The Yogyakarta leader begins at x=350 beside the numeral, runs horizontally at y=780 to x=578, then takes one straight diagonal to the province. Its starting point follows the callout's entrance slide. Papua's leader has one right-angle elbow from below the caption to a vertical drop at the province anchor, ending in a small black dot drawn above the connector.

Motion is a pure function of elapsed seconds: class cuts with 4 ms within-class staggers, short callout slides, a 0.4-second connector draw, and annual bars with 90 ms start spacing and 70 ms rise time. Values appear as final numbers. The final line settles by 2.30 seconds, then the composition holds. Autoplay stops at 3 seconds. `?t=0.5`, `?t=1.5`, and `?t=2.5` freeze those exact states; finite times outside the range clamp to 0–3 seconds. Startup waits for `document.fonts.ready`. There are no network requests or external assets.

The lower-right reserve (x > 940, y > 780) is excluded by an SVG clip path on all foreground content. The background grid and geography remain outside that foreground layer. The chart ends at x=912, and the red connector and ticks remain above y=710. Both leader endpoints were verified inside their intended province polygons: Yogyakarta approximately (670.81, 696.63), Papua (1744.47, 570.12).

## Frame-by-frame self-critique

The supplied revision-1 screenshots were reviewed. The revision-2 assessments below use code, geometry, and native text metrics; no new browser renders were produced.

- **0.5 s:** The larger two-line title, rules, grid, and complete province outlines are present. All 15 Very High, High, and Moderately High provinces have filled, while the other 19 remain outlined. Three key squares are filled. Yogyakarta's callout has entered with its final 78.16 and is partway through its short slide; the leader now stays attached beside the numeral. The gap readout remains hidden until the annual sequence begins. The tiny Yogyakarta shape still needs its outline and callout to be legible at montage scale.
- **1.5 s:** All 34 provinces and both callouts are complete, with stronger tint on the two lowest classes and Papua's dark outline. The red connector has finished. The first three bars have landed, and the large readout shows `2013 / 16.33 points`. This gives the temporal gap its own visual emphasis alongside the two average scores. The knockout clears every province polygon, while the connector remains visible on either side. The year and `points` label distinguish this annual range from the provincial averages.
- **2.5 s:** All nine zero-based bars are settled. The prominent readout holds `2019 / 19.40 points` with `2011: 19.46 points` below it, making the nearly unchanged endpoints readable without relying on the small bar labels. The unchanged top/bottom line is fully visible. Nothing moves from here through 3 seconds. Intermediate values still require more viewing time, but the principal endpoint comparison now survives a short montage glance. The lower-right attribution reserve remains clear.

## Revision-1 checks

- `node --check clips-v2/.qa/KENMS/script.js` passed after extracting the final inline script.
- `node clips-v2/.qa/KENMS/verify.cjs` passed. It executes the scene logic with a minimal Node DOM stub, compares all 34 values/categories against the brief, verifies the embedded geometry matches the source exactly, and checks both geographical anchors inside polygon boundaries.
- The same check samples all 91 states from 0 through 3 seconds at 30 fps, checks finite map paths, zero baselines, connector/bar bounds, checkpoint fill/bar counts, and identical scene attributes after seeking backward and forward. Results are saved in `clips-v2/.qa/KENMS/verification.json`.
- Native Arial text metrics checked the chart heading (552 px), conclusion (591 px), and key caption (310 px) against their available widths (812, 812, and 400 px). This is a fit check, not a substitute for browser rendering.
- No browser was launched. At that stage browser font rendering and antialiasing had not been visually inspected; the user subsequently supplied the three revision-1 screenshots. Helvetica/Arial is intentionally a local font stack, so exact glyph rendering can vary by capture machine.

## Revision-2 checks

- Checked the updated inline script with `node --check` through standard input; passed.
- Reused the existing Node DOM and 91-frame checks in memory with all file-writing operations removed. Exact geography/data, province counts, zero-based bar heights, safe connector/bar bounds, and deterministic seeking still pass. The original `.qa` artifacts remain revision-1 records and were not rewritten.
- Checked immediately before and exactly at all nine bar landing times. The large year/value changes at those boundaries, bar labels agree, and the smaller 2011 comparison appears only on the final landing. Checkpoints: hidden at 0.5 s; `2013 / 16.33` at 1.5 s; `2019 / 19.40` plus the 2011 comparison at 2.5 s.
- Verified Papua's outline is hidden at 0.5 s and visible at its 0.95 s class reveal. Reverse seeking restores both text and SVG attributes exactly.
- Clipped every projected province polygon against the readout rectangle and verified zero intersection area. The readout's entire height is above y=665, well outside the protected corner.
- Native Arial metrics confirm the 72 px values fit before the separate `points` label, with a 10 px gap after letter spacing. The comparison line measures about 165 px inside the 250 px knockout. The enlarged first title line measures about 614 px before letter spacing and stays well clear of the class key.
- No browser launched and no new raster render produced. Revision-2 writes are confined to `clips-v2/KENMS/index.html` and this `NOTES.md`.

Source nuance: annual ranges are copied exactly from Figure 5, including 20.77 in 2017, rather than recomputed from rounded Table 5 entries. Provincial callouts are period averages, not annual endpoints. North Kalimantan has fewer annual observations in the paper; its supplied Table 6 average is retained without inventing missing years.
