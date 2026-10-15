# Brief: end-card title reveal (6 s), for a 60 s workshop promo

The promo advertises a workshop at IIUM (International Islamic University Malaysia) where lecturers turn
their own research papers into animations and interactive visualizations with AI. The last 8 s of the ad is
the end card. You build its centrepiece: a **cinematic particle title reveal**, as one self-contained
`index.html` in this folder.

## What it shows
- Background: near-black deep navy `#05070c`, with subtle depth (faint volumetric haze / dust, a soft vignette).
- 0.0–2.6 s: thousands of luminous particles (warm white, with a few accents in teal `#3fd0c9` and amber `#ffb547`)
  stream in from depth and from the frame edges in curved, flowing paths (curl-noise flow, not straight lines),
  and **converge into the wordmark "Research in Motion"**. Particles are sampled from the rasterised text, so
  the final shape reads exactly as the text. Motion eases out; the last ones settle with a tiny overshoot.
- 2.6–3.2 s: the particles resolve into crisp, solid type (crossfade particles → real text so it is sharp at 1080p),
  and a thin bright light sweep glides across the letters left to right. A soft bloom glow behind.
- 3.2–4.2 s: below it, a subtitle fades/slides up letter by letter, smaller, tracked out, uppercase:
  `AI VISUALIZATION WORKSHOP FOR IIUM LECTURERS`
- 4.2–6.0 s: hold. Slow camera push-in (about 4 %) and the remaining stray particles drift gently. Nothing resets.
- Wordmark font: an elegant high-contrast serif (e.g. "Instrument Serif" or "Fraunces" from Google Fonts / jsDelivr
  fontsource, pinned version). Subtitle: a clean geometric sans (e.g. "Inter" or "Manrope"). Wordmark about 60 % of
  frame width, centred, slightly above centre (leave the lower third empty: the edit adds a line there).

## Technical
- 1920 × 1080. Three.js from a CDN pinned to an exact version (jsDelivr or unpkg), plus postprocessing bloom.
  Everything else inline.
- **Deterministic time control:** `?t=<seconds>` renders exactly that frame and stops (seeded RNG, no
  `Math.random()`, no `Date.now()` in the scene state; simulate particle positions as a pure function of t, or
  re-simulate from 0 with fixed steps). Wait for fonts to load before rasterising the text
  (`document.fonts.ready`), then render. Set `document.title = "ready"` after the `?t=` frame is drawn.
  Without `?t`, play in real time and loop every 6 s.
- It will be captured by stepping `t` by 1/30 s in headless Chrome with SwiftShader, so it must render correctly
  without a GPU and with `preserveDrawingBuffer: true`. Keep particle count reasonable (≤ 40k).
- **Do not launch any browser** (headless or otherwise) — it crashes in your sandbox. I will render and check
  frames myself and send them back to you.
- Write only inside this folder. Also write `NOTES.md`: the beats with timings and the pinned versions.

## Quality bar
This closes an ad meant to wow an audience of academics. It should feel like a premium film title sequence
(think Apple keynote / high-end motion design): restrained palette, elegant motion, no clip-art, no UI chrome,
no lens-flare cliché, no rainbow colours. Before coding, write a short concept with a self-critique in NOTES.md.
