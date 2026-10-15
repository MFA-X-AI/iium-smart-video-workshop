# AIKOL — five crimes, two protocol gaps

The paper's finding: Malaysia has domestic laws covering all five crimes examined, but the paper identifies two UN protocols to which Malaysia is not a party; domestic legislation and international participation are distinct.

## Concept selection (before implementation)

1. **Pull a legal woodcut.** A roller reveals the real border and five schematic carved channels. Five black domestic-law blocks press onto their crossings, followed by two vermilion protocol-gap seals. The sequential printing makes the contrast visible in three seconds and leaves a strong final print. The labels require careful spacing; this is the selected concept and the supplied proposal.
2. **Five separate woodblocks assemble.** Crime emblems and Acts lock together, then two red impressions expose the gaps. The transformation is clear, but separate blocks would look like a chart and lose the border's meaning.
3. **A print takes two impressions.** A complete black legal print lifts to reveal two missing treaty impressions in red. Strong reveal, but blank spaces could imply the absence of domestic laws. Less faithful and less immediately legible.

## Frames checked after implementation

- **0.5 s:** undistorted map fully pulled; labels and emblems visible, channels approximately 40–55% carved; no Acts yet. The peninsular coastline, sloping land border and deep Betong salient are visible. Thailand and Malaysia are horizontal labels on their respective land areas.
- **1.5 s:** all five domestic Act blocks printed; migrant protocol seal has landed; firearms seal has not yet landed. The first treaty gap contrasts with the complete set of domestic laws.
- **2.5 s:** both red seals and all Acts readable; the complete print holds. The migrant seal sits below Betong, with its protocol name on one line. The firearms seal sits below the eastern Act block. Malaysia's country label sits farther down the peninsula. The lower-right reserve contains only geography and texture.

## Honesty

Read the supplied paper text, particularly the abstract (printed p. 220), Table 3 (pp. 229–231), migrant protocol discussion (p. 232), firearms discussion (p. 233), and border discussion (p. 228). This visual reports the paper's findings, not an independently updated treaty-status audit. No UN status is asserted for drugs, human trafficking, or cybercrime. Black stamps denote domestic legislation, not proof that enforcement stops these crimes.

The map uses unmodified world-atlas 2.0.2 Natural Earth topology, decoded with topojson-client 3.1.0 and projected with d3-geo 3.1.1 using an **undistorted Mercator projection with uniform scale**. Channel positions and bends are schematic; emblems and print timing are illustrative. The cybercrime signal and Act block sit just east of the Golok mouth, over the sea, as an explicitly schematic digital crossing. Channels are not measured routes or evidence that all five crimes use these crossings. Label and stamp footprints are typographic overlays, not geographic areas. Some crime headings sit over the sea for readability. Selected Acts are shown rather than every statute in Table 3; the firearms block names both Arms Act 1960 and FIPA 1971 (Firearms (Increased Penalties) Act 1971).

## Validation

- `node --check clips-v2/AIKOL/qa/module.mjs` passes on the module extracted from the completed HTML.
- Executed the actual drawing code using the existing native `@napi-rs/canvas` installation, with cached copies of the specified geography and library versions. Inspected rendered PNGs at 0.5, 1.5, and 2.5 seconds. No browser was launched.
- Checked all 91 frames from 0 through 3 seconds at 30 fps: no red ink in the reserved rectangle; its pixels stay identical once the map is revealed. Non-title content is clipped outside y<190 and outside x>=940, y>=780. The lower-left region remains available for the migrant seal and Malaysia label.
- Repeated renders at frames 0, 15, 45, 75, and 90 produce identical PNG hashes. The `?t=2.5` path waits for geography before rendering and never schedules animation.
- Geography/validation report: `qa/report.json`; frame PNGs and audit script are alongside it. QA files are not dependencies of the HTML. All revision writes stayed inside `clips-v2/AIKOL/`.
- Independently fitted the requested Mercator projection and compared sampled coordinates. Lanes 1–4 each intersect the real shared border exactly once, at the centre of their Act block. The cybercrime signal is a vertical schematic column offset 280 px east of its Golok-mouth anchor. Full country-label bounds are on the named country; both seal centres are in Malaysia.
- Title is 74 px; crime labels 36 px; Act lettering 28 px on lanes 1–3 and 26 px on lanes 4–5; main seal lettering 44 px; both protocol names 24 px on one line. Measured all Act and protocol text against the block widths. System Georgia and Impact; no web fonts. All wording is preserved, including the two-line title. The eastern Act blocks use two lines with clear left-to-right separation.
- Across all 91 frames, the minimum conservative gap between the eastern Act blocks and between either of them and lane 3 is **22.37 px**, including press enlargement, rotation, jolt and rough-edge bounds. The firearms seal sits directly below the Arms block and stays clear of every nearby block; its conservative maximum y, including ink specks and impact, is **773.93**.
- Both previously reported coastline-sliver regions beneath the title remain identical to the unprinted frame throughout all 91 frames. The geography layer begins at y=195, without obscuring the nearby emblems.
- Runtime uses only the specified pinned jsDelivr imports and world-atlas fetch. Direct shell downloads were unavailable in this environment, so validation used the existing cached data. Live CDN loading and browser-specific text rasterization were not tested. `window.__AIKOL_READY` and `data-ready="true"` expose completion to a later capture tool; loading failures mark `data-ready="error"` and log the error without adding unrequested on-screen words.
- Auto-play starts after geography arrives, plays once over three seconds, then holds. `?t=` clamps finite times to 0–3 seconds. All texture and edge roughness is seeded. The original Act order/times (0.60, 0.72, 0.84, 0.96, 1.08 s) and seal times (1.35, 1.65 s) are unchanged.

## Undistorted geography and crossing layout

`geoMercator().fitExtent([[0, 0], [1920, 1080]], fitBox)` fits the four corners of **99.4–103.4 E, 5.0–7.6 N**, followed by `clipExtent([[0, 0], [1920, 1080]])`. Four corner points describe the requested coordinate box without great-circle bowing along its constant-latitude edges. No additional geographic transforms are applied. The shared border is computed with `topojson.mesh` between country IDs 458 and 764.

The resulting border is **818.92 px wide**, rather than the approximate 950 px in the review. Its full bounds are x=431.07–1249.99, y=380.30–815.70. The west coastal endpoint is higher than the eastern endpoint, with the Betong salient reaching y=815.70. These are results from the specified fit, not manually adjusted targets.

Verified coastal endpoints:

| Endpoint | Source longitude, latitude | Final pixel x, y |
|---|---|---|
| Perlis/Satun, west | 100.118801, 6.441200 | 431.07, 482.02 |
| Sungai Golok mouth, east | 102.102421, 6.241559 | 1249.99, 564.95 |

The first four Act centres sample the projected border's length from west to east. The cybercrime block uses a small offshore displacement to keep the eastern columns separate. All five centres read strictly left to right:

| Lane | Fraction of border length | Act centre x, y |
|---|---|---|
| Drug trafficking | 9% | 483.94, 381.25 |
| Human trafficking | 25% | 674.04, 466.87 |
| Smuggling of migrants | 50% | 804.26, 713.04 |
| Illicit firearms trafficking | 97% | 1234.02, 604.43 |
| Cybercrime | 99.9% anchor, then 280 px east | 1529.28, 566.20 |

Blocks descend toward Betong, then rise along the eastern return of the border. Their print order still follows the five crime categories. The firearms channel descends straight from its heading to the east leg; its seal shares the block's x coordinate. The cybercrime channel is a vertical carved zigzag from its heading through its separate offshore block. The drug channel has an exposed downward segment below its label before turning into the Dangerous Drugs block. All text and all animation timings are unchanged.

Land is paper with sparse dark gouge flecks and occasional white-line relief. Sea retains dense horizontal black hatching. The 11 px notched border is heavier than the 4.3 px coastline. Seeded ink voids texture the title and black Act blocks; gouge chatter is confined to coastline ink. Vermilion is used only for the two protocol seals.
