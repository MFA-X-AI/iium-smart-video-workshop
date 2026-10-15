# KICT — calibration cancels the eye-corner overestimate

The finding: learning a calibration removes the systematic overestimate in eye-corner-based pupil-distance estimates, but individual errors remain too wide for clinical measurement.

## Build plan

The supplied concept is fixed: a neon face resolves, its four eye corners establish the ruler, a magenta measurement overshoots a reference, and a scanning correction brings it back. A translucent agreement band then qualifies that result. No alternate concepts are needed under the KICT brief override.

Built one self-contained Three.js page with embedded generic face geometry, a black background, additive point sprites, fine triangular edges, and bloom. Measurement coordinates remain fixed at the requested true scale; only face depth receives parallax. An explicitly labelled ×4 endpoint loupe magnifies both errors and its millimetre ruler uniformly. The complete face continues through the bottom-right attribution region at 45% opacity; labels and measurement action stay above it.

## Paper and artistic choices

Read the supplied complete paper text, `clips-v2/.qa/KICT/paper.txt`: Tamrin et al., *Canthus-Scaled 468-Landmark FaceMesh Framework for Pupillary Distance Estimation Using Nested AutoML Calibration*, IJACSA 17(6), 2026, pp. 438–445.

- Page 440, Eqs. 4–7: eye-corner midpoint proxies, using landmarks 33/133 and 263/362, with the 29.10 mm normative eye-opening scale. These are not detected pupils.
- Page 442, Tables I–II: reference mean PD 63.59 mm; direct bias +2.83 mm and MAE 4.26 mm; calibrated bias −0.08 mm and MAE 3.51 mm; calibrated agreement limits −8.45 to +8.30 mm.
- Page 443, IV-F: the key improvement is systematic bias reduction. Page 444, IV-H: the remaining agreement limits rule out replacing clinical PD measurement.
- Generic canonical face geometry is read from the existing local `clips/.qa/KICT-canonical.obj` and embedded in the new page. It is a stand-in, not a study participant or a reconstruction of the dataset. The composition, nonuniform stylization of the face, colors, assembly animation, and scanner are artistic choices. No v1 scene code is reused.
- The mean biases and agreement limits are population summaries staged together on one illustrative face, not a single participant's trajectory. The animation does not run AutoML. The scan represents learned calibration and does not imply the actual model simply subtracts a constant.
- The visible honesty caption reads “Illustration: the paper's average errors over 44 subjects, drawn to scale”. It is one quiet, grey, 21 px line at (325, 705), under the eye-width label, with a fine black text outline for legibility. The sample size comes from Table I, p. 442. This makes the generic illustration explicit on screen as well as in the HTML comment. The main-view millimetre ruler is removed; only the loupe retains a graduated scale.
- The true reference spans 620 px. All main-view error offsets and the eye-width ruler use 620 / 63.59 px per mm. The loupe uses exactly four times that scale: the overshoot is 110.37 px, the calibrated residual is −3.12 px, and each millimetre is 39.00 px. The magnification is an artistic viewing aid, not another paper result. The reference PD value remains documented here and in the HTML rather than added on screen.
- “Mean error” in the required labels denotes mean absolute error (MAE), distinct from the signed bias. Agreement limits are not maximum errors or a confidence interval; the scene names them explicitly.

## Frame critique and checks

Built the standalone `index.html`: embedded 468-vertex face / 898 triangles; Three.js 0.169.0 with bloom; scene-connected SVG labels; autoplay loop; deterministic `?t=` freeze. No UI or on-screen attribution. All dependencies are the pinned Three.js imports on jsDelivr.

Revision 3 addresses the supplied revision-2 Chrome frames: the complete face and enlarged comparison work, but the loupe reference was absent. Its vertical-only path used an SVG glow filter with zero-width object bounds. The replacement is an unfiltered, capped white line, 67 px tall, at the same exact reference coordinate. “true PD” now sits immediately beside it; the calibrated label is right-aligned next to the cyan endpoint with a short connecting leader. Numbers and their “mm” units share a single explicit regular monospace text run, followed by one preserved normal space and the label font. No browser was launched for this revision. The following describes the revised code-derived composition:

- **0.5 s:** the full symmetric mesh has resolved, including the right lateral eye corner, cheek and jaw. Both mesh and points retain a 45% visibility floor in the reserved corner. All four amber corners are lit. The eye-width label connects to a corner-to-corner dimension bracket. The white main reference tick is 130 px tall. The honesty caption identifies the face as an illustration before the result appears.
- **1.0 s:** the ×4 wireframe loupe above the beam makes the overshoot a 110 px span, with an unfiltered bright white reference tick, magenta endpoint, labelled +2.83 mm bracket, and millimetre graduations. The bracket starts exactly at the white tick. “true PD” is beside that tick rather than in the corner of the inset. The direct label reads in three lines: “eye-corner estimate” / “+2.83 mm too wide on average” / “mean error 4.26 mm”.
- **1.5 s:** the cyan endpoint sits 0.78 px short in the main scene and 3.12 px short in the loupe. The earlier magenta endpoint and bracket persist as a dim ghost. Both state labels fit; number/word pairs share a baseline and use a normal space. The scanner completes its original motion.
- **2.5 s:** the loupe preserves the before/after comparison while the main view retains its 163.31 px agreement band. The labels use soft dark scrims to remain readable over the restored face. The caveat stays above y=780. This remains the densest frame; the loupe emphasizes bias reduction while the final hold gives the smaller MAE and agreement text time to register.

Checks completed without launching a browser:

- Extracted the revised module to `clips-v2/KICT/.qa/module.mjs`; `node --check` passed.
- `clips-v2/KICT/.qa/check.mjs` verified all 468 symmetric vertices and 898 triangles, finite coordinates, both shaders' nonzero reserve visibility, unchanged main measurement scales and timeline, and exact ×4 endpoint proportions across 91 time samples.
- Checked SVG element references, label positions, and mixed-size text widths with local system fonts. The full direct-result line ends at approximately x=1801, with the calibrated line at x=1596. The caption ends at x=999, safely above the reserved region. The loupe residual label ends at x=1124.88, beside the cyan end at x=1129.88 and white tick at x=1133.
- Executed the SVG initialization in isolation to check the capped tick path, exact bracket endpoints and calibrated-label anchor. Verified that the loupe reference does not use a filter, that the main ruler is absent, and that the loupe ruler remains.
- No post-revision browser/GPU render was performed. The supplied images establish the previous rendering, not the final appearance; the revised layout and shader checks are static. The report is in `clips-v2/KICT/.qa/report.json`.

Revision 3 writes only inside `clips-v2/KICT/`, including its `.qa/` subfolder. Earlier QA files outside that folder are unchanged.
