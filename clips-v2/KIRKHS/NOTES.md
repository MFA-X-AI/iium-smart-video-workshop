# KIRKHS — Word habits

## Finding and source

In a controlled pilot, word habits alone let a simple classifier catch 18 of 20 GPT-4 essays without wrongly accusing any of the 20 human writers.

Read the supplied paper text, including its methods and limitations, and checked Figure 2. The four raw POS totals come from Figure 2 (printed p. 15); AUC 0.990 comes from Figure 3 (p. 15); the 20 human / 18 AI correct / two AI misses result comes from Figure 4 and Table IV (p. 16). These are corpus counts, not normalized rates or universal authorship markers. The study used one prompt and GPT-4; the clip's footnote preserves that scope. The four displayed features illustrate the lexical fingerprint, not the entire classifier input.

## Concepts considered before building

1. **Fingerprint becomes a type stack.** Exact POS words swell in proportion to counts, compress upward, then forty essay words settle into classification columns. Two red words cross into HUMAN. This makes the data and the imperfection visible in one shot; the main risk is crowding. Separate the header, token stack, and verdict vertically. Strong final thumbnail and a meaningful change in three seconds. Selected, as prescribed by the specific brief.
2. **Two overprinted manuscripts.** Repeated essay words resolve into contrasting lexical frequencies, with two red words left inside the human text. Visually rich, but the forty individual test cases and exact counts would be too difficult to read quickly. A good texture, a weaker explanation.
3. **A typographic sieve.** Feature words tighten their spacing as essays fall through; two red essays escape. A clear surprise, but a literal sieve would violate the words-only direction and imply a filtering mechanism that the paper did not demonstrate. Rejected.

## Implementation plan

Single 1920 × 1080 canvas, warm paper, ink Source Serif 4 and vermilion Inter, pinned Fontsource resources on jsDelivr with system fallbacks. Calibrate each face's capital H before applying one shared linear cap-height/count scale. Preserve that shared scale while compressing the fingerprint. Counts lock to the exact supplied integers by 0.45 seconds, independently of the word-growth animation. Forty persistent essay tokens represent twenty human and twenty AI test essays; color and face follow true authorship even when the destination is wrong. Deterministic drop timing, a tiny settled tracking drift, and one gentle tracking expansion/return on the two misses during 2.1–3.0 seconds. No browser, controls, attribution, or non-text foreground graphics.

## Intended frames

- **0.5 s:** The complete left-middle headline anchors two columns. The four feature words have grown almost to full size, with all eight counts already locked to the paper's exact values; AI nouns dominate and human pronouns are larger than AI pronouns.
- **1.5 s:** The fingerprint has compressed into the upper band. Essay words drop and stack from the bottom upward, including the two vermilion misses travelling toward HUMAN below the stacks; verdict counters follow landed tokens (five human and three AI landed at this instant).
- **2.5 s:** Twenty ink essays and two vermilion misses sit in HUMAN; eighteen vermilion essays sit in AI. Both stacks use the same bottom-aligned, four-column grid with 108 px column pitch and 34 px row pitch; AI has four complete rows below a left-aligned partial top row. The misses gently spread their tracking beside the single-line label “2 AI essays passed as human”. HUMAN reads “20 / 20”, “human essays recognised”, “none flagged as AI”; AI reads “18 / 20”, “AI essays caught”. The pilot/AUC footnote is readable, and the bottom-right reserved region remains empty.

## Validation

Implemented and checked with `node --check`. Both exact-version jsDelivr font URLs returned HTTP 200. Loaded those font files into an existing native Skia canvas renderer, ran the page script in a Node VM, and inspected rendered frames at 0.5, 1.5 and 2.5 seconds. No browser was launched.

The revised 91-frame sweep (0–3 seconds inclusive, at 30 fps), plus an explicit 0.45-second check, passes. It checks horizontal text bounds and the reserved x > 940 / y > 780 area, including glyph descenders; all eight exact counts from 0.45 seconds onward; at least 16 px of clear ink space between compressed feature rows, including their count labels; column-heading clearance; identical stack grids and row occupancy; and the final 20/18/2 split and revised verdict text. Repeated 2.5-second renders match byte-for-byte; frozen renders schedule no animation frames. The two missed tokens expand once during the hold and return to their original tracking at 3.0 seconds. Inspected the revised final native render. Native rendering is a layout check, not a browser compatibility test.

Revision QA code, rendered stills, contact sheet, and results JSON are in `clips-v2/KIRKHS/.qa/`; existing font copies in `clips-v2/.qa/KIRKHS/` were only read. All revision writes stayed inside `clips-v2/KIRKHS/`. The deliverable has no local asset dependency. `?t=0.5`, `?t=1.5`, and `?t=2.5` freeze after fonts are ready; without `t`, it plays once for three seconds and holds. Values outside that interval clamp to its endpoints. Font loading failures use the declared system fallbacks and recalibrate the common scale.

The compressed fingerprint uses a shared 0.72 multiplier and baselines 240, 302, 367, 411, leaving clear space below the headings and around the larger AI words. The initial feature scale, title, fonts, colors, and beat/landing timings are preserved. Counter blocks end above y=780.
