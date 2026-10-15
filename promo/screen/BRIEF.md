# Brief: "the old way" screen sequence for the IIUM workshop promo

## Context
A promo video for a workshop teaching IIUM lecturers to make research animations with AI. It
opens on "the old way": a tired lecturer at 2 a.m. fighting a slide editor to lay out a
conference poster. This file is the **screen footage** for that moment. It gets captured frame by
frame and intercut with live-action shots of her hand on the mouse and her reaction.

The joke everyone recognises: you nudge one picture a few pixels and the whole layout falls apart.
It has to be instantly legible, funny and relatable to any academic who has done this, and it
should feel real (a plausible desktop app), not cartoonish.

## Deliverable
`promo/screen/index.html`: one self-contained page, no build step, no external requests (system
fonts are fine). Viewport 1920x1080. `?t=<seconds>` must render the exact state at that time,
deterministically (no Math.random without a seed, no Date.now, no CSS transitions or animations
driven by the clock). Without `?t`, it plays in real time and loops. Frames will be captured by
stepping `t` in 1/30 s increments.

## What's on screen
- A **generic** slide/poster editor window: title bar, a ribbon-style toolbar, a thumbnail strip,
  zoom and status bar. It must NOT copy PowerPoint's (or any real product's) branding, logo, icons
  or exact colours. Use a neutral made-up app. The file name in the title bar is
  `poster_FINAL_final_v7` (that's the only joke text; keep everything else straight).
- The canvas shows a portrait **research poster** at a zoom where it fills most of the height:
  a title band ("Whispering-Gallery Microresonators for High-Sensitivity Temperature Sensing"), an
  author line (generic names, "International Islamic University Malaysia"), and three columns:
  Introduction, Methods, Results, Conclusion, with plausible body text (short real sentences
  about the topic, not lorem ipsum), a small results chart, references, and in the middle column
  **Fig. 1**: a flat, clip-art style diagram of a grey circle (the glass bead) touching a straight
  line (the fibre), with two arrows and small labels. It should look like typical made-in-slides
  clip art: flat, a bit clumsy, honest. This figure is deliberately the "before" of a later shot
  where the same bead appears as a stunning 3D render.
- A realistic mouse cursor.

## The beat (about 7 seconds)
0.0-1.2 s: calm. The cursor glides to Fig. 1 and selects it (selection handles appear).
1.2-2.0 s: a tiny, careful drag, only a few pixels to the right. Hold a beat: nothing happens.
2.0-3.8 s: the cascade, fast, each change a hard jump (the way real editors reflow, not smooth):
  - the text around the figure reflows and the figure drops below it,
  - the Results heading jumps to the top of the next column, pushing the chart down,
  - the Fig. 1 caption detaches and stays behind, floating on its own,
  - a text box overflows and spills past the bottom edge of the poster,
  - the Conclusion column slides partly off the page,
  - one layer ends up behind another (a text box half-covered by the figure).
3.8-5.0 s: the cursor freezes. Beat.
5.0-7.0 s: Undo is pressed (a small "Undo" toast, Ctrl+Z), and it makes things worse: one element
  snaps back, but two others jump somewhere new. End on the wrecked poster.

The live-action cuts land at about 1.9 s (her hand nudging the mouse) and at about 3.9 s (her
reaction), so make those two moments (the nudge and the full wreck) especially clear.

## Quality bar
- Crisp and believable: realistic UI density, subtle shadows, a proper selection box, text that
  looks like real typeset body text.
- The chaos must be readable in a 2-second glance: a few big, clear failures beat many tiny ones.
- Don't launch any browser (it crashes in this sandbox). Check the inline script with
  `node --check`, and keep the code simple. We will render your frames and send them back to you.
- When done, write `promo/screen/NOTES.md`: the beat timings and the best `?t` values for stills.
