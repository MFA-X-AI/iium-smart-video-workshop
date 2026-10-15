# KOP — bright medical illustration

## Latest render review and revision plan

### Final material refinement from the supplied 2.5-second render

The latest real render confirms that the spinneret, composition and enlarged cutaway work. Preserve their visible geometry and lighting. The deposited material still reads as steel wool: the strands are too thick, too sparsely packed, too grey, and too strongly outlined by individual shadows. Increase winding density while reducing strand diameter, use rough pearly off-white shells with a faint warm interior and a small illustrative scattering fill, and soften the lower-layer shading. Remove sub-pixel strand shadow casting in favour of the existing growing contact occlusion. The fan-like streaks near the enlarged fibre's shadow appear to come from the projected cut-end shadow; remove that hard mesh shadow and retain the existing feathered curved shadow. These are targeted material/shadow changes, not a redesign of the accepted spinneret or cutaway.

Implemented: 640 windings instead of 224; strand radii 0.0055–0.007 instead of 0.014–0.018, approximately 61% thinner. Five radial sides and 48 samples per winding keep the denser mesh at 614,400 triangles across the core and shell. Shells are rough, pearly off-white with 78% illustrative opacity, soft sheen and a restrained warm diffuse fill; the core contributes a faint warm tint. Lower-layer modulation is now 0.82–1.0 rather than 0.54–1.0. These optical settings are artistic approximations, not measured scattering or luminescence. Lighting, spinneret geometry and cutaway materials remain as accepted.

Removed both potential sources of the whisker artifact: the cutaway's hard shadow-map silhouette and the curved shadow's offset triangle strip. Its replacement evaluates smooth distance to a sampled curve on one plane, so tight turns cannot produce overlapping ribbon triangles. Fine mat strands no longer cast individual hard shadows; the growing broad contact occlusion and existing layer separation retain depth.

At 0.5, 1.5 and 2.5 seconds, the same 14.7%, 48.8% and 82.9% of the denser continuous path is deposited. The intended progression is a delicate web becoming a soft layered nonwoven, with the accepted amber cutaway providing the explicit core-shell explanation. The final softness and streak removal still need a real render to confirm; no browser was launched.

Updated CPU checks pass across 181 samples, including continuous jet contact, valid geometry, deterministic seeking and camera/focus, and clear bottom-right space. Across the camera move the mat stays above y=683 and the cutaway above y=725. Both extracted scripts pass `node --check`. This final refinement supersedes the earlier material, shadow and geometry-count descriptions below; all writes remain inside `clips/`.

The user's actual Chrome frames at 0.5 and 2.5 seconds expose failures the previous CPU checks could not: strong ambient illumination washes out almost every surface, the plastic block resembles a toy, and the rectangular title backing reads as UI. The enlarged cutaway successfully explains the core and shell; preserve it. The sparse-to-dense change is present, but the pale lines need weight, shadow and foreground separation to read as fabric.

Before this revision: remove the title backing; build a continuous grey-to-white studio backdrop; reduce ambient fill and add dark reflection flags for polished steel; replace the block with slender nested blunt needles, fine feeds and a short liquid cone; deepen the amber core; add soft grounding shadows and selective soft focus at the front-right edge of the web. A small deterministic camera translation will expose the existing vertical layers. Preserve the exact jet-to-deposition connection, the bottom-left title and the clear citation region. No browser will be launched. This plan supersedes the earlier manifold, fixed-camera and scrim choices documented below.

## Research and the so what

The researchers made tiny fibres carrying a plant extract as a step toward wound-dressing materials, but this formulation did not inhibit the two bacteria tested.

Source: the supplied KOP TOP PDF, previously extracted and read in full for this clip, DOI 10.31436/jop.v6i2.515. The paper's methods (pp. 3–4) put Curcuma xanthorrhiza extract in the **PCL core**, with **gelatine/chitosan outside**. The papers.json summary incorrectly places the extract in the shell. Follow the PDF. The 1% formulation produced no measurable inhibition zones against S. aureus or E. coli (pp. 1, 10–11). No antibacterial success, wound closure or measured release kinetics are illustrated.

The author and journal remain in the HTML source comment and these notes: Mohamad Rosly et al. (2026), Journal of Pharmacy. The updated BRIEF_OPEN.md explicitly prohibits on-screen attribution: the editor adds it later.

## Three concepts and the choice

1. **Liquid becomes a fabric.** Two fluid feeds enter a coaxial spinneret, a compound jet stretches and whips, and continuous fibres accumulate into a nonwoven mat. A foreground cutaway clarifies the nested materials. Lecturer critique: source, action and outcome coexist in one shot; the growing fabric supplies the change and the jet supplies energy. The cutaway supports the story, provided it does not take over as a static diagram. Strongest concept; keep it.
2. **The bacterial assay.** A fibre disc lands on agar and a bacterial lawn develops without an inhibition halo. Lecturer critique: faithful to the negative finding, but the meaningful event is an absence. It needs explanation and is weak in a three-second montage. Reject.
3. **Two fluids become one fibre.** A close view follows the concentric liquids through a nozzle into an isolated enlarged fibre. Lecturer critique: the core/shell structure is clear, but the ending is a static tube and does not communicate fabrication of a useful material. Reject as the whole scene; borrow the enlarged structure as supporting detail in concept 1.

## Critique of the previous directions

The supplied early Chrome frames showed separate white matchsticks, excessive text and an orderly white noodle of a jet. The next version fixed continuity but, according to the user's later render review, made the mat look like gold scribble and the nozzle like a fountain pen. Geometry continuity alone did not make a believable fabric. A large metal shaft with a pointed cone and bright amber lines gave the wrong visual vocabulary.

The new brief assigns KOP a **clean, bright medical illustration on white**, distinct from the montage's dark macro-lab clip. A palette swap is insufficient: lighting, apparatus, fibre hierarchy, composition and typography must all change.

## Scientific licence and implementation constraints

The approximately ten-hour fabrication is compressed into three seconds. Hardware geometry, instabilities, opacity, strand thickness, shadows and enlargement are illustrative rather than measured. The cutaway is a magnified structural illustration of an extract-loaded fibre, not a claim of millimetre-sized fibres. Amber represents extract-loaded PCL, not pure extract. No claim of an antibacterial dressing is made.

The deliverable remains a self-contained index.html, using pinned Three.js modules only from jsDelivr. Autoplay and deterministic ?t= stills remain. Scratch files stay in clips/.qa/. No browser may be launched; validation is limited to the checks described below.

## What changed in this revision

- Removed the title scrim entirely. The title sits directly on a full-frame, seamless grey-to-white studio sweep; no local rectangular overlay remains. The bottom-left title and single experimental-material subline are unchanged, with no on-screen attribution.
- Reduced hemisphere illumination from 1.7 to 0.65 and directional fill from 1.0 to 0.45. Dark reflection flags and narrow white softboxes give the metal alternating light and dark reflections. The studio remains bright; the contrast comes from surfaces and their surroundings, not a dark scene.
- Removed the plastic manifold, broad flange and four bolts. The new compact machined hub connects fine separate feed lines to a polished outer cannula and a projecting inner blunt needle. An opening at the outer tip reveals the nested structure. The short compound liquid cone now occupies 0.26 illustrative world units rather than 0.66; the needle above it is steel, not an elongated amber taper. These are schematic apparatus details, not a reconstruction of the paper's exact hardware.
- Deepened the exposed PCL/extract core from pastel orange to saturated amber, lowered its environmental reflection, and darkened the shell's edge colour. The cutaway retains its longitudinal window, annular end face and real shell thickness. The active jet also has stronger rim shading around its amber interior.
- The mat uses cooler pearl-grey shells with 89% illustrative opacity and stronger shading in its lower layers. Its existing 224 continuous windings and vertical build-up remain. Individual strand shadows are joined by a broad feathered contact shadow that grows with deposition. A separate curved, feathered grounding shadow follows the enlarged foreground fibre.
- Added a restrained 0.34-unit sideways camera translation over three seconds to reveal parallax between the foreground section, mat layers and collector. The whipping jet and accumulation still drive the story. Both camera position and focus are calculated directly from time, preserving deterministic stills and seeking.
- Added selective softness along the front-right fringe of the mat. A world-space anchor controls a feathered nine-tap blur in the finishing pass. This is an illustration treatment, not depth-buffer-based physical depth of field. The exposed cutaway remains outside the main soft-focus patch; the title is HTML and is not blurred.

## Frame critique after revision

The actual supplied Chrome screenshots establish the failures of the preceding version. The following assessments describe the revised code and projected geometry; no new GPU image was rendered.

| Time | Revised coded state | Lecturer's reading / remaining uncertainty |
| --- | --- | --- |
| 0.5 s | 14.7% of the continuous path is deposited. The short liquid cone and steel needle sit above a sparse web. The rich core and cutaway are already visible. Mat bounds are approximately x=554–1664, y=368–680. | The structure is explained immediately, with room to see the web accumulate. The revised reflection contrast should separate real metal from the liquid; exact specular appearance still requires a real render. |
| 1.5 s | 48.8% is deposited. Lower layers are shaded more deeply, grounding occlusion has grown, and the camera has moved relative to the start. The jet joins the current deposition point exactly. | The mat should acquire depth instead of merely acquiring more pale lines. The main event is still the fast whipping jet, not the cutaway or camera. Transparency and shadow balance remain visually unverified. |
| 2.5 s | 82.9% is deposited. Mat bounds are approximately x=521–1707, y=301–683. The front-right fringe receives selective softness while the main structure remains crisp. | A thicker nonwoven web is the payoff. The saturated amber stays concentrated in the exposed structure and active jet. The amount of blur and fine-line aliasing need a GPU render to judge. |

## Checks and limits

- `node --check` passes for both inline scripts extracted from the updated HTML.
- The CPU harness runs the actual cached Three.js 0.169.0 geometry and camera code. Renderer, environment generation and postprocessing GPU calls are stubbed. This does not check WebGL compilation or the final lighting.
- Across 181 time samples: finite jet vertices, valid indices, outward tube faces, synchronized clocks, and zero distance between the jet endpoint and the advancing continuous deposition path. Seeking back to 1.5 seconds reproduces the same jet buffer, camera matrix and projected focus anchor. Frozen URLs schedule no animation frame.
- Verified membrane/cutaway geometry, finite new contact-shadow geometry, and shader-source injection for both the timed surface and its shadow-depth material. Unborn strands still cannot cast shadows.
- Checked the mat, cutaway, spinneret, cone and jet against the editor's bottom-right rectangle at every sampled camera position. No key-geometry vertices enter x=940–1920, y=780–1080. Across the camera move, the complete mat stays above y=684, the cutaway above y=725, and the spinneret inside x=823–1479, y=54–242. The title ends left of the citation region.
- Main geometry counts remain 401,408 membrane triangles, 13,440 jet triangles and 30,724 cutaway triangles. The new contact shadows add only small meshes; foreground softness adds texture taps to the existing finishing pass. One 2048-pixel shadow map remains, and the main draw buffer is capped near 1920 × 1080. FPS has not been measured.
- Runtime modules remain pinned to Three.js 0.169.0 on jsDelivr. No additional runtime assets or controls were introduced.

No browser was launched. GPU rendering, exact colour/transparency, shader compilation and frame rate remain unverified for this revision. All writes stayed inside `clips/`. Deliverables are `clips/KOP/index.html` and this note. The CPU harness and report are `clips/.qa/KOP-medical-check.mjs` and `clips/.qa/KOP-medical-report.json`.
