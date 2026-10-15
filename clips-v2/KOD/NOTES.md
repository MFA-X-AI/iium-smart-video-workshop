# KOD — same strength, different breaks

The finding: these five restorations had no significant difference in fracture load, but metal and fibre posts had mostly restorable fractures in this laboratory sample.

## Build decisions

Use the decided concept: five procedural sagittal CT sections on a black field. Density, canal contents, and a shared CEJ line carry the explanation. Steel balls apply load, cracks develop, fragments separate, then twenty axial specimen slices per group resolve the observed counts. No chart, interface, external assets, or libraries. The title sits at the upper right; all scientific action ends above y = 780. The lower-right attribution area remains empty.

Canvas textures are cached with a seeded generator. Every animation parameter is calculated directly from the requested time. `?t=` renders one frame; normal playback ends in the held result after three seconds. Long and short restorations have a 3:1 depth ratio. All five teeth use the same anatomy, scale, and rendering treatment so the load comparison is not presented as a ranking.

## Evidence and artistic licence

Source used: the supplied BRIEF.md, including its full-paper extraction and page/figure references; the original PDF was not independently re-read during this build. Group definitions, n = 20, preparation, and loading conditions come from pp. 126–128. Means and ANOVA P = 0.175 come from pp. 126/128 and Fig. 1. Modal fracture classes come from p. 128. Restorable counts 12, 11, 7, 8, 7 were read from Fig. 3 (p. 130) by the brief author, not printed as counts in the paper text. No inferential claim is made about differences in fracture patterns.

The anatomy, CT density/noise/rings, representative crack routes, small fragment displacements, and compressed loading sequence are illustrative. These are not actual scans or individual specimen records. The axial tally icons encode counts only, not measured transverse fracture geometry. Mean-load endpoints are group summaries, not individual failure thresholds. The requested title is shorthand; the explicit null-result line gives the statistical interpretation.

## Revision 2 — supplied-frame review

Reviewed the user's r1 renders at 0.5, 1.5, and 2.5 seconds. Enlarged both tooth dimensions by 18%, moved crown tops to y = 300 and apices to approximately y = 739, and retained the original column centres. The CEJ reference follows the scaled anatomical junction at y = 432.16. Larger tally discs now occupy two rows centred at y = 752 and 771, ending below y = 779; their large count and smaller `restorable` label sit on the right. Existing wording and all data values are preserved. The load caption shares the counters' baseline at y = 277. The title remains unchanged at the upper right.

Below-CEJ cracks now have a 3.78 px amber stroke with a soft glow. Cracked tally slices have amber density and dark splits, while intact slices are bright off-white. Small up/down annotations explain the two sides of the repair line. Balls descend into the occlusal valley and advance with the load fraction; a growing greyscale stress halo is clipped inside each crown. The brighter acquisition band sweeps through the sections before 0.9 seconds. Both post-group crown fragments lift approximately 19–20 px and tilt about three degrees around the fracture while their roots remain fixed. Whole textures are drawn before separation to avoid premature seams from adjoining fragment masks.

## Critic pass (revised code informed by supplied r1 renders; no browser launched)

- **0.5 s:** The enlarged sections fill the available height. Balls visibly contact the occlusal valleys; load-linked crown halos and a bright scan band near y = 564 make loading legible. Counter values remain exactly those of r1 at this time. Long rods and short plugs remain distinguishable.
- **1.5 s:** Every counter has reached its printed mean and the null-result statement is fully visible. The coronal cracks stay above the CEJ for both post groups; the other paths cross it with substantially thicker, glowing amber segments. Small arrows label the meaning of the two sides. Fragment separation and tally appearance begin here.
- **2.5 s:** Lifted and tilted post-group crown fragments leave the roots intact. The other groups show deeper amber damage. Two rows of larger white/amber discs encode the same intact counts of 12, 11, 7, 8, 7 and cracked counts of 8, 9, 13, 12, 13. Counts sit to the right of their discs; the full result stays above y = 780.

The five-column design necessarily uses compact group labels, especially for fibre-reinforced composite. Two-line group labels and large tally numerators preserve hierarchy. Anatomical density is illustrative, and the same tooth is deliberately reused to avoid implying measured scans. Revision 2 has not been rendered or browser-reviewed here; the visual review used the user's supplied r1 frames.

## Revision 1 verification

Passed `node --check` on the extracted script in `clips-v2/.qa/KOD/script.js`. A browser-free Node VM with a recording Canvas mock exercised all 91 frames from 0 to 3 seconds at 30 fps. It checked exact mean loads; twenty tally discs per group; actual cracked-disc drawing counts of 8, 9, 13, 12, 13; partial counters at 0.5 s; final counters and null-result text at 1.5 s; CEJ-side crack geometry; approximate monospace text bounds and tooth bounds outside the reserved corner; deterministic out-of-order rendering; and the final hold. The first counter check prompted a small easing adjustment so the 0.5 s values are approximately 297–339 N.

All checks passed. The harness and report are `clips-v2/.qa/KOD/check.cjs` and `report.json`. These checks validate drawing commands and layout contracts, not rendered pixels or actual font rasterization. No browser was launched.

## Revision 2 verification

The updated script passes `node --check`. The updated recording-Canvas harness passes all 91 frames, including exact load/count preservation, deterministic out-of-order rendering, final hold, scaled CEJ geometry, and approximate text bounds. Additional checks cover full rotated ellipse extents below y = 780, all 55 dark tally cracks, the 3–4 px amber stroke, both final crown tilts, five early stress halos, the brighter scan sweep, new arrow labels, and the shared counter/caption baseline. QA files for this revision are under `clips-v2/KOD/.qa/`; all revision writes stayed inside `clips-v2/KOD/`. No browser was launched. Tests check drawing commands rather than rendered pixels.

## r3 (manual edit by reviewing agent)
- Moved the CEJ legend (x 69 -> 56) and shrank "CEJ - repair line" to 13 px so it no longer touches the metal-post tooth crack. No other changes.
