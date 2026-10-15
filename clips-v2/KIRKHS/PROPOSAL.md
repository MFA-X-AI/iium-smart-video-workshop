# KIRKHS v2 proposal: "Word habits caught 18 of 20 AI essays"

Paper: Sumbula, Sulaiman & Ariffin, "Detecting AI-Generated Essays with Lexical Stylometric Features
using Machine Learning", IJPCC 12(2), 2026, pp. 11-18. Page numbers below are the printed journal pages.

## Headline result
Using only lexical/stylometric features (vocabulary richness, POS frequencies, function/content words,
word n-grams, TF-IDF), the best model, **Logistic Regression**, on the held-out test set of **40
essays (20 human, 20 GPT-4)**:
- recognised **all 20 human essays** as human (Human accuracy/recall 1, Table IV p. 16; Fig. 4 p. 16),
  so **no human essay was wrongly flagged as AI** (AI precision 1);
- caught **18 of the 20 AI essays**; **2 AI essays were misclassified as human** (AI accuracy 0.9);
- AUC **0.990** (Fig. 3, p. 15). (SVM 0.975, Decision Tree 0.900; the abstract's "85-90% for AI, 90-100%
  for human" is the range across the three models: SVM AI 0.85, DT 0.9 both classes.)

What the lexical signal looks like (Fig. 2, p. 15, "Top 15 POS Tags", tag counts across the essays):
AI essays use more (AI vs human) **nouns 15,900 vs 10,672**, **punctuation 8,003 vs 4,970**, **adjectives 6,484 vs
4,107**; human essays use more (human vs AI) **pronouns 3,834 vs 2,300**, **determiners 4,426 vs 3,444**,
**auxiliary verbs 3,679 vs 2,657**.
Honesty notes: these are raw totals; the AI corpus has more tags overall (sum of the 15 tags: AI 63,615,
human 53,853), so the pronoun reversal (human more despite fewer words) is the cleanest contrast. The
authors say these are not universal markers (p. 15). The study is a controlled pilot: 200 essays, one
prompt, GPT-4 only, no paraphrasing tested (pp. 13, 17).

## The data on screen (words are the only visual element)
1. **The fingerprint (0-1.1 s):** two columns of words, HUMAN (ink) and AI (vermilion). The feature
   names are set as words whose **font size is proportional to their count** in that column: "nouns"
   grows to 15,900-size in the AI column vs 10,672-size in the human column; "pronouns" is the reverse
   (3,834 human vs 2,300 AI); "punctuation" 4,970 vs 8,003; "adjectives" 4,107 vs 6,484. The counts tick
   up beside each word. The type itself is the measurement.
2. **The verdict (1.0-2.1 s):** 40 test-essay tokens (the word "essay", 20 in ink, 20 in vermilion)
   drop in and are sorted into the columns: all 20 ink essays land HUMAN; 18 vermilion land AI; **2
   vermilion essays land in the HUMAN column** and stay visibly vermilion, marked "2 slipped through".
   Counters resolve: **"20 / 20 human essays: none flagged"**, **"18 / 20 AI essays caught"**.
3. **Hold (2.1-3 s):** everything readable; small line "Logistic Regression · AUC 0.990 · pilot test:
   40 held-out essays, one prompt, GPT-4".

## Storyboard
- **0.5 s:** title already set left-middle. Two column heads HUMAN / AI; "nouns" swelling larger on
  the AI side, "pronouns" larger on the human side, counts ticking.
- **1.5 s:** the fingerprint words have settled (smaller, as a header band); essay tokens raining and
  stacking into the two columns; AI counter mid-count, 2 red tokens landing on the human side.
- **2.5 s:** final: 20 ink tokens + 2 red in HUMAN, 18 red in AI; "20 / 20 human essays: none
  flagged", "18 / 20 AI essays caught", "2 slipped through", footnote line.

## Title
"Word habits caught 18 of 20 AI essays" (left-middle).

## Swap test
Only this paper has nouns 15,900 vs 10,672, pronouns 3,834 vs 2,300 and a 20/20 + 18/20 split with two
AI essays passing as human; another AI-detection paper would have different words, counts and errors.

## Visual style and medium
Kinetic typography, 2D, words only: no icons, bars, axes or shapes (a hairline rule under column heads
at most). Warm off-white paper, black ink for the human voice, one vermilion for AI. Human column set in
a humanist serif, AI column in a tight grotesk, so the typeface itself carries authorship. Motion: words
scale with a snappy ease-out and slight overshoot, counters tick, essay tokens fall with weight and
stack like set type. The technique fits because the paper's evidence IS words: its features are word
counts, so type size can be the data.
