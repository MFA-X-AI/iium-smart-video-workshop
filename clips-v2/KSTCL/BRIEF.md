# Build brief: KSTCL v2 clip

Read clips/BRIEF_OPEN.md for the general rules (no UI chrome, title position, no attribution in the clip,
bottom-right 980x300 px kept clear, ?t= freeze), except where this brief overrides them. Do NOT write
NOTES.md's "three concepts" exercise from scratch: the concept is decided below. NOTES.md should record what
you built, your frame-by-frame self-critique, and anything you could not do.

The full proposal is in clips-v2/KSTCL/PROPOSAL.md (read it). Summary follows.

## The result to show (from the paper; don't add to it)
The Satun Malay dialect ("Dialek Satun Langkawi", DSL) found in Che Bilang and Tan Yong Poo (Satun, Thailand)
is also spoken in 9 villages on Langkawi (Malaysia), and in all 9 villages the four test words have Thai-toned
Satun forms:
- air (water) -> [nɑ̂m]
- bantal (pillow) -> [mɔ̂n]
- kelapa (coconut) -> [ɲiɔ̀ʕ]
- tajam (sharp) -> [kʰom]
Exact IPA strings to use, as Unicode (copy these codepoints exactly):
- `[nɑ̂m]`  -> [nɑ̂m]
- `[mɔ̂n]`  -> [mɔ̂n]
- `[ɲiɔ̀ʕ]` -> [ɲiɔ̀ʕ]
- `[kʰom]` -> [kʰom]
The 9 villages (Table 1): Kg. Ulu Melaka, Kg. Bayas, Kg. Padang Gaong, Kg. Perana, Pulau Tuba,
Kg. Lubok Cempedak, Kg. Temoyong, Kg. Chenang, Kg. Padang Lalang.
In Satun (Figure 2): Che Bilang and Tanyong Po = DSL (vermilion); Chalung, Ban Khuan, Tam Malang = Satun Thai
dialect (DST, green).

Do not show any other numbers. Do not draw isogloss lines (the paper's GIS maps are point/area maps; there are
no measured isogloss curves to copy). Do not claim anything about age groups.

## Geography data (real; use it, inline it)
`clips-v2/.qa/KSTCL/kstcl_geo.json` (~130 KB, lon/lat, from GADM 4.1). Inline it into index.html as a JS
constant (the page must stay self-contained). Keys:
- `langkawi`: array of rings (Langkawi district: main island, Pulau Tuba, Dayang Bunting, islets).
- `dsl_langkawi`: 9 `{name, lon, lat}` DSL villages (positions georeferenced from the paper's Figure 1; approximate).
- `lm_stars`: [lon,lat] of the "Langkawi Malay" villages in Figure 1 (secondary, faint).
- `satun_tambons`: Thai tambons of Satun/Songkhla/Trang with `province, amphoe, tambon, role` (`role` is
  "DSL" for CheBilang and TanyongPo, "DST" for Chalung, BanKhuan, TamMalang, else null) and `rings`.
- `malaysia_other`: Perlis and mainland Kedah districts (`rings`).
The Malaysia-Thailand land border is where Perlis/Kedah rings meet the Thai rings; draw it as a fine dashed
ink line where practical (sea border: don't draw). Label "MALAYSIA" and "THAILAND" on land in spaced caps,
"LANGKAWI", "SATUN", "Selat / Strait" in the sea between them optional.

Projection: equirectangular with x scaled by cos(6.5 deg). Suggested framing (verify with your own math):
~1400 px per degree of latitude, lat 6.84 near y = 60, Langkawi's west coast (lon 99.64) near x = 520. Then
Langkawi sits centre-left, Satun's Mueang district upper-centre/right, and the sea west/south-west of Langkawi
(left third, lower half) holds the title. Pulau Tuba must stay left of x = 940 (the bottom-right 980x300 px is
kept clear of labels/key action; land/sea may continue there). You may shift/scale a little, but never
distort or rotate the geography.

## Staging (3 s, finding lands by ~2 s)
Technique: ANTIQUE CARTOGRAPHY, 2D (canvas and/or SVG). Aged parchment with grain, foxing and a faint
graticule; coastlines hand-inked (the pen visibly travels along the real outline, slight wobble, sepia/iron-gall
ink), short hachure/water-line ripples along coasts, watercolour washes that bleed outward with granulating,
darker drying edges; hand lettering (an old-style serif/italic, e.g. IM Fell English via @fontsource on
jsDelivr, pinned); a small compass rose. Vermilion for DSL, verdigris green for DST, sepia for everything else.
- 0-0.9 s: Coastlines ink themselves (Langkawi + Satun first). Vermilion wash bleeds into Che Bilang and
  Tanyong Po; green into Chalung, Ban Khuan, Tam Malang. Small hand-lettered labels on those tambons and a
  legend-like cartouche near Satun: vermilion swatch "Satun Malay dialect (DSL)", green swatch
  "Satun Thai dialect (DST)". (A cartouche, not a UI legend.)
- 0.9-1.9 s: The same vermilion blooms at the 9 Langkawi villages, one after another (ink dot, then a wash
  ring spreading ~20-30 px), each village name lettered small beside it (avoid overlaps; leader lines OK;
  names may be smaller, but readable at 1080p). A hand-lettered note near Langkawi: "Satun Malay in 9 Langkawi
  villages". Faint sepia stars at `lm_stars` appear (no label needed, or a tiny "Langkawi Malay" in the
  cartouche with a star swatch).
- 1.9-3 s: Four word cartouches (scroll/banner style) letter themselves in the sea/strait, stacked, e.g.
  `water · air  →  [nɑ̂m]` ... with one line under them: "each heard in all 9 villages". The IPA must be
  large (>= 40 px) and correct. Hold to 3 s; a gentle slow push-in (<= 4%) is fine.
Title (bottom-left, hand-lettered, with a soft parchment scrim): "Satun's dialect lives on across the sea".
Title can be present from ~0.3 s.

## Fonts
IPA needs a font with U+0251, U+0254, U+0272, U+0295, U+02B0 and combining U+0300/U+0302: use
@fontsource/charis-sil (or @fontsource/noto-serif with latin + latin-ext subsets) from jsDelivr, pinned, with
fallback "Times New Roman", serif. Make sure the combining marks sit on the right letters. Wait for
`document.fonts.ready` before first draw at a frozen ?t.

## Hard constraints
- One self-contained `clips-v2/KSTCL/index.html`, 1920x1080, auto-plays, `?t=<seconds>` freezes it
  deterministically (seeded randomness only; captured frame by frame at 30 fps for 3 s).
- 2D: canvas/SVG; small pinned jsDelivr libs (e.g. d3-geo) are OK. No other CDNs, no build step.
- No citation/attribution in the clip. Keep the bottom-right 980x300 px free of the title and key action.
- HTML comment at the top: what comes from the paper (Rajah 1 p.173, Rajah 2 p.174, Jadual 1 p.183) vs
  artistic licence (village positions approximate from Fig 1, washes/ink style, GADM outlines).
- Don't launch a browser. Check scripts with `node --check` (extract the module to clips-v2/.qa/KSTCL/ first).
- Write only inside clips-v2/KSTCL/ and clips-v2/.qa/.
