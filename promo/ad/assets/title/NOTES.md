# Generative AI for Academia: From Ideas to Creation — end-card title

## Concept (before implementation)

A field of luminous fragments finds its way into two centered lines of serif type: “Generative AI for Academia” in warm white, then “From Ideas to Creation” in sky-blue italic. Broad, curved streams enter from beyond the frame and from distant space. The energy becomes quiet as both lines become solid; a narrow light pass reveals the letterforms, then the tracked workshop-series subtitle arrives below. Deep navy, restrained atmospheric light, and occasional teal and amber particles suggest ideas becoming visible. The notes for Rounds 2–4 below describe earlier titles; Round 5 is the current composition.

## Self-critique

The spectacle must not overpower the words. Excessive bloom would fill the serif counters; too much turbulence would resemble an explosion. Keep the glow soft, the final text sharp, and the trajectories coherent. The two-line block needs tight spacing without crowding the italic descenders or the subtitle. Use the real italic face, preserve blue during particle settling, and position the glow beneath the entire block. The result needs visual review from captured frames; no browser will be launched here.

## Intended beats

- **0.0–2.6 s:** seeded luminous particles follow curved, spatial paths into raster-sampled letterforms, decelerating with a small settling overshoot.
- **2.6–3.2 s:** particles crossfade into real text; a slim light sweep travels left to right over the title.
- **3.2–4.2 s:** the uppercase subtitle fades and rises character by character.
- **4.2–6.0 s:** quiet hold, drifting dust, and a 4% camera push. Fixed-time captures never wrap; real-time playback loops every six seconds.

## Implementation and pinned dependencies

- `index.html` is the complete asset; all layout, scene code, shaders, and SVG type are inline. Only the following pinned CDN dependencies require network access.
- **Three.js 0.170.0**, jsDelivr: `three@0.170.0/build/three.module.js` and matching `examples/jsm/` addons. Postprocessing uses `EffectComposer`, `RenderPass`, `UnrealBloomPass`, and `OutputPass`, with ACES tone mapping.
- **Instrument Serif, normal 400**, `@fontsource/instrument-serif@5.2.5/files/instrument-serif-latin-400-normal.woff2`, jsDelivr.
- **Instrument Serif, italic 400**, `@fontsource/instrument-serif@5.2.5/files/instrument-serif-latin-400-italic.woff2`, jsDelivr.
- **Inter, normal 400**, `@fontsource/inter@5.2.5/files/inter-latin-400-normal.woff2`, jsDelivr.
- Internal drawing size is always **1920 × 1080**, pixel ratio 1, with `preserveDrawingBuffer: true`. The composition scales to fit other viewports without changing the render resolution or cropping.
- **38,220 points:** 12,500 text particles, 25,000 short exposure echoes, and 720 ambient dust particles. Text particles stop rendering when the crossfade completes.
- Seed: `0x52494D31`. Particle motion is evaluated directly in the vertex shader: curved spatial Bezier paths plus two octaves of an analytic curl field. There is no frame-to-frame simulation, random timer, or accumulated delta.
- All three font faces load explicitly before `document.fonts.ready` and text rasterization. Each title line's mask and final SVG text share the font size, horizontal center, font style, and alphabetic baseline. The longer line spans 64% of the frame before the hold push. Baselines are one font-size apart; the combined ink bounds are centered at y=442.8 (41% of the frame height). The glow sits 26px below the block's ink bounds, with the subtitle baseline another 72px below.
- Crisp SVG text sits above the WebGL bloom pass; a blurred duplicate supplies a restrained title glow. A 240px gradient band, clipped to the same glyphs, provides the light sweep with a separate blurred halo and an independent opacity envelope.

## Capture and playback

Serve this folder over HTTP, then capture `index.html?t=0`, `index.html?t=2.6`, `index.html?t=3.2`, etc. Set the capture viewport to 1920 × 1080 and device scale factor to 1. For a 30 fps, six-second clip, capture frames 0 through 179 at `t=frame/30`. `?t=6` is also available as the final held pose.

Wait for `document.title === "ready"` before each screenshot. Fixed-time mode waits for dependencies and fonts, draws the requested frame, flushes the GL buffer, and signals readiness after a further animation frame. It schedules no playback loop. Negative times clamp to 0; times beyond 6 clamp to the final hold. Non-finite values and initialization failures set the title to `error`, log the cause, and place its message in `#frame.dataset.error`.

Without `?t`, playback begins after loading and repeats every six seconds. This is the only mode that wraps. The helper `window.renderAt(seconds)` can also seek the loaded scene synchronously; `window.sceneInfo` describes the dimensions, duration, seed, and point budget.

## Validation

- JavaScript syntax and import-map JSON checked with Node, without a browser.
- All four primary CDN assets and all four directly imported postprocessing addons returned HTTP 200 across the validation rounds.
- The actual timeline function was executed with lightweight DOM/render stubs for all 181 inclusive 30 fps samples; forward and reverse seeks produced identical state. Beat boundaries, the completed subtitle, the 4% push, and fixed-time clamping passed.
- Seeded generator repeatability and bounds checked over 100,000 draws. No `Math.random()` or `Date.now()` is used in scene code.
- No browser was launched. WebGL shader compilation, rendered appearance, font alignment, and SwiftShader capture performance still need review in the user's capture environment. These checks validate code and timeline state, not rendered pixels.

## Round 2 — stronger flight and resolve

The first captured sheet showed that distant particles became subpixel and the scattered paths read as a dim cloud. This revision gives the flight a visible structure while retaining the clean end frame.

- Eight shared curved centerlines form ribbons: four enter from the edges and four approach through depth. A narrow seeded cross-section and two curl-field octaves add local swirling motion. Less front-loaded easing keeps particles traveling through 2.2 s; all primary points settle by 2.57 s.
- Flight point sizes range from 3.2 to 12px before projection, with a screen-space floor that preserves distant points. Seeded emission varies independently of size. A bright core, wide soft halo, stronger additive bloom, and two short echoes make trajectories visible. Size and emission taper toward the glyphs to preserve counters.
- Exactly 15% of title particles use accent colors: 8% teal `#3fd0c9`, 7% amber `#ffb547`. Accent emission is slightly lower than ivory to retain color in the highlights.
- Wordmark width is explicitly 1190.4px (62% of 1920), using the same measured font metrics for particles and SVG. The final 4% push brings it to 64.48% of the frame.
- The sweep spans 2.60–3.20 s, independently of the text opacity. Its white core is broader, its clipped light receives a separate 9px blur, and the title glow briefly swells. The base type is slightly dimmer during the sweep to make the moving illumination legible, then returns to its original warm ivory.
- Subtitle: Inter 34px, 10.2px tracking (0.3em), warm white `#f3eee3` at 75% group opacity. Characters still reveal individually from 3.20 s and finish by 4.17 s.
- A 1360px soft horizontal light under the title, centered at y=550, blooms during the resolve and settles to a faint hold. It combines a broad elliptical haze and a softened narrow center, with no flare spikes.
- The point count remains below 40,000. Pinned dependencies, font loading, fixed-time capture, six-second duration, final hold, and normal playback looping are unchanged.

Round 2 validation (without a browser):

- Saved JavaScript syntax, import-map JSON, SVG XML, and SVG references pass.
- All 181 inclusive 30 fps samples produce identical timeline state when sought forward and backward. Sweep/glow envelopes, subtitle completion, final hold, 4% push, and fixed-time clamping pass.
- The actual seeded geometry-generation code produces 38,220 total points, exactly 15% title accents, finite attributes, and primary arrival times no later than 2.57 s.
- A CPU transcription of trajectory/projection checks confirms thousands of on-screen primary particles at the review timestamps and exact convergence by 2.6 s using representative target coordinates. This validates the trajectory math, not the appearance.
- No browser was launched. Rendered glow intensity, legibility, shader execution, and SwiftShader performance still require the user's next captured frames.

## Round 3 — controlled flight highlights

The second captured sheet shows excessive accumulated light and broad bloom around the particle ribbons. The previous sprite profile was already radial and zero at its boundary, so the rectangular patches cannot be attributed to an opaque sprite quad from the source alone. Strong accumulated emission and the broad bloom footprint are addressed together; another capture is needed to confirm the artifact is gone.

- During flight, bloom strength is **0.195**, one quarter of Round 2's 0.78. The threshold rises from **0.38 to 1.10** and the radius falls from **0.68 to 0.25** to keep a local halo instead of a wide fog.
- Primary particle emission is reduced and capped, while retaining seeded brightness variation. The two trail samples use 0.18 and 0.0324 intensity factors during flight instead of 0.33 and 0.1089, reducing light accumulation without changing their paths or sizes.
- The flight sprite uses `exp(-10 * r²) * (1 - r²)²` inside its unit circle and discards fragments at or outside that circle. Its value and slope reach zero at the edge. The broad halo pedestal is removed from the flight profile; postprocessing supplies the gentle halo.
- The same exact **15% accent particles** remain: 8% teal `#3fd0c9`, 7% amber `#ffb547`. Their flight shading increases saturation in linear colour, reduces mixing toward ivory, and caps emission to protect chroma through ACES. No seeds, particle targets, trajectories, sizes, or accent assignments change.
- All corrections use a deterministic envelope: full through **2.05 s**, smoothly removed from **2.05–2.40 s**, exactly zero at and after **2.40 s**. At that point the original particle colour, alpha, sprite profile, and bloom settings are used. This preserves the approved title, sweep, horizontal glow, subtitle, dust, and push-in from 2.4 s onward.
- Dependencies, 38,220-point count, six-second timing, `?t=` capture, readiness signalling, and real-time looping remain unchanged.

Round 3 validation (without a browser):

- Saved JavaScript syntax and import-map JSON pass. All 181 inclusive 30 fps timeline samples produce identical state when sought forward and backward; fixed-time clamping also passes.
- All 109 samples from 2.4 through 6.0 s match the Round 2 scene/DOM state, including bloom settings. Additional times between samples also match. Source comparison confirms that the original late particle shader calculations, geometry generation, SVG, dust, atmosphere, and capture logic remain unchanged.
- Flight bloom values at 0.6, 1.2, 1.8, and 2.05 s are checked against strength 0.195, radius 0.25, and threshold 1.10. The correction envelope reaches exactly zero at 2.4 s.
- A numerical check of the radial profile confirms rotational symmetry, finite nonnegative values, monotonically decreasing intensity, and exactly zero coverage at and outside the circle boundary.
- No browser was launched. These are source and numerical checks, not pixel comparisons; the next SwiftShader captures must confirm highlight balance, accent visibility, and removal of the rectangular glow artifact.

## Round 4 — official workshop name

- **Line 1:** `Smart Video Creation`, Instrument Serif normal 400, warm white `#f3eee3`.
- **Line 2:** `with Generative AI`, Instrument Serif italic 400, luminous sky blue `#4fb3ff`. The actual pinned italic face is loaded; no synthetic slant is used.
- Both lines use the same measured font size. The wider line is 1228.8px (64% of 1920), with baseline spacing exactly 1.0em. The combined visible glyph bounds determine vertical centering slightly above frame center.
- Each line is rasterized separately with its own style and baseline. Sampled targets carry a line index; blue targets receive blue particles and blue settling colour. The same 8% teal / 7% amber sparkle assignments apply across both lines. Both lines use the existing curved flight, settling, and crossfade timings.
- **Subtitle:** `AI RESEARCH METHODOLOGY WORKSHOP SERIES NO. 8/2026`. Inter 34px, 10.2px tracking (0.3em), warm white at 75% opacity, with the existing character reveal from 3.20–4.17 s.
- The masked light sweep spans both lines vertically. The soft horizontal glow is moved under the complete block; its appearance and timing are retained. The page's aria-label uses the official name and series subtitle.
- Round 3's flight brightness controls, 38,220-point budget, six-second duration, deterministic seeking, `?t=`, `document.title = "ready"`, hold, and 4% push remain intact.
- `index-r3-research-in-motion.html` is preserved as supplied.

Round 4 validation (without a browser):

- Saved JavaScript syntax, import-map JSON, SVG XML, and internal SVG references pass. The pinned italic WOFF2 asset returns HTTP 200 with a valid WOFF2 signature.
- Font-metric checks use the matching pinned WOFF font files, parsed in memory with OpenType.js 1.3.4 solely for validation. No validation dependency is added to the page. Expected title size/line spacing is approximately 170.45px; baselines are y≈419.79 and y≈590.24, line widths 1228.8px and 1114.60px. Expected glow center is y≈617.95 and subtitle baseline y≈689.95. Browser rasterization may differ slightly; the page calculates these metrics after its own fonts load.
- The new subtitle measures approximately 1531.57px wide with the specified tracking and remains inside the frame during the 4% push.
- All 181 inclusive 30 fps samples match when sought forward and backward. Beat boundaries, subtitle completion, the hold, 4% push, and time clamping pass. Timeline, dust, and capture-control source are unchanged from Round 3.
- Geometry generation with representative targets from both lines verifies ivory/blue assignment, 15% total teal/amber accents, 38,220 finite points, matching attribute lengths, and arrival no later than 2.57 s. Both settling shader paths blend toward each particle's line colour.
- The Round 3 backup's SHA-256 hash is unchanged: `a6630b92c2ae52f4463f25656c1547aa3ee748cc185bffac5ff9e165796e96e4`.
- No browser was launched. Actual rasterized glyph alignment, particle appearance, and the two-line sweep still need review in the user's capture environment.

## Round 5 — title text update only

- **Line 1:** `Generative AI for Academia`, the existing warm-white Instrument Serif normal 400.
- **Line 2:** `From Ideas to Creation`, the existing Instrument Serif italic 400 in sky blue `#4fb3ff`, including its matching particle colour.
- Updated both lines in the particle-mask source, solid SVG text, glow text, sweep clip, and aria-label. The subtitle remains `AI RESEARCH METHODOLOGY WORKSHOP SERIES NO. 8/2026`.
- The existing layout continues to fit the longer line to 64% of frame width, use 1.0em baseline spacing, and position the block, glow, and subtitle from the loaded font metrics. Numerical font size and positions naturally recalculate for the new wording; the layout rules are unchanged.
- No styles, shaders, particle settings, sweep or glow logic, timing, deterministic seeking, `?t=` handling, or readiness signalling were changed. Round 4's numerical measurements above refer to its previous wording.
- All `index-r3-*.html` and `index-r4-*.html` backups remain untouched.

Round 5 validation: saved JavaScript syntax and import-map JSON pass. An exact source comparison confirms `index.html` changed only by substituting the two requested title strings across all title layers and the aria-label. SHA-256 checks confirm both supplied Round 3 and Round 4 backups are unchanged. No browser was launched.

## Round 6 — back to the official poster title (7 Oct 2026)

The poster went out as **Smart Video Creation with Generative AI**, so `index.html` is again a byte copy of `index-r4-smart-video.html`. The Round 5 wording is kept as `index-r5-genai-academia.html`, and its frames and clip are in `_scratch/frames/title-r5-genai-academia` and `_scratch/title-r5-genai-academia.mp4`.
