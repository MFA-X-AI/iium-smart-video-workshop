# KOS — a glass bead senses heat with light

## Source and the “so what”

The paper's PDF is unavailable. Paper-specific statements come only from the KOS / “Top pick (KOS)” row in papers.json.

**Plain-language finding:** A tiny glass bead senses temperature changes through the light trapped around its edge, and bringing the feeding fibre into contact improved this sensor's performance.

The supplied summary describes fusion-spliced glass microspheres coupled to tapered fibre; contact (0 µm gap) performed better than a 10 µm gap, and temperature sensitivity was 14.9 pm/°C. No numerical Q-factor, bead size, temperature range, detection limit or response time is available. None is invented or displayed.

Attribution from the row:

- KOS · Science
- Fabrication of Whispering Gallery Mode (WGM) microresonator using core-to-core alignment fusion splicer for high sensitive temperature sensor trough optimum coupling gap with high q-factor
- Noorbahrin et al. (2025) · Results in Optics
- DOI: 10.1016/j.rio.2025.100928

General mechanism: evanescent coupling from a tapered fibre excites a near-surface circulating whispering-gallery mode. Thermal expansion and the thermo-optic effect shift the supported resonance. For ordinary silica, heating shifts the resonance toward longer wavelength. Primary experimental context, without importing its numerical results: [On-Chip Glass Microspherical Shell Whispering Gallery Mode Resonators](https://www.nature.com/articles/s41598-017-14049-w), and [Whispering gallery modes in a glass microsphere as a function of temperature](https://pubmed.ncbi.nlm.nih.gov/22273972/).

## Three concepts considered before the original build

1. **Close the gap, catch the light.** A bead approaches the fibre; contact produces a strong circulating field. A clear dark-to-bright event and an attractive final thumbnail. However, a lecturer may see an ornament switching on rather than a temperature sensor. It could also suggest incorrectly that the larger gap prevents all coupling. Reject as the main story.

2. **Heat arrives; the trapped light responds — selected.** External warmth reaches a fibre-coupled bead and its supported resonance shifts. The cause is familiar; the optical response needs a visible transformation. The first execution relied on colour alone and failed this requirement in the actual renders. The revision adds a conspicuously stretching output-wave illustration while preserving a constant-order internal mode.

3. **Make the bead, then make it sense.** A fusion-splicing arc rounds a fibre tip into a bead, followed by coupling and warming. Glass formation is a strong transformation, but three unfamiliar processes cannot read clearly in three seconds. It also invites unsupported detail about the fabrication apparatus. Better suited to a longer film.

## Harsh critique of the supplied Chrome frames

The user supplied actual 0.5, 1.5 and 2.5 second renders. These supersede the earlier optimistic code-based assessment.

- **The object failed.** Its centre showed almost the same backdrop as its surroundings, while nearly all its contrast lived on the perimeter. It read as a hoop, soap bubble or magnifying-glass rim, not a solid glass microsphere. A sphere mesh and finite coordinates do not establish convincing volume.
- **The payoff failed.** At montage scale the three frames were almost the same composition with a different outline colour. The weak bright crests and decorative heat ribbons did not demonstrate why this research mattered. It needed the words to explain the event.
- **The hierarchy failed.** The oversized headline, eyebrow, explanatory paragraph and separate bottom-right caption made it resemble a landing page. The visual was an accompaniment to text.
- **The attribution looked unfinished.** Letting “core-to-core” wrap after a hyphen made the truncation look accidental.
- **The contact was mathematically defensible but visually ambiguous.** A fibre near the lower silhouette did not make the equatorial coupling obvious. The old stem also lay in the illustrated mode plane; moving it to the pole gives a more coherent geometry.

## What changed in this revision

### Solid glass, with a body

The bead now uses a dedicated solid-glass shader, rather than a translucent outline. For each visible surface point it refracts the viewing ray into glass, solves its chord through the sphere, and refracts it again at the rear glass/air interface. It samples a live linear-HDR capture of the surroundings along that outgoing direction.

Path-length absorption, Fresnel reflection, shaped high-dynamic-range studio highlights and a restrained secondary reflection make the centre and curved surface readable. The material writes depth: the front fibre can occlude the bead, while the polar stem disappears behind its surface where appropriate. A qualitative focused light pool and cusp on the heater provide the requested caustic cue.

This is a two-interface sphere calculation with screen-space environment sampling, not a full path tracer. The caustic is procedurally art-directed, not a measured intensity map or a physically solved caustic simulation.

The mode is integrated along the ray **inside the glass**, using 32 samples of a near-surface equatorial field. It is no longer a separately alpha-blended ring drawn over a transparent shell. The apparatus is tilted so the equator crosses the bead's body; it does not coincide with the outer circular silhouette.

### A visible wavelength payoff

A broad, moving thermal boundary climbs the bead from below. The internal resonance and interrogating light shift from saturated cyan to coral. Along the outgoing fibre, a magnified transverse electric-field illustration opens from closely spaced waves into conspicuously longer waves. This supplies a spatial transformation that survives reduced-size viewing, instead of relying only on hue.

The drawn output wavelength increases from 0.32 to 0.90 **arbitrary scene units**. That approximately 2.8-fold visual change is deliberately exaggerated and is NOT a paper result, a predicted physical shift or a scale bar. The single short subline says “Wavelength shift magnified in false colour.”

The internal mode retains the same angular fringe count, geometry and field-envelope settings throughout. Its order does not decrease, the glass does not visibly expand or melt, and heating is not depicted as generating new probe light. Continuous interrogation/tracking of the changing resonance is assumed; this is not a fixed-frequency source being frequency-converted by the bead.

### Fewer words, cleaner credit

- Removed the “IIUM RESEARCH · PHYSICS” eyebrow and both bottom-right captions.
- Reduced the headline from 4.5 to 3.25 container-width units, approximately 86 to 62 pixels at 1920 pixels wide.
- Retained only the seven-word title, one short qualification and the attribution block.
- Broke the paper title deliberately after “(WGM)”, with “microresonator…” on the second line. Both lines are unbroken spans; truncation is at a complete word.
- Widened the visible scene and enlarged the bead by tightening the fixed camera's field of view. No camera motion is used to manufacture an event.

### Explicit equatorial contact

The mode lies in the bead's local XY plane. The fibre runs along local X at y = −R − fibre radius, z = 0. Its upper surface therefore touches the sphere at (0, −R, 0), in exactly that equatorial plane. No gap is opened during the shot.

The new orientation puts this point on the visible front of the bead. A localized evanescent envelope inside the glass and a small contact glint join the mode to the touching taper. The glass support leaves the local Z pole, perpendicular to the equator.

At 1920 × 1080 the contact projects to approximately (1327, 736). The nominal, unrefracted mode ellipse is about 761 × 458 pixels, versus the bead's approximately 779 × 772 pixels. The equator now sits across a visibly larger spherical body. Refraction changes the field's apparent shape from that nominal geometric projection.

## Review of the revised three-second story

| Moment | Revised action | Remaining judgment |
| --- | --- | --- |
| 0.5 s | A glossy, refracting cyan bead; the heater has lit and a broad warm front enters its underside. Closely spaced output-wave crests travel along the fibre. | Establishes solid glass, input light and the beginning of warming in one image. The object is no longer defined by its rim alone. |
| 1.5 s | The warm boundary reaches the crown; the internal field has moved toward orange and the outgoing crests are opening apart. Curved reflections stay fixed on the solid bead. | The strongest change is now both spatial and chromatic. Thermal ribbons are quieter so they support the cause instead of resembling a decorative frame. |
| 2.5 s | Coral resonant light crosses the glass body; the outgoing wave has far wider spacing, with the heater and focused light still visible below. | A held, visibly different result. No dissolution, explosion, invented threshold or amplification claim is needed. |

## Verification and limits

- Passed node --check on the extracted final ES module in clips/.qa/kos-rebuild.mjs.
- Constructed the scene using the real pinned Three.js 0.169.0 module with a renderer stub. Verified finite geometry, opaque-glass depth handling, both refraction interfaces, equatorial tangency, front-facing contact, perpendicular polar stem, framing and deterministic frozen/autoplay states.
- Checked shader strings for unresolved interpolation, accidental double-minus numeric tokens, missing main functions and reversed constant smoothstep bounds.
- Checked that the removed caption/eyebrow blocks are absent and the new two-line attribution uses complete words.
- The scene uses 22 meshes and 36,806 triangles. The maximum rendering surface is 1920 pixels wide. Refraction adds one reduced-resolution HDR environment pass, and the sphere's fragment shader integrates 32 field samples. This budget has not been benchmarked on a laptop GPU.
- Implemented and inspected a **CPU mathematical reference** of the new glass optics at 0.5, 1.5 and 2.5 seconds. It shows the background bending through the bead, body highlights, a field crossing its lower half and the stretching output waveform. This is useful evidence about the optical/compositional design, not a Chrome screenshot or GPU shader validation. It omits complete scene materials, bloom, text and the exact GPU rasterization.
- Audit: clips/.qa/kos-rebuild-audit.mjs; report: clips/.qa/kos-rebuild-report.json. CPU reference: clips/.qa/kos-glass-reference.mjs and kos-glass-reference-pair.png.
- No browser or browser automation was launched. The supplied Chrome screenshots were reviewed; the revised complete scene has not been rendered in Chrome here.
- Three.js and addons remain ES modules pinned to 0.169.0 on jsDelivr; no build, other CDN, external image or external font is used. All writes are inside clips/.
- Autoplay and ?t=<seconds> freezing remain deterministic. The story holds through 3 seconds, then fades for its 3.65-second loop. Frozen frames omit the loop separator.

## Other artistic licence

The macro scale, visible optical fields, slowed wave motion, support dimensions, heater design, heat-flow ribbons, false colours, caustic and three-second thermal timing are explanatory artistic choices. They do not reconstruct the paper's apparatus or claim a measured thermal response time. Only the reported contact arrangement and qualitative temperature-sensing mechanism are represented as research findings.

