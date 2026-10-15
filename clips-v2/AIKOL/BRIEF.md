# Astra brief: AIKOL v2 clip (TOC in Malaysia: five crimes, five laws, two UN protocol gaps; linocut)

Read `clips/BRIEF_OPEN.md` for the general rules (no UI chrome, title position, no attribution in the
clip, bottom-right 980x300 px kept clear, `?t=` freeze), except where this brief overrides them.
**Overrides:** the visual style is NOT "restrained editorial, ink and paper". It is a **woodcut/linocut
print: carved black lines, ONE spot colour (vermilion), paper grain**, 2D canvas. The crime labels, Act
stamps and seals below are required content, not UI chrome. Title stays centred at the top.
Do NOT modify anything in `clips/`. v1 (`clips/AIKOL/`) showed ink routes rerouting around a red seal
("Crime finds new routes into Malaysia"); do NOT repeat that concept: no rerouting, no new-path
branching, no flowing ink routes.

The full proposal is `clips-v2/AIKOL/PROPOSAL.md` (read it). Paper text: `clips-v2/.qa/AIKOL/paper.txt`
(page refs are printed journal pages 219-239).

## Headline result (what the clip must show)
The paper examines five forms of transnational organised crime and the law governing each (Table 3,
pp. 229-231). All five have a Malaysian Act. But for two, Malaysia stands outside the UN protocol:
it "has not yet ratified the Protocol against the Smuggling of Migrants by Land, Sea, and Air" (p. 232)
and "is not a signatory or State Party to the Firearms Protocol" (p. 233). Three of the five (drugs,
migrants, firearms) move through the porous Malaysia-Thai border (p. 228).

## Exact on-screen text (spell it exactly; no other words except THAILAND / MALAYSIA and the title)
Lane labels (carved caps) and black Act blocks:
1. DRUG TRAFFICKING — "Dangerous Drugs Act 1952"
2. HUMAN TRAFFICKING — "ATIPSOM 2007"
3. SMUGGLING OF MIGRANTS — "ATIPSOM 2007"
4. ILLICIT FIREARMS TRAFFICKING — "Arms Act 1960 · FIPA 1971"
5. CYBERCRIME — "Computer Crimes Act 1997"
Vermilion seals (only these two lanes):
- lane 3: big "NOT RATIFIED", small beneath "UN Migrant Smuggling Protocol"
- lane 4: big "NOT A STATE PARTY", small beneath "UN Firearms Protocol"
Country labels on the land: "THAILAND" (north), "MALAYSIA" (south), carved spaced caps, secondary size.
Nothing on lanes 1, 2, 5 about UN status (no "ratified" tick, nothing): the paper doesn't state it.
No statistics, no other numbers, no Golden Triangle arrow, no citation.

## Title (centred, top, carved/woodtype lettering in black)
**"Five crimes; Malaysia outside two UN protocols"**

## Geography (real data, required)
Fetch `https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-50m.json` (or countries-10m.json),
decode with `topojson-client@3.1.0` (+esm from jsDelivr), draw with `d3-geo@3.1.1` (+esm). Do not hand-
draw or invent coastlines. Malaysia id 458, Thailand id 764. Fit a Mercator projection so the
Malaysia-Thailand land boundary (from the Perlis/Satun west coast to the Sungai Golok mouth on the east
coast; compute it with topojson `mesh` between 458 and 764) spans roughly x 230-1690 at mid-height
(y ~ 430-560). Visible: southern Thailand above, northern Peninsular Malaysia below, Strait of Malacca
left, South China Sea right. Verify by projecting the border endpoints; adjust, don't trust my numbers.
Land: cream paper with sparse carved texture; sea: dense horizontal gouge hatching in black; coastline
a strong carved black line; the border a thick carved black line with a notched/chisel edge.
Handle loading: freeze-frame must wait for the fetch (render only after data is ready, then draw time t).

## Layout (1920x1080)
- Title: centred, y ~ 40-170, over a light paper-tone scrim if needed.
- Five vertical carved channels (schematic, artistic licence) at about x = 330, 640, 950, 1260, 1570,
  running from y ~ 230 in Thailand down across the border. Each channel: two parallel gouge lines with
  a small carved emblem at its top (parcel/packet; figures in a line; a small boat with figures; a
  rifle; a laptop or @ with a signal zigzag for cyber, which crosses as a signal, not a path).
- Crime labels in Thailand above the border near each channel top (y ~ 240-360), max 2 lines each.
- Black Act blocks centred on the border crossing of each channel (y ~ 470-600): a carved black
  rectangle with the Act name reversed out in paper colour (white-line lettering), like a relief seal.
- Vermilion seals on lanes 3 and 4 just below their Act blocks (y ~ 610-760), slightly rotated
  (-4 and +3 degrees), rough ink-edge, visibly over-inked, readable.
- **Bottom-right 980x300 (x > 940, y > 780) must contain no text, no stamps, no channels, no
  emblems:** only map hatching/land texture. Channels end above y ~ 770. Check every frame 0-3 s.
- Everything must be readable when the video is scaled to half size: crime labels >= 30 px, Act text
  >= 28 px, seal big text >= 44 px, title >= 70 px.

## Storyboard (0-3 s)
- 0.0-0.6 s: a roller sweeps left to right and "pulls" the print: map appears behind the roller edge
  (with slight ink unevenness). Channels carve downward in stepped gouge strokes; labels appear.
- 0.5 s: map printed; channels about half carved; crime labels appearing.
- 0.6-1.3 s: five black Act blocks press onto the border, left to right, ~0.12 s apart; each lands with
  a press thump (1-2 px jolt, brief scale 1.04 -> 1.0, ink squash at edges). Stepped motion, ~12 fps feel.
- 1.3-2.0 s: vermilion seal on lane 3 slams down (~1.35 s), then lane 4 (~1.65 s); a few ink specks.
- 1.5 s: all five Act blocks printed, first red seal landed.
- 2.0-3.0 s: hold; faint paper/ink settle. Everything readable at 2.5 s.

## Style
Cream laid paper with grain and faint chain lines; black relief ink with carving character: gouge
chatter, V-tool line ends, small ink voids, slightly uneven registration. ONE spot colour, vermilion
(~#d23a1e), only on the two seals. No gradients except paper texture and the title scrim. All noise
seeded (deterministic for ?t=).

## Honesty (HTML comment at the top)
From the paper: the five crime categories and their labels (Table 3, pp. 229-231; abstract p. 220);
the Malaysian Acts (Table 3; FIPA = Firearms (Increased Penalties) Act 1971, p. 233); "not yet
ratified" the Migrant Smuggling Protocol (p. 232); "not a signatory or State Party" to the Firearms
Protocol (p. 233); drugs, migrants and firearms crossing the porous Malaysian-Thai border (p. 228).
Geography: world-atlas 2.0.2 (Natural Earth), unmodified.
Artistic licence: channel positions (schematic, not real routes), emblems, cybercrime drawn as crossing
the border, stamp timing, linocut rendering. Only one Act per crime shown where Table 3 lists several.

## Hard constraints
- One self-contained `clips-v2/AIKOL/index.html`, 1920x1080, auto-plays, `?t=<seconds>` freezes it
  deterministically (captured frame by frame at 30 fps for 3 s).
- 2D canvas/SVG; only pinned jsDelivr libs (d3-geo, topojson-client, world-atlas). No other CDNs, no
  build step. Web fonts: none from other CDNs; use system serif (Georgia etc.) or draw lettering.
- No citation/attribution in the clip. Keep the bottom-right 980x300 px free of title and key action.
- Write NOTES.md (concept, what's on screen at 0.5/1.5/2.5 s, honesty notes).
- Never launch a browser. Check the module script with `node --check` on an extracted copy.
