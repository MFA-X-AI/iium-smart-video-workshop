# Astra brief: KOS v2 clip (WGM microsphere: 0 µm contact vs 10 µm gap, photoreal macro)

Read `clips/BRIEF_OPEN.md` for the general rules (no UI chrome, title position, no attribution in the
clip, bottom-right 980x300 px kept clear, `?t=` freeze), except where this brief overrides them.
**Overrides:** the story is NOT v1's heated bead with a colour shift. Do NOT modify anything in
`clips/`; you may read `clips/KOS/index.html` for its glass/lighting code, but the scene, story and
labels must be new. Scratch goes in `clips-v2/.qa/KOS/`.

The paper text available is the full abstract: `clips-v2/.qa/KOS/article.txt` (the PDF could not be
obtained). The full proposal is `clips-v2/KOS/PROPOSAL.md`; its content is repeated here.

## Headline result (what the clip must show)
A glass microsphere made with a fusion splicer, coupled to a tapered optical fibre. Two coupling gaps:
- **0 µm gap** (the microsphere touches the tapered fibre): **Q-factor 16,069.688** (finesse 42.792).
- **10 µm gap**: **Q-factor 659.997** (finesse 1.111).
Contact gives a far sharper, longer-lived resonance: light is stored much longer in the touching bead.

## Scene
- Two identical glass microspheres side by side, each on its own thin fibre stem coming down from
  above (splicer-made spheres sit on the end of a fibre), each above its OWN tapered fibre (two
  separate, parallel horizontal fibres; do NOT use one shared fibre, which would imply the beads are in
  series). The tapers thin to a waist under each bead. Fibre ends can dissolve into bokeh.
- **Left setup: the bead rests on the taper waist** (visible contact point, 0 µm).
- **Right setup: the bead hovers with a small but clearly visible gap** above the waist. Mark it with a
  fine, thin-line dimension bracket (two tiny ticks) and the label `10 µm gap`. Real sphere size is not
  given in the paper, so the gap drawn is an exaggerated but modest sliver (roughly 4-6 % of the bead
  diameter); it must be clearly readable as "not touching".
- Label under/beside the left contact point: `0 µm gap`.
- The same soft pulse of light (false colour, e.g. warm white-gold or cyan; pick one and use it for
  both) enters both fibres from the left at the same time.
- **Left bead (high Q):** light couples in and circulates as a thin whispering-gallery ring around the
  bead's equator (the ring lies in the plane containing the fibre direction, hugging the rim), visibly
  racing round and building brighter lap after lap until it is an intense, thin, sharply defined band
  that keeps ringing to the end, throwing faint caustics on the backdrop.
- **Right bead (low Q):** only a faint, broad, smeared glow appears inside the rim, never forms a crisp
  ring, and fades quickly (finesse ~1: the light barely completes a lap). Keep a weak residual so the
  bead is still visible, but it must be obviously dimmer.
- Text beside each bead (typeset as clean macro-film annotations: thin hairline leader, small caps or
  a refined sans, white at ~85 % opacity; not cards, not UI):
  - left: `0 µm gap` and `Q-factor 16,069.688`
  - right: `10 µm gap` and `Q-factor 659.997`
  These strings exactly, with the µ symbol, comma and three decimals as printed. No other numbers on
  screen at all (no nm, no pm/°C, no finesse, no "24×"). Do not count the Q numbers up; write them on
  (fade/typewriter) once the difference is visible.

## Timing
- 0.0-0.5 s: both setups readable, gap bracket and `0 µm gap` / `10 µm gap` labels on, pulse entering.
  Title fades in top-left.
- 0.5-1.5 s: left ring builds lap by lap; right glow appears dim and blurry and already fades.
  `Q-factor 16,069.688` writes on at ~1.3-1.5 s.
- ~1.7 s: `Q-factor 659.997` writes on. Finding fully readable by 2.0 s.
- 1.5-3.0 s: hold the comparison; left ring alive and bright, right dim. Slow gentle push-in only;
  no cut, no orbit.

## Layout (1920x1080)
- Title top-left (x < 900, y < 230).
- Left setup centred near x ≈ 620, right setup near x ≈ 1300; beads around y ≈ 420-520, fibres around
  y ≈ 560-600. All labels must be above y = 770.
- **The bottom-right 980x300 px (x > 940, y > 780) must contain no text and no key action**; only
  out-of-focus fibre, backdrop and bokeh may pass there.

## Title
**Touching the fibre beats a 10 µm gap** (top-left, elegant thin serif or refined sans, subtle dark
gradient scrim). No eyebrow, no citation.

## Style: photoreal macro cinematography
Glass that reads as real: refraction (MeshPhysicalMaterial transmission or a custom refraction shader),
Fresnel rim, a small specular highlight, the stem and fibre as thin glass cylinders; dark studio
backdrop; caustics from the bright ring; shallow depth of field (real DOF pass or a convincing bokeh
treatment) with out-of-focus fibre segments and a few dust motes as bokeh discs; subtle film grain and
a hint of chromatic aberration. Both beads in the focal plane. Bloom on the light only.

## Honesty (HTML comment at the top)
From the paper (abstract, Results in Optics 21, 100928, 2025): fusion-splicer microsphere coupled to
a tapered fibre; 0 µm (contact) vs 10 µm gap; Q-factor 16,069.688 vs 659.997 (finesse 42.792 vs
1.111). Artistic licence: sphere and fibre sizes and proportions (not given), gap drawn exaggerated,
side-by-side staging (the configurations were tested separately), visible false-colour light (the real
light is ~1543 nm infrared), slowed light and lap build-up as an illustration of stored energy, camera,
bokeh, caustics.

## Hard constraints
- One self-contained `clips-v2/KOS/index.html`, 1920x1080, auto-plays, `?t=<seconds>` freezes it
  deterministically (captured frame by frame at 30 fps for 3 s). Any noise/grain/dust must be seeded.
  Under `?t=`, render the frame correctly on the first frames (no accumulation that depends on real
  time or frame count).
- three.js from jsDelivr via an import map, pinned exact version (e.g. 0.169.0). No other CDNs, no
  build step.
- Write only inside `clips-v2/KOS/` and `clips-v2/.qa/`. Never launch a browser. Syntax-check the
  module script with `node --check` on an extracted copy; wrap numbers interpolated into GLSL in
  parentheses.
- Write `clips-v2/KOS/NOTES.md`: what comes from the paper, the layout check against the bottom-right
  zone, and what you expect at 0.5, 1.5 and 2.5 s.
