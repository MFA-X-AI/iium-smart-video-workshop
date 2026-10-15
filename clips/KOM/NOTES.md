# KOM — Lemon oil / radiographic cell response

## Revision 3 — current composition
Reviewed the supplied revision 2 Chrome renders at 0.5 and 2.5 seconds. The contrasting fibroblast and rounded blebs work, but the deliberately cropped upper cell and high placement do not. Reframed the same cell materials, morphology and response into a complete triangular colony in the right two-thirds, with the attached spindle below the colony. The title remains left-middle. The complete comparison is centered vertically within the usable field above the bottom-right citation reserve.

Adjusted individual cell sizes and positions instead of shifting the entire scene downward into the citation zone. The main cell remains approximately 386 px across at the beginning. Moved and scaled the oil drop so it is fully visible even at t=0, and redirected the dispersing particles through the new comparison area. Preserved the normal fibroblast's mild rounding, cancer-cell contraction and lift, organic blebs, glow, grain, and the title/subline.

### Current frame checks
- **0.5 s:** all three complete cancer cells are visible, spanning x=860–1675, y=97–708. The descending drop is fully in frame. The fibroblast is beneath the colony at x=972–1582, y=667–746.
- **1.5 s:** the leading cell visibly blebs and begins lifting. Cancer-cell bounds are x=884–1632, y=125–658; the normal fibroblast remains attached below.
- **2.5 s:** the detached, blebbing colony spans x=851–1671, y=75–564. The calm fibroblast remains x=980–1575, y=664–748, strengthening the spatial contrast as the cancer cells lift away.
- Audited **181 samples at 60 Hz, inclusive of t=0 and t=3**. Across the entire interval, cancer-cell bounds stay within x=849–1675, y=67–708. Checks now include upper-edge clearance, the normal fibroblast, stationary attachment footprints, the full visible droplet, and every dispersing oil particle. Key geometry has at least a 20 px margin above the citation reserve; the fibroblast's lowest point is about y=748, against the reserve boundary at y=780.
- `node clips/.qa/KOM-audit.mjs` and `node --check clips/.qa/KOM-module.mjs`: passed. Deterministic frozen-time URLs and autoplay also passed. Updated machine-readable report: `clips/.qa/KOM-report.json`.
- No browser was launched. This revision was checked by projecting actual deformed mesh vertices and reviewing the code; a new rendered-image review has not been performed.

The sections below record earlier decisions and validations; revision 3 above describes the current composition.

## Revision 2 — response to the supplied Chrome frames (historical)
The supplied renders reveal problems the geometry-only audit missed: the colony reads as a small diagram, the interior fibres dominate the density, and the evenly spaced angular lobes look like stars. The previous claim that the colony was large enough was too generous. The oil-to-morphology sequence works and is retained.

Implemented: a much closer field with three large cancer cells, one partially cropped at the upper edge, and a conspicuous normal spindle-shaped fibroblast above the left-middle title. Periodic bulges were replaced with smooth unions of unequally sized spherical protrusions at irregular positions, with staggered onset and varied depth. Cytoplasm now has cloudy density, soft granules, broader glow and depth; the fibre web has been removed. Removed the eyebrow, TP53 observation and oil label, leaving the title and one subline: **“Lab study: normal cells less affected.”**

Scientific qualification: these are representative views of **separately cultured A431 and HFF1 cells**, composited into one image for comparison. The paper does not demonstrate mixed-culture selectivity. The fibroblast retains its spindle shape but rounds slightly, reflecting milder morphological changes rather than immunity. The cell count, shape deformation amplitude and timing are illustrative, not quantitative measurements. This revises the original decision against concept 2: a single large spindle provides contrast without a second dashboard or collection of labels.

### Revision 2 frame critique and validation
- **0.5 s:** the main cancer cell is 489 px wide, roughly twice the original central cell's width. The cancer group spans x=870–1839 and extends past the upper edge to y=703. This intentional crop establishes a close field instead of a seven-cell diagram floating in space. The spindle-shaped fibroblast occupies x=163–796, y=158–306, above the title. The large droplet remains visible between the cell types.
- **1.5 s:** the main cancer cell has reached 82% of its illustrative morphology progression; its spherical blebs have emerged, the body has contracted, and lift has started. Two neighbours follow at 67% and 51%. The fibroblast stays at the same position with only minor rounding. Dispersing particles extend over both cell types, avoiding the suggestion that normal cells were simply not exposed.
- **2.5 s:** the main cell is lifted about 114 px and rotated enough to show depth. Its contracted body retains attached rounded blebs, a nucleus and granular cytoplasm. Soft residual density marks the former attachment region. The fibroblast remains a roughly 619 px wide spindle, versus 633 px initially, and stays attached. The contrast is a difference in response, not a binary claim that normal cells are unharmed.
- The lower edge of the cancer geometry is at most y=703 at the requested still times. A 91-sample audit across 0–3 s checks the full motion against the bottom-right citation reserve beginning at y=780, not just those stills. The title remains left-middle and clear of both cell types.
- `node clips/.qa/KOM-audit.mjs` and `node --check clips/.qa/KOM-module.mjs`: passed. The audit evaluates the revised sphere-union deformation, spindle morphology, finite particle positions, comparison-cell attachment, title/citation clearance, deterministic seeking and autoplay. Report: `clips/.qa/KOM-report.json`.
- About 230k mesh triangles, 25 drawable objects, and a 1.25 pixel-ratio cap. Shader noise replaces hundreds of visible fibre lines. No measured FPS claim.
- Reviewed the three real Chrome images supplied by the user for revision 1. **No browser was launched for revision 2.** Its actual shader rendering and performance remain unverified; the revised frame descriptions above come from code review and scene projection, not new screenshots.

The following sections preserve the initial concept exploration and revision 1 audit as a design record; the current implementation and validation are described above.

## Paper and the so what
Read the supplied 11-page PDF, including Results and Discussion (pp. 384–388), and cross-checked papers.json[54]. No summary fallback was needed.

**In laboratory cultures, lemon essential oil visibly damaged skin cancer cells, suggesting an avenue for further cancer research.**

The observed A431 response after 24 hours includes shrinkage, membrane blebbing, loss of polygonal shape, reduced clustering, and detachment. HFF1 fibroblasts were less affected, but were not completely unaffected. TP53 mRNA was significantly lower at 125 and 500 µg/mL; 250 µg/mL could not be quantified. This does not establish the pathway causing damage. Secreted p53 results were preliminary (one biological replicate), and the detailed results do not support a simple monotonic fall across every dose. Do not animate a dose gauge, an intracellular p53 measurement, DNA repair, or a proven p53-independent killing mechanism.

## Three concepts, with critique
1. **Radiographic colony comes unstuck.** A suspended essential-oil droplet disperses over a cluster of translucent, flattened cancer cells. Their membranes develop rounded blebs, their bodies contract, and several lift away from ghosted attachment footprints. Bright internal nuclei and fine cytoplasmic filaments remain visible through the cells.
   - Three-second reading: the title identifies lemon oil and skin cancer; the contact, contraction and separation give a visible causal sequence. The dramatic moment is the colony opening into separate lobed cells.
   - Thumbnail: large, luminous cellular forms, with an identifiable suspended droplet at the start and a disrupted colony at the end. A macro radiograph, not a dashboard.
   - Honesty: maps to directly reported morphology. Oil delivery, translucent anatomy and kinetics are artistic; the study used diluted oil in culture medium over 24 hours. No literal X-ray claim or efficacy claim.
2. **Two cell types, one advancing oil front.** A continuous field of spindle-shaped fibroblasts and polygonal carcinoma cells; the latter contract while fibroblasts show milder rounding.
   - Three-second reading: the difference is useful, but requires two labels and splits attention. A viewer could read it as complete cancer selectivity or clinical protection of healthy skin.
   - Thumbnail: more crowded, smaller event. Scientifically possible if carefully qualified, but inferior for this montage.
3. **TP53 signal fades inside a changing cell.** RNA-like filaments fade while a membrane develops blebs.
   - Three-second reading: striking interior, but a non-expert cannot identify RNA or understand a lower signal. It risks suggesting that downregulation causes the morphological response, or that transcriptional repression was established.
   - Thumbnail: strong object, weak story. Reject because the mechanistic uncertainty is central to the paper.

## Revision 1 selected shot and composition (superseded)
Choose concept 1. Silver-white and faint ice-blue radiographic density on almost-black blue film. Layered, additive membrane surfaces, inner nuclei, organelle granules and fibres; no yellow citrus advertising palette. A large sculpted droplet enters from above. It disperses as the membrane response travels through the colony. Some cells remain attached, avoiding a total-eradication metaphor.

Title at **left-middle**: “Lemon oil stresses skin cancer cells” (6 words). A left-side gradient scrim protects it. “Cultured A431 cells” and “24-hour response · time-compressed” establish context. A small supporting observation about TP53 is text only, never the animated trigger. No citations or attributions appear on screen. Main action is above the bottom-right 980 × 300 editorial reserve.

## Revision 1 planned beats
- **0.5 s:** oil droplet is visibly descending toward the broad, intact colony; outlined nuclei and cell boundaries already provide a strong image.
- **1.5 s:** central and neighbouring cells contract, swell into membrane blebs, and begin separating. Dispersing oil specks connect delivery with response.
- **2.5 s:** gaps and attachment footprints clearly show lost adherence; rounded cells have lifted and rotated, with conspicuous lobed silhouettes. The camera stays fixed so the biological transformation carries the shot.

## Revision 1 implementation and initial critical review
Implemented a self-contained index.html with Three.js 0.169.0 and pinned jsDelivr addons. Seven individually deforming cellular membranes use angular surface perturbation and localized lobes, nested transparent density surfaces, interior nuclei, curved cytoplasmic fibres, granules, a sculpted droplet and dispersing particles. Restrained bloom, vignette and deterministic film grain finish the radiographic treatment. The camera is fixed. The preview loops after 4.2 seconds, allowing an endpoint hold; the intended montage cut is 0–3 seconds.

Read the code and evaluated the actual scene geometry at the three required times:
- **0.5 s:** intact membranes and a descending drop. The colony occupies x=1054–1678, y=218–748 at 1920×1080, large enough to provide a clear object without entering the title. Interior detail alone would not tell the story; the drop and explicit title supply the cause.
- **1.5 s:** the leading cell has reached 68% of its deformation progression; surrounding cells range from 19–58%. Its outline is contracting and developing blebs while the oil disperses. Detachment is only beginning here, so the changing silhouette, rather than upward translation, must carry this beat.
- **2.5 s:** all cells have reached the final lobed morphology. The central cell has moved upward about 88 screen pixels, with visibly larger intercellular gaps and stationary footprints. Two lower cells remain nearly attached. The colony occupies x=1043–1680, y=187–730. TP53 text is now present as a separate observation. The transformation is deliberately morphological, without cell explosions, disappearing nuclei or claims of complete cancer eradication.

The colony keeps a similar overall footprint, but its individual silhouettes, spacing and adherence change; this avoids relying on a camera move for action. A lingering limitation is that the radiographic style is interpretive and the simulated interiors were not measured in this study. The on-screen culture context and source/licence HTML comment make that distinction explicit.

## Revision 1 validation (historical)
- Extracted the supplied PDF with `uv run --no-project --with pypdf python` using a locally available wheel after the package index connection failed. Full extracted text is in `clips/.qa/KOM-paper.txt`.
- `node --check clips/.qa/KOM-module.mjs`: passed.
- `node clips/.qa/KOM-audit.mjs`: passed against the locally available Three.js revision 169. The audit executes scene construction with rendering stubbed, then evaluates the same deformation mathematics on real mesh geometry.
- Audited 91 samples across 0–3 seconds: all cell geometry stays clear of the left-middle title and the editor's bottom-right reserve; projected positions and oil particles remain finite.
- Verified history-independent time seeking, frozen `?t=0.5` without animation scheduling, and normal autoplay scheduling. Example still URLs: `index.html?t=0.5`, `index.html?t=1.5`, `index.html?t=2.5`.
- About 120k mesh triangles and 53 drawable objects; pixel ratio is capped at 1.25. This is a performance-conscious budget, not a measured FPS claim.
- Browser launch was forbidden and none was launched. GPU shader compilation, visual quality in the actual renderer, network loading in a browser, and laptop performance remain unverified. Machine-readable audit: `clips/.qa/KOM-report.json`.
