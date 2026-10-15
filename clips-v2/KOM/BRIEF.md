# KOM v2 proposal: TP53 falls in skin cancer cells, not in normal fibroblasts

Paper: Zamani, Wan Omar, Mohd Radzuan, Anuar, Muzamil (2026). "TP53 downregulation in non-melanoma skin
cancer cells treated with Citrus limon (Cl) essential oil." Borneo J Med Sci 20(3), 380-390.

## Headline result
Lemon (Citrus limon) essential oil (CLEO), given for 24 h, **significantly lowered TP53 gene expression in
A431 squamous skin-cancer cells at 125 and 500 µg/mL (p<0.001, qPCR; Fig. 3B, p. 386 text)**, while
**normal HFF1 skin fibroblasts showed no significant change in TP53 at any dose (Fig. 3A)**. At the same
time the cancer cells showed membrane blebbing, shrinkage and detachment at all doses, the fibroblasts only
mild rounding at higher doses (Fig. 1, p. 384-385). This is the paper's title result, and the authors note it
is the opposite of the upregulation they expected from earlier essential-oil studies (Discussion, p. 387).

What the paper does and does not give (important for honesty):
- Fig. 3 has no printed numeric values; bars read roughly -3.1 / -3.2 (A431 125 / 500) on a signed
  "fold change vs control" axis. **We do not put these read-off numbers on screen.** We state the result as
  printed in the text: "significantly lower, p<0.001" vs "no significant change".
- 250 µg/mL in A431 has no TP53 value (RNA below detection threshold). So the clip shows one dose, 500 µg/mL,
  where both cell types were measured.
- Secreted p53 protein (Fig. 2: HFF1 16-fold at 500 µg/mL; A431 0.75-fold) is single-replicate and called
  preliminary by the authors; the text and figure also disagree for A431 250 µg/mL (text 0.5, bar ~0.9).
  **Left out of the clip.**

## The data on screen
Two fluorescence micrograph fields, side by side, same dose, same time:
- Left field: **Normal skin fibroblasts (HFF1)**: long green spindle cells (actin), blue nuclei, each
  sprinkled with red puncta = TP53 transcripts (smFISH-style). After the oil: the red puncta stay; a few cells
  round slightly (the paper's "mild" change). Annotation: **"TP53: no significant change"**.
- Right field: **Skin cancer cells (A431)**: green polygonal epithelial cells in a cobblestone cluster, blue
  nuclei, red TP53 puncta. After the oil: the red puncta dim and wink out, cells shrink, bleb and lift off.
  Annotation: **"TP53 significantly lower, p<0.001"**.
- Shared dose tag: **"Lemon essential oil · 500 µg/mL · 24 h"**.
Only these values appear: 500 µg/mL, 24 h, p<0.001. No read-off fold values.

## Staged in the subject, not as a chart
The result is literally a gene signal inside cells, so the cells carry it: the red TP53 channel going dark in
one field and staying lit in the other IS the comparison. No axes, no bars.

## Storyboard (0-3 s)
- **0.5 s**: Black field, two micrograph panels. Both populations intact, red TP53 puncta glowing in every
  cell; a faint amber haze (the oil) washes in from the top across both fields; dose tag visible.
- **1.5 s**: Right (A431): red puncta fading fast, cells contracting and blebbing, first cells lifting/blurring
  out of focus. Left (HFF1): red puncta unchanged, spindles intact, slight rounding in one or two. Labels
  begin to type on.
- **2.5 s**: Hold. Right field: red channel nearly dark, rounded blebbing detached cells, label "TP53
  significantly lower, p<0.001". Left field: red still lit, spindles intact, "TP53: no significant change".
  Title reads left-middle.

## Title
**"Lemon oil lowers TP53 in skin cancer cells only"** (subline, small: "Normal fibroblasts: no significant
change").

## Swap test
Only this paper shows TP53 going *down* (against expectation) in A431 cells, not in HFF1 fibroblasts, under
lemon oil at 500 µg/mL; an essential-oil paper where p53 rises, or a general cytotoxicity paper, would need
the opposite or a different signal.

## Visual style and medium
Fluorescence/confocal microscopy on a pure black field: DAPI-blue nuclei, green cytoskeleton, red TP53
puncta, additive glow, slight chromatic bloom, shallow optical sectioning (cells lifting off the coverslip go
soft/out of focus), faint sensor noise, a thin scale bar and channel legend strip ("DAPI · actin · TP53
mRNA") in small monospaced micrograph type. The technique fits because the finding is a per-channel signal:
switching one colour channel off in one cell type is exactly how a microscopist would show it.
Artistic licence: the paper measured TP53 by qPCR and imaged cells by brightfield only; the fluorescence
rendering, puncta counts and fade amount are illustrative, not measured.

---

# Build instructions for Astra

Read clips/BRIEF_OPEN.md for the general rules (no UI chrome, title position, no attribution in the clip,
bottom-right 980x300 px kept clear, ?t= freeze), except where this brief overrides them. Where BRIEF_OPEN's
style table says "X-ray / radiograph" for KOM, IGNORE it: the style for this clip is fluorescence/confocal
microscopy as described above. Title position stays left-middle. Do not look at or reuse clips/KOM/.

## Hard constraints
- One self-contained `clips-v2/KOM/index.html`, 1920x1080, auto-plays, `?t=<seconds>` freezes it
  deterministically (it is captured frame by frame at 30 fps for 3 s; no Math.random without a fixed seed,
  no dependence on real elapsed time when ?t is given).
- 2D is recommended (canvas 2D or WebGL canvas with additive blending); if you use three.js, load it from
  jsDelivr via an import map with a pinned version. No other CDNs, no build step.
- No citation/attribution in the clip. Keep the bottom-right 980x300 px (x>940 and y>780) free of the title,
  labels and key action (black field / dim cells may continue there).
- HTML comment at the top: what comes from the paper (with page/figure refs) vs artistic licence (the paper
  used qPCR and brightfield microscopy; fluorescence rendering, puncta counts, fade amount, cell counts and
  timing are illustrative).

## Composition
- Title block left-middle (roughly x 80-620, vertically centred around y 450-560): title
  "Lemon oil lowers TP53 in skin cancer cells only", subline "Normal fibroblasts: no significant change".
  Clean sans or a technical grotesk, white, with a subtle dark scrim.
- The two micrograph fields fill the rest above the reserved corner, e.g. two panels side by side in
  x ~680-1880, y ~70-740, separated by a thin gap, each with a small header in micrograph type:
  left "Normal skin fibroblasts (HFF1)", right "Skin cancer cells (A431)". Cells should be big and
  readable (each cell clearly visible at 1/3 scale; ~10-16 cells per field, not hundreds of dots).
- Dose tag across the top of both panels: "Lemon essential oil · 500 µg/mL · 24 h" (exact text, µ symbol).
- Channel legend strip small at the bottom of the panels (y < 770): blue "DAPI (nuclei)", green "actin",
  red "TP53 expression". Thin white scale bar allowed without a number (do not invent a µm value).
- Result labels (exact text), appearing ~1.3-2.0 s, placed inside/under their own panel (not in the
  bottom-right reserve): left "TP53: no significant change" (neutral white/green), right
  "TP53 significantly lower · p<0.001" (red accent). No other numbers anywhere.

## Motion (must be readable in 3 s; finding lands by ~2 s)
- 0.0-0.6 s: both fields intact and glowing, red puncta (5-12 per cell) twinkling in every cell; faint amber
  haze of oil drifts in from the top over BOTH panels (both were treated).
- 0.6-2.0 s: A431: red puncta dim and wink out one by one (to near-dark, not all necessarily gone), cells
  shrink, round, grow membrane blebs, several lift and defocus (blur + scale) as they detach. HFF1: red
  puncta stay lit at the same density; spindles stay attached; 1-2 cells round slightly (the paper reports
  mild rounding at higher doses, so do not make them perfect).
- 2.0-3.0 s: hold the contrast, gentle continued motion (detached A431 cells drifting out of focus), labels
  fully readable.
- Keep motion lively at every sampled time (0.5, 1.5, 2.5 s must each be a strong frame).

Output: clips-v2/KOM/index.html and clips-v2/KOM/NOTES.md (short: your plan, what's on screen at 0.5/1.5/2.5 s,
and a self-critique). Check the module/script with `node --check` on an extracted copy in clips-v2/.qa/KOM/.
Never launch a browser.
