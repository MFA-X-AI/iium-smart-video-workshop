# KENMS — provincial human-capital wave

## Finding and source
Indonesia's combined health, survival and schooling measure reveals persistent provincial gaps, helping identify where people need more support.

The supplied 25-page paper was extracted with pypdf through uv. Table 6, pages 12–13, gives all 34 provincial period averages. Every score is embedded unchanged; none is estimated or omitted. The source extraction is clips/.qa/KENMS-paper-fresh.txt and the independently parsed table is clips/.qa/KENMS-table6.json. Use the study's 34-province geography, including its pre-subdivision Papua, rather than present-day administrative boundaries.

Five inputs form three equally weighted components: survival, schooling and health. The adapted HCI is a 0–100 index, not a productivity percentage. The paper finds persistent provincial disparities, with DI Yogyakarta highest (78.16) and Papua lowest (59.63). It does not establish significant global spatial clustering of the composite index.

## Concept choice
1. All 34 provincial scores rise across the map: a strong visible transformation and rich thumbnail. Crowding requires slender equal-footprint towers, careful placement and projection checks. This is the selected concept.
2. Five input streams assemble the map: visually striking but too difficult to decode in three seconds, and risks implying equal weighting of five inputs instead of three components.
3. Only the two extremes rise: the comparison is simple, but the supplied Chrome renders showed this read too much like a two-bar chart. The full provincial field better communicates regional variation.

## Current visual encoding and camera
All shafts share one zero-based scale: HCI × 0.058 world units above the map surface. Tower radius, cap thickness and material treatment are equal for all provinces. No truncated baseline or special enlargement of an extreme province.

The camera is fixed, orthographic, at a shallow 29.36-degree elevation. There is no orbit, perspective division or zoom during the wave. The earlier view was also orthographic, but its steep elevation separated geographic baselines substantially on screen. Lowering the angle reduces that visual ambiguity and gives the vertical shafts more screen length. Geographic placement still changes the absolute screen position of a cap; the encoded height is its base-to-top length.

The HTML itself runs verifyHeightEncoding() before playback. It projects the fully revealed base and top of every tower, checks a common pixels-per-HCI-point factor, and asserts that Yogyakarta is longest and Papua shortest. The result is available in window.__KENMS.heightAudit. This audit covers the final data lengths: temporary lengths during the rise represent a reveal, not alternative values or a time series.

Every tower uses a single-hue sequential blue ramp: sRGB HSL hue 195 degrees, saturation 0.78, lightness 0.84 at Papua's 59.63 down continuously to 0.29 at Yogyakarta's 78.16. The midpoint introduces no additional hue or category. Lower scores are pale blue and higher scores deep blue. Colour spans the observed range while height retains a zero baseline. Source colours have monotonic lightness; lighting may modulate individual faces.

Papua has pale-blue shaft and crown materials rather than a dark purple material. The map is muted lavender with softer edges. Every crown and base receives the same thin blue outline, so the pale endpoint has a distinct contour against the map. Matte, low-metalness tower materials reduce reflections that could mask the colour encoding. No special score colour is assigned to either highlighted province.

## Motion and composition
A west-to-east wave starts towers according to longitude; each rises over 0.77 seconds. The reveal is geography-based timing only, not chronological improvement, diffusion, a causal effect or a west/east score gradient. Once the wave finishes, Yogyakarta and Papua get their callouts (1.94–2.28 seconds), a comparison line and a gap bracket. Hold after three seconds.

Retain the small top-left title and one subline: “Average human capital index · 2011–2019”. No eyebrow, footer, controls or citation. Keep the bottom-right 980 × 300 pixels free of towers and annotations for the editor's citation. Background imagery may continue there. Simplified coastlines, compressed map depth, representative positions and small Java offsets are artistic licence; they do not encode province boundaries or additional scores.

Autoplay on load; ?t=<seconds> deterministically freezes both geometry and annotation state. Camera position remains fixed for every time.

## Frame critique after revision
- **0.5 s:** 18 western provinces have begun rising; the eastern caps remain at their start positions. The fixed camera lets the rising lengths carry the motion. No premature callouts.
- **1.5 s:** all 34 have begun, and 29 have reached their true averages. The wave is finishing in the east. Pale and deeper blues expose differences as the field develops.
- **2.5 s:** all scores are complete; the extreme callouts and reference are readable. Yogyakarta is the deepest blue and longest shaft; Papua is the palest blue and shortest shaft, fully visible against the subdued map. All 34 caps remain visible in geometric raycast checks.

## Verified screen heights at 1920 × 1080
- Common shaft scale: 3.466380422 pixels per HCI point.
- Yogyakarta shaft: **270.932 px**, largest of all 34.
- Papua shaft: **206.700 px**, smallest of all 34.
- Projected full mesh silhouettes, including the equal caps and footprints: Yogyakarta **287.300 px** (largest), Papua **223.068 px** (smallest). Every province's silhouette ranking agrees with Table 6.
- Equal-score spatial check: Bali and Kalimantan Timur both score 74.02; each full silhouette measures **272.949667194 px**, despite their different map locations.

## Validation and limitations
Node module syntax check passes. clips/.qa/KENMS-r3-validate.mjs verifies all 34 names and source values, target heights, colour mapping, monotonic lightness, fixed hue/saturation, orthographic projection, full silhouette ranking and the equal-score pair. Colour round-trip tolerance accounts for Three.js's approximate linear/sRGB conversion.

All shaft and cap vertices were checked at 61 times across 0–3 seconds: zero frame, title or citation-area intersections. All 34 caps have visible raycast samples; all five Papua samples are visible. At the requested frames every tower ends above y=683 px, with the citation area starting at y=780 px. Callouts stay on-screen and outside the citation area. Seeking is deterministic.

Used the user's actual Chrome images to diagnose the earlier composition, and inspected a CPU geometry reference for the revised complete shot. CPU references approximate composition and do not reproduce final WebGL lighting, shadows or line occlusion. No browser was launched for this revision; new Chrome-rendered validation is not claimed.

One self-contained HTML file, pinned Three.js 0.169.0 import map on jsDelivr, embedded data and geometry, no build step or other assets. All writes are inside clips/.

## Exact data used — Table 6, pages 12–13

| Rank | Province | Average HCI |
|---|---|---:|
| 1 | DI YOGYAKARTA | 78.16 |
| 2 | DKI JAKARTA | 74.61 |
| 3 | KALIMANTAN TIMUR | 74.02 |
| 4 | BALI | 74.02 |
| 5 | SULAWESI UTARA | 72.61 |
| 6 | JAWA TENGAH | 72.56 |
| 7 | KEP. RIAU | 71.92 |
| 8 | KALIMANTAN UTARA | 71.38 |
| 9 | JAWA TIMUR | 71.03 |
| 10 | SULAWESI TENGGARA | 70.97 |
| 11 | JAWA BARAT | 70.70 |
| 12 | LAMPUNG | 70.29 |
| 13 | SULAWESI SELATAN | 70.01 |
| 14 | BENGKULU | 69.94 |
| 15 | JAMBI | 69.42 |
| 16 | SUMATERA SELATAN | 69.37 |
| 17 | RIAU | 69.18 |
| 18 | NUSA TENGGARA BARAT | 68.92 |
| 19 | GORONTALO | 68.81 |
| 20 | KALIMANTAN TENGAH | 68.80 |
| 21 | MALUKU UTARA | 68.74 |
| 22 | KEP. BANGKA BELITUNG | 68.66 |
| 23 | SUMATERA UTARA | 68.37 |
| 24 | KALIMANTAN SELATAN | 68.00 |
| 25 | NUSA TENGGARA TIMUR | 67.96 |
| 26 | MALUKU | 67.88 |
| 27 | SUMATERA BARAT | 67.76 |
| 28 | BANTEN | 67.59 |
| 29 | SULAWESI TENGAH | 67.26 |
| 30 | PAPUA BARAT | 67.14 |
| 31 | ACEH | 66.96 |
| 32 | KALIMANTAN BARAT | 66.87 |
| 33 | SULAWESI BARAT | 64.46 |
| 34 | PAPUA | 59.63 |
