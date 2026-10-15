# KAED - Streets connect. Courtyards protect.

## Research and the point of the shot

**So what:** Itchan Kala connects everyday commerce and worship through a highly integrated street network, while more secluded residential lanes and enclosed homes preserve privacy.

Read the supplied 15-page paper, including the findings on printed pp. 960-966 and conclusion on p. 967. Text was extracted with the requested `uv run --no-project --with pypdf python` workflow using the cached interpreter. No summary fallback was needed.

For this revision, extracted and visually inspected the original figures directly from the local PDF:

- Figure 5, visual integration, printed p. 962 / PDF page 9: the market spine is warm, with intermediate connections and cooler accommodation areas. Two public/transitional courtyards are explicitly highly integrated. It would be wrong to imply every courtyard has low integration.
- Figure 6, axial/global integration, printed p. 963 / PDF page 10: the market street is red/orange; the perpendicular axis also has strong integration; subsidiary routes grade through yellow/green to cyan/blue at less integrated edges.
- Figure 7, controllability, printed p. 964 / PDF page 11: inspected to distinguish it from integration. Its colors are NOT used to set the integration overlay.

Extracted images are under `clips/.qa/KAED-figures/`. The visual hierarchy follows the figures and accompanying description. The footprints remain a schematic architectural model, not a surveyed map or digitized data reconstruction. Color families are qualitative; no measured integration values or invented research numbers are displayed. Animation timing reveals a static analysis; it does not claim that integration physically spreads, or that integration is simply distance from the mosque.

## Three concepts and critique

1. **An inhabited architectural model.** Amber activity travels down the main street while courtyard walls rise. Strong miniature craft and a clear thumbnail. The user's actual Chrome frames showed that the subtle floor color and small wall changes were insufficient: it read mostly as a static city. This was the first version, and that criticism is valid.
2. **A public-to-private dollhouse flight.** Follow a resident from market to courtyard. Human scale is attractive, but three seconds is too short for the journey and the space-syntax result would remain implicit. Not chosen.
3. **A living integration map on the architectural model.** Start the analysis at the market/Juma core, reveal the strongly integrated spine in hot amber, then the connected secondary network in progressively cooler colors. Leave residential interiors shaded. A descending orbit reveals the geometry while the analysis itself changes visibly. **Chosen for this revision.** It retains the model's craft and gives the research a clear transformation at montage speed. Color can misleadingly resemble measured bins; mitigate that with a qualitative implementation, no numeric legend, and an explicit source/licence comment in the HTML.

## Revision in response to the real Chrome frames

- Kept the crenellated walls, battered towers, tiled Kalta-Minar-inspired landmark, central Juma minaret and flat mosque roof, market awnings, court houses, pools and trees.
- Removed the eyebrow completely. The title remains top-left, with the same restrained serif typography: **Streets connect. / Courtyards protect.** No replacement label, controls, legend or citation was added.
- Replaced the subtle one-direction market trace with 18 branching analysis segments, originating at the mosque threshold and market core. Both halves of the market illuminate outward; the perpendicular connection follows, then transitional streets and cooler peripheral lanes.
- Used named color families (spine, axis, transition, local, peripheral), not purported integration measurements. The spine has the strongest radiance; subsidiary and peripheral routes are less bright and cooler. A bright moving front, continuous gradients, and HDR bloom make the reveal visible over the model.
- Kept all residential courtyard walls erected for the entire shot. Those interiors receive no analysis wash and stay shaded. Their access gaps remain open. The public network therefore reads against quiet domestic pockets, without an unrelated construction event.
- Lowered the sun to approximately 18 degrees above the horizon, producing a geometric shadow-length/height ratio of about 3.07. Reduced ambient fill so the enclosed courts and long shadows retain depth.
- Added a descending orbit/push: camera moves from (23,43,60) to (9,32,51) across three seconds, looking toward the public core. This visibly changes parallax and scale while keeping the title clear.
- Reserved narrow corridors through the generated parcels and adjusted the madrasa court footprint so the analysis follows open streets, rather than painting over roofs or across residential interiors.
- Kept the southern illuminated axis short enough to leave the later citation area clear throughout the closer camera move. Architecture can continue behind that overlay, as the brief permits; the title, analysis and foreground residential focal points do not enter it.

## Frame critique from the final code and projections

- **0.5 s:** enclosed, shaded courtyards already establish privacy. A hot core at the mosque has spread roughly a third of the way down each half of the market, with the perpendicular branch beginning. Most subsidiary streets are still unlit. This is a visible initiation event rather than an already completed map.
- **1.5 s:** the bright market spine and perpendicular route are established; green intermediate connections fan into the rest of the city while peripheral blues are beginning. The camera is halfway through its descent and orbit. The lit network length is more than five times that at 0.5 s in model units; this is an animation check, not research data.
- **2.5 s:** nearly the entire selected network is revealed. The warm public spine remains brightest, outer lanes are cool and subdued, and the residential courts stay dark. The camera is closer and lower, with the foreground courtyards appreciably larger and shifted relative to the central mosque. This is the final takeaway and preferred thumbnail.

The resulting change is carried by the branching analysis and the camera, not miniature pedestrian movement. The sequence holds after three seconds and restarts with an editorial cut at 4.2 seconds. `?t=<seconds>` remains deterministic; `?t=0` freezes correctly.

## Verification and limits

- `node --check clips/.qa/KAED-module.mjs` passes on the revised module.
- `node clips/.qa/KAED-r2-check.mjs` passes frozen/autoplay handling, finite attributes, index bounds, progressive network reveal, low sun geometry, and removal of the eyebrow.
- Projected the entire analysis network across 61 time samples from 0 to 3 s, with an additional 24 px margin for the glow. It remains outside the bottom-right citation rectangle and the title region. The right-side route geometry reaches at most y=741 px; the citation starts at y=780 px. Foreground courtyard bounds were also checked at 0.5, 1.5 and 2.5 s.
- Cast CPU rays down onto route centers to catch roofs obstructing street paths. Corrected the museum area, northern parcels and western residential lane. Remaining small occlusions are at the Juma entry, city gate lintels, and northern gate towers, where physical architecture naturally masks the ground overlay.
- About 46,742 scene triangles including instanced people and 68 mesh submissions before shadow/postprocessing passes. One 2048-square shadow map; bloom runs at reduced resolution. These are implementation budgets, not measured frame rates.
- CPU checks use real Three.js r169 scene math; WebGL, postprocessing and canvas drawing are stubbed. No browser was launched. The supplied Chrome images validate the previous model only; revised bloom, lighting and final GPU appearance have not been rendered here.
- Runtime dependencies are Three.js r169 and its addons, all pinned to jsDelivr. Geometry, materials, shaders, typography and animation remain inside the single self-contained `index.html`; there are no local runtime asset dependencies or build steps.

## Files

Deliverable: `clips/KAED/index.html`. Research/production record: `clips/KAED/NOTES.md`. Extraction, scripts and check logs: `clips/.qa/`. All work stayed inside `clips/`.
