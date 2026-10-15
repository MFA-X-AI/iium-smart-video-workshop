# KON — Asthma exercise, a stronger outward breath

## Research and the “so what”
Read all seven pages of `papers/KON/2026_The_effectiveness_of_asthma_exercise_in_improving_peak_expiratory_flow_in_patients_with_as.pdf`; it matches `papers.json[72]`.

In this 60-person study, adding a week of structured asthma exercise to medication improved how fast people with asthma could blow air out more than medication alone.

The study used a quasi-experimental design, convenience sampling, and 30 participants per group. The intervention comprised three 45-minute sessions over one week, including warm-up, stretching, core/aerobic movements and cool-down. Both groups continued medication. The endpoint was peak expiratory flow. It did not measure anatomical remodeling, airway diameter, respiratory-muscle strength, tidal volume or total exhaled volume. Table 2 has inconsistent control values, so no numerical outcome is displayed. This is an illustration of a group finding, not an individual promise or a replacement for medication.

## Three concepts considered before building
1. **A breath becomes a flowing silk plume.** Translucent lungs release a hesitant short stream, then after an explicit one-week transition inflate and recoil into a faster, farther-reaching stream. The motion communicates the result, the lungs identify the subject, and the plume supplies the spectacle. The time label is essential to avoid implying an instant treatment. Works as both a thumbnail and a three-second before/after cut.
2. **An airway opens like a flower.** A constricted bronchial cross-section unfurls, releasing air. Visually immediate and dramatic, but the study did not measure lumen enlargement. Reject: it would present an unmeasured mechanism as a finding.
3. **An exercise figure reveals moving lungs.** A person raises their arms, becomes transparent and exhales. The exercise connection is clear, but the pose/transformation takes too much of three seconds and misrepresents the mixed programme as one movement. Reject: weaker thumbnail and misleadingly immediate cause/effect.

Selected concept 1. Title: **“Asthma exercises help air flow out”**, centred at the top. Short phase labels: **“Before”** and **“After one week”**. Quiet context: **“Alongside usual medication”**. Bottom-right 980 × 300 px is reserved for attribution added during editing.

## Revision 2: critique of the supplied Chrome renders
The real first-version renders showed two flat, pale bean shapes, sparse stick-like branches and a faint plume. A CPU geometry preview had not exposed how weak the final material contrast was. This revision rebuilds the anatomy and airflow rather than merely enlarging the previous objects.

Implemented:
- Five separate, closed translucent lobe meshes: anatomical right upper/middle/lower and left upper/lower. Broad bases, tapered apices, medial shaping, left cardiac notch, substantial anterior/posterior depth, oblique fissures and a right horizontal fissure.
- Separate front/back shell surfaces, translucent fissure surfaces, asymmetric soft lighting, broad pearl highlights and stronger shaded edges. Slightly turned anatomy reveals front-to-back depth.
- A three-dimensional, volume-distributed bronchial tree with 2,558 tapered tube branches and 1,280 terminal paths, eight recursive generations beyond each lobar entry. Branches are merged into one mesh for rendering efficiency.
- Respiratory deformation moves the tissue and bronchial centrelines. Each tube vertex retains its radial offset from the centreline, preserving tube radius. There is no treatment-related airway dilation.
- 2,600 luminous internal flow particles follow cached paths from peripheral branches through the main bronchi and up the trachea. The after-breath travels faster and produces brighter flow.
- 23 twisting mint ribbon sheets and up to 1,050 aligned light streaks form the external exhale. The weak breath is short, narrow and sparse; the strong breath has greater visual bulk and travels across the frame. Pearl highlights move along the ribbons.
- Closer framing, a gentle camera push and slight lateral camera move. The caption is shorter and remains above the reserved citation region.

## Scientific and artistic boundary
Normal breathing compression is illustrative anatomy. Compression amplitude, ribbon width, particle count, travel distance, speed ratios and the week compressed into seconds are artistic choices; none is presented as a measured numerical result. In particular, a larger-looking plume communicates greater peak outward flow, not measured improvement in total exhaled volume or lung capacity. Branch diameters are invariant under the respiratory deformation. No cure, reversal of inflammation or oxygenation change is shown.

The trachea ends at a cropped upper-airway outlet. The external curve of the plume is a compositional flow visualization, not a literal anatomical bend or an omitted mouth claimed to be present. The bronchial topology and lobe geometry are procedural anatomical illustrations, not patient imaging or a complete anatomical atlas.

## Review of the finished timing
- **0.5 s:** lungs span approximately x292–857 and y320–913. Volumetric lobes and the dense bronchial tree establish the subject. The short, slender stream and slow internal flow show the hesitant before-breath. Label: “Before”.
- **1.19 s:** the lungs reach the illustrative inhalation peak, approximately x236–910 and y319–982. The label is already “After one week”. This frame establishes the larger contour before recoil.
- **1.5 s:** the lungs have already recoiled substantially from the inhalation peak while bright flow accelerates upward and the mint plume advances. Recoil was changed from a slow symmetric easing to a fast initial compression followed by settling, so the action is visible near the start of the strong breath.
- **2.5 s:** the lungs are visibly compressed, approximately x314–822 and y316–879. The stronger stream crosses the frame; its faint terminal extent intentionally continues out of the right edge. The ribbon field stays roughly between y210 and y555. The title remains above it and the short caption below it.
- **3.1–3.6 s:** editorial fade/reset. The first three seconds are the intended montage cut.

Read the finished code as a critic: corrected mirrored surface winding, kept tube radii separate from centreline deformation, made the before/after transition explicit, reduced the title scrim height so it does not wash out the plume, and moved the caption up to leave a comfortable gap above the citation region.

## Validation and limits
- `node --check clips/.qa/KON-r2-module.mjs` passed.
- `node clips/.qa/KON-r2-audit.mjs` passed using the matching local Three.js 0.169.0 module with a stub renderer.
- Verified all five lobe surfaces face outward; deterministic volume sampling produces 1,280 terminal paths; ribbon coordinates are finite; tube radii remain unchanged through respiratory deformation; stronger expiration visibly compresses the lungs early and sends flow farther.
- Verified framing at 0.5, 1.19, 1.5 and 2.5 seconds, including maximum inhalation. Lung geometry remains left of x940; airflow and text remain above the bottom-right citation area. Verified frozen `?t=0` and `?t=0.5`, negative-time clamping, and autoplay for absent/invalid time parameters.
- Inspected CPU geometry previews for lobe separation, branch density, volume, framing and before/after plume extent. They are approximate layout references, NOT browser renders; they omit the final shader appearance and animated light particles.
- Approximately 198,008 triangles, 49 render objects, merged bronchial geometry, cached particle paths and capped pixel ratio. Laptop GPU performance is intended but unmeasured.
- No browser was launched. Final WebGL shader compilation, material appearance and GPU performance still require real browser review. The supplied first-version Chrome images were used as the revision reference.
- Self-contained `index.html`; pinned jsDelivr Three.js 0.169.0; procedural geometry and locally generated inline shadow texture; no build step. All scratch code, geometry previews and the report are in `clips/.qa/`. All writes stayed inside `clips/`.
