# KOS v2 proposal: touching the fibre beats a 10 µm gap

## Source actually read
The PDF could not be obtained (IIUM IRep in maintenance; ScienceDirect's PDF link returns a bot
challenge / 403 to scripts and headless Chrome; the Elsevier TDM API needs a key; Europe PMC has no
record; Semantic Scholar has no abstract). What WAS read: the **full author abstract** from the
open-access ScienceDirect article page (https://www.sciencedirect.com/science/article/pii/S2666950125001567,
saved as `clips-v2/.qa/KOS/article.html`, text in `article.txt`), plus the Crossref record. No
highlights, figures, tables or body text were available. Every value below is from the abstract.

Abstract values (verbatim):
- Two coupling gaps tested: **0 µm** ("both microsphere resonator and tapered fiber contacted") and **10 µm**.
- 0 µm gap: **finesse 42.792, Q-factor 16,069.688, resonance wavelength 1542.69 nm**.
- 10 µm gap: **finesse 1.111, Q-factor 659.997, resonance wavelength 1544.40 nm**.
- Temperature sensitivity **14.9 pm/°C**, resolution 6.7 × 10⁻² m°C, FOM 0.11/°C (the abstract does
  not state which gap configuration these belong to).
- "The smaller gap resulted in a better sensitivity of the temperature sensor."

## Headline result
Letting the splicer-made glass microsphere **touch** the tapered fibre (0 µm gap) gives a far sharper
resonance than holding it **10 µm** away: **Q-factor 16,069.688 vs 659.997** (finesse 42.792 vs 1.111).
This is the result the title leads with ("optimum coupling gap with high q-factor").

## The data on screen
Only these strings, exactly as printed in the abstract:
- `0 µm gap` / `10 µm gap`
- `Q-factor 16,069.688` / `Q-factor 659.997`
No other numbers. (14.9 pm/°C is left off because the abstract does not tie it to a configuration and
two numbers per bead is already the reading limit for 3 s. 1542.69 / 1544.40 nm and the finesse values
are omitted for the same reason.)

## Staged in the subject, not as a chart
Two identical glass microspheres, each on its own fibre stem (as a fusion splicer leaves them), each
above its own tapered fibre, side by side. Two separate fibres, so it does not look like one fibre
feeding both in series. Left: the bead rests on the taper waist (0 µm). Right: the bead hovers with a
small but clearly visible gap, marked by a fine dimension bracket "10 µm gap". The same light pulse
runs into both tapers at once. In the touching bead, the light grabs hold and circulates round the
equator as a whispering-gallery ring that builds lap after lap into a thin, intense, sharply defined
band (high Q = light stored for a long time, narrow resonance). In the gapped bead only a faint, broad,
smeared glow flickers once and dies (low Q, finesse ~1: light barely completes a lap). Q values appear
beside each bead as the difference becomes obvious.

Why it isn't a chart: the result is a comparison of how well each bead stores light, and the bead
itself can show that directly by how long and how brightly its ring glows.

## Storyboard (0-3 s)
- **0.0-0.5 s:** Macro shot, shallow focus. Both beads on their stems above their tapers; the left one
  touching, the right one visibly separated with the "10 µm gap" bracket, "0 µm gap" under the left.
  A soft pulse of light enters both fibres from the left. Title fades in top-left.
  **At 0.5 s:** the two setups read clearly; light is arriving at both waists.
- **0.5-1.5 s:** Left bead: a ring of light starts to race round the equator, getting brighter with
  each lap. Right bead: a dim, blurry glow appears and is already fading.
  **At 1.5 s:** left ring bright and crisp; right bead nearly dark. `Q-factor 16,069.688` writes on
  beside the left bead.
- **1.5-3.0 s:** `Q-factor 659.997` appears beside the right bead (~1.7 s). Left ring keeps ringing,
  throwing caustics on the backdrop; right stays dim with only a weak flicker. Slow push-in, no cut.
  **At 2.5 s:** the full comparison held: bright sharp ring vs dim bead, both Q values readable.

## Title
**Touching the fibre beats a 10 µm gap**

## Swap test
Only this paper compared a splicer-made microsphere in contact vs 10 µm from the taper and got
Q 16,069.688 vs 659.997; a generic WGM or temperature-sensor clip has neither the two gaps nor these values.

## Visual style and medium
KOS technique: photoreal macro cinematography (three.js). Real glass: transmission/refraction, Fresnel
rim, a tiny specular highlight, caustics on a dark backdrop, shallow depth of field with bokeh from
out-of-focus fibre segments and dust. The macro camera serves the data: the result is literally
"how brightly and sharply light is trapped in a glass bead", which is exactly what macro glass and
light photography shows best. The glow is false colour (the real light is 1542-1544 nm infrared).
