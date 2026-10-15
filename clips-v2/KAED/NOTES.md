# KAED v2 — architect's presentation sketch

## Research and the shot

Itchan Kala connects commerce and communal worship at its centre while its quieter residential lanes preserve privacy. Read the supplied full paper text, inspected Figure 6, and used the v2 brief as the governing storyboard. Figure 7 supplies the controllability interpretation, not the street colours.

Three concepts considered before building:

1. **Ink plan, then hot-to-cool marker and watercolour.** The real geography appears first; the market and mosque become the focus, then the accommodation connections and quieter lanes emerge. Immediately legible as an architectural drawing, with a strong transformation and a useful final thumbnail. This is the selected, explicitly requested concept.
2. **Two travelling pulses from the mosque.** Could make the two connections clear, but looks like measured traffic or travel time, neither of which the paper supplies. Less honest and less recognisable as a presentation sketch.
3. **Public and private areas revealed by successive tracing sheets.** Gives a pleasing material transformation, but overlaps obscure the actual streets and force the viewer to decode layers in three seconds. Weaker than direct ink and pigment.

## Trace and rendering

Traced the supplied `clips-v2/.qa/KAED/fig6.png` in its native 1518 × 1474 coordinates: wall and gates, Ko'hna Ark notch, eastern caravanserai, both principal axes, secondary streets, simplified beige building footprints and their white courts. Only the map is traced, omitting its printed callouts, icons and legend. The source raster remains a QA reference; it is not a runtime dependency. No v1 files or layout were used.

Refined the suggested anchors against the image. In particular, the source's southeast wall corner is nearer (700, 1430), not (790, 1430). Preserved the observed cool northern end of Tashpulatov and its yellow-green southern continuation; the orange animation emphasises its central connection, not a quantitative change over time. Red market ink starts beside Juma Masjid and runs in both directions. A small minaret and a hypostyle-hall hatch are interpretive architectural marks.

The wall and 60 street traces are hand-entered polylines in the source coordinate system. OpenCV selected the raster's beige building colour, closed tiny raster gaps, and simplified its contours with a 2.4-source-pixel tolerance: 93 candidate footprints and 19 enclosed voids. These were inspected against the original. The mosque and two symbol-interrupted central court footprints were replaced by hand-traced outlines; small voids associated with printed symbols are not treated as measured architecture. The simplified building fabric is subordinate to the traced streets. Roof and minaret details are illustrative, not a measured mosque survey.

The drawing uses SVG with seeded physical texture. Fine ink lines have subpixel lateral jitter, varying pen weight, pressure accents and selected retraced corners. The source vertices remain the anchors. Red/orange marker strokes use irregular filled ribbons, seven pale/dark nib tracks, overlapping passes and darker deposits at stroke starts and ends. Yellow-to-blue washes use six translucent ribbons of varying width to feather their wet edges, broken edge-pooling marks and granular pigment/paper flecks. A faint fixed grain and short paper fibres cover the sheet. The washes are revealed as growing geometry, without masking the plan.

Accommodation and mosque labels use a small custom single-line capital alphabet drawn stroke by stroke. Letter advances derive from each glyph's actual ink bounds, removing the extra bearing around `I`. Three progressively narrower paper-coloured strokes plus a soft paper band form a halo behind each label. The inner band is opaque across the complete letter height, including enclosed letter counters, so grey plan lines and orange pigment cannot cross the lettering. It advances just ahead of the pen rather than clearing the entire unwritten label at once. The title and margin note use embedded drafting-typeface glyph outlines, so no external font or local font installation is needed at playback. The U+2212 minus uses a matching mathematical bar because the drafting font lacks that glyph. All noise comes from a fixed integer seed; there is no per-frame or per-load random variation.

The final polish raises the outline contrast and varies fineliner weight more clearly at half scale. A loose ink ring around Juma Masjid draws from 0.49 to 0.78 seconds, with a short retraced segment finishing at 0.785 seconds. Its label now finishes at 0.775 seconds. The ring is an illustrative emphasis annotation, not a measured boundary or another street. The orange street geometry remains intact; the label's paper halo clears the orange pigment behind the words.

Rotation, simplified footprints and lanes, stroke texture, mosque details, lettering, and timing are artistic licence. Hot-first, cool-last colouring is a reading device, not a simulation of movement or changing integration. Correlations describe the paper's global and local analyses, not two individual streets. The requested note explicitly says both are weak.

## Layout and verification

The plan uses a fixed counter-clockwise rotation of 21 degrees and a uniform scale of 0.69. Source point (540, 740) maps to screen point (818, 562). This leftward adjustment from the brief's estimated centre keeps the southern accommodation circle and orange connection clear of the reserved area. It also makes the traced market route almost exactly horizontal. Screen-coordinate checks cover every red/orange stroke envelope, mosque, lettering and leader against the reserved rectangle x > 940, y > 780.

Following the review correction, the plan has **no mask or clip path**. Footprints, walls and secondary street scenery continue through the bottom-right corner. Key content stays outside that corner through placement alone. The former hard-edged blank rectangle has been removed. The review instruction supersedes the original brief's restriction on background scenery in this area.

| Source anchor | Screen position, rounded |
| --- | --- |
| Market west | (525, 586) |
| Market east | (1026, 585) |
| Juma Masjid centre | (859, 631) |
| Northern zone centre | (820, 269) |
| Southern zone centre | (834, 815) |
| Southeast wall | (1090, 963) |

The title is confined to the left margin. The right note's outer rule ends at y = 744, with its correlation line at x = 1258–1742. Southern zone lettering is placed to the left of the plan with a pencil leader. Every complete key stroke envelope is clear of the reserved rectangle, so its animated prefixes are also clear; this was additionally checked at all 91 sample times, 0–3 seconds inclusive at 30 fps.

`MAIN MARKET STREET` moved left to centre x = 735, retaining baseline y = 564. Its ink box is approximately x = 614–856, y = 545–566, leaving the orange Tashpulatov stroke clear. The remaining label positions, title, plan transform, source street coordinates, colour classes and all wording are unchanged from the reviewed version.

The page is self-contained, uses a fixed 1920 × 1080 viewBox, autoplays through the three-second sequence, and freezes deterministically for `?t=<seconds>`. The completed drawing holds indefinitely. Finite times outside the range clamp to 0–3 seconds; an absent, empty or invalid `t` autoplays. No browser was launched.

## Expected frames

- **0.0–0.2 s:** the sheet shows the title, paper grain and faint drafting guides; no plan marks have appeared yet.
- **0.5 s:** the wall and principal street edges are complete, while **30 of 90 block outlines (one third) and 17 of 53 minor lanes (32%) remain visibly unfinished**. Their fills are delayed until the outlines are nearly finished, preventing filled silhouettes from suggesting a complete plan. Both red market branches remain 50% drawn, with their main passes running from 0.30 to 0.70 seconds. Juma Masjid lettering and its emphasis ring are starting.
- **0.8 s:** all base ink is complete (last base-ink stroke finishes at approximately 0.778 seconds), and the mosque ring and label are complete. The remaining label and colour timing is retained.
- **1.5 s:** red market route and orange connections complete, both accommodation circles labelled, yellow and green washes beginning.
- **2.3 s:** all colouring, annotations and the full three-line margin note are complete. The final drawing record finishes at 2.29 seconds.
- **2.5 s:** hold the completed sheet, including both full correlation values and `both weak`. Continue holding after three seconds.

## Verification results

- `node --check clips-v2/.qa/KAED/script-check.js` passes on the script extracted from the final HTML.
- `node clips-v2/.qa/KAED/verify.cjs` checks all 91 frame times, repeated-run SVG hashes, geometry envelopes, displayed-number whitelist, annotation bounds, valid coordinates, final-frame hold and absence of external runtime resources. It also compares the street coordinates, class colours and all wording with the saved pre-revision baseline, verifies that there is no plan mask, and checks the revised half-second and annotation-completion timing. Additional checks require no plan marks through 0.2 seconds, approximately a third of blocks/minor lanes unfinished at 0.5 seconds, completed wall/principal edges at 0.5 seconds, base ink complete by 0.8 seconds, and opaque paper halos for every on-plan label.
- A minimal in-memory DOM exercises the actual frozen-page bootstrap and autoplay callback loop. Frozen pages schedule no animation; autoplay stops after three seconds and matches the frozen endpoint. This is a script-level check, not a browser performance test.
- Inspected revised non-browser raster exports at 0.5, 0.8 and 2.5 seconds, confirming visibly unfinished blocks/minor lanes, the mosque emphasis ring, darker ink, clear label interiors, and the retained completed margin note. Exports also cover 0, 0.2, 1.5, 2.3 and 3 seconds.
- The installed MuPDF SVG renderer does not implement SVG dash offset. QA expands each ink stroke to its exact geometric prefix; the brush ribbons already use explicit growing paths. The complete frame is now rendered directly, with **no corner compositing**. These stills verify composition and timing without a browser; actual revised browser rasterization and frame rate were not measured. The supplied Chrome review frames were used as the visual baseline.

QA scripts, trace data, frame SVGs/PNGs and `verification.json` live only in `clips-v2/.qa/KAED/`. The deliverable HTML embeds everything it needs and does not read those files.
