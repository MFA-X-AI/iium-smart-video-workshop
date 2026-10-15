# KIRKHS — essays become words, words become classifications

## Paper and so what
Read all eight pages of the supplied Sumbula, Sulaiman and Ariffin paper. PDF text was extracted with `uv run --no-project --with pypdf python` using a local wheel offline, to `clips/.qa/KIRKHS-runnerup-paper.txt`. This is the correct paper, matching `papers.json[112]`; no summary fallback was needed.

Ordinary word-use patterns helped simple machine-learning models distinguish human essays from AI essays in a controlled study, offering an understandable starting point for authorship screening.

The corpus comprised 100 monitored human essays and 100 GPT-4 essays, approximately 500 words each, on one shared topic. Features included vocabulary richness, lexical density, word/POS frequencies and word-level n-grams/TF-IDF. LR, SVM and Decision Tree were evaluated. The study did not validate unseen prompts, other models, edited/paraphrased text or other domains. Its results are not sole evidence of misconduct. No accuracy number is shown here.

## Three initial concepts and critiques
1. **Essays become predictions.** Pages release their words; words fly through depth and resolve into HUMAN / AI letterforms. Familiar starting/ending objects make this readable in three seconds; the assembly is the surprise. Strong beginning and ending thumbnails. Risk: suggesting that a word individually proves authorship. Keep the text synthetic, describe this as aggregate lexical analysis, and retain the controlled-study subline. Selected.
2. **Word-frequency printing press.** Words accumulate in stacks, then stamp a classification onto a sheet. Forceful, but looks like a bar-chart dashboard and an authoritative misconduct verdict. Reject.
3. **Writing fingerprints.** Paragraphs become word-ridge fingerprints. Beautiful, but suggests stable individual identity and may not communicate AI detection. Reject.

## Visual treatment
Ultramarine, ivory HUMAN, coral AI. Fixed left-middle title: “Word patterns help spot AI-written essays” (7 words). Exactly one subline: “A controlled study of 200 essays.” Gradient scrim keeps the title readable. No eyebrow, classification label, legend, controls, cards, cursor or citation. The documentary title anchors a full Three.js transformation.

## Revision after the supplied Chrome frames
The user supplied real frames at 0.5, 1.5 and 2.5 seconds. They showed the front sheet appearing blank, the airborne words too small and crowded, and weak final silhouettes. Those renders supersede the earlier optimistic code-only assessment.

Implemented in place:
- Removed THE SHAPE OF WRITING, MODEL PREDICTIONS and the feature legend, including their DOM, CSS and timing code.
- Typeset invented essay headings and real paragraph-shaped prose directly into each paper material. Curved, tessellated surfaces, computed normals, a thin backing and restrained key/rim lighting give the pages shape. Backings render before the textured faces; particles render after the sheets. Text visibility no longer depends on particle transparency sorting.
- Coarsened letter-mask sampling substantially: HUMAN steps change from 23 by 12 mask pixels to 49 by 27, AI from 35 by 12 to 92 by 27. Removed the extra stray-word population. Words use tightly cropped atlas UVs instead of mostly empty atlas cells. Their projected airborne tile heights are 26 pixels, with selected foreground words at 40 pixels; these are tile heights, not claimed font cap heights.
- Spread the word field across shuffled screen-space positions, compensating for perspective. Shorter selected foreground words remain crisp at z=250; distant words receive a depth-dependent nine-tap blur. This is an economical per-word depth-of-field approximation, not full-scene ray-traced optics. All words refocus as they lock into the final plane.
- HUMAN draws from 32 varied illustrative words, with slight size/depth variation. AI repeats learning, knowledge and education with uniform final size, orientation and depth. The difference is in aggregate repetition, not a list of forbidden words.
- After the legible airborne interval, the two groups lock between 1.73 and 2.115 seconds. A 75 ms left-to-right stagger, brief damped overshoot and a restrained silhouette-opacity impact make the sorting decisive. This replaces the continuous slow morph.
- Raised the letterforms: HUMAN centre y=242 screen pixels, AI centre y=504. Including generous geometry margins, final content stays above y=676; the citation rectangle starts at y=780. The airborne layout ends at y=661 before small hover/glyph margins. Title remains left of the reserved corner.

## Scientific mapping and artistic licence
Vocabulary richness and word-use frequency are actual input features in the paper. The lower-diversity AI word cloud is an illustrative explanation of such features, requested in this revision. The paper does not establish that AI universally uses a smaller vocabulary, nor does it supply these particular word lists or their frequency ratios. The selected words, prose, class contrast, number of particles, geometry, paths and snap are artistic licence; they do not encode measured samples, model coefficients, feature importance, error rates or a fitted decision boundary. The title says “help spot”; the subline states the controlled setting. The mechanism is lexical feature extraction followed by essay-level classification, not individually labelling every word as AI-written.

## Review of the revised code at the three requested times
- **0.5 s:** both curved pages are fully opaque with embedded essay prose. Words are 1.8–14.9% into their outward paths, fading in as they peel so printed text does not double up. The strongest early words begin leaving the page; later words remain represented by the prose texture. This is a recognizable essay opening, not blank planes.
- **1.5 s:** papers have disappeared and all words have reached the distributed airborne field. No word has started locking. Larger, sharper foreground examples contrast with softer distant words; varied ivory vocabulary and repeated coral vocabulary are visible. The title carries meaning while this frame holds the visual tension.
- **2.5 s:** both groups are fully locked. HUMAN has varied vocabulary and subtle tile variation; AI has repeated words in a consistent treatment. The overshoot is effectively settled; silhouettes and foreground word ink are sharper and brighter than the supplied first version. No UI labels remain.

The resulting composition holds through 3.65 seconds, fades out by 4.1, and loops at 4.25. URL `?t=` evaluates the same deterministic scene modulo 4.25 seconds.

## Checks and limits
`node --check clips/.qa/KIRKHS-r2-check.mjs` passes. `node clips/.qa/KIRKHS-r2-static-check.mjs` passes: exact jsDelivr Three.js pin, removed labels, one subline, no controls, deterministic time, shader-string double-minus check, direct paper textures, backing order, depth-blur code, reduced sampling density, time-state assertions, and final letterform bounds above the citation zone.

No browser was launched. The supplied first-version screenshots were reviewed, but the revised rendering and GPU performance have not been visually verified. The word field remains one instanced draw with GPU motion; there is no full-screen postprocessing pass. All writes stayed inside `clips/`.

## Paused-frame spacing correction (revision 3)
The supplied 2.5-second Chrome frame showed complete words colliding in both HUMAN and AI. The earlier sampling tested only whether each word centre lay inside a large letter; it did not account for the displayed width of the word.

Added a final-layout packing pass for BOTH classes. It projects each complete word rectangle through the same 1800-unit perspective camera, accounts for its final size and depth, and retains only words with at least 8 screen pixels of rectangle separation. Keeping the original type size preserves legibility. The AI vocabulary still visibly repeats learning, knowledge and education; HUMAN retains varied words.

The airborne particles, text, paths, depth-of-field effect, pages, lighting, title, subline, large letterforms and timing are unchanged. Surplus words fade only as they lock, so the settled letterforms contain fewer, clearly separated words without changing the scatter shot. At 2.5 seconds all fades are complete; the tiny residual spring motion is negligible relative to the spacing allowance.

Validation: `node --check clips/.qa/KIRKHS-r3-check.mjs` passes. `node clips/.qa/KIRKHS-r3-spacing-check.mjs` runs the actual packing function against 320 synthetic crowded word rectangles spanning both layouts, variable lengths and HUMAN depth variation; the 173 retained rectangles pass exhaustive pairwise separation checks with an 8-pixel minimum gap. These are test-fixture counts, not the rendered particle counts. No browser was launched or revised render claimed. All writes remained inside clips/.
