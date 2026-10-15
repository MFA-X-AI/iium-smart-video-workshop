# Build brief for Astra: KOP v2 clip

Read clips/BRIEF_OPEN.md for the general rules (no UI chrome, title position, no attribution in the
clip, bottom-right 980x300 px kept clear, ?t= freeze), except where this brief overrides them.
Its "three concepts" step is already done: the concept is fixed below. Still write a short NOTES.md
(what you built, what is on screen at 0.5 / 1.5 / 2.5 s, what is paper vs artistic licence).

The paper PDF is papers/KOP/TOP_2026_Fabrication_and_evaluation_of_coaxial_core-shell_electrospun_Curcuma_xanthorrhiza_nanofibr.pdf
(you don't need to re-read it; everything you need is below and was checked against the PDF).

## Why this version exists
v1 (clips/KOP/, do not touch) showed a generic coaxial spinneret laying a mat. That could be any
electrospinning paper. This clip must show THIS paper's RESULTS: the fibres it made and what they did
(and did not do) to bacteria.

---

## PROPOSAL (the concept; follow it)

### What the paper made and found
- Coaxial electrospinning. CORE = polycaprolactone (PCL) carrying Curcuma xanthorrhiza (Java turmeric)
  extract at 1% (w/w). SHELL = gelatine/chitosan blend. The extract is in the CORE, not the shell.
- Results lead (abstract p.341; p.346; Fig. 2): extract-loaded fibres (10% PCL core) smooth, bead-free,
  nanoscale, average diameter 120.3 to 284.2 nm. Fibres without extract (20% PCL) thicker: 374 nm to
  857 nm (authors: because of the higher polymer concentration, not because of the extract).
- Disc diffusion (Table 1 p.349; p.350; Fig. 5): against S. aureus the FREE extract (not in fibres) gave
  weak inhibition zones of 7.7 to 8.7 mm. The EXTRACT-LOADED NANOFIBRE DISC gave 0 mm (no zone at all)
  against S. aureus and E. coli. Inhibition zone = clear-zone diameter minus disc diameter; discs were 5 mm.
- The authors suggest (not measured) that the low 1% loading and encapsulation in the PCL core may have
  limited diffusion. Do NOT animate extract leaking or being held back as if it were a result.

### Headline
Extract sealed in the core of nanoscale core-shell fibres (120.3–284.2 nm vs 374–857 nm without
extract), but at 1% loading the fibre disc left no inhibition zone: 0 mm on S. aureus, where the free
extract gave a weak 7.7–8.7 mm. The zero is shown honestly as an absence: the bacterial lawn grows
right up to the fibre disc's edge. Not softened, not mocked.

### On-screen text: EXACTLY these strings, nothing else (use the en dash "–" in ranges)
1. `gelatine/chitosan shell`
2. `PCL core + 1% Curcuma extract`
3. `120.3–284.2 nm`
4. `20% PCL, no extract: 374–857 nm`
5. `S. aureus` (italic, small, as the plate label)
6. `free extract: 7.7–8.7 mm (weak)`
7. `nanofibre disc: 0 mm`
8. Title: `Java turmeric sealed in nanofibres, but no bacteria-free ring`
No other numbers, no gentamycin, no E. coli, no citation.

### Scene and storyboard (1920x1080, 3 s, ?t= deterministic)
- **0.0-0.9 s:** seamless white studio sweep, soft light. Upper-left region: one coaxial fibre segment
  slides/extends in diagonally, its front end cut away (clean flat cut plus a quarter-wedge removed) to
  show the translucent, glassy pale shell around a saturated warm-golden core. Labels 1 and 2 draw in
  with thin leader lines ending in small dots. By 0.5 s the fibre and cutaway are fully readable and
  label 3 is appearing as a dimension bracket across the fibre's diameter.
- **0.9-1.4 s:** a second fibre settles just below/behind the first, drawn about 3x wider (374–857 vs
  120.3–284.2 nm), same pale glassy shell but an ivory/white core (no gold = no extract), also cut
  away. Label 4 beside it. Both fibres are shown at the same magnification so the width ratio is true.
- **1.2-1.6 s:** a magnifier callout (thin circle + two tangent lines, the classic cover-illustration
  zoom inset) links the loaded fibre to a small white nanofibre disc on a petri dish at centre-right /
  right-middle (keep it above y ≈ 780 so it stays out of the bottom-right 980x300 corner). Dish: clear
  glass, lid off, slight 3/4 top-down view, cutaway edge showing amber agar thickness, surface covered
  by a fine cream granular S. aureus lawn (label 5 near the rim). Beside the white nanofibre disc, a
  golden-yellow filter-paper disc (free extract), same 5 mm size.
- **1.5-2.0 s:** a clear ring spreads out around the golden free-extract disc and stops at its to-scale
  size: clear-zone OUTER diameter = 5 mm disc + ~8.2 mm = ~13.2 mm, i.e. the ring's outer radius is
  ~2.6x the disc radius. The lawn inside the ring fades to clear agar with a soft edge. Label 6 lands.
  Around the white nanofibre disc NOTHING clears: the lawn stays flush to its rim (maybe a subtle
  pulse of light that finds nothing). Label 7 lands by ~1.9 s.
- **2.0-3.0 s:** hold. Everything legible. Only gentle light shimmer on agar/glass. Title fully in by
  ~1.2 s at the latest, bottom-left in the low third (left of x ≈ 900 so it never enters the
  bottom-right 980x300 px).
- Frames 0.5 / 1.5 / 2.5 must each be strong: 0.5 = cutaway fibre with labels; 1.5 = both fibres +
  callout + dish with ring starting; 2.5 = full result held.

### Style: pristine journal-cover illustration on white (commit fully)
Three.js (pinned version via import map from jsDelivr). Glossy translucent shell (MeshPhysicalMaterial
with transmission/clearcoat or a convincing fake), warm golden core with slight subsurface feel, soft
studio key + big softbox fill + rim, soft contact shadows on a seamless white sweep, crisp cutaway faces
with a thin darker rim line so layers read like a cover illustration. Clean glass dish, amber agar,
fine cream lawn texture (procedural canvas texture is fine). Typography: clean scientific sans, thin
leader lines with dot ends, tabular figures, dark grey on white (high contrast; must read at thumbnail
size, labels at least ~28 px, title ~64-80 px). Motion calm, eased, precise, like an exploded view
assembling; no wobble, no camera whirl (a very slight settle/dolly is fine). Labels can be HTML/SVG
overlays positioned from projected 3D points, as long as ?t= is deterministic.

---

## Hard constraints
- One self-contained `clips-v2/KOP/index.html`, 1920x1080, auto-plays, `?t=<seconds>` freezes it
  deterministically (captured frame by frame at 30 fps for 3 s). Everything time-driven from t; no
  Math.random without a fixed seed.
- 3D: three.js from jsDelivr via an import map, pinned version. No other CDNs, no build step.
- No citation/attribution in the clip. Keep the bottom-right 980x300 px free of the title and key action.
- Scientifically honest; an expert author will watch. HTML comment at the top: what comes from the
  paper (with page refs, as above) vs artistic licence (colours, the cutaway itself, which is
  illustrative since the paper does not image the core-shell structure directly, lawn texture, lighting,
  the two discs shown on one dish as a composite of Fig. 5A and 5C).
- Every on-screen string must be exactly as listed above; check spelling in your code.
- Don't launch a browser. Check your module script with `node --check` (extract it to a .mjs in
  clips-v2/.qa/ if needed). Write only inside clips-v2/KOP/ and clips-v2/.qa/.
