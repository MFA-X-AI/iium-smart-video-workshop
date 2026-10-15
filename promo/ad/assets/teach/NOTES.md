# Concept

An ordinary Folio lecture slide opens inside a restrained grey editor. The camera approaches its blue diagram. The actual slide is a plane in the 3D scene: it tips into a luminous glass wave tank while its sine line expands across the water surface. Paper becomes the tank floor, a brass paddle begins driving waves, and a coral buoy provides a clear focal point. A quiet wavelength control then makes the causal change visible: shorter waves travel more slowly.

# Self-critique before coding

The risky part is continuity: an unrelated tank fading over a slide would weaken the story. Keep the same slide plane, diagram coordinates, camera, and surface through the transformation. Glass and water can also become unreadable in software rendering; use restrained transparent layers, a shaded water cutaway, reflective edge rails, and visible particle paths. Keep the interface legible but subordinate to the simulation. Depth of field must stay subtle enough to preserve the wave profile and tracers. No browser will be launched; visual validation will depend on frames supplied by the user.

# Implemented beats

- **0.00–1.30 s:** Folio's toolbar, slide thumbnails, and status bar surround a plain 16:9 lecture slide. The title, three requested bullets, seabed, and dimension arrows are drawn into an inline canvas texture. The blue sine line is already geometry in the same scene. A small camera push approaches the diagram.
- **1.30–2.70 s:** The thick blue sine lifts along the page normal during 1.30–1.95 s, leaving a faint temporary trace on the page. Starting at 1.68 s, a sweep spreads its profile across the tank width, progressing along the length as well. Six temporary cross-section lines make the extrusion legible. Water fills upward beneath the lifted surface during 1.75–2.68 s. The glass grows from the plinth and the sheet tilts and contracts into its floor, within one continuous camera move. The surface reaches the exact simulation coordinates by 2.70 s.
- **2.70–3.60 s:** The 6 m tank runs with a 2 m wavelength, a brass paddle, coral buoy, and twelve particle tracers at three depths. The readouts fade in by 3.13 s; the cursor approaches the slider.
- **3.60–4.80 s:** The cursor drags from 2 m to 1 m using smoothstep interpolation. Surface wavelength, dispersion, orbit sizes, and numerical readouts update together.
- **4.80–6.50 s:** Shorter waves continue running. The cursor withdraws and “Shorter waves. Slower travel.” appears. The exact `?t=6.5` frame stays at the end state; it does not wrap. Only unrestricted real-time playback loops every 6.5 s, as requested.

# Physics

All distances are metres and time is seconds. Constants: `g = 9.81`, `h = 1.0`, surface amplitude `a = 0.08`.

```
s = clamp((t - 3.6) / 1.2, 0, 1)
lambda(t) = 2 - s*s*(3 - 2*s)
k = 2*pi / lambda
omega = sqrt(g*k*tanh(k*h))
c = omega/k
phase(t) = integral(omega(tau), tau = 0..t)
theta(x,t) = k(t)*(x + 3) - phase(t)
eta(x,t) = a*cos(theta)
```

Phase is integrated once into a fixed 1200 Hz trapezoidal lookup table, with linear interpolation for arbitrary timestamps. Beyond 6.5 s it continues analytically at the final angular frequency. Rendering a timestamp never depends on previous renders. The changing wavelength is an illustrative smooth interpolation between regular-wave states, not a transient fluid solver.

For a particle whose mean depth below the surface is `d`, the requested deep-water orbit model uses `z = -d`, radius `r = a*exp(k*z)`, horizontal displacement `-r*sin(theta)`, and vertical displacement `r*cos(theta)`. Tracers use depths 0.08, 0.24, and 0.42 m in four vertical columns; rings display their actual unexaggerated radii. This is the brief's circular deep-water approximation; exact finite-depth particle trajectories would be elliptical. Dispersion itself uses the requested finite-depth `tanh(k*h)` relation.

| Wavelength | Computed speed | Display |
| --- | --- | --- |
| 2.00 m | 1.76379678369507 m/s | 1.76 m/s |
| 1.50 m | 1.52999610850199 m/s | 1.53 m/s |
| 1.00 m | 1.24951954851636 m/s | 1.25 m/s |

# Rendering and pinned dependencies

- `three@0.169.0`, including `EffectComposer`, `RenderPass`, `UnrealBloomPass`, `ShaderPass`, and `OutputPass`, from `https://cdn.jsdelivr.net/npm/three@0.169.0/` via an import map.
- Inter regular and medium WOFF2 files from `@fontsource/inter@5.1.0`, also on jsDelivr. Font loads and `document.fonts.ready` finish before the first render.
- Everything else is inline in `index.html`: CSS, SVG cursor/icons, canvas slide art, mesh geometry, shaders, and a procedural PMREM studio environment. No image assets, build tools, or unpinned dependencies.
- Fixed 1920 × 1080 render buffer, device pixel ratio 1, antialiasing, and `preserveDrawingBuffer: true`. CSS fits the frame to other viewport sizes without changing capture resolution.
- Dielectric PBR water with `ior = 1.333`, zero metalness, roughness 0.19, clearcoat 0.45, surface opacity 0.90, and bounded warm crest glints. Round 3 removes screen-space transmission, using alpha transparency and depth colour instead. Surface shading follows the same phase as the geometry: lighter crests and dark blue-teal troughs. The cutaway uses exponential depth attenuation and approximately 0.54–0.71 opacity at ordinary viewing angles. Animated caustics remain subtle on a dark matte tank floor. Optical shading is illustrative, not volumetric ray tracing.
- Warm key light, cool rim light, environment reflections, a 1024² soft shadow map, light bloom, and vignette. A 960 × 540 geometry depth pass drives a five-tap depth-of-field filter focused at the buoy's camera-space distance, with blur capped at 1.35 pixels.
- Surface resolution is 180 × 24 segments; the scene uses modest mesh counts. No temporal accumulation, random scene state, or browser launches.

# Capture and checks

Open `index.html?t=0`, `?t=1.9`, `?t=2.7`, `?t=4.2`, or `?t=6.5` through your own capture setup. Any finite nonnegative timestamp is supported; negative or invalid values resolve to zero. The page draws once and sets `document.title = "ready"` and `data-ready="true"` on the root element. Without `t`, it plays and loops. `window.renderAt(t)`, `window.frameState`, and `window.wavePhysics` are available for inspection.

Completed without a browser:

- Parsed the final ES module with Node's `vm.SourceTextModule` and checked the import-map JSON and DOM ID references.
- Verified endpoint and midpoint wavelength/speed readouts, phase monotonicity across all 196 capture timestamps at 30 fps, and orbit-radius decay with depth.
- Compared the interpolated phase derivative with the dispersion frequency over the shot: maximum sampled discrepancy was approximately 0.000773 rad/s.
- Confirmed no `Math.random()` or `Date.now()` calls in scene code.

Round 1 CDN HTTP probes failed with sandbox connection errors. The user's supplied Round 1 and Round 2 SwiftShader montages confirm that the dependencies and both prior implementations rendered. Round 2's captures exposed excessive glare and poor surface contrast, addressed in Round 3 below. No browser has been launched here; Round 3 appearance and shader execution still require user-supplied captures.

# Round 2 review and changes

The supplied eight-frame montage showed that the original slide was too sparse at video size, the narrow line's transition was hard to follow, the tank occupied too little of the image, and the water obscured the particle rings. The revision concentrates on those specific issues:

- Slide title increased from 64 to 128 canvas pixels; bullets from 43 to 84 pixels, in near-black. The long deep-water bullet wraps onto a second line. Diagram amplitude increased from 72 to 170 pixels, with larger extent, 76-pixel dimension labels, and a blue mesh ribbon about 6 pixels thick in the rendered opening shot. Mesh geometry avoids unsupported wide WebGL lines.
- The lift, sweep, and rising fill have separate overlapping time curves. The printed profile, moving front edge, swept skin, and volume sides all derive from the same pure `surfacePoint` mapping. A grounded trace briefly separates the original diagram from its lifted counterpart. There is no replacement tank shot or camera cut.
- Final camera is lower and closer. Projecting a conservative tank bounding box gives 85.16% frame width at 2.70 s and 86.51% at 6.50 s. Its vertical bounds stay approximately 209–820 px, leaving the top area for editorial captions and the bottom clear for readouts. The camera keeps drifting throughout the simulation; the existing subtle buoy-focused depth of field remains.
- Water is less saturated and substantially more transparent. A lighter floor receives moving caustics, and a warm light opposite the camera provides crest reflections. The body has lower opacity near the surface and stronger colour absorption with depth.
- Four tracer columns now use thin annular meshes, short trailing arcs, and amber dots sized to avoid covering the smaller rings. At 2 m wavelength the three physical radii are 0.06222, 0.03764, and 0.02138 m; at 1 m they are 0.04839, 0.01771, and 0.00571 m. No motion magnification was applied.
- Removed the entire upper-left title/subtitle block and upper-right formula block, including their CSS. “Shorter waves. Slower travel.” now sits immediately to the right of the bottom readouts. The illustration label and deterministic capture contract remain.

Round 2 checks completed without a browser: ES-module parsing, import-map JSON, DOM references, removal of upper captions, endpoint/midpoint physics readouts, and exact final surface coordinates. A 1 ms sweep across the entire shot at 15 representative surface positions found finite positions throughout and a maximum adjacent displacement of 0.005435 m, with no position jump at transition boundaries. Phase-derivative error remains approximately 0.000773 rad/s. Camera framing was checked mathematically. The new transmission pass and shader appearance have not been rendered locally.

# Round 3 review and changes

The Round 2 montage approves the larger slide and closer camera but shows a broad white reflection washing across the studio and readouts. The 100 m reflective studio floor, added low-angle sun, bright environment strips, pale floor, and heavily transmissive water made the wave shape difficult to see.

- Replaced the reflective studio ground with an unlit `#06090f` matte plane and a separate black contact-shadow receiver. Removed the extra sun light entirely. A direction vector remains only for small glints in the water shader; it cannot illuminate the backdrop. Reduced environment-strip size/intensity, kept a controlled warm key and cool rim, and reduced bloom from 0.16 to 0.06 with a higher threshold.
- Restored visible teal water with darker troughs and lighter crests, driven by the exact same `k*x - phase` used by the geometry. Disabled the 0.78 transmission pass. The 0.90-alpha surface and partially transparent side volume retain some visibility into the tank. Depth is measured downward from the actual wave surface, with progressively darker teal-blue colour. The front wave-profile ribbon is slightly thicker and more visible after the transformation; amplitude remains exactly 0.08 m.
- Tank floor changed to dark, rough blue-grey with very low environment response and much weaker caustics. The slide-to-plinth darkening accelerates only after 2.0 s and finishes at 2.4 s, removing the bright residual paper plane. The slide texture, text, diagram, and pre-2.0 s paper shading are preserved. Exposure also follows its previous curve through 2.0 s, then settles at 1.02 for the studio.
- Added a dark bottom scrim behind the DOM readouts, increased the lambda value to 40 px and wave-speed value to 66 px, and brightened labels, units, slider track, and handle. The readouts remain outside WebGL postprocessing. The top area stays clear for the user's captions.
- Brightened the tracer rings from 0.53 to 0.72 opacity, trails from 0.85 to 0.96, and dot/ring colours. Ring stroke width increased slightly; orbit radius, particle displacement, column locations, and depth decay are unchanged.

Validation without a browser: final module syntax, import map, DOM references, and all 196 capture timestamps passed their numerical checks. SHA-256 comparisons before and after editing match exactly for the slide-texture function, Folio editor markup, complete physics/surface-mapping block, and camera-motion code. The readouts still compute 1.76 m/s at 2 m and 1.25 m/s at 1 m. No timing, phase integration, capture contract, camera framing, or geometry-amplitude changes were made. The revised shaders and visual contrast await another user-rendered capture.
