# KSTCL — Satun's dialect lives on across the sea

## Finding and source

The Satun Malay dialect crosses a national border: the four featured Satun word forms were recorded in all nine listed Langkawi villages, connecting their speech to Che Bilang and Tan Yong Poo in Satun.

Built from the supplied, already-decided antique-cartography proposal. Read BRIEF.md, PROPOSAL.md and clips/BRIEF_OPEN.md; inspected the supplied page renders of Rajah 1 (printed p.173), Rajah 2 (p.174) and Jadual 1 (p.183). The clip selects the four fully attested columns specified in the brief, not every lexical variant in the table. It makes no age-group claim and draws no isogloss or migration route.

## What was built

Self-contained SVG scene at 1920 × 1080, with the provided GADM geometry inlined verbatim. Equirectangular projection, longitude scaled by cos(6.5°), no rotation or geographic distortion. Ink traces real outlines; pigment blooms in the five specified Satun tambons and then at the nine supplied Langkawi points. Paper grain, foxing, coastal waterlines, short coastal hatching, a compass rose and folded word banners establish the antique material treatment. The western sea holds the word banners and bottom-left title. The lower-right attribution rectangle stays free of labels and key action.

The mainland coastline is a precomputed boolean union of the provided polygons, using polygon-clipping 0.15.7 during preparation only. This removes competing internal tambon/district lines without moving the coast. Selected tambon edges remain visible through the pigment. A fine dashed land border uses nearby matching Thai and Malaysian polygon segments; unmatched stretches are left undrawn. No sea border is added. The page needs neither this preparation library nor a build step to run.

Fonts and all geography are embedded. IM Fell English normal/italic and Charis SIL subsets came from pinned jsDelivr Fontsource packages at 5.1.1. Inspection found that the Charis subsets omit the combining circumflex U+0302 and modifier h U+02B0. To guarantee the required IPA, the page also embeds complete Charis SIL from jsDelivr's Google Fonts mirror pinned to commit `dfad63d07a2f149aa33dc3a74016328551f77499`; the complete face renders all IPA at 48 px. The font licences are included in the HTML source comment. There are no runtime network requests.

Animation runs once over three seconds and holds its completed frame. `?t=<seconds>` evaluates the same deterministic timeline after fonts are ready. Only seeded randomness is used for decoration. The village coordinates and decorative ink/wash effects are illustrative, as disclosed in the HTML source comment.

The reviewed revision strengthens the same-colour connection between the shores. Each Langkawi village now has an irregular vermilion wash with a nominal 31 px radius (approximately 29–33.5 px around its edge), the same 0.60 fill opacity and 0.20 soft bleed as the Satun areas, and the shared granulating pigment filter. All wash layers are clipped to the actual Langkawi land rings, including the smaller islands; all ink dots and labels are drawn above every wash. Overlapping nearby blooms naturally darken the pigment.

The finding note is now in clean sea above Langkawi's north coast, set in two 30 px lines at `(618, 472)` and `(618, 508)`. The cartouche reads “Satun Malay dialect”, “Satun Thai dialect”, and “Langkawi Malay dialect”, with a sepia star for the third row and no acronyms. The tambon label is “Tammalang”. Kg. Lubok Cempedak and Pulau Tuba have repositioned labels and leaders terminating at their near top-left edges, entirely left of x=940. Word reveals start at 1.50, 1.64, 1.78 and 1.92 s; the last finishes at 2.245 s. The all-nine-villages line is fully visible at 2.23 s.

## Verification and frame critique

No browser was launched. For this revision the module was extracted to `clips-v2/KSTCL/.review/scene.mjs` and passed `node --check`. A small Node DOM shim executes the real module and timeline; standalone resvg 2.6.2 rasterises its SVG, using the actual embedded font outlines. These are non-browser reference renders, not browser screenshots. Existing renderer/font assets in the QA directory were read only; every revision write is inside `clips-v2/KSTCL/`.

- **0.5 s:** Coast ink is developing, the Satun areas already carry distinct vermilion/verdigris pigment, and the title and expanded three-row cartouche are appearing. This opening is intentionally a setup: the cross-sea finding is not yet complete. Administrative linework remains suppressed so the dialect colours lead.
- **1.5 s:** Substantial vermilion washes now visibly repeat the Satun pigment on Langkawi; the close central villages form a darker cluster while their individual ink dots remain visible. Northern and central names are legible while the last southern washes arrive. The note sits in the sea, clear of Tarutao and surrounding labels. The first word banner begins its reveal at this instant. Small names are supporting evidence, not text the viewer must read exhaustively during the cut. The last village label is fully visible before 1.9 s.
- **2.3 / 2.5 s:** All nine washes, four fully lettered word banners, and “each heard in all 9 villages” are visible by 2.3 s. The stronger patches make the shared vermilion much easier to recognise at small scale. The southern leaders terminate above the left edges of their labels without crossing any text. The final frame holds through 3 s. All nine names remain at 24 px and the IPA at 48 px; names will still be secondary detail in a scaled-down montage.

Revision checks cover all 91 time samples from 0 through 3 s at 30 fps, finite animation attributes, repeatable frozen frames, independence from evaluation order, exact IPA codepoints, nine villages, matched wash opacity, land clipping, ink-over-wash ordering, and all four complete word forms plus the explanatory line by 2.3 s. Font-based text bounds show no text overlaps. A 2 px sampling grid across both finding-note bounds, including a 3 px margin, confirms they are over sea. Both southern leaders were sampled against all text bounds and checked for near top-left endpoints. Text, southern leaders and bloom extents stay outside the reserved rectangle (`x >= 940`, `y >= 780`). Pulau Tuba remains at approximately `(828.38, 900.70)`; geography and IPA are unchanged. The only displayed numeric value is 9.

Current reference frames: `clips-v2/KSTCL/.review/frame-0.5.png`, `frame-1.5.png`, `frame-2.3.png`, `frame-2.5.png`; current measurements and checker: `.review/checks.json` and `.review/check.cjs`. The old QA build template belongs to the previous revision and must not be used to overwrite the revised `index.html`.

## Limits

Browser-specific font shaping, SVG filter performance and live playback were not tested because the brief forbids launching a browser. Static rendering, font glyph coverage, source inspection and direct timeline execution were used instead. Village locations retain the supplied approximate georeferencing. Bloom order, irregular village washes, pigmentation and engraving are visual staging, not historical chronology, measured dialect extents or topographic measurements. No invented isogloss, age-group claim, additional research number or attribution is visible in the clip.
