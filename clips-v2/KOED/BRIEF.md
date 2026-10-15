# KOED v2 proposal: Al-Farabi's music theory, mapped into Malaysian classrooms

Paper: Omar, Mamat (& Muhamad Sani), "The Contemporary Relevance of Al-Farabi's Musical Theory in
Interdisciplinary Studies and the Malaysian Educational Context", IIUM Journal of Educational Studies
14(1), 144-159 (2026). The PDF is 41 pages: PDF pages 1-16 are the journal article (image-only, read
from renders; printed pp. 144-159), pages 37-41 are the earlier colloquium version (pp. 479-482).
Page refs below are the journal's printed page numbers.

## What kind of result this is
A qualitative, literature-based analysis (p. 146, Methodology: close reading, thematic coding,
synthesis). No tables, no figures, no numbers. Its results are (a) the framework it identifies and
(b) the concrete applications it proposes for Malaysian schools.

## Headline result
Al-Farabi's music theory integrates **four dimensions: Cosmological, Psychological, Mathematical,
Pedagogical** (Findings, p. 147 "the paper delineates the cosmological, psychological, mathematical,
and pedagogical dimensions of his music theory"; sub-headings pp. 149-150), and the paper maps
them onto concrete uses in Malaysian schools (Discussion pp. 152-153, Conclusion pp. 154-155):

| Dimension (p. 149-150) | Proposed Malaysian application (paper's words) |
|---|---|
| Mathematical | lessons on "fractions, ratios, and proportions" through rhythm, tuning and scales; "numeracy" (p. 152, p. 155) |
| Psychological | music "to help students manage emotions and build confidence"; music therapy for students with stress and anxiety (p. 152, p. 155) |
| Pedagogical | "integrating theoretical knowledge with practical skills" (p. 150, p. 153); "balanced, ethical, and creative learners" (p. 155) |
| Cosmological (universal harmony) | universal principles "that transcend cultural boundaries" support multicultural music education with local traditions such as "gamelan and dikir barat" (p. 152, p. 155); the colloquium version states it directly: "his cosmological views aligned with Malaysia's multicultural ethos ... promoting unity through shared musical principles" (p. 480) |

Also stated (not on screen, context): no previous research has addressed the systematic incorporation
of Al-Farabi's music theory into Malaysian school curricula (p. 152).

## The data on screen
The four dimension names, exactly as the paper labels them, and four short application labels
quoted/condensed from the paper:
- MATHEMATICAL -> "Fractions, ratios & proportions"
- PSYCHOLOGICAL -> "Managing emotions, building confidence"
- PEDAGOGICAL -> "Theory integrated with practice"
- COSMOLOGICAL -> "Unity across cultures: gamelan, dikir barat"
No numbers exist in the results, so none are shown (no invented dates, ratios or counts).

## Staged in the subject, not as a chart
The subject is a manuscript: Al-Farabi's Kitab al-Musiqa al-Kabir is a medieval book. The folio
itself carries the finding. A central illuminated quatrefoil (four lobes, one per dimension, each in
its own pigment: lapis blue, vermilion, malachite green, burnished gold) is gilded in, and from each
lobe a gilt vine-scroll grows out across the margin into a small painted miniature of its Malaysian
classroom application. The "result" is the page's own structure: one theory, four dimensions, four
branches into today's school. Not a chart: it is a framework diagram rendered as manuscript
illumination, which is what a qualitative framework is.

Miniatures (artistic licence in the imagery, labels from the paper):
- Mathematical: a row of beats subdivided into halves and quarters, each segment gilded like a fraction bar.
- Psychological: a seated student; a jagged ink line beside them smooths into a calm wave.
- Pedagogical: an open book (theory) and a frame drum / rebab (practice) joined by one gold band.
- Cosmological: a row of gamelan bonang gongs and a line of seated dikir barat singers under a gold ring of stars.

## Storyboard (0-3 s)
- **0.5 s:** Warm parchment folio fills the frame. The quatrefoil's ink outline has drawn itself and
  gold leaf is flooding the lobes; the four dimension names are being lettered in gold/red rubric
  capitals: COSMOLOGICAL, PSYCHOLOGICAL, MATHEMATICAL, PEDAGOGICAL.
- **1.5 s:** Four gilt vines have grown out from the lobes to four margin roundels; the miniatures are
  washing in with pigment and their application labels are being written in. The mathematical beats
  have split into halves/quarters; the psychological line is smoothing.
- **2.5 s:** Everything complete and readable; a slow glint of light rakes across the gold. Title at
  right-middle.

## Title
"Al-Farabi's four musical dimensions, for Malaysian classrooms"

## Swap test
Another paper on Al-Farabi or on music education would not have these exact four dimensions each
branching to this paper's specific Malaysian proposals (fractions/ratios, emotions and confidence,
theory-with-practice, gamelan and dikir barat).

## Visual style and medium
Illuminated manuscript, 2D canvas/SVG: parchment with fibre texture and foxing, iron-gall ink
linework drawing itself with a quill-like variable stroke, raised burnished gold leaf (specular glint
that moves), mineral pigments laid in flat washes with slight granulation, rubricated capitals,
serif/uncial-flavoured lettering (a Google-free, system or embedded path font is fine; no external
font CDN). Motion language: things are drawn and gilded in, never slide or fade like UI. The
technique serves the paper because its source IS a book, and a four-part framework reads naturally
as an illuminated quatrefoil with its marginal branches.

---

# BUILD INSTRUCTIONS (for Astra)

Read clips/BRIEF_OPEN.md for the general rules (no UI chrome, title position, no attribution in the
clip, bottom-right 980x300 px kept clear, ?t= freeze), except where this brief overrides them. This
brief overrides BRIEF_OPEN's "three concepts" step: the concept above is decided; build it. Still
write a short NOTES.md (what you built, what's on screen at 0.5/1.5/2.5 s). Scratch files go in
clips-v2/.qa/KOED/ (not clips/.qa/).

## Hard constraints
- One self-contained `clips-v2/KOED/index.html`, 1920x1080 (scale to fit the viewport while keeping
  the 1920x1080 composition), auto-plays, `?t=<seconds>` freezes it deterministically at that time
  (it will be captured frame by frame at 30 fps for 3 s). Every animated element, including gold
  glints and any noise/texture, must be a pure function of t (seeded randomness only; no Math.random
  at draw time, no real-time clock when ?t is set).
- 2D: canvas and/or SVG. Only jsDelivr for any library or font (e.g. an @fontsource package from
  cdn.jsdelivr.net pinned to an exact version, such as Cinzel / IM Fell / EB Garamond). No other CDNs,
  no build step. If the font fails to load the layout must still work (check `document.fonts`).
- No citation/attribution in the clip. Keep the bottom-right 980x300 px (x > 940 and y > 780) free
  of the title, labels and key action; parchment texture and border ornament may continue there.
- Title at right-middle: "Al-Farabi's four musical dimensions, for Malaysian classrooms", in
  manuscript-style lettering (possibly with a gilded initial), with a subtle parchment-toned scrim.
  It must be fully readable by 2.0 s.
- HTML comment at the top: what comes from the paper (with the printed page refs above) vs artistic
  licence (the miniatures' imagery, colours, the beat subdivisions, the star ring).

## Exact on-screen text (spell it exactly like this; nothing else except the title)
Dimension labels (in the quatrefoil lobes or on ribbons attached to them):
  COSMOLOGICAL · PSYCHOLOGICAL · MATHEMATICAL · PEDAGOGICAL
Application labels (under/around each marginal miniature, paired as follows):
  MATHEMATICAL  -> "Fractions, ratios & proportions"
  PSYCHOLOGICAL -> "Managing emotions, building confidence"
  PEDAGOGICAL   -> "Theory integrated with practice"
  COSMOLOGICAL  -> "Unity across cultures: gamelan, dikir barat"
Optional small rubric caption near the quatrefoil: "Kitāb al-Mūsīqā al-Kabīr" (spell with those
macrons, or "Kitab al-Musiqa al-Kabir" without; nothing else). Do NOT write any Arabic script
(pseudo-Arabic would be noticed by the author). No numbers, dates or ratios as text.

## Readability
- Text size: dimension labels at least ~34 px cap height, application labels at least ~28 px,
  high contrast (dark iron-gall ink or deep red on light parchment; gold text only if outlined dark).
- The eye path must be obvious in 3 s: centre quatrefoil -> four vines -> four miniatures. Keep the
  scene full (the folio fills the frame, no small object in a big empty field) and the four
  miniatures big enough to read as pictures (roughly 260-340 px), each clearly depicting its label.
- Motion: the ink outline draws itself (0-0.6 s), gold floods the lobes and labels letter in
  (0.3-1.0 s), vines grow out (0.8-1.5 s), miniatures wash in with pigment and labels write in
  (1.1-2.0 s), then a raking glint across the gold and gentle living detail (the calming wave, a
  gong shimmer) until 3 s. At 2.0-3.0 s everything is complete and still readable.
- Craft bar: this is a showcase. Real-feeling parchment (fibre noise, uneven edges, foxing,
  vignetting), raised gold with a moving specular highlight and slight crackle, pigment
  granulation, quill-stroke width variation, a decorated border. Not flat vector clip-art.

Check your JS with `node --check` on an extracted copy in clips-v2/.qa/KOED/ if useful. Never launch
a browser.
