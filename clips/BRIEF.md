# Brief: cinematic 3D clips for the IIUM "AI animation for academia" promo video

## What this is for
A promo video for a workshop that teaches IIUM lecturers to turn their research into
animations with AI. Each clip is screen-recorded for 2-3 seconds and cut into a fast
montage. The viewer's reaction should be: "that's real research, it looks stunning,
and AI built it in minutes."

## What we do NOT want (the previous attempt was rejected as slop)
- No product-demo or landing-page UI: no headlines, taglines, cards, toggles, sliders,
  legends, drawn cursors, eyebrow labels, "interactive research" badges.
- No flat schematic diagrams, no line-art on a grid, no 2D fallback as the real look.
- No generic template reused across subjects. Each clip must look designed for its topic.

## What we DO want
- **The visualization is the whole frame.** Full-bleed Three.js scene, 1920x1080, nothing else on
  screen except one small, quiet corner block (bottom-left), readable when the video is scaled down:
  - line 1: kulliyyah code and name, e.g. "KOE · Kulliyyah of Engineering"
  - line 2: the paper attribution, built from `papers.json`: first author's name as written before
    the comma, "et al." if there are more authors, then year and journal name without volume or
    pages, e.g. "Md Kassim et al. (2026) · IIUM Engineering Journal"
  - optional line 3: the paper title, shortened to ~60 characters with an ellipsis if needed.
  Plain text over a subtle gradient scrim; no cards, badges or icons.
- **Cinematic 3D:** physically based materials (MeshStandardMaterial/MeshPhysicalMaterial),
  real lighting with soft shadows, an environment map (RoomEnvironment + PMREMGenerator),
  ACES filmic tone mapping, and post-processing where it helps (UnrealBloom, subtle depth of field,
  vignette). A slow, deliberate camera move (dolly, orbit or push-in) through the shot.
- **Physically convincing motion** that shows the paper's mechanism, as a simulation rather than
  a diagram. For structures: members bend, concrete cracks, debris falls under gravity. For fluids:
  real-looking water or particles. For biology: organic shapes, soft translucency, cells and tissue.
- **The 3-second shot must have a clear beat:** a setup, then the event, then the consequence.
  Loop seamlessly, or hold on the final frame.
- Colour and lighting mood chosen per topic, not one shared palette.

## Technical
- One self-contained `clips/<KULLIYYAH>/index.html`. three.js from jsDelivr as an ES module via an
  import map, pinned to an exact version (e.g. `https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.js`
  and `.../examples/jsm/` for addons). No build step, no other CDNs.
- Must run at 60fps on a normal laptop GPU. Keep geometry sensible; use instancing for many particles.
- Auto-plays on load. `?t=1.5` in the URL freezes the scene at that time in seconds (for stills).
- Do NOT launch any browser (no Playwright/Puppeteer/headless Chrome): it crashes in this sandbox.
  Check syntax with `node --check` on the extracted module script, and review the code carefully.
- Scratch files go in `clips/.qa/`.

## Accuracy
- The mechanism must be qualitatively right; an expert in the field will watch it. Read the paper
  PDF in `../papers/<KULLIYYAH>/TOP_*.pdf` if you can extract its text
  (e.g. `uv run --no-project --with pypdf python`). Otherwise use `summary` and `animation_idea`
  in `../papers.json`.
- No numbers or results on screen.
- At the top of the file, add an HTML comment: what comes from the paper vs what is artistic licence.

## This run
Build ONLY `KOE`, replacing the existing `clips/KOE/index.html`: progressive collapse of a
reinforced-concrete frame after a column is lost. Suggested beat: the camera drifts around a
multi-storey concrete frame (real-looking concrete, rebar visible where it breaks); a ground-floor
column is knocked out (impact, dust, debris); the beams above sag and crack while the rest of the
frame holds, with the load redistributing (e.g. a glowing stress colour flowing through the beams).
Then write `clips/KOE/NOTES.md` (3-5 lines) and stop.
