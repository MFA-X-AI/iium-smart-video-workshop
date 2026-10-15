# Smart Video Creation with Generative AI

Workshop materials from **IIUM's AI Research Methodology Workshop Series No. 8/2026**, organised by Dar Al-Hikmah Library and the Centre for Postgraduate Studies, International Islamic University Malaysia.
Presented by Muhammad Fahreza Alghifari on Friday, 16 October 2026.

**The idea:** you describe your research in plain words, and an AI coding agent writes the code for an animation of it. The motion is code (HTML, Three.js, Canvas, SVG, Remotion), not pixels from a video generator. Because it's code, you can check every number, fix it and re-render.

> **AI-made visuals can look polished and still be wrong.** Every animation here was checked against its paper by a person. Do the same with yours: you, the subject expert, are the one who keeps it right.

Everything in this repo was made with AI coding agents and checked by hand: the slides, the 28 research animations, and the promo video.
It's here so you can open it, take it apart and reproduce it.

---

## What's inside

| Folder | What it is | Open it with |
|---|---|---|
| [`slides/`](slides) | The workshop deck: one self-contained HTML file, with speaker notes | `slides/index.html` in any browser |
| [`clips-v2/`](clips-v2) | **14 research animations, one per kulliyyah.** Each shows its paper's headline *result*, with the real values, each in a different visual technique | `clips-v2/<CODE>/index.html` |
| [`clips/`](clips) | The first round of 14 (+1) animations, showing each paper's *topic*, which v2 replaced | `clips/<CODE>/index.html` |
| [`promo/ad/`](promo/ad) | The workshop promo video as a [Remotion](https://www.remotion.dev) project (React + TypeScript), with all of its assets | see [Promo video](#promo-video) |
| [`promo/`](promo) | Helper scripts used for the promo and clips: citations, clip capture, sound effects, reel building | |
| [`video/`](video) | The finished promo, 720p | any video player |
| `papers.csv` / `papers.json` | **140 recent open-access IIUM papers** (10 per kulliyyah, 2025–2026), each with an animation score and idea | Excel, or any AI chat |
| `iium-research-in-motion.html` | A browsable page of those 140 papers, with filters | any browser |
| `download_papers.py` | Downloads the PDFs of those papers for your own use | `python download_papers.py --shortlist` |

**The papers themselves are not included.** They belong to their publishers and authors. `papers.csv` has every title, DOI and link, and `download_papers.py` fetches the open-access copies.

## Using this repo with an AI agent

The workshop demo goes like this: you point a coding agent (Claude Code, Codex, …) at this repo and ask for a new animation in the same style.
This saves tokens and time, because the agent can copy a working pattern instead of inventing one.

```
Clone https://github.com/MFA-X-AI/iium-smart-video-workshop and read its CLAUDE.md.
Here is my paper (PDF attached). Make a 10-second animation of its main result,
in the style of clips-v2/KOE, as a single index.html.
```

[`CLAUDE.md`](CLAUDE.md) is written for the agent. It covers where things are, the conventions, and the checks to run before calling a clip done.

## The research animations

Each clip is a single `index.html`. Three.js, fonts and map data load from jsDelivr at pinned versions, so you need an internet connection.
Add `?t=1.5` to the URL to freeze a clip at 1.5 s; that's how the frames were captured.

| Code | Kulliyyah | Technique | Result shown |
|---|---|---|---|
| KOE | Engineering | Blueprint → CAD | Heated springs bend the wrist (0.332 vs 0.26 Nm needed) but fall short sideways |
| KICT | ICT | Neon point cloud | Face-mesh pupil distance: +2.83 mm bias, corrected to −0.08 mm by calibration |
| KOS | Science | Photoreal macro | A microsphere touching the fibre rings 24× sharper (Q 16,069 vs 660) |
| KAED | Architecture | Architect's sketch | Khiva's market street is the most integrated; homes are quieter (weak correlations) |
| KOP | Pharmacy | Journal-cover illustration | Turmeric sealed in core-shell fibres, but no bacteria-free ring |
| KOM | Medicine | Microscopy (illustrative) | Lemon oil lowered TP53 in skin-cancer cells, not in normal fibroblasts |
| KOD | Dentistry | Micro-CT | Five restorations break at similar loads; posts break more repairably |
| KON | Nursing | Claymation | A week of breathing exercise raised peak flow 202.67 → 379.00 L/min |
| KAHS | Allied Health | Cut-paper diorama | Integrin trends lower with obesity in PCOS (not significant, p = 0.090) |
| KENMS | Economics | Swiss flat data art | Indonesia's provincial human-capital gap didn't close, 2011–2019 |
| AIKOL | Laws | Woodcut | Five crimes mapped to Malaysian Acts; two UN protocols not ratified |
| KIRKHS | Islamic Revealed Knowledge | Kinetic typography | Logistic regression caught 18/20 AI essays (AUC 0.990) |
| KOED | Education | Illuminated manuscript | Al-Farabi's music theory in four dimensions, applied to Malaysian classrooms |
| KSTCL | Tourism & Languages | Antique cartography | The Satun Malay dialect is spoken in 9 Langkawi villages |

Every clip folder has a `NOTES.md` with the page, table and figure each number comes from, plus what is an illustrative simplification.
v2 clips also have the agent's `PROPOSAL.md` and `BRIEF.md`.
Full citations (complete author lists, checked against each paper's first page) are in [`promo/citations.json`](promo/citations.json).
[`clips-v2/STATUS.md`](clips-v2/STATUS.md) logs the review: what was checked and what was changed.

## Promo video

[`video/smart-video-creation-promo-720p.mp4`](video/smart-video-creation-promo-720p.mp4), 1:25.

To re-render it (needs Node 20+ and ffmpeg):

```bash
cd promo/ad
npm install
npx remotion studio          # preview and scrub in the browser
bash scripts/render.sh       # 1080p render, mastered to -14 LUFS, plus a 720p copy, into out/
```

How it was made:
- **Video:** every scene is Remotion code. The animated inserts in `promo/ad/assets/*` are HTML pages captured frame by frame (`scripts/capture-html.sh`).
- **AI models:**
  - Voice: Kokoro-82M.
  - Music: Stable Audio 3.
  - Opening shots: Z-Image Turbo stills animated with LTX-2.3.
  - Code: Claude Code and Codex.
- See [`promo/ad/README.md`](promo/ad/README.md) for the scene map.

## The slides

`slides/index.html` is the built deck. It's one file with everything inlined, and it works offline.
- **Keys:** ← → to move · **N** speaker notes · **P** presenter window.
- **To edit:** change `slides/deck/src.html`, then rebuild:

```bash
cd slides/deck && python build.py      # or: uv run --no-project --python 3.12 python build.py
```

`slides/SCRIPT.md` is the early scene-by-scene script, with sources for the facts on the model, cost and token slides. The deck has moved on since then, and the speaker notes in `src.html` are the current version.

One clip shown live in the workshop (an OpenAI Realtime API demo shared on Reddit) is someone else's video. That slide links to it instead of embedding it.

## Credits

- **The 28 papers** belong to their authors and publishers; see `promo/citations.json` and `papers.csv`.
- **Libraries:**
  - [Remotion](https://www.remotion.dev): check its licence if you use it in a company.
  - [Three.js](https://threejs.org), d3-geo, topojson, world-atlas, and Fontsource fonts.
- **Sound effects:** CC0 from Freesound, plus procedural sounds (`promo/ad/scripts/make_sfx.py`).
- **Logos** in `slides/media/logos` belong to their owners and are used only to name the tools.
