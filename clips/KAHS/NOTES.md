# KAHS — soft-focus microscopy, revised action

## The so what
Women with both PCOS and obesity had lower expression of a womb-lining gene involved in embryo attachment, a clue to understanding impaired fertility.

Read the supplied seven-page PDF, extracted with `uv run --no-project --with pypdf python` using the available local Python and pypdf wheel. Extraction: `clips/.qa/KAHS-paper-pypdf.txt`. Confirmed papers.json index 81; no summary fallback.

The abstract and Results report lower αvβ3-integrin mRNA in PCOS with obesity than in normal-weight PCOS and normal-weight controls. The study used RT-qPCR in 40 women, four groups of ten. Mucin-1 and E-cadherin had no significant group differences. Statements about obese non-PCOS controls vary between the Results and Discussion; this clip uses only the consistent comparison within PCOS.

## Three concepts and critique

1. **An embryo lands, loses its anchors and slips away.** Immediate action, recognizable stakes, strong thumbnail. Reject: the paper did not measure failed attachment or pregnancy outcomes.
2. **An illumination wave reveals two stationary tissue rows.** Scientifically restrained expression comparison. Built in revision 1, but the user's actual Chrome renders at 0.5, 1.5 and 2.5 seconds demonstrate the failure: the cells look like a static diagram, the brightness change is too subtle, and there is no embryo to connect the visual to the title. My initial code-only assessment overrated this concept. Keep its palette and membrane appearance; replace its action.
3. **Matched blastocysts descend, anchors emerge, and both settle.** A clean side-by-side optical comparison: one large blastocyst in each view approaches a curved womb-lining surface. Amber anchor symbols grow into view below them. The normal-weight PCOS view has many; the PCOS-with-obesity view has fewer. Short luminous connections complete the landing. Both embryos follow exactly the same motion and timing. Choose this revision: visible movement over hundreds of pixels, an unmistakable contact event, and a difference in illuminated symbol density rather than a different clinical outcome. The terminal frame is also a readable thumbnail.

## Current composition

- Preserve the dusty mauve field, rose/lilac cell membranes, violet nuclei, honey-colored light, soft optical edges, and serif title from the approved style.
- Two specimens sit side by side on the left. Curved, multilayered endometrial surfaces extend beyond the bottom of frame instead of floating as two horizontal rows.
- Each blastocyst has an outer cellular trophoblast, translucent cavity and eccentric inner cell mass. These are illustrative hatched blastocysts: no intact zona pellucida blocks contact.
- Keep the right-middle headline, “Fewer signals for embryo attachment.” Remove the eyebrow, bottom-left caption and separate sample labels. The only subline is “PCOS: normal weight (left), obesity (right)”.
- Title occupies x = 1190–1840, y ≈ 390–632; subline starts near y = 661. The contact patches are around x = 285 and 800, y = 670–735. No title or key action occupies the reserved bottom-right x ≥ 940, y ≥ 780 citation area. Background tissue may extend behind that area, as allowed.

## Scientific boundaries

The measured finding is lower integrin gene expression. The docking, symbols, their counts, enlarged molecular proportions, fluorescence, shape, timing, and contact deformation are artistic context. No fluorescence microscopy or live docking data were collected for this animation. Lit-symbol density is uncalibrated: the illustrative count ratio is not a measured receptor count, protein ratio, transcript ratio or numerical result.

The approaching embryos do not cause a measured increase in gene expression. Symbol appearance is an editorial reveal timed to the approach to explain attachment relevance. Both embryos settle identically; this is not evidence of equal implantation success. There is no failure, detachment, invasion, pregnancy outcome, treatment effect, or progression from one group into another. Tissue and embryo geometry, descent, and settling are identical between the two views. Only which anchor symbols are displayed differs.

## Frame critique and corrections after implementation

These are scene-construction and timing checks, not new Chrome screenshots. The only real renders inspected were the three revision-1 images supplied by the user.

- **0.5 s:** Two large blastocysts are high above the tissue, centers at y ≈ 335 px, with a substantial visible gap beneath them. No anchor symbols have emerged yet. The multicellular embryos—not tiny puncta—are the primary subjects. Their descent is underway.
- **1.5 s:** Their centers are at y ≈ 527 px, approximately 193 px lower than at 0.5 seconds. The embryos now approach the surface. Dense versus sparse amber anchors are fully visible; luminous connection growth has not started. The silhouettes and contact gap are substantially different from the early frame.
- **2.5 s:** Both centers reach y = 583 px, approximately 248 px lower than at 0.5 seconds. Both have settled at the lining; short anchor connections and their traveling light pulses have completed. The dense/sparse comparison remains visible with the same final embryo pose. Hold the composition for the remainder of the three-second cut.

Reduced anchor-head and halo sizes after code review so the dense view keeps distinguishable anchor structure rather than becoming a broad bloom patch. Kept deterministic pose evaluation, including seeking backwards. The default animation holds the finished pose before an editorial replay cut at 5.2 seconds. `?t=<seconds>` freezes a single requested time.

## Validation

- `node --check clips/.qa/KAHS-module.mjs` passed.
- Static checks confirmed the exact Three.js/addon version 0.180.0, jsDelivr-only imports, no controls, and removal of old labels/captions.
- Executed the actual geometry-building and pose code against a locally cached compatible Three.js 0.169.0 module, with only the generated glow texture's canvas context stubbed. This is a scene/math check, not browser or WebGL validation of the shipped 0.180.0 modules.
- Confirmed finite transforms, identical embryo descent in both specimens, approximately 248 px of motion between the requested early/final times, transition from no anchors to dense/sparse anchors and connections, and deterministic backward seeking. QA files are under `clips/.qa/KAHS-*`.
- No browser launched. Revised GLSL compilation, rendered appearance, jsDelivr loading and GPU frame rate have not been verified here.
- All edits and scratch files are inside `clips/`.
