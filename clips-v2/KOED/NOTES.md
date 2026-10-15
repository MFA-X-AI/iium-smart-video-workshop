# KOED — a theory illuminated

The paper identifies four dimensions of Al-Farabi's music theory and proposes using them to connect mathematics, emotional development, practical learning and cultural unity in Malaysian classrooms. These are proposals from a qualitative literature analysis, not measured classroom effects.

The brief fixes the concept: an illuminated manuscript folio. A four-pigment quatrefoil grows gold vines into four marginal miniatures. The central structure presents the framework; the branches connect each dimension to its proposed application. The exact labels make this specific to the paper. The miniatures are interpretive illustrations, not historical reproductions or research data.

Built `index.html` as a self-contained, dependency-free Canvas composition at 1920×1080, scaled proportionally to the viewport. The final revision preserves the four lobes, all four miniatures, every label, the title placement and the r2 reveals. All motion derives from one time parameter. Georgia and system serif fallbacks require no font download; `document.fonts` readiness triggers a redraw at the same time.

Reveals use complete glyphs and irregular pigment blooms. Each whole letter is deposited in ink with a heavier dark wet edge that dries over 0.14 s. The miniatures and lobe pigments spread from the centre through seeded capillary masks with a soft, irregular boundary. Roundel frames and their inner rules are traced clockwise by the quill, independently of the paint. Ribbon backings are complete parchment shapes, without a moving crop boundary.

The title backing is now an elliptical parchment glow that feathers to transparency in both directions, drawn underneath all artwork. The pedagogical roundel moves from (250, 812) to (300, 784); its label moves to x = 300 with baselines 970 and 1008, clear of the corner ornament and border. The bottom-right attribution area remains clear of labels and key action.

The illumination combines shadows beneath raised gold, thin dark outlines, engraved edges, fine punched dots with light lower rims, pigment granulation at two scales, darker pigment pooling near boundaries, and interrupted broad-nib pressure strokes over finer ink lines. The leaf brightens as it is laid. Gold now has a local metallic gradient from deep brown-gold through pale gold to near-white reflections, so pieces retain their metallic contrast even outside the moving light. Fraction bars and the initial have gradients fitted to their own bounds.

A stronger diagonal specular band crosses every gold surface from 1.6 to 3.0 s, using shared folio coordinates even inside rotated ornaments and offscreen miniature paintings. Its trajectory deliberately places the bright core on the quatrefoil's right border and the initial A at 2.5 s. Thin pale bevels remain visible on the frames and vines. The sweep accelerates through the final half-second to traverse the full folio.

The psychological line has twice its former vertical span (84 px at its jagged stage) and twice its former lapis stroke weight (5.2 px), with a slightly darkened ink edge. It occupies the open space beside the unchanged student. Six tight zigzags relax into a broad slow wave over 1.3–2.2 s; the smooth wave keeps moving through 3 s. Each gamelan gong carries a small expanding shimmer ring and a moving arc of reflected light, keeping the final second active along with the metal sweep.

Frame read, checked against the implemented drawing and timing code:

- **0.5 s:** the quatrefoil is fully painted and gilded. COSMOLOGICAL and MATHEMATICAL are complete; the other two names are being deposited as whole letters. Vines start during 0.36–0.396 s, so the psychological branch already reaches into the open space to the right. All four dimension labels finish by 0.8 s.
- **1.5 s:** the title is fully legible, having been lettered during 0.6–1.4 s. All four vines and roundel frames are complete. Pigment blooms have reached most of each miniature, with the last irregular peripheral wash finishing by 1.625 s. Only the last application-label letters remain; all are complete by 1.56 s, ahead of the 1.6 s deadline. Beat subdivisions open and the larger lapis zigzag is visibly relaxing.
- **2.5 s:** all text and paintings are complete. The near-white specular core crosses the quatrefoil and title initial, while the larger calm wave moves and gong rings shimmer. These details continue through 3 s. The four proposed classroom applications remain unchanged.

Source: the supplied `BRIEF.md` and its page-specific excerpts from the journal article, printed pp. 146–155, plus the earlier colloquium wording on p. 480. The four dimensions come from pp. 147, 149–150; classroom proposals from pp. 152–155. Imagery, pigments, geometric ornament, beat subdivisions and the star ring are artistic licence. No invented numeric findings, historical Arabic lettering or attribution appear on screen.

Playback starts automatically, finishes at three seconds and holds the completed folio. `?t=0.5`, `?t=1.5` and `?t=2.5` freeze exact moments without reading a clock or scheduling animation. Finite times outside the shot clamp to its endpoints; invalid nonnumeric values use autoplay.

Final validation completed without launching a browser:

- JavaScript passes `node --check` via stdin and compiles in the Node audit harness.
- The Canvas-command harness executes all 91 frames from 0 to 3 s at 30 fps, checking finite gradient coordinates, complete individual glyph draws, and balanced drawing state. Repeated sample frames produce identical drawing-command and pigment-mask hashes.
- Deadline assertions check the first two dimension names at 0.5 s, all dimensions at 0.8 s, the complete title at 1.4 s and every application label at both 1.56 and 1.6 s.
- Metal checks verify near-white specular intensity at the right lobe and initial A at 2.5 s, a sweep spanning the whole folio, and deep-to-pale metallic contrast outside the moving light.
- Motion checks verify the enlarged line's jagged and calm spans, its clearance inside the roundel, continuing wave and gong-ring motion at 2–3 s, and a visible right vine extending past x = 1100 at 0.5 s.
- The intermediate pigment mask contains all 256 alpha levels, including dry paper and fully saturated areas; its edge is feathered rather than a binary crop.
- Native Windows font measurements check text bounds, fallback layout and the reserved x > 940 / y > 780 area. Dimensions remain 48 px, applications 34 px and the title 58 px.
- Frozen mode schedules no animation frames or clock reads. Autoplay reaches and holds the complete frame. No external libraries, assets or network requests are needed.

The final audit is `clips-v2/KOED/.qa/check-final.cjs`, with results in `report-final.json` beside it. Font measurements and earlier audit files remain in that folder. Every write in this revision stayed inside `clips-v2/KOED/`. The supplied r2 frames guided the changes. Validation is a drawing-command, mask, lighting-math and layout audit; no new rasterized composition preview or browser screenshot was produced. No browser was launched.
