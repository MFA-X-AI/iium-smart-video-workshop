# Astra brief: KENMS v2 clip (Indonesia's provincial human-capital gap, Swiss flat data art)

Read `clips/BRIEF_OPEN.md` for the general rules (no UI chrome, title position, no attribution in the
clip, bottom-right 980x300 px kept clear, `?t=` freeze), except where this brief overrides them.
**Overrides:** the style is NOT "data-art infographic, extruded map". It is **Swiss-style flat data art:
bold grid, flat colour, strong typography, strictly 2D** (no extrusion, no 3D, no three.js). The callouts,
the small class key and the gap strip below are required content, not UI chrome. Do NOT modify anything in
`clips/`, and do not reuse v1's (`clips/KENMS/`) schematic province positions: use the real boundaries.

Full proposal: `clips-v2/KENMS/PROPOSAL.md`. Paper text: `clips-v2/.qa/KENMS/paper.txt`. Reference renders:
`clips-v2/.qa/KENMS/p15.png` (the paper's Fig. 2 map) and `p21.png` (Fig. 5, the range series).

## Headline result (what the clip must show)
The gap between Indonesia's best and worst province did not close in 2011-2019. DI Yogyakarta (average
78.16) is the top province and Papua (59.63) the bottom one in every year, and the range between the
highest and lowest province was 19.46 points in 2011 and still 19.40 in 2019 (Tables 5-6, Fig. 5; the
paper: "no clear evidence of convergence").

## Geography (real, required)
Use `clips-v2/.qa/KENMS/prov-simple.json`: a GeoJSON FeatureCollection of the study's 34 provinces
(simplified by me from the pinned file https://cdn.jsdelivr.net/gh/ans-4175/peta-indonesia-geojson@1.0/indonesia-prov.geojson,
BAKOSURTANAL/Dukcapil boundaries). `properties.name` already matches the Table 6 names below exactly.
**Embed it inline in index.html** (about 138 KB) so the clip is self-contained and deterministic. Project
with d3-geo (pinned, from jsDelivr, e.g. `https://cdn.jsdelivr.net/npm/d3-geo@3.1.1/+esm` or the UMD
`d3@7.9.0`) using geoMercator, or write a tiny Mercator yourself (simplest and safest: no dependency). My
fit: Mercator fitted to x 100-1820 puts the map at y ~180-813, with DI Yogyakarta ~(671, 697), DKI Jakarta
~(537, 635), Bali ~(854, 719), Papua centre ~(1768, 600) spanning x 1564-1820 / y 425-745, Kalimantan
Timur ~(887, 397), Sulawesi Barat ~(1008, 485). Verify with your own projection and adjust. DI Yogyakarta
is tiny (~30 px): give it a thin black outline so it reads, and do NOT enlarge or displace it. Draw every
province (small islands included in the file), with thin off-white borders between provinces.

## Data (Table 6, pp. 12-13: 2011-2019 average HCI, 0-100 scale, and category). Use exactly.
```
DI YOGYAKARTA 78.16 Very High
DKI JAKARTA 74.61 High
KALIMANTAN TIMUR 74.02 High
BALI 74.02 High
SULAWESI UTARA 72.61 Moderately High
JAWA TENGAH 72.56 Moderately High
KEP. RIAU 71.92 Moderately High
KALIMANTAN UTARA 71.38 Moderately High
JAWA TIMUR 71.03 Moderately High
SULAWESI TENGGARA 70.97 Moderately High
JAWA BARAT 70.70 Moderately High
LAMPUNG 70.29 Moderately High
SULAWESI SELATAN 70.01 Moderately High
BENGKULU 69.94 Moderately High
JAMBI 69.42 Moderately High
SUMATERA SELATAN 69.37 Moderately Low
RIAU 69.18 Moderately Low
NUSA TENGGARA BARAT 68.92 Moderately Low
GORONTALO 68.81 Moderately Low
KALIMANTAN TENGAH 68.80 Moderately Low
MALUKU UTARA 68.74 Moderately Low
KEP. BANGKA BELITUNG 68.66 Moderately Low
SUMATERA UTARA 68.37 Moderately Low
KALIMANTAN SELATAN 68.00 Moderately Low
NUSA TENGGARA TIMUR 67.96 Moderately Low
MALUKU 67.88 Moderately Low
SUMATERA BARAT 67.76 Moderately Low
BANTEN 67.59 Moderately Low
SULAWESI TENGAH 67.26 Moderately Low
PAPUA BARAT 67.14 Moderately Low
ACEH 66.96 Moderately Low
KALIMANTAN BARAT 66.87 Moderately Low
SULAWESI BARAT 64.46 Low
PAPUA 59.63 Very Low
```
Classes (Table 4, Sturges' rule): Very Low 58.22-61.94, Low 61.94-65.66, Moderately Low 65.66-69.39,
Moderately High 69.39-73.11, High 73.11-76.83, Very High 76.83-80.55. Colour each province by its
Table 6 category (as above).

Annual range = highest minus lowest province, Fig. 5 (p. 21), use exactly as printed:
```
2011 19.46 | 2012 16.10 | 2013 16.33 | 2014 16.54 | 2015 18.94 | 2016 19.44 | 2017 20.77 | 2018 19.81 | 2019 19.40
```
In every one of those years the highest province is DI Yogyakarta and the lowest is Papua (Table 5).

## Layout (1920x1080)
- Ground: warm off-white paper (e.g. #f1eee6), a visible 12-column modular grid in very faint hairlines,
  plus 2-3 bold black horizontal rules as Swiss structure (e.g. a heavy rule under the title band).
- Title top-left, SMALL (BRIEF_OPEN: "top-left, small"), bold grotesk, flush left, x ~80, y ~50-140:
  **"Indonesia’s human-capital gap did not close, 2011–2019"** (en dash, curly apostrophe). May wrap to 2
  lines. No eyebrow, no citation.
- Map: as above, x 100-1820, y ~180-815.
- Class key: six small flat squares in a row, top-right area (e.g. x ~1380-1820, y ~70-130), labelled only
  "Very low" at the left end and "Very high" at the right end, plus a tiny caption "Average HCI 2011–2019
  (0–100)". Keep it minimal and typographic.
- DI Yogyakarta callout in the Indian Ocean south-west of Java (e.g. x 110-470, y 700-840): name in bold
  small caps "DI YOGYAKARTA", big numeral "78.16", small "2011–2019 average". Thin black leader line to
  the province (route it below Java's south coast).
- Papua callout in the Pacific above Papua (e.g. x 1480-1820, y 200-380): "PAPUA", big "59.63", small
  "2011–2019 average", leader down to Papua.
- The gap: a signal-red rule (e.g. #e3241b, 5-6 px) drawn from DI Yogyakarta to Papua across the map,
  with small end ticks. It is a connector, not a scale; its length encodes nothing.
- Gap strip, bottom-left (x 100-900, y ~870-1040, must stay x < 930): label "Gap between the highest and
  lowest province, each year"; nine flat red bars on a zero baseline (height proportional to value from
  0, not truncated), year labels 2011 ... 2019 under them, the value above each bar in small type; the
  first and last values (19.46, 19.40) in larger bold. Then a bold line: "DI Yogyakarta top, Papua bottom,
  all nine years". You may shorten wording to fit, but not change any number.
- **The bottom-right 980x300 px (x > 940, y > 780) must hold no text, no callout, no red rule, no bars.**
  Only the southern edge of NTT / Papua fills and the paper grid may pass through it. Check at every frame.

## Storyboard (0-3 s)
- 0.00-0.25 s: grid, rules and title already set (title may slide in a few px, but readable by 0.3 s).
  Province outlines (thin hairline) present as empty shapes.
- 0.15-1.00 s: provinces snap to their flat fill class by class, Very High first, then High, Moderately
  High, Moderately Low, Low, Very Low (Papua last, at ~0.95 s). Each class step is a crisp cut or a
  ~80 ms fade, with a tiny stagger inside the class; the matching key square fills at the same time.
  Do not sweep west-to-east or radiate from a point: the paper finds no significant spatial clustering
  (Moran's I 0.051, p = 0.116), so the reveal must not suggest a geographic wave.
- 0.5 s check: Very High, High and Moderately High in; DI Yogyakarta callout sliding in.
- 0.45-1.15 s: callouts slide in (short eased move, ~250 ms each): DI Yogyakarta at ~0.45 s, Papua at
  ~0.95 s (with its fill). Numbers appear final; do NOT count up.
- 1.05-1.45 s: the red rule draws from Yogyakarta to Papua.
- 1.25-2.05 s: bars rise one per year (~90 ms apart), each bar's value appearing as it lands; a large red
  year/value readout may step alongside ("2011  19.46" ... "2019  19.40"), ending on 2019.
- 1.5 s check: map complete, both callouts, rule complete, bars 2011-2013 in.
- 2.05-2.35 s: final line "DI Yogyakarta top, Papua bottom, all nine years" sets in.
- 2.5 s check and hold to 3.0 s: everything static and readable.

## Style
Swiss International Style: flat unshaded colour, no gradients except (if needed) a very light paper-tone
scrim, no shadows, no glow, no textures beyond an optional very faint paper grain (seeded). Six-step
sequential single hue for the classes (e.g. deep ultramarine for Very High down to a pale blue-grey for Very
Low; Very Low must stay visibly distinct from the paper, give provinces a hairline outline). Signal red
used ONLY for the gap rule, bars and the gap numbers. Typeface: a neo-grotesk (Inter or Inter Tight from
`@fontsource` on jsDelivr, pinned version, fallback Helvetica/Arial); wait for `document.fonts.ready`
before the first frame. Bold, tight tracking on the big numerals (tabular figures), generous white space,
flush-left alignment on the grid. Motion: crisp, typographic, stepped, no camera move.

## Honesty (HTML comment at the top)
From the paper: province values and categories (Table 6, pp. 12-13); class intervals (Table 4, pp. 9-10);
annual range 19.46 ... 19.40 (Fig. 5, p. 21; text p. 20); DI Yogyakarta top and Papua bottom in every year
(Table 5, pp. 11-12); "no clear evidence of convergence" (p. 22); no significant global clustering of the
composite HCI (Table 8, p. 16), which is why the reveal is class-by-class and not a geographic wave.
Geometry: BAKOSURTANAL/Dukcapil province boundaries via gh/ans-4175/peta-indonesia-geojson@1.0 (34
provinces), simplified. Artistic licence: colours, class-by-class reveal order and timing, the red
connector (encodes nothing by its length), typography and layout.
Do not write "east lags", "convergence failed because", or any causal or regional-gradient claim.

## Hard constraints
- One self-contained `clips-v2/KENMS/index.html`, 1920x1080, auto-plays, `?t=<seconds>` freezes it
  deterministically (captured frame by frame at 30 fps for 3 s). Any noise must be seeded.
- 2D: SVG or canvas; small pinned jsDelivr libs only (d3-geo, @fontsource). No other CDNs, no build step.
- No citation/attribution in the clip. Bottom-right 980x300 px free of title, text and key action.
- Never launch a browser. Check scripts with `node --check` (extract the script to `clips-v2/.qa/KENMS/`).
- Write `clips-v2/KENMS/NOTES.md` (brief: what you built, and your own frame-by-frame self-critique at
  0.5 / 1.5 / 2.5 s). Write only inside `clips-v2/KENMS/` and `clips-v2/.qa/`.
