# Plan — before implementation

- Preserve the original editor chrome and use its actual final poster DOM as the opening state. Measure native text fragments at runtime so broken column flow matches the source on the capture machine.
- Animate six deliberate cursor actions: relocate figure, restore Results, restore protocol text, restore Conclusion, restore readable text, then activate a live microsphere illustration.
- Keep position, selection, guides, cursor trail, chip pulse and optical animation entirely derived from time. Support frozen `?t=` frames and a six-second preview loop.
- Verify syntax, timing and self-contained assets without starting a browser. Leave original.html untouched.

# Self-critique — before implementation

- The brief describes shrunken text, but original.html explicitly uses `const scale = 1` and disables its AutoFit badge. Exact visual continuity takes precedence: preserve the source's actual font size initially, then visibly increase body text in the text-restoration action.
- The source's floating figure has returned to its original coordinates, while text has stayed reflowed. Move it to a deliberate new position in the repaired Methods column so the first action remains visible and useful.
- Six actions in four seconds can become unreadable. Reserve short pickup and snap holds, make the pointer large, and keep feedback confined to the active object.
- Native multi-column text can fragment across columns. Preserve those fragments for the broken state and transition them into stable independent text boxes during their own repair action.
- Browser rendering is explicitly prohibited. Visual verification must be done by the user's frame renderer; static checks cannot establish exact appearance.

# Implemented beats

| Time (seconds) | On-screen action |
| --- | --- |
| 0.00–0.50 | Source's actual final broken layout, including native column spill and full original 13.4 px text; no undo toast. Status chip fades in and pulses. |
| 0.50–1.36 | Cursor picks up the floating figure at 0.64; drags along an arc from 0.73; snaps at 1.22 into the fourth column's lower figure slot. Its caption follows. |
| 1.36–2.14 | Picks up Results at 1.53; drags from 1.60; snaps at 2.02 to the third column's top. |
| 2.14–2.89 | Picks up protocol text at 2.31; drags from 2.39; snaps at 2.77 into the Methods column, with a Measurement protocol label. |
| 2.89–3.59 | Picks up Conclusion at 3.06; drags from 3.13; snaps at 3.49 into the fourth column above the figure. References travel with it. |
| 3.59–4.10 | Clicks the Introduction text box at 3.76. Restores larger readable body type from 3.80–4.04, fitting each column independently up to 15.4 px. |
| 4.10–4.60 | Clicks the flat chart at 4.27. It becomes an SVG glass microsphere with circulating light from 4.30–4.56, labelled Animated figure. |
| 4.60–6.00 | Check mark and Layout fixed. Cursor drifts to rest by 5.25. Optical animation continues; repaired objects stay fixed. |

# Delivery and capture

- `index.html` is self-contained: all editor chrome, poster text, SVG artwork and logic are inline. Native local fonts only; no external requests.
- Canvas: 1920 × 1080. Pointer: 80 × 80 px SVG with a dark outline, soft glow and three short time-offset trail samples.
- `index.html?t=0`, `?t=1.22`, `?t=2.77`, `?t=4.04`, `?t=4.6`, and `?t=6` are useful review frames. Any numeric `t` is clamped to the six-second sequence. Frozen capture schedules no animation frame loop.
- `document.title` becomes `ready` after local fonts settle and the requested frame is drawn. Without `?t`, preview loops every six seconds.
- `window.renderFrame(seconds)` supports seeking in any order. `window.REPAIR_TIMES` exposes timing; `window.REPAIR_LAYOUT` exposes final font sizes and measured available heights for inspection by the capture harness.
- All original poster wording is preserved. The figure's repaired slot is at the bottom of column four, with its caption, giving it a large, visible first drag and freeing the Methods text.
- The opening deliberately matches the actual source instead of inventing an AutoFit shrink that original.html does not apply. The text click subsequently enlarges type within the repaired columns.

# Verification

- Embedded JavaScript syntax checked with Node.
- Static checks found no external asset dependencies, network APIs, random frame inputs, CSS transitions/animations or independent SVG animation clocks.
- Sampled all 181 cursor frames from 0 through 6 seconds at 30 fps using synthetic layout metrics: finite, deterministic and inside the frame. Checked every action boundary for cursor continuity and checked repaired object positions remain constant throughout the final hold.
- No browser was launched. Native font wrapping, actual DOM fragment measurements, visual appearance and playback performance remain for the user's renderer to verify.
- original.html was not edited. SHA-256: `58DDB9E4339DFA71515B536B2123BC63BC2762FF21E9275EB341DFA43FB6C469`.
