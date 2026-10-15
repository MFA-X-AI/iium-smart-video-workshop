# KOP — Java turmeric nanofibres

The result: Java turmeric extract was incorporated into smooth nanoscale fibres, but the loaded fibre disc produced no inhibition zone, while free extract produced only weak inhibition.

## Built scene

A white studio illustration in Three.js: pale glossy gelatine/chitosan shells, a saturated turmeric-gold extract-bearing PCL core, and an ivory comparison core. Both fibres use the same camera and the same axis, with a 3:1 outer-diameter ratio. Clean end sections and quarter-wedge shell windows expose the layers. A circular magnification callout connects the loaded fibre to a bright white felted disc on an open glass agar dish. The adjacent golden-yellow filter-paper disc develops a clearing; the lawn remains flush against the white disc. The two raised physical discs have identical radii and soft contact shadows.

## Revision from supplied r1 frames

- Enlarged the entire dish and its contents by 17%, repositioned to keep a conservative glass boundary below y = 763 and its right edge before x = 1884. The zero-result label sits on clean white below-left of the dish; both result labels use matching 34 px semibold type.
- Replaced the nearly flat lawn with a matte cream texture containing seeded fine grains, local speckle and bump relief. It remains fully opaque outside the free-extract clearing, including at the nanofibre disc rim.
- The clearing only removes lawn opacity. It reveals the same continuous, highly transmissive, low-roughness agar used beneath the whole dish, above a muted amber/sepia studio-reflection texture. No orange annulus or extract plume is added. The boundary feathers over six local units; its midpoint keeps the original 2.64 radius ratio.
- Added visible glass-wall thickness and a rim highlight. Reduced ambient wash and exposure, strengthened the key/fill contrast, deepened soft contact shadows, saturated the core and darkened cut-face contour lines.
- Rebuilt the discs as equal clean raised cylinders, with restrained felt/paper grain and crisp top rims. The nanofibre disc has fewer and lighter surface strands to prevent a grey-smudge appearance. Its contact shadow darkens existing lawn; it does not remove it.

## Intended frames

- **0.5 s:** loaded fibre and cutaway established; both material labels readable; diameter bracket and 120.3–284.2 nm appearing. A faint dish rim (about 17% opacity) and soft shadow compose the right half.
- **1.5 s:** both fibres, comparison label, magnification callout, dish and discs visible. The free-extract clearing is visibly part-grown: about 42% of the radial expansion, outer radius about 1.68 times the disc radius. Result labels are appearing. Title complete.
- **2.5 s:** complete held result, with the weak free-extract zone and zero nanofibre zone labelled. The free-extract clearing has outer radius 2.64 times the disc radius, corresponding to (5 + 8.2) / 5. No clearing is applied around the nanofibre disc.

## Final polish from supplied r2 frames

The lawn now uses pale ivory (#efe6cc with #f3ecd6 highlights). Grain radii and speckle opacity are halved; bump amplitude is reduced to a quarter to avoid exaggerated relief at the smaller grain size. It remains matte, fully covering the agar outside the single clearing. The darker transmissive agar, reflection, discs, glass, fibres, shadows and scientific ratios are unchanged.

The italic species label is on white at the upper-right, clear of the rim. The free-extract result is inset into the pale upper lawn at baseline y = 212, safely below the frame edge and clear of the upper rim, with a shortened leader. Its conservative text-top bound is y = 178, exceeding the requested 70 px margin. The zero-result label stays on white below-left.

The rim/shadow ghost starts at 0.4 s. The full dish fades and settles from 0.95 to 1.30 s; a white compositing veil preserves the existing material appearance during this reveal. Clearing runs from 1.30 to 1.75 s. The free-extract and nanofibre result labels finish at 1.82 and 1.84 s respectively. All stages are absolute functions of time, including frozen captures.

## Evidence and illustration

Paper facts supplied in BRIEF.md: abstract p.341 and p.346/Fig. 2 give loaded fibre diameters 120.3–284.2 nm (10% PCL) and extract-free diameters 374–857 nm (20% PCL). The concentration difference explains the diameter comparison; the scene does not attribute thinning to the extract. Table 1 p.349 and p.350/Fig. 5 give free-extract inhibition of 7.7–8.7 mm (weak) against S. aureus and no inhibition from the loaded nanofibre discs. The reported zone subtracts the 5 mm disc diameter.

Artistic licence: colours, glossy materials, relative core/shell thickness, fibre segment length, cutaway geometry, lawn granularity, lighting and time compression. The paper does not directly image the core–shell structure. The approximately 3:1 fibre width comparison represents the two ranges, not an individual measured pair. Both discs on one dish form an illustrative composite of Fig. 5A and 5C. Clearing animation reveals the reported endpoint; it is not measured growth or diffusion kinetics. No extract release, retention mechanism or molecular transport is animated. The PDF was not reread; the supplied verified brief is the factual source.

## Playback and checks

1920 × 1080 composition, proportionally letterboxed on other viewports. Autoplay runs once for three seconds and holds. `?t=0.5`, `?t=1.5` and `?t=2.5` produce deterministic frozen scenes, including textures. Only Three.js 0.170.0 and its matching addon are imported, through jsDelivr. All other assets are generated inline. Title and significant scene elements avoid the reserved bottom-right rectangle (x ≥ 940, y ≥ 780).

Revision validation passed: module piped directly to `node --input-type=module --check`; exact eight-string whitelist; identical raised-disc radii; unchanged 3:1 fibre diameter and 2.64:1 clear-zone/disc radius ratios; matched result-label styling; conservative projected glass bounds (bottom 762.38 px, right 1883.13 px); and confirmation that the sole clearing mask cannot reach the nanofibre rim. Deterministic animation and pinned imports remain unchanged. Checks ran in memory, with no new scratch files. Earlier files in `clips-v2/.qa/KOP/` describe r1 and were not updated because this revision permits writes only inside `clips-v2/KOP/`.

Final-polish checks also passed: module syntax via stdin, all eight exact strings, nonzero ghost opacity at 0.5 s, full dish at 1.3 s, partially grown clearing at 1.5 s, complete clearing at 1.75 s, both labels complete by 1.85 s, free-label top margin, and unchanged dish bounds. No scratch files were written. The supplied r1 and r2 screenshots were reviewed. No browser was launched; final-polish rendered appearance still needs external frame review.
