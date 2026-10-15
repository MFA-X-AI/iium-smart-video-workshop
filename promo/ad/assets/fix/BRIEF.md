# Brief: "AI fixes the poster on its own" screen (6 s), the closing shot of a workshop promo

`original.html` (in this folder, copied from promo/screen/index.html; do not edit it) is the fictional "Folio"
slide editor from the promo's opening: a lecturer nudges a figure on his conference poster and the layout breaks;
Ctrl+Z makes it worse (it ends in a wrecked layout at t ≈ 6.6 s). The promo now ENDS on the same laptop, in the same
office, with the chair EMPTY: the computer fixes the poster by itself, with a mouse cursor moving on its own. The
audience is ordinary lecturers: the wow is seeing the cursor move things around by itself, quickly and precisely.

Build `index.html` here: the same editor and poster (copy what you need from original.html, same look), 1920 × 1080,
6.0 s, with this new timeline:

1. **0.0–0.5 s:** the exact wrecked final state of original.html (same broken positions, same AutoFit-shrunk text,
   no toast). A small, elegant status chip appears top-right inside the app window: a pulsing dot + "AI agent ·
   fixing layout" (generic, no brand names).
2. **0.5–4.6 s: the cursor works by itself.** A LARGE cursor (about 2.5× a normal pointer, white with a dark outline
   and a soft glow, plus a short motion trail so it reads on a small laptop screen in the video) moves with fast,
   confident, eased motion (human-like arcs, quick accelerations, tiny settles; never robotic straight lines):
   - grabs the misplaced figure and drags it into its intended spot; pink/teal alignment guides flash and it snaps;
   - selects the jumped Results / protocol / Conclusion boxes one by one and drags each back into a clean grid
     (each snap shows smart guides and a tiny settle);
   - clicks the AutoFit-shrunk text box and the text returns to full size;
   - finally clicks the flat chart and it is replaced by a small live animated figure (e.g. a glass microsphere with a
     ring of light circling it, simple 2D canvas/SVG drawn in the poster's style), labelled "Animated figure".
   Show selection boxes and handles as the real editor would. Each action should be clearly visible and distinct;
   about 6 actions in 4 s.
3. **4.6–6.0 s:** the poster is clean, aligned and better than the original; the cursor drifts away to rest; the chip
   changes to a check mark + "Layout fixed"; the animated figure keeps animating. Nothing resets.

Technical: self-contained, no external requests (like original.html). Deterministic `?t=<seconds>` renders exactly
that frame and stops (motion is a pure function of t); set `document.title = "ready"` once drawn; without `?t`, play
and loop. It is captured in headless Chrome by stepping t by 1/30 s. **Do not launch any browser** (it crashes in your
sandbox); I will render frames and send them back. Write only in this folder. Write NOTES.md with the beats and
times. Before coding, write a short plan and self-critique in NOTES.md.
