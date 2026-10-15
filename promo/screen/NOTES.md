# Screen sequence

Open `index.html` directly at **1920 × 1080**, with browser zoom at 100%. Everything is inline: SVG artwork, application chrome, fonts from the system, and JavaScript. There are no external requests or dependencies.

With `?t=<seconds>`, the page renders a single deterministic frame. Values are clamped to 0–7; `?t=7` holds the ending rather than resetting. Without `t`, playback loops every 7 seconds. The artwork scales uniformly to other viewport sizes, with letterboxing where needed.

## Beats

| Time | Action |
| --- | --- |
| 0.00–0.18 | Clean poster; cursor at rest in the workspace. |
| 0.18–0.93 | Cursor approaches the glass-bead diagram. |
| 0.98 | Figure selected; bounding box, eight resize handles and rotation handle appear. |
| 1.25–1.65 | Figure and cursor move just **6 pixels** to the right. |
| 1.65–2.12 | Hold the nudge. Layout is still intact at the 1.9 s live-action cut. |
| 2.12 | Methods text wraps into a narrow, taller block; figure drops below it. |
| 2.46 | Results jumps to the top of the right column; chart drops down and Conclusion is pushed below it. |
| 2.72 | Caption loses its anchor and jumps back to its original position. |
| 3.02 | Measurement protocol jumps down; text spills below the poster. |
| 3.32 | Conclusion moves right, with most of its column beyond the page edge. |
| 3.60 | Figure drops again, covering the right-hand portion of the protocol text box. |
| 3.80–5.22 | Fully wrecked layout holds. Cursor remains frozen at the end of the original drag. |
| 5.22 | Keyboard Undo: figure snaps back, covering the extended Methods text. Results jumps diagonally into the lower middle; the protocol box jumps up and right underneath it. |
| 5.22–6.38 | Small **Undo / Ctrl+Z** toast. |
| 6.38–7.00 | Unobstructed final wreck holds. |

All layout failures are instantaneous steps; only the cursor approach and the six-pixel drag interpolate. The sidebar thumbnail intentionally retains the last intact page preview.

## Suggested stills

- `index.html?t=0.1` — clean, unselected poster.
- `index.html?t=1.1` — selected diagram, before the drag.
- `index.html?t=1.9` — tiny nudge completed; cut to hand on mouse.
- `index.html?t=2.8` — displaced figure and clearly abandoned caption.
- `index.html?t=3.9` — full cascade; cut to the lecturer's reaction.
- `index.html?t=5.4` — failed undo, with the keyboard shortcut toast.
- `index.html?t=6.7` — final damage, without the toast.

For capture, step `t = frame / 30` for frames 0–209. The SVG exposes `data-time` and `data-state` for capture diagnostics.

The editor is a fictional application called **Folio**, with original geometric toolbar glyphs and a slate/sage palette. The poster uses generic authors, plausible explanatory copy, and an explicitly labelled illustrative chart; the plotted values are not presented as experimental measurements from an IIUM paper. The figure is deliberately flat slide artwork.

## Validation

The inline script was extracted and checked using `node --check`. A browser-free Node harness also checks all 211 timestamped states from 0 to 7 seconds, replay determinism, the six-pixel nudge, each layout jump, Undo, and loop reset. No browser was launched; final rendered-frame review remains to be done in the capture environment.
