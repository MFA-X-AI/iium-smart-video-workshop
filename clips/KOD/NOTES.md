# KOD — how a restored tooth breaks

## Read first / so what
Read all seven pages of the supplied Abidin et al. PDF, extracted with pypdf to `clips/.qa/KOD-paper.txt`; verified against papers.json[63]. No summary fallback was needed.

In this laboratory study, posts did not significantly increase the force needed to break restored teeth, but fibre and metal posts more often left a break that could be repaired.

Evidence: 100 extracted, single-canal maxillary second premolars, five groups of 20; all had a prepared MOD cavity, a preserved buccal wall and direct composite restoration. Axial loading used a steel ball. Strength differences were not statistically significant (P = 0.175). Fibre/metal groups predominantly had Class 2 coronal fractures; flowable composite most frequently had Class 4 combined coronal/vertical root fractures. FRC and control mainly had Class 3. Favorable/unfavorable is defined relative to the CEJ, not an invented gum/bone boundary. This is an in vitro result, not proof of clinical survival.

## Three concepts, critiqued before building
1. **Two teeth, two fracture paths.** Two large translucent premolars expose their restorations. Loading balls descend; one coronal fragment separates above the neck, while the other tooth cracks down its root. Lecturer view: the cause and consequences are immediate, and the deep split is the reveal. Strong thumbnail silhouettes and a clear three-second arc. Honest if both break and the labels call these typical laboratory patterns; avoid implying precise equal failure loads. **Chosen.**
2. **One tooth, restoration swap.** A post grows into one tooth, a load arrives, and the tooth loses only a coronal fragment. Lecturer view: large and spectacular, but three seconds could suggest the post healed a crack or made the tooth unbreakable. A still cannot communicate the comparison. Reject.
3. **Five-specimen fracture cascade.** All study groups break in sequence, their fracture planes lit through CT shells. Lecturer view: technically ambitious but five small teeth and five labels require too much reading; the result gets lost. Accurate scope but weak montage readability. Reject.

## Composition and scientific boundaries
- Cool clinical dental CT: pale cyan shells, internal layers, axial slice bands, mineral grain, bright exposed fracture surfaces. No dashboard, cards, controls or legends.
- Two oversized single-root premolars occupy the left/centre. The top-right documentary title reads **A post can change how teeth break.** A subtle scrim protects its space.
- Fibre post and flowable composite represent groups B and C. The short flowable post-space filling differs from a full-length prefabricated post. Both show apical root filling and direct composite coronal reconstruction; a contrasting shell strip indicates the retained buccal wall.
- Supporting text preserves the absence of a significant strength difference. Outcome labels describe illustrative fractures, not guaranteed outcomes.
- Crack paths, separation distances, CT appearance, loading speed, and lighting are artistic interpretation. No real CT data, stress simulation, force calibration, or measured individual fracture paths are claimed. Mounting fixtures and the thin dental dam are omitted. No full crowns or bifurcated roots.
- Keep the editor's bottom-right 980 × 300 area free of title and key action. Anatomy and cracks sit above y=780 or left of x=940 at 1920 × 1080.

## Planned three-second beat
- **0.5 s:** recognizable teeth already visible, long fibre post versus short flowable fill exposed; steel balls approach their chewing surfaces. Meaningful cause, no slow reveal.
- **1.5 s:** compression creates an opening coronal fracture on the left and a branching longitudinal root fracture on the right. Root split must be legible without labels.
- **2.5 s:** separated coronal fragment and intact root on the left versus open deep root cleft on the right. Outcome labels resolve the difference; hold the evidence for the cut.

## Validation approach
Browser launch is prohibited by the brief; use script syntax checking and code/geometry review, and do not claim a rendered inspection. Completed results follow.

## Post-build critic review and validation
- **0.5 s:** both complete single-root tooth silhouettes fill approximately y=175–754. The steel loading balls have descended about halfway toward contact; the long fibre bundle and short composite fill distinguish the restorations. This is readable before the fracture begins.
- **1.5 s:** crack meshes are already about 94% drawn and the fragments have begun separating. The left fracture stays in the coronal region; the right crack reaches well down the root. The event occupies the teeth themselves, rather than relying on camera motion.
- **2.5 s:** left coronal fragment is visibly displaced while its root remains intact. Right halves expose a longitudinal fracture surface. Both outcome captions have reached full opacity. The final result holds through 3 seconds and until the 4.5-second loop resets.
- Corrected the original caption placement after reviewing the loading-ball path: specimen captions now sit beneath the anatomy, so the steel balls never pass behind words. Corrected mesh triangle winding to keep normals outward. The title remains top-right with a gradient scrim.
- `node --check clips/.qa/KOD-module.mjs` passed.
- Executed the full scene-construction and timeline code against a locally available Three.js 0.169.0 module with only renderer/DOM/postprocessing stubs. All 391,090 geometry vertices are finite; both fracture paths are nonzero at 1.5 s; repeat visits to 1.5 s give identical transforms. Import-map version matches the checked Three.js module.
- Projected every shell and fracture-face vertex at 0, 0.5, 1.5, 2.5 and 3 seconds. No anatomy enters the reserved bottom-right rectangle (x >= 940, y >= 780). The deepest root ends at y=761 after fracture. Final anatomical bounds: fibre-post x=209–463, y=145–754; flowable-composite x=709–974, y=180–761. Captions below y=780 end before x=940.
- Freeze examples: `index.html?t=0.5`, `index.html?t=1.5`, `index.html?t=2.5`. Still states are computed directly, without playing earlier frames. Negative times clamp to 0; times beyond 3 clamp to the final result. No texture, font, image or model downloads; Three.js and addons use jsDelivr only.
- No browser was launched. These are syntax, deterministic animation and CPU geometry checks, not a rendered visual inspection or GPU performance measurement. All work products and extraction/cache writes remain under `clips/`.

## R2 — polish after supplied Chrome renders
Reviewed the user's real Chrome stills at 0.5, 1.5 and 2.5 seconds. Kept the approved two-specimen concept, geometry, camera, loading motion, fracture paths, separation timing and result hold.

- Removed the eyebrow, bottom-left caption and the ROOT PRESERVED / ROOT SPLIT text layer. The title and subline remain at their previous visual position. Each specimen retains its restoration label; the only outcome words are **Repairable** and **Beyond repair**, now 42 px and centered under those labels.
- Outcomes fade in from 1.22 to 1.68 seconds, during separation. They remain absent before fracture and hold with the final state.
- Fixed the principal source of the mesh-like appearance: clipping used to recompute flat normals for every triangle. Fragment shells now retain the original smooth normals, interpolating them at cut intersections. Exposed fracture faces keep their separate, rougher material.
- Removed dense axial bands, shell grain, the full-frame grain overlay and visible rectangular scan planes. A broad low-contrast sweep remains inside the tissue. Reduced atmospheric points from 1050 to 250 and reduced their opacity.
- Separated the inner dentine tint and translucency from the outer tissue, with a softly polished, pale enamel response restricted to the retained buccal crown wall. The interior layer is slightly inset for a clearer enamel/dentine boundary. The direct composite reconstruction remains distinct; no full enamel crown is implied.
- Added a thin, bright fracture-line highlight, following the existing crack progression. Its approximately 0.2-second pulse peaks at 1.35 seconds; it has faded by the final hold. The residual fracture lines are quieter at 2.5 seconds so the open physical fractures carry the result.

Validation: module syntax and CPU geometry/timeline checks passed again (394,827 finite vertices). Projected anatomy and fragment poses at 0, 0.5, 1.5, 2.5 and 3 seconds are unchanged from R1; anatomy still ends at y=761 or higher. The right-hand label/outcome boxes end at x=937, safely left of the reserved x=940 boundary. The title/subline remain above the reserved rectangle. No browser was launched; the supplied images are R1 evidence, not rendered verification of R2. Writes remain inside `clips/`.
