# Brief: one clip for the IIUM research promo

## Who watches this and why
IIUM is running a workshop that shows its lecturers what state-of-the-art AI can build from
their own research. The promo video is a fast montage of 2-3 second clips, one per paper. The
audience is lecturers from every faculty: a law lecturer watching the pharmacy clip is not an
expert. Each clip has to land with them in 3 seconds: "I get what that research is about, it
looks amazing, and AI made it? I want that for my paper."

## What went wrong before (don't repeat it)
Earlier attempts were rejected. Learn from why:
- **Dashboard or landing-page UI** (cards, toggles, sliders, cursors, legends): reads as AI slop.
- **Flat diagrams**, or a small event lost in a big empty scene.
- **A beautiful object with a slow camera drift and nothing happening**, e.g. a close-up of a fibre
  with a cutaway, or a glowing sphere. Pretty, but nobody cares: it's one frame, there's no story,
  and a non-expert can't tell what it is or why it matters.

## Think before you build (this is the main job)
Write `NOTES.md` first, then build. In it:
1. **The "so what":** read the paper. In one plain sentence a non-expert would care about, what
   did this research find or make, and why does it matter to people?
2. **Three different concepts** for the 3-second shot. Each must show a visible change: a cause and
   its effect, a before and after, a transformation, something that happens because of what the
   paper found. The motion itself must carry the meaning, not a camera move around a static object.
3. **Critique each concept honestly** as the lecturer watching the montage: in 3 seconds, do I
   understand what I'm seeing? Is there a moment that makes me go "whoa"? Is it true to the paper?
   Would this still work as a thumbnail and as a 3-second cut? Pick the strongest, and say why.
4. Then build it, and afterwards read your own code as a critic: what will actually be on screen at
   0.5 s, 1.5 s and 2.5 s? If any of those frames is boring or unreadable, fix it.

**This is a showcase of what AI can do. Build to impress:** ambitious, cinematic, technically
striking. Mediocre or safe is a failure here.

**Not everything needs to be 3D.** Pick the medium that best suits the style and the story. A 2D
animation (canvas or SVG) is often the better choice, e.g. a hand-drawn sketch that draws itself,
ink on paper, an illuminated manuscript, a map, or kinetic typography. Use 3D (Three.js) when depth,
volume, light or a camera move really adds something. Either way the craft bar is the same.

## On-screen text
Designed like a documentary title card: confident typography, plenty of breathing room, readable
when the video is scaled down, never covering the key action. Use a subtle gradient scrim behind the
text so it stays readable over any background.
- **Placement varies between clips** so the montage doesn't feel templated. Use the title position
  given for your clip in the table below, and compose the shot around it: leave the negative space
  there and keep the key action clear of the text.
- **Do NOT put the attribution/citation in the clip.** It is added later in the video edit, in the
  bottom-right corner (about the bottom-right 980x300 px at 1920x1080). Keep that corner free of the
  title and of the key action, though scene imagery can continue behind it.
- **Each clip has its own visual style** (the montage shows off range, so no two clips should look
  alike). Commit fully to the style given for your clip: palette, materials, lighting, camera
  language, typography of the title. The style must still serve the paper's story.

  | Clip | Title position | Visual style |
  |---|---|---|
  | KOS | top-left (done) | dark macro lab, glowing optics (done) |
  | KOP | bottom-left, low third | clean bright medical illustration on white |
  | KOE | top-right | engineering blueprint / CAD: linework on a blueprint grid that comes alive as a 3D render |
  | KAHS | right-middle | soft-focus microscopy |
  | KICT | centred, top | point clouds and wireframes, scanner/AR look |
  | KAED | top-left | architectural model / golden-hour drone flyover |
  | KOM | left-middle | X-ray / radiograph |
  | KOD | top-right | translucent dental CT, cool clinical |
  | KON | centred, top | breathing, airy, soft pastel anatomy |
  | KENMS | top-left, small | data-art infographic, extruded map |
  | KOED | right-middle | warm illuminated manuscript, gold leaf |
  | KSTCL | bottom-left | hand-drawn cartographic map |
  | AIKOL | centred, top | restrained editorial, ink and paper |
  | KIRKHS | left-middle | typographic, words as particles |
- **A title** (at most ~8 words, plain language) that says what the viewer is seeing and why it
  matters. It must fit this paper, e.g. "Light trapped in a glass bead feels heat". It must not be a
  generic tagline. Style its typography to match the clip's visual style.

## Hard constraints
- One self-contained `index.html` in the output folder. For 3D: Three.js and its addons as ES
  modules from jsDelivr via an import map, pinned to an exact version. For 2D: plain canvas or SVG
  (a small pinned library from jsDelivr is fine if it really helps). No build step, no other CDNs. It
  must run smoothly on a normal laptop at 1920x1080.
- Auto-plays on load. `?t=<seconds>` in the URL freezes the scene at that moment (used for stills).
- Scientifically honest: the mechanism must be right (an expert in the field will also watch), and
  no invented numbers or results. Numbers that come directly from the paper are allowed. Put an HTML
  comment at the top: what comes from the paper vs artistic licence.
- Don't launch any browser (Playwright, Puppeteer, headless Chrome): it crashes in this sandbox.
  Check your module script with `node --check`. Be careful with GLSL built from JS template strings:
  a negative number after a minus sign produces `--`, which breaks the shader. Wrap interpolated
  numbers in parentheses.
- Scratch files go in `clips/.qa/`. Extract PDF text with `uv run --no-project --with pypdf python`.
  If the PDF is missing or isn't the paper, use the `summary` in `papers.json`, and say so in NOTES.md.

## This run
The paper and output folder are given in the command that launched you.
