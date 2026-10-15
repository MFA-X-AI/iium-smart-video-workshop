# KOED — Music makes mathematics tangible

## Source and the “so what”

Al-Farabi’s way of connecting music with mathematics offers teachers a culturally rooted way to help students explore ratios and patterns through music.

This is a literature-based educational argument, not an experiment demonstrating improved scores or a clinical intervention.

Read `papers.json` at zero-based index 122 and the supplied journal article. PDF text extraction used `uv run --no-project --with pypdf python` (using the installed Python and cached wheel offline). **The correct journal article is present as scanned pages at the start of the PDF.** The first 37 PDF pages have no text layer, which initially obscured this: extraction surfaced only the related conference contribution appended on PDF pages 38–41. Direct image extraction from the PDF resolved the issue. The journal article's abstract, introduction, methodology, findings, discussion, conclusion and recommendations were read from page images. The initial summary fallback was superseded by this direct reading.

Source-specific support, using printed journal page numbers:

- **146:** qualitative literature-based historical/philosophical analysis, rather than measured variables.
- **149:** practical and technical discussion explicitly includes the oud and the connection between theory and practice.
- **150:** mathematical dimension connects intervals, scales and frequency ratios to the educational framework.
- **152:** proposed Malaysian classroom applications link musical structure and patterns to fractions, ratios and proportions.
- **154–155:** conclusions connect rhythm and pattern to numeracy; recommendations explicitly include algebra, geometry and physics as possible educational applications.

The clip does not claim measured outcomes. In the mathematics revision below, standard ideal-string ratios are shown explicitly, as authorized in the review: they are examples of the mathematical relationship discussed by the paper, not numerical findings of this study. The geometric rosette illustrates the proposed relationship between musical and mathematical learning; its shape is not a diagram reproduced from the paper.

## Three concepts, before implementation

1. **The manuscript sings.** An ornate three-dimensional oud rests over a curved illuminated manuscript. A plectrum visibly releases its strings. A luminous wave travels from the soundboard across the page; gold geometric petals lift from ink and assemble into a raised, interlocking rosette. Music visibly becomes mathematical pattern.
   - Three seconds: the instrument makes the cause legible; the travelling wave links it to the unfolding geometry. The gold relief rising from the paper supplies the surprise.
   - Thumbnail: oud, manuscript and intricate gold geometry remain recognizable even without motion.
   - Honesty: the rosette is an artistic metaphor for patterns/interdisciplinary learning, not a reconstruction of a particular manuscript or a result of a cymatics experiment. Must say this in the source comment. No sound-pressure or cognitive-benefit claims.
2. **A string becomes fractions.** A monumental string stretches over parchment. A bridge slides under its midpoint, shortening the vibrating segment; a pair of gold arches rises beside it.
   - Three seconds: clear causal motion and mathematically defensible as an idealized string, but a non-specialist may see only a moving wire. Fractions invite explanatory labels and the rejected dashboard aesthetic.
   - Thumbnail: too sparse; less cultural specificity and less spectacle. Exact historical ratios would need further primary-text support.
3. **Music unfolds a classroom.** A closed manuscript bursts open, lifting a pop-up school whose desks turn into musical instruments and geometric solids.
   - Three seconds: impressive transformation but too many objects to decode. The school might suggest that this study implemented a classroom intervention, which it did not.
   - Thumbnail: readable school, weak music-theory specificity; relies too heavily on the title.

**Selected: concept 1.** Its continuous chain of pluck → travelling wave → raised geometric pattern gives the shot a single, readable event. A hand-crafted warm parchment / lapis / copper / reflective gold aesthetic fits KOED specifically. The manuscript and oud occupy the left; the geometry rises in the upper centre-left. The right-middle title has dark negative space; the bottom-right attribution reserve remains free of key action.

## Shot and design commitments

- One self-contained HTML; procedural materials, textures and all geometry embedded in code. Only Three.js 0.169.0 and its addons load from jsDelivr through an exact-version import map.
- A locked oblique camera, with no dependence on camera drift for the story.
- Gold leaf catches moving light; dimensional wooden oud has a rounded ribbed bowl, carved rosette, bridge, strings and bent pegbox. Decorative manuscript geometry is newly invented, with no fake quotations or pseudo-Arabic text.
- The gold rosette unfolds after the wave reaches it, over approximately 0.7–2.3 seconds. It is a conceptual pattern, not a physical response to sound.
- Title at right-middle: “Al-Farabi’s music / makes mathematics / tangible.” Warm ivory serif type over a subtle dark gradient. No author, journal or citation on screen.
- Autoplay uses a repeating shot with a brief dark reset after its three-second reveal. `?t=` sets a deterministic, stationary moment; all animation comes from the same time function.
- No browser launch. Validate extracted module with `node --check`; inspect geometry, timeline, projection and finite values with Node where possible.

## Post-build critique and validation

Read the completed animation code and exercised its actual Three.js geometry and time function in Node, with WebGL and Canvas2D rendering stubbed. Also inspected three software-rasterized geometry previews. These are composition checks, **not browser screenshots**: they omit texture sampling, physical materials, shadows and HTML typography. The original version also had bloom, removed in the rendering repair below.

- **0.5 s:** the 554-pixel-tall oud dominates the left page. The ivory plectrum has released the doubled strings, which visibly vibrate. The first gold wave has travelled roughly a quarter of the path toward the flat rosette. A weakness in the first draft was a tiny early wave and overly distant framing. The camera was tightened from 35 to 28.5 degrees and the wave’s early progression increased.
- **1.5 s:** the wave connects the instrument to the pattern. A staggered sequence of enamel-and-gold petals is folding upward, exposing the ink construction below; gold flecks rise with it. The seventh-index petal is tilted approximately 63 degrees. This is the active transformation frame, with a clear source, connection and effect.
- **2.5 s:** the complete relief is suspended above its original ink construction. Two interlocking star rails surround the raised central enamel jewel. The ribbon remains visible, retaining the music-to-pattern relationship in a thumbnail. The initially shallow rise was increased so the before/after reads at montage size.

Framing at 1920×1080: oud x≈166–587, y≈218–773; completed rosette x≈587–1016, y≈201–639. Both clear the title beginning at x=1210. Geometry entering the right half stays well above the attribution reserve at y=780. The title contains five words and occupies the right-middle over a gradient scrim; there is no citation in the shot.

Validation completed:

- Extracted ES module passes `node --check`.
- Geometry/timeline audit passes: finite coordinates, action inside frame, title/citation clearance at all three requested moments, deterministic out-of-order seeking, frozen mode does not start an animation loop, default mode does.
- Exact Three.js 0.169.0 import map; all external URLs are jsDelivr module dependencies. No fonts, image downloads or build step.
- Approximately 113,000 triangles and 187 meshes at the busiest sampled moment, plus 170 instanced gold flecks. Geometry subdivisions are capped. Render resolution is capped at 1920 pixels wide; shadows use a single 2048 map.
- No browser launched, as required. Final WebGL appearance and measured GPU frame rate remain unverified in this sandbox.

Deliverable: `clips/KOED/index.html`. Use `?t=0.5`, `?t=1.5` or `?t=2.5` to freeze the requested moments. The first three seconds contain the complete reveal; the longer autoplay loop holds it and fades through a concealed reset.

## Revision after the real Chrome renders

The supplied Chrome/SwiftShader captures at 0.5, 1.5 and 2.5 seconds all showed the HTML title over an empty scene. Those real captures invalidate any inference that the original geometry-only previews established working browser presentation.

### Render-path diagnosis and repair

Found and reproduced a concrete frozen-frame lifecycle bug: the original `resize()` called `renderer.setPixelRatio()` and `renderer.setSize()` but never drew again. In Three.js 0.169.0, both paths assign the canvas backing dimensions, clearing its drawing buffer, even when the dimensions are unchanged. With `?t=`, the one initial draw had no animation loop to replace it. The revised Node harness models this clearing behavior and reproduces the original sequence: one initial presentation, then an empty canvas after a resize event. The supplied screenshots have no event trace, so they do not establish that this was their only trigger.

The repair addresses presentation and capture directly:

- Canvas has explicit absolute placement and z-index 0; scrim/vignette use 1, title 2 and fade 3. The scrim remains fully transparent over the main action.
- The scene now renders directly with `renderer.render(scene,camera)`, explicitly selecting the default framebuffer, full viewport and disabled scissor testing. Removed the composer/bloom/output-pass chain. ACES tone mapping and sRGB output run in the renderer.
- Resize skips redundant buffer allocations and **always redraws the current time**, including in frozen mode. A single animation-frame callback repeats that identical frozen frame after layout settles. Time does not advance.
- Frozen mode requests `preserveDrawingBuffer: true` for still capture. Autoplay retains the normal non-preserved buffer.
- The unnecessary PMREM angular blur is zero, removing the supplied `sigmaRadians` clipping warning while retaining the environment map's normal roughness filtering.

### Defensive canvas verification

Every frozen presentation reads real RGBA pixels from the default framebuffer over the manuscript region, away from the HTML title. It checks positive draw calls, a visible canvas box, no context loss/GL error, luminance variation and a nontrivial fraction of lit pixels. A render counter alone cannot pass this test. A failed check sets an explicit failure state and shows a short scene-failure message instead of silently treating the empty title card as successful.

For the external capture process, `window.__KOED_READY__ === true` means the frozen framebuffer passed this check. `window.__KOED_RENDER_CHECK__` contains time, dimensions, render count, draw calls, mean luminance, contrast, lit fraction and GL status. The film also exposes `data-render-status="ok"`; the canvas exposes `data-drawn="true"`.

### Manuscript treatment

Preserved the right-middle title, geometry, camera and citation clearance. Increased sepia ink contrast in the parchment's ruled constructions and wave drawings and darkened the ink under the unfolding rosette. Added shallow surface relief to the parchment and gold leaf, retained reflective metallic gold and green enamel, and reduced key/ambient intensity and exposure to help retain warm parchment colour. Gold highlights now depend on materials and lighting rather than bloom. Final colour balance still needs the next external Chrome capture; no browser was launched here.

### Revision checks

- `node --check clips/.qa/koed-module.mjs` passes.
- `node clips/.qa/koed-render-regression.mjs` reproduces the old resize-clearing bug and passes the repaired lifecycle at 0.5, 1.5 and 2.5 seconds: initial draw, unchanged-size event, 1280×720 resize, return to 1920×1080 and delayed frame callback all retain the selected time and repaint.
- Regression harness deliberately supplies blank pixels despite positive draw calls: the guard rejects them, reports failure, and recovers after a valid redraw. It also checks autoplay, invalid time and negative time handling.
- `node clips/.qa/koed-audit.mjs` still passes finite geometry, deterministic seeking and action/title/citation framing checks.
- The lifecycle harness uses **synthetic pixel values**, explicitly labelled in `clips/.qa/koed-render-regression-report.json`. It proves control flow and failure detection; it is not evidence of final WebGL output. The in-page guard will inspect real GPU pixels during the user's next render.
- All changed and generated files are under `clips/`. No browser, Playwright or Puppeteer was launched.

## Revision: make the musical mathematics visible

The second set of real Chrome captures confirms that the rendering repair works and that the parchment, oud, gold ribbon and right-middle title should be retained. The new content follows the review's requested sequence instead of treating the rosette as free-standing ornament.

### What is physically represented

For an ideal string with fixed tension and linear density, the fundamental frequency varies inversely with the remaining vibrating length. Length is measured **from the bridge to the stop**; it is not the distance the stop travels from the nut.

| Remaining length | Frequency relative to full length | Interval | Construction radius |
|---|---|---|---|
| ½ | 2:1 | octave | ½ R |
| ⅔ | 3:2 | fifth | ⅔ R |
| ¾ | 4:3 | fourth | ¾ R |

These standard interval examples are permitted by the latest user instruction and are consistent with the paper's discussion of frequency ratios and mathematical teaching (printed pp. 150 and 152). They are not presented as measurements from the paper or a facsimile of a historical tuning diagram. The top HTML source comment makes that distinction explicit.

One highlighted gold course is plucked, then stopped and plucked again at each division. Only the bridge-to-stop segment vibrates, with a fixed node at each endpoint and a single fundamental antinode. Other strings and the unused portion remain still. The visible oscillation is slowed, with relative frequencies 2, 3/2 and 4/3 preserved. A single gold stop moves between positions: the earlier gold marks are references, not simultaneous physical clamps. The fractional marks remain visible next to the string.

### How sound constructs the rosette

The ink drawing starts as an unbuilt construction. Each pluck sends the existing gold ribbon to a circle whose radius is the same fraction of a common outer radius R. A bright tracing point draws that circle; a gold radial measure and endpoint tick remain visible. The circles are genuinely different sizes: ½ R, ⅔ R and ¾ R. Earlier circles remain for comparison.

The same values enter the resulting geometry: ½ R sets the inner vertices of the interlocking stars, ⅔ R sets the petal shoulders, and ¾ R sets the enamel tips. The transfers release successive groups of four petals. This mapping is an original educational construction illustrating the music-to-geometry connection; the paper does not claim that an oud physically produces a rosette.

Small manuscript lettering on the facing page reads “length → pitch” above three accumulating examples: “½ → 2:1 / octave”, “⅔ → 3:2 / fifth”, “¾ → 4:3 / fourth”. Labels are ink on transparent texture planes, with no panels or interface controls. The previous three small decorative diagrams were removed to make this space available.

### Three-second critique

- **0.5 s:** the ½ stop is in contact, the short gold segment vibrates, and the octave example has appeared. The first transfer is leaving the string. The facing page is still mostly ink construction rather than a finished decorative flower.
- **1.5 s:** the stop has reached ⅔; the fifth example joins the octave. The half-radius circle and first four petals are established; the next gold wave traces the two-thirds circle. Both the musical input and the geometric response carry matching proportions.
- **2.5 s:** the ¾ stop and fourth example complete the three-way comparison. All three construction circles are drawn, all twelve petals have appeared, and the last set is finishing its rise. A gold ribbon afterglow keeps the causal connection visible through the finished shot. The final geometry settles by approximately 2.9 seconds.

The oud, manuscript, lighting, camera and title are retained. Label textures preserve their physical aspect ratios; source fractions are approximately 30 pixels high at the target resolution, with the facing-page ratios approximately 28 pixels high. The projection audit covers the added lettering and confirms that its rightmost column ends above y=780, clear of the citation reserve. No title or citation content was added elsewhere.

### Checks for this revision

- `koed-math-audit.mjs`: verifies exact bridge-to-stop distances, inverse frequency ratios, fixed endpoints, no active geometry beyond the stop, matching construction radii, half-radius star vertices, all three completed circles, deterministic seeking, and label/title/citation clearance.
- Existing geometry and render-lifecycle regressions still pass, including resize recovery and detection of a blank framebuffer.
- Extracted module passes `node --check`; all procedural assets remain embedded in the single HTML.
- Measured the three ratio strings with the installed Georgia font: their widths are 263–278 pixels within 334-pixel textures, leaving room around the lettering rather than clipping the fractions or interval ratios.
- No browser launched. The supplied second-round images establish the retained visual style; the new mathematical marks and lettering have been checked in code and projection, not in a new GPU capture.
