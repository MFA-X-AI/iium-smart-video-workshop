# KSTCL — Different dialects. Still understood.

## Evidence and the so what

The Malay dialects of Langkawi and Satun have mixed through community movement and remain highly mutually intelligible: a national border does not prevent neighbours from understanding one another.

The supplied PDF is the correct paper, but all 25 pages are scanned images. Ran the requested uv/pypdf extraction; it returned no text. Extracted and visually read the title/English abstract (printed pp. 167–168) and discussion/conclusion (pp. 187–189), using pypdf image streams and a small PNG encoder. The abstract explicitly reports high intelligibility, community mobility, four lexical items, and GIS isogloss mapping. The conclusion describes historical, migration, education, policy and border influences on dialect distribution. Row 130 of papers.json is consistent with this reading. This is not solely a summary fallback.

Important distinction: despite the title's reference to Thai communities, the studied varieties are Malay dialects. The clip does not claim Thai and Malay are mutually intelligible.

Revision source check: visually read the method on printed p.172 and the dialect distribution maps in Figures 1–2, pp.173–174. The method describes interviews/questionnaires, phonetic transcription and GIS mapping. The figures show dialect-location symbols on administrative maps. They do **not** supply unambiguous, digitizable lexical isogloss curves. The animated dashed layer therefore illustrates the isogloss/GIS method with generalised paths, rather than mislabelling administrative borders as measured linguistic boundaries. The on-map annotation explicitly says “schematic GIS mapping.” No dashed path is attributed to a specific measured pronunciation, village or quantitative result.

## Three shot concepts and critique (before building)

1. **Ink bridges across the strait.** A dimensional hand-drawn map starts with two differently coloured speech traces. They write themselves into lifted calligraphic arcs between Langkawi and Satun; ink ripples answer at the opposite shores. The actual lexical items air, bantal, kelapa, tajam appear along the arcs. Different colours survive the connection.
   - Three-second reading: two places, words, connection; the title supplies the finding.
   - Surprise: flat cartographic ink lifts off the paper into a woven bridge.
   - Honesty: metaphorical language connections, not measured migration routes, acoustic signals or survey isoglosses. No language variety becomes identical to another.
   - Thumbnail: large coastline silhouettes and a high arch make a distinctive composition. Strong cut: the bridge is visibly forming by 0.5 s and complete by 2.5 s.
2. **Border torn, language repaired.** Split a map along a border, then stitch the halves together with words. Immediately legible and dramatic, but suggests political reunification or a historical rupture the paper does not establish. Reject: too easy to misunderstand.
3. **Four lexical washes.** Four word-driven ink washes spread across both shores and reveal irregular isoglosses. Attractive and directly related to GIS, but could be mistaken for measured distributions. Four changing layers are too much to decode in three seconds. Reject: too close to the earlier diagram and harder to keep scientifically honest.

**Selected: concept 1, with a late GIS payoff.** The land is paper relief with pen coastlines, hachures and watercolour washes; the active connection is sculptural and fills the upper/middle frame. After the bridges connect, a labelled schematic of dialect-boundary mapping traces onto the land. A gentle camera push supports this two-stage action.

## Build commitments

- Bottom-left documentary title, serif typography and warm parchment gradient scrim.
- Keep the bottom-right 980 × 300 pixels at 1920 × 1080 free of titles, labels and primary action.
- Three.js 0.169.0, jsDelivr import map, no UI, no attribution, no external image/font dependencies.
- Self-contained procedural paper textures, relief, hand-drawn linework and animated ink paths.
- Geographic shapes, elevations, border, endpoints, arc shapes and ripples are schematic artistic choices. Word labels are the paper's lexical categories, not transcribed regional pronunciations. No quantitative encoding.
- Dashed dialect boundaries are an explicitly labelled schematic of the GIS method. Distinguish them from the faint existing political border and solid decorative contour lines.
- Autoplay: 3-second reveal followed by a brief hold and reset. URL t freezes deterministic states; completed states hold beyond the reveal.

## Post-build critique and validation

Read the implemented scene and sampled its actual Three.js geometry with a Node renderer stub, using the same pinned Three.js revision. No browser was launched.

- **0.5 s:** opposing ink traces draw substantial arches over softly mottled sea washes. The early air and bantal labels are readable. No GIS lines are present yet; the opening retains a clear visual hierarchy.
- **1.5 s:** the four word bridges nearly finish connecting the shores. Labels remain readable. The gentle camera push is halfway through, with a small sideways drift; the title stays fixed at bottom-left.
- **2.5 s:** burgundy dashed dialect-boundary strokes have drawn more than halfway across every land-clipped section, with most nearly finished. “Dialect boundaries / schematic GIS mapping” appears in the upper-left map area. The word bridges remain visible but recede slightly in opacity, making room for the method payoff. The lines finish before 3 s.

The relief, pen contours, maritime strokes and compass commit to the assigned hand-drawn map style. Coastlines and isogloss strokes now have geometric pen-pressure variation instead of relying on unsupported wide WebGL lines. Sea pigment uses layered, feathered watercolour blooms and granulation; the paper has stronger grain and fibres. Place names use individually positioned, slightly rotated italic letters with restrained ink-pressure variation. The bridges cast shadows onto the map in WebGL. North remains up and Satun is northeast of Langkawi. The eyebrow above the title is removed. The camera pushes in six percent and drifts slightly over three seconds; the title overlay does not move.

Validation completed:

- Extracted the module to clips/.qa/KSTCL-open-module.mjs and passed node --check.
- Static Three.js execution passed: finite geometry, valid draw ranges, deterministic non-monotonic time samples, and no animation scheduled with a frozen t parameter.
- Projected all four bridge paths into the camera: their action stays above the lower title/citation band. The title stays left of the reserved bottom-right 980 × 300 pixels.
- Checked 0.5, 1.5 and 2.5 seconds, with additional endpoint framing checks at 0 and 3 seconds. Bridges finish before the GIS reveal starts. Every isogloss section is absent at 1.5 s, over halfway drawn at 2.5 s, and complete at 3 s. Land containment, valid dash draw ranges, camera motion and lower-band clearance pass.
- Roughly 75k geometry vertices and 459 drawable objects, fixed 1920 × 1080 rendering, no postprocessing and no per-frame texture rebuilding. Actual laptop GPU performance is not measured.
- Viewed a browser-free, flat-colour software projection for composition. That reference uses painter sorting and therefore has triangle occlusion artefacts; it is not a WebGL screenshot and cannot verify GPU lighting, shadows, antialiasing or browser font rendering.
- Only jsDelivr is referenced externally, pinned to Three.js 0.169.0. No external fonts, images, UI controls or in-clip attribution.

Revision review used the user's actual Chrome renders at 0.5, 1.5 and 2.5 s. The updated scene was checked through Node and projected geometry; no browser was launched and no new GPU screenshot is claimed. All writes remained under clips/.

Output is index.html, with all artwork generated procedurally. Scratch extraction, geometry reports and the projection reference stay in clips/.qa/. Autoplay repeats every 4.6 seconds: a three-second build/settle, a hold, then a direct reset suitable for selecting a three-second montage cut. Frozen times do not wrap.
