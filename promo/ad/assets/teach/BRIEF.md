# Brief: "from slide to simulation" shot (6.5 s), for a 60 s workshop promo

The promo advertises a workshop where IIUM (International Islamic University Malaysia) lecturers use AI to turn
their material into animations and interactive visualizations. This shot is the **teaching** beat: a lecturer's flat,
ordinary PowerPoint-style slide becomes a real, physically correct 3D simulation students can play with.
Build it as one self-contained `index.html` in this folder.

## The story in 6.5 s (cause → effect must be obvious to a non-physicist)
1. **0.0–1.3 s: the boring slide.** A believable 16:9 lecture slide shown inside a generic slide editor (a fictional app
   called "Folio": thin toolbar with simple original geometric icons, a thumbnail strip on the left; no Microsoft
   branding). Slide content: title "Lecture 7 · Water waves", three short bullets ("Wavelength λ", "Wave speed c",
   "Deep water: c = √(gλ / 2π)"), and on the right a flat, stiff textbook diagram: a single blue sine line over a
   grey seabed line, with arrow labels λ and A. Plain default-template look (white, Calibri-like sans). Camera slowly
   pushes in toward the diagram.
2. **1.3–2.7 s: it comes alive.** The editor chrome slides away and fades. The slide plane tilts back in perspective
   to become the floor of a glass wave tank; the 2D sine line peels off the page, gains depth and becomes the surface
   of real water that fills the tank. Smooth, continuous, one camera move (no cuts). This transformation is the hero
   moment: it must look magical but physically coherent.
3. **2.7–6.5 s: the simulation.** A rectangular glass wave tank (about 6 m long, 1 m water depth, cutaway side so the
   water body is visible), a wave paddle at the left end driving regular waves, a small floating buoy that bobs.
   Show **water-particle orbits**: a few small tracer dots under the surface moving in circles that shrink with
   depth (the classic deep-water result). A minimal elegant on-screen control: a "Wavelength" slider that is dragged
   (a subtle cursor) from 2.0 m to 1.0 m between 3.6 and 4.8 s. The waves visibly shorten AND slow down, and the
   readouts update live: `λ = 2.00 m → 1.00 m`, `c = 1.77 m/s → 1.25 m/s`.
   Physics must be correct: use the linear dispersion relation ω² = g k tanh(k h) with g = 9.81, h = 1.0, k = 2π/λ,
   c = ω/k (at λ = 2 m, h = 1 m this gives ≈ 1.76 m/s; print the value your formula computes, to 2 decimals, not the
   numbers above if they differ). Orbit radius decays as e^{k z}. Amplitude ≈ 0.08 m. When λ changes, change it smoothly
   (no phase popping: integrate phase over time).
   A small label in a corner: "Illustration · linear wave theory". End on the waves running, nothing resets.

## Look
- Full-bleed cinematic 3D (Three.js, PBR, soft shadows, environment lighting, a water material with fresnel, specular
  highlights and subtle refraction tint, glass with reflections), postprocessing (bloom light, vignette, subtle depth of
  field focused on the buoy). Palette: cool teal water, warm key light, dark studio background `#06090f`.
- The slide in beat 1 should look deliberately flat and dull; the contrast with beat 3 is the point.
- Typography for readouts: a clean sans (Inter / Manrope via a pinned CDN font), small and elegant.

## Technical
- 1920 × 1080. Three.js and addons from a CDN pinned to an exact version (jsDelivr / unpkg). Everything else inline.
- **Deterministic time control:** `?t=<seconds>` renders exactly that frame and stops (all motion is a pure function
  of t, seeded RNG, no `Math.random()` / `Date.now()` in scene state). Wait for fonts (`document.fonts.ready`) then
  render; set `document.title = "ready"` once the `?t=` frame is drawn. Without `?t`, play in real time and loop.
- Captured by stepping `t` by 1/30 s in headless Chrome with SwiftShader (no GPU), so it must render correctly in
  software WebGL with `preserveDrawingBuffer: true`; keep geometry and passes reasonable.
- **Do not launch any browser** (headless or otherwise): it crashes in your sandbox. I will render frames myself and
  send them back to you.
- Write only inside this folder. Before coding, write a short concept and a self-critique in `NOTES.md`; after,
  add the beats with timings, the physics formulas used, the computed c values and the pinned versions.
