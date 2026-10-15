# KOE — shape-memory alloy wrist assistance

## Revision 2 — response to the supplied Chrome frames

Re-read `clips/BRIEF_OPEN.md` and inspected the user's actual 0.5, 1.5 and 2.5-second renders. The earlier software studies underrepresented how much the bright lighting erased the anatomy. The hand read as a mitten, the sleeved forearm as a pipe, and the reveal was too far advanced at 0.5 seconds.

Before editing, the revised concept is: **the drawing is constructed, becomes a wearable on a recognisable human mannequin, and then moves the wrist**. Keep the correct four-spring mechanism, blueprint palette, top-right headline, time-compression notice, and empty bottom-right citation region.

Implemented corrections: separated, naturally staggered fingers with three phalanges, knuckle contours, joint creases and nails; a shorter opposed thumb with two phalanges and a thenar pad; an asymmetric muscular forearm narrowing into the wrist; a partial splint and fingerless glove that expose warm neutral mannequin skin. Reduced the over-bright lighting and added contact shadows so that anatomy remains legible. Individual drawing strokes and dimension witness/tick lines trace through about 0.8 seconds, followed by surfaces, lighting and a gentle camera push. Removed the title eyebrow and its decorative rule entirely, keeping the headline at its established position. No attribution is on screen. No browser was launched; all writes stayed in `clips/`.

## Paper read

Wahid & Badarussamin, *Design and Experimental Study of Shape Memory Alloy (SMA) Spring as Actuators in Wrist Exoskeleton*, Jurnal Kejuruteraan 38(1), 455–463 (2026), DOI 10.17576/jkukm-2026-38(1)-39.

Read the supplied nine-page PDF, including the prototype photographs (Figure 8) and activation diagrams (Figure 9). Extracted text and reference figures are in `clips/.qa/`. This is the requested papers.json row, not the KOE top pick. The former KOE clip is being replaced from scratch; none of its implementation or imagery is used.

## The so what

Electrically heated metal springs can pull a wearable wrist support and help move the hand, with enough measured torque for the study’s modelled bending motions, although heating and cooling are still slow.

## Three shot concepts, evaluated before building

1. **A blueprint becomes a working wrist.** A large, instantly recognisable gloved hand and forearm are drawn in ivory/cyan on a deep blue drafting grid. A luminous section sweep turns the drawing into a solid three-dimensional splint. The upper spring pair warms to amber, visibly tightens, and pulls the hand into extension. The opposing pair then takes over for reversal. The fixed neutral outline makes the change unmistakable. **Critique:** the most direct cause-and-effect story, with a strong transformation and recognisable human purpose. The spring motion must be large enough to read, and time compression must be acknowledged. The hand and warm coils make a strong thumbnail. Best fit to the specified style and the actual prototype.

2. **Exploded parts snap into a wearable.** Four floating coils, terminal blocks, straps, and a glove converge from an exploded CAD drawing, then the wrist bends. **Critique:** assembly could be striking but uses most of the three seconds explaining manufacture, which is not the research finding. Floating parts weaken the first thumbnail and could imply a rigid commercial machine. Reject.

3. **Macro spring becomes a hand movement.** Begin inside an enlarged coil, heat it, compress its pitch, then pull back to reveal the spring moving a wrist. **Critique:** excellent metal detail and transformation, but the non-expert spends too long wondering what the coil is. Camera travel carries too much of the story, and the crop may hide the wearable until the end. Reject.

**Selected:** concept 1. Establish the hand silhouette with the earliest traced contours, then complete the mechanical drawing. Geometry, materials, and spring contraction do the storytelling, supported by a restrained camera push during the surface reveal; the camera holds during wrist actuation. The title is top-right: **“Heated springs help the wrist move”**, with no eyebrow. Key motion is left/centre; the bottom-right 980 × 300 area at 1920 × 1080 remains available for the later editorial citation.

## Scientific boundaries

- Four SMA springs on a glove and strapped forearm splint, arranged as two dorsal and two palmar actuators (p.459, Fig.8).
- Electrically heating the dorsal pair produces extension; heating the palmar pair produces flexion. Passive/opposing springs lengthen as the other pair pulls. No motor or powered hinge is introduced.
- Both ends of each spring follow their actual attachment groups. The coils follow a curved path around the wrist rather than cutting through the glove.
- The reported maximum extension/flexion torques are 0.328/0.332 Nm. These are evidence for the story, not simulated quantities in the animation. No torque readout appears.
- The measured extension maximum is about 35 degrees; the film uses a 35-degree extension and a modest reversal. A schematic angle is not a prediction of this mesh’s physics.
- Actual motion is slow: roughly 25 seconds to the first extension peak and around one minute per complete cycle (p.461); reported full-cycle frequency 0.018 Hz. A persistent **“Motion time-compressed”** caption prevents a three-second shot from claiming real-time performance.
- Amber is a false-colour heating cue, not incandescence. These springs activate at 45–60 °C; they do not glow visibly in the prototype.
- Glove surface, enlarged coil visibility, simplified terminal blocks, stitching, material finish, construction lines, reveal sweep, and pose traces are illustrative CAD choices, not a manufactured product specification.
- The warm mannequin anatomy, partial fabric cradle and fingerless glove are an illustrative presentation of a worn device, not a reconstruction of an experimental participant. Dimension witness lines carry no invented numerical measurements.
- No grasping, patient recovery, clinical outcome, successful sideward assistance, added cooling system, or new performance figures are claimed.

## Intended three-second cut

- **0.04–0.8 s:** longitudinal anatomy contours trace first, followed by cross-sections, terminal blocks, coils, and dimension witness/tick lines. Each stroke batch has an arc-length-based reveal and a bright advancing tip. No solid surface is visible at 0.5 or 0.8 seconds.
- **0.81–1.23 s:** a moving section reveals the warm mannequin, dark fabric and metallic coils. Lighting rises and camera zoom eases from 0.93 to 1.02 between 0.72 and 1.27 seconds. Shadow casters share the reveal plane, so unrevealed geometry cannot cast premature shadows.
- **0.98–1.65 s:** the dorsal pair contracts and lifts the hand to extension. It reaches about 34° at 1.5 seconds and the illustrative 35° peak at 1.55 seconds. A restrained amber motion arc and a fainter neutral outline explain the rotation.
- **1.65–2.8 s:** heating switches towards the opposing pair; the hand reverses, and the upper springs lengthen. This demonstrates antagonistic assistance rather than spontaneous cooling recovery.
- **2.8–3.4 s:** readable final pose; the loop then dissolves back to the neutral drawing without presenting that editorial reset as another experiment.

## Verification and post-build critique

Built a fresh self-contained `index.html`. Three.js and RoomEnvironment use the exact jsDelivr version 0.169.0. All meshes, drafting linework, textile detail, helices, lights, grid and animation are procedural. There are no external image/font assets, controls, dashboards, attribution, or build step.

Inspected the user's actual Chrome renders of revision 1 before editing. For revision 2, read the implementation and inspected software-rasterised projections of the real scene geometry at 0.2, 0.5, 0.8, 1.05, 1.5 and 2.5 seconds. These diagnostics include stroke clipping but approximate lighting and do **not** reproduce WebGL materials or shadows. They are in `clips/.qa/koe-sma-projections/`, with filenames prefixed `r2-`.

- **0.5 s:** only the cyan/ivory drawing is present. The separated fingers and tapered forearm are readable, while the spring helices and dimension marks are still tracing. This directly fixes the supplied frame's prematurely solid forearm. At 0.2 seconds the first anatomy contours establish the silhouette; by 0.8 seconds the complete engineering drawing is ready for the material transformation.
- **1.5 s:** warm mannequin skin, dark fabric and metal clearly separate the person from the device. The hand is lifted about 34°, the upper coils are amber and shorter, and the lower pair has lengthened. Some fingers overlap naturally in this oblique extended pose, but the staggered fingertips, knuckle shape, thumb and openings between digits prevent the old mitten outline. Reduced exposure and fill preserve form rather than washing the hand white.
- **2.5 s:** the opposing lower pair is amber and contracting; the hand has reversed to approximately 13° flexion, continuing towards the illustrative 22° final pose. This is the clearest anatomical frame: four individually separated, jointed fingers, a shorter opposed thumb, nail beds and a narrow wrist. Upper coils have lengthened and returned to silver. Fingers remain relaxed throughout; no grasping or recovery result is implied.

Framing at 1920 × 1080: hand bounds remain left of approximately x=1186 and above y=726 at the sampled poses, with the title beginning at x=1258. All key hand/spring geometry stays above y=780 through the entire four-second timeline, keeping the bottom-right editorial attribution area clear. The time-compression caption remains bottom-left. There is no on-screen citation or attribution.

Verification completed:

- Extracted the exact module and passed `node --check`.
- Executed the scene construction and timeline against the pinned Three.js library in Node with renderer/DOM stubs. This checks real geometry and transforms without launching a browser.
- Checked all 240 time samples over the four-second loop: finite spring vertices/normals, both spring endpoints attached to their moving anchors, and key geometry clear of the title and citation zones.
- Confirmed dorsal shortening/palmar lengthening in extension and the opposite on reversal. The dorsal centreline shortens from 3.663 to 3.215 scene units at 1.5 seconds. Those values are internal geometry checks, not published physical measurements.
- Confirmed deterministic out-of-order time sampling and that `?t=0` schedules no animation frames. The same query mechanism accepts `?t=0.5`, `?t=1.5`, and `?t=2.5`.
- Exercised the material shader customisations against the pinned Three.js shader templates; checked the injected reveal code, stroke-trace attributes, and negative-number syntax. Checked the depth shader's matching section discard for shadows.
- Confirmed five anatomical digit paths, absence of the eyebrow markup, zero solid fill at both 0.5 and 0.8 seconds, progressive drawing time, and deterministic camera zoom.
- Approximately 69,400 triangles, 105 meshes, and 90 line objects; dynamic coil buffers are reused. Pixel ratio is capped at 1.5. One 2048² directional shadow map provides contact detail. No bloom or post-processing chain is used.

No browser, Playwright, Puppeteer, or headless Chrome was launched. Revision 2 GPU shader compilation, final WebGL appearance, and frame rate have not been measured in this sandbox; the supplied Chrome frames show revision 1 only. The intended montage cut is the first three seconds; autoplay continues through a short hold and a drafting reset in a four-second loop.
