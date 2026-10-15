# AIKOL — world-atlas map and wicking ink (revision 3)

## Research and the so what
Closing one smuggling route can displace criminal activity to new paths; coordinated enforcement matters. Source: the supplied paper, section 3.3.3, printed page 228. The conclusion (p. 236) recommends international cooperation and intelligence sharing. This qualitative legal review does not supply route geometry, flow counts, timings or measured intervention effectiveness.

## Concepts and critique
1. A folded red barrier on abstract paper: the first build communicated blockage, but Chrome frames showed a UI-like badge, thorny ink and no geography. Rejected.
2. Five crime-category stains merging: could convey interconnected crime, but requires too much reading for a three-second montage. Rejected.
3. A geographic editorial map, a vermilion seal and ink spreading into replacement paths: retained. Revision 2's line weight was too uniform and its framing concealed Thailand's isthmus. Revision 3 uses the user's requested world-atlas → topojson-client → d3-geo pipeline and a 2D canvas, with variable pigment widths and explicit pooling/wicking.

## Revision plan written before rebuilding
Use unmodified world-atlas country topology fetched at runtime from jsDelivr, pinned to 2.0.2. Choose countries-10m.json (higher coastline detail than the example 50m file). Convert with topojson-client 3.1.0 and draw through d3-geo 3.1.1 geoPath with a Mercator projection fitted to southern Thailand, the peninsula, Sumatra and Borneo. Preserve polygon holes, islands and shared boundaries. Remove the former custom embedded coordinate/rendering pipeline and Three.js. The user explicitly permits 2D for this revision.

Show the Thai isthmus up the left side of the title; do not cover it with the old full-width title scrim. Tint Malaysia alone. Keep fine brown pen outlines on ivory textured stock, a centred serif title, and the exact note “Illustrative paths · not observed routes”. The bottom-right x>=940, y>=780 area must contain only subdued context geography.

Ink should arrive, pool against one red painted seal, then bleed laterally from that pool into land and sea detours. Use varying width, translucent feathered margins, granular pigment and rounded microscopic edge pores. Do not return to spines or thick rope-like uniform lines. Path growth follows a square-root front progression to suggest capillary wicking; this is an artistic timing model, not a research result or physical simulation validated by the paper.

## Sources and scope
- Runtime geography: https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-10m.json
- Dataset documentation: https://github.com/topojson/world-atlas (Natural Earth topology, geographic coordinates, country IDs).
- Conversion: https://cdn.jsdelivr.net/npm/topojson-client@3.1.0/+esm
- Projection/drawing: https://cdn.jsdelivr.net/npm/d3-geo@3.1.1/+esm ; https://d3js.org/d3-geo/projection
- Retained offshore context uses selected 1969 Indonesia–Malaysia shelf limits and the 1970 Malacca territorial-sea segment from https://www.marineregions.org/documents/61975.pdf and https://www.marineregions.org/documents/61516.pdf . Shelf limits are not territorial-water limits; this illustration is not a complete/current legal boundary chart.

ALL animated path positions, branching, widths, closure placement and timing are illustrative. No actual checkpoint, port, route count, trafficking intensity, police operation or demonstrated policy result is asserted. The visible note states this directly.

## Timing and review plan
0.5 s: original ink arrives at the border and pools against the red seal. 1.5 s: ink bleeds sideways from the pool into replacement land and sea paths. 2.5 s: paths reach the peninsula and Malaysian Borneo; the seal remains in place. Title and citation area stay clear.

Validate with node --check and native offline canvas renders of the real d3/topojson drawing code. Check the actual CDN responses and cross-origin headers, and exercise asynchronous fetch before frozen drawing. No browser will be launched; all writes stay inside clips/.

## Completed implementation and review
The final page is a 2D canvas map. It fetches the pinned world-atlas 10m TopoJSON at runtime, decodes actual country topology and lets D3 handle clipping and polygon structure. The former embedded custom map and Three.js dependency are gone. The shared Thai–Malaysian border contains 168 decoded vertices. The fitted Mercator view shows the northern isthmus beside the title and the full outline of Borneo; only the citation-area context is faded.

The ink is now filled pigment geometry rather than uniform Canvas strokes. Pressure changes along arc length, widening absorption halos, a delayed darker core, microscopic rounded edge pores and a repeatable pigment mask give it varying width and feathering. A dark pool grows at the stopped tip, then feeds the three illustrative replacements from that same location. The red closure is still one short brushstroke. The controls are illustrative geographic sketches, not extracted route data.

### Actual sampled states
- **0.5 s:** original ink has arrived, its darker pool touches the partially painted vermilion seal; no replacement branch has started. The peninsula and visible Thai isthmus establish the location.
- **1.5 s:** darker pigment follows pale wet fronts around the seal; the nearby land route is almost complete, the Malacca loop is spreading, and the long sea branch is visibly advancing toward Borneo. The leading wash extends beyond the darker core.
- **2.5 s:** the replacement paths reach the peninsula and Sarawak, with varying-width pigment, softly tapering ends and slight endpoint pooling. The original sealed point stays visible. The completed picture settles by approximately 2.8 s and holds to the three-second loop boundary.

### Checks completed
- `node --check clips/.qa/AIKOL-r3/module.mjs` passed.
- `node clips/.qa/AIKOL-r3/audit.mjs` passed using the real downloaded atlas, topojson-client, d3-geo and a native offline canvas. This exercised asynchronous fetch before rendering, frozen times, exact output reproducibility after seeking, autoplay only after load, and the visible error state for an intentionally simulated HTTP 503.
- Downloaded the actual jsDelivr atlas and ESM library URLs successfully. The atlas and D3 dependency responses provide `Access-Control-Allow-Origin: *`; the generated D3 ESM imports pinned d3-array 3.2.4 from the same CDN, also checked successfully.
- Geographic sanity checks: Kuala Lumpur and inland Sabah are inside the decoded Malaysia feature, while a point in the strait is outside it. No hand-adjusted coastlines or anisotropic coordinate scaling.
- Ink remains outside the central title and the bottom-right citation reserve, including a 17px conservative edge allowance. The Malaysia/Borneo labels remain above the reserve.
- Reviewed offline images at 0.5, 1.5 and 2.5 seconds, produced by executing the in-page map/ink code. CSS typography and scrim are approximated in these references; they are not Chrome screenshots.

QA files live in clips/.qa/AIKOL-r3/: report.json, module.mjs and reference-0.5.png / reference-1.5.png / reference-2.5.png. All writes stayed inside clips/. No browser was launched, so a new Chrome render is not claimed.
