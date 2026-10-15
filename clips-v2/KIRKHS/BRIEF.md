# Astra brief: KIRKHS v2 clip (AI-essay detection by lexical features, kinetic typography)

Read `clips/BRIEF_OPEN.md` for the general rules (no UI chrome, title position, no attribution in the
clip, bottom-right 980x300 px kept clear, `?t=` freeze), except where this brief overrides them.
**Overrides:** style is **kinetic typography: words are the only visual element** (2D). The counters,
labels and footnote line below are required content, not UI chrome. Title position: **left-middle**.
Do NOT modify anything in `clips/` and do not reuse v1 (`clips/KIRKHS/`), which sorted generic words
into HUMAN/AI letterforms without the paper's data. Full proposal: `clips-v2/KIRKHS/PROPOSAL.md`.
Paper text: `clips-v2/.qa/KIRKHS/paper.txt`; figures: `clips-v2/.qa/KIRKHS/fig2.png` (Fig. 2 POS counts),
`p6.png` (Fig. 4 LR confusion matrix, Table IV).

## Headline result (what the clip must show)
Only lexical features (vocabulary richness, POS frequencies, function/content words, n-grams, TF-IDF).
Best model, Logistic Regression, on a held-out test set of 40 essays (20 human-written, 20 GPT-4):
- **all 20 human essays recognised as human; none wrongly flagged as AI** (Fig. 4, Table IV, p. 16);
- **18 of 20 AI essays caught; 2 AI essays misclassified as human**;
- **AUC 0.990** (Fig. 3, p. 15).

The lexical fingerprint (Fig. 2, p. 15, POS tag counts, exact values):
| word on screen | HUMAN | AI |
|---|---|---|
| nouns | 10,672 | 15,900 |
| punctuation | 4,970 | 8,003 |
| adjectives | 4,107 | 6,484 |
| pronouns | 3,834 | 2,300 |
Use exactly these four, with thousands separators as shown. Font size of each feature word is
proportional to its count (scale by count, i.e. linear cap-height, and use the SAME scale for both
columns, so "nouns" in AI is 1.49x the height of "nouns" in HUMAN, and "pronouns" in HUMAN is 1.67x
the AI one). Nothing else is claimed about these counts: do not write "AI uses X% more" etc.

## Layout (1920x1080)
- Title left-middle, e.g. x 90-640, vertically centred ~y 400-620: **"Word habits caught 18 of 20 AI
  essays"** (exact wording), large, in the AI/human type pairing described below, on the paper
  background (a subtle paper-tone gradient scrim if anything overlaps).
- Two columns to the right of the title: **HUMAN** (ink, around x 760-1180) and **AI** (vermilion,
  around x 1260-1800). Column heads at top (~y 110). All key action within y 90-770 so the
  **bottom-right 980x300 (x>940, y>780) stays empty**. The footnote line may sit bottom-left
  (x<900, y 900-1000).

## Beats (3.0 s total)
1. **0.0-1.1 s, the fingerprint.** Title types/settles in during 0-0.4 s. Column heads appear. The four
   feature words set themselves in each column, scaling from 0 up to their count-proportional size with a
   snappy ease-out (slight overshoot), counts ticking up next to each word to the exact values above.
   The contrast must be obvious: "nouns" huge in AI, "pronouns" bigger in HUMAN.
2. **1.0-2.1 s, the verdict.** The fingerprint compresses upward into a header band (still readable).
   40 test-essay tokens (the word "essay", small caps): 20 in ink, 20 in vermilion, drop in from above
   and stack like set type into the columns. All 20 ink tokens land in HUMAN. 18 vermilion land in AI.
   **2 vermilion tokens land in the HUMAN column and stay vermilion** (they are the misses), with a small
   vermilion label "2 slipped through". Counters under each column tick and lock:
   HUMAN: **"20 / 20 human essays — none flagged as AI"**; AI: **"18 / 20 AI essays caught"**.
   The finding must be readable by ~2.0 s.
3. **2.1-3.0 s, hold.** All settled, a subtle breathing/kerning drift only. Footnote line (small, ink
   60%): **"Logistic Regression · AUC 0.990 · pilot test: 40 held-out essays, one prompt, GPT-4"**.

## Style
Warm off-white paper (#f3eee4-ish) with very faint grain, black ink for HUMAN, one vermilion
(#e0442b-ish) for AI. HUMAN set in a humanist serif (e.g. Fraunces or Source Serif), AI in a tight
grotesk (e.g. Inter or Space Grotesk): the typeface carries authorship. Fonts from jsDelivr
(`@fontsource/...` pinned exact version) with system fallbacks; wait for `document.fonts.ready` before
drawing so `?t=` stills use the right faces. Words are the ONLY elements: no bars, axes, icons, boxes,
arrows or circles (a hairline rule under the column heads is the maximum). Motion: type-driven
(scale, tracking, weight, drop-and-stack), deterministic (seeded, no Math.random without seed).

## Hard constraints
- One self-contained `clips-v2/KIRKHS/index.html`, 1920x1080, auto-plays, `?t=<seconds>` freezes it
  deterministically (captured frame by frame at 30 fps for 3 s). 2D: DOM/SVG/canvas; only pinned
  jsDelivr resources, no other CDNs, no build step.
- No citation/attribution in the clip. Keep the bottom-right 980x300 px free of the title and key action.
- HTML comment at the top: what comes from the paper (with page refs, as above) vs artistic licence
  (typefaces, colours, token animation, the order tokens land).
- Every on-screen number must match the tables above exactly. Spell-check all text.
- Write NOTES.md (brief: what's on screen at 0.5/1.5/2.5 s). Never launch a browser; check JS with
  `node --check` if you extract it.
