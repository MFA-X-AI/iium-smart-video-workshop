# KAHS — a paper window into the endometrium

The finding: in this small study, the obese PCOS group had about a quarter of the normal-weight PCOS group's womb-lining integrin mRNA, while mucin-1 and E-cadherin showed no significant difference. The clip makes that expression comparison tangible without depicting clinical outcomes.

## Source and interpretation

Read all seven pages of the local paper, `papers/KAHS/TOP_2025_Obesity_results_in_lower_integrin_expression_in_women_with_polycystic_ovarian_syndrome_dur.pdf`, using `pdftotext -layout`. The specified `uv ... pypdf` extraction could not fetch its dependency under the network restrictions; the installed text extractor provided the full article. Also inspected the existing page 4 and page 5 PNGs in the permitted QA directory: the BMI means, printed p = 0.090 and other figure p-values agree with the brief. The approximate 0.27 bar-height estimate comes from the supplied brief and was not independently remeasured. No v1 KAHS files were read.

- Pages 1–3: four groups of ten, endometrial sampling during the window of implantation, RT-qPCR, GAPDH normalization, and the 2^-ΔΔCt method.
- Table 2, page 4: PCOS mean BMI 23.05 and 31.25 kg/m².
- Figure 1, page 4: comparison normalized to 1.0; obese PCOS approximately 0.27, as estimated in the brief. Printed p = 0.090. This exceeds the paper's p < 0.05 threshold despite the prose describing a significant reduction. The clip follows the binding headline but does not claim statistical significance or establish causation.
- Figure 2, page 5, and text on page 6: no significant differences in mucin-1 and E-cadherin.
- Paper tabs and strip are proxies for relative mRNA, not measured receptor counts. The 15 versus 4 raised tabs is an illustrative discretization. Stylized tissue, gland openings, adipose thickness, equal-sized secondary markers, colour, texture, light and motion are artistic licence. BMI was measured; local fat thickness was not. No implantation or pregnancy outcome is represented.

## What was built

The prescribed concept: two stacked, extruded paper tissue slices with scalloped epithelium, actual gland cut-outs, cream adipose paper and ochre fork tabs. Six rose sheets form exposed terraces: each successive front sheet is shorter, with a torn lower edge, pale cut edge, 4.5-unit thickness and 13.5-unit air gap. Seven cream sheets sit below. Three large pale cream/blush paper hills stand at different depths behind the slices. Stronger seeded canvas fibres supply colour and bump texture. Three warm upper-left window-light samples retain local PCF soft shadows on the tissue and base cards, with reduced ambient fill to bring out the gaps.

Final shadow correction: the distant backdrop, hills and two new wavy ground sheets neither receive rig shadows nor cast large silhouettes. The hills' side boundaries are outside the frame and their right contours slope below the title area. Short feathered contact seams suggest separation between the scenery sheets. Two bounded procedural elliptical shadows sit beneath the base cards. These scenery seams and contact shadows are illustrative, not a physical shadow simulation. The lower frame is continuous pale cream/blush paper, without the whole rig's projected silhouette.

A shared left-to-right hinge wave raises all fifteen tabs on the left and four irregularly spaced tabs on the right (positions 1, 5, 10 and 14). Eleven dark fork recesses stay flat. Gold tabs have physical shallow V-folds, 2.5-unit card thickness, dark score lines and cast shadows. Paper ribbons emerge from the tissue to a common full-scale length, stopping at 1.0 and 0.27. Separate raised cardstock rails frame the unfilled grooves. The value tags sit above the ribbon ends, leaving both grooves visible.

Each slice has three lilac fronds and three teal zipper tabs at identical alternating positions on a separate front row. Their local scale is now 1.4, exactly 70% of r2's scale of 2. They pop up together from 1.9 to 2.3 seconds. Positions and colours are unchanged, but the smaller silhouettes leave more epithelium visible and give the gold tabs priority. Their row is closer to the camera than the gold row, so the dense left-side integrin tabs do not hide the teal markers. Equal marker geometry and counts are illustrative, not a claim that measured group means were identical.

The frame is a 1920 × 1080 composition with system Georgia typography, warm off-white stock, a right-middle title scrim, and the lower-right attribution area reserved. The physical stage is enlarged independently of the title, with deeper epithelial decks and taller tissue. Group labels start at y = 150. A blurred radial scrim fades out on all sides behind the title. One shared relative-mRNA label is centered below the two strips; its scrim now also fades on every side with a blurred radial gradient, replacing the rectangular horizontal fade. A pinned Three.js import map is the sole external dependency. Every motion is a pure function of time; `?t=` clamps to the three-second shot and freezes it.

## Frame critique and verification

Reviewed the user's real Chrome r2 stills at 0.5, 1.5 and 2.5 seconds. The paper stack, folded tabs, unobstructed groove and equal marker counts work. The final revision addresses only the large distant shadow, over-prominent secondary markers and relative-label scrim. The distant shadow was caused by scenery receiving the rig's projection; the in-frame hill boundary also caused a hard edge near the title. Those shadow receivers and in-frame side boundaries have been removed. The following describes expected final frames from code inspection; no final render was produced and no browser was launched.

| Moment | Expected frame and critique |
| --- | --- |
| 0.5 s | The r2 composition and reveal remain: four left tabs and the first selected right tab are moving, and the ribbons have not begun. Local paper shadows remain, but the distant stage cannot receive the whole-rig projection. Pale ground sheets and small base-card contact shadows replace the lower-frame parallelogram and ghost bars. The first-frame comparison is intentionally incomplete; the following second resolves it. |
| 1.5 s | All fifteen left tabs and exactly four right tabs stand, with eleven flat recesses on the right. The strips finish at 414 and 111.78 local units, a ratio of exactly 0.27. Number tags sit above their tips with more than ten pixels of clearance from the groove's upper rail. The empty right track remains visible across its full unfilled length. The title is fully visible over its soft radial scrim. The single shared mRNA label removes repeated text. |
| 2.5 s | Three lilac fronds and three teal zipper tabs stand at the same positions on each slice, now 30% smaller than r2. More of the epithelium remains visible and the gold tab heads retain priority. The note is fully visible at the lower left; printed n and p remain under the right slice. Hinge wobble and parallax are unchanged. The final marker balance and soft contact shadows still require visual confirmation in a new render. |

Projected tissue and marker bounds across the three requested times are approximately x = 72–619 on the left and x = 662–1209 on the right, y = 273–705 on the left and y = 273–733 on the right. Group tags extend the subject composition up to y = 150; paper pages extend beneath the tissue. The shared relative label ends at x = 900 and the secondary note at x = 905, both left of the reserved corner. The sample-size/p-value line ends at y = 773.6. The title retains its right-middle position. Only decorative paper and shadows may extend behind the reserved corner. No controls, axes, citations or outcome imagery appear in the clip.

Revision checks performed:

- Piped the actual module directly to `node --check --input-type=module`; passed without writing an extracted file.
- Compared SHA-256 fingerprints before/after this final revision: visible HTML markup, the full motion/render/resize/freeze code, and the secondary-marker position list are unchanged. Thus all text, numbers, counts, timing, positions and freeze behavior are preserved.
- Checked that marker scale changes only from 2 to 1.4, a 30% reduction, and that all distant scenery disables projected shadow reception. Scenery's vertical side boundaries now sit at x = −300 and x = 2220 in screen coordinates, outside the frame.
- The prior projection checks for the unchanged tissue/deck/gold geometry and value-tag clearance still apply. Smaller secondary markers remain inside those conservative bounds; no text has moved.
- Frozen time remains clamped to [0, 3]; the frozen branch performs one synchronous render after module initialization and never schedules animation frames. Normal playback begins at zero and holds at three seconds. The 1.9–2.3-second secondary popup and all other r2 timing are unchanged.
- This revision writes only `clips-v2/KAHS/index.html` and `clips-v2/KAHS/NOTES.md`. Earlier QA artifacts were not updated or used as evidence for the final revision.

Remaining validation limit: final WebGL rendering, contact-shadow appearance and font layout have not been rendered here, as requested. The supplied Chrome stills verify that r2 runs in the review environment. The page still requires WebGL and access to the pinned jsDelivr Three.js module; all paper and shadow textures are generated locally. GPU performance has not been benchmarked.
