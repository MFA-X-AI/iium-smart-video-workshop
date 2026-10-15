# Guide for AI coding agents

This file is for coding agents such as Claude Code or Codex that are working from this repo.
- **Humans:** start with [README.md](README.md).
- **Typical job:** "here is my paper (or idea); make an animation of it like the ones in this repo", or "change the layout or style of an existing clip".

## Where things are

| Need | Look at |
|---|---|
| A finished research animation to copy | `clips-v2/<CODE>/index.html`, with `NOTES.md` (sources), `PROPOSAL.md` (plan) and `BRIEF.md` (the brief the builder got) |
| The full recipe for building a clip from a paper | `clips-v2/AGENT_BRIEF.md` |
| What reviewers caught and fixed | `clips-v2/STATUS.md` |
| A video built from scenes, music, voice and captions | `promo/ad/src/*.tsx` (Remotion), with assets in `promo/ad/public/` |
| An HTML page turned into frame-exact video | `promo/ad/scripts/capture-html.sh` |
| A plain, human-looking HTML slide deck | `slides/deck/src.html` → `slides/deck/build.py` → `slides/index.html` |
| Paper metadata (titles, DOIs, links, animation ideas) | `papers.csv` |

Paper PDFs are **not** in the repo, because of copyright. Use the PDF the user gives you, or fetch an open-access copy from the link in `papers.csv`.

## Conventions for a clip

- **One self-contained `index.html` per clip,** in its own folder.
  - Scripts, fonts and data come from jsDelivr, pinned to exact versions (for example `three@0.170.0`).
  - Nothing else is external.
- **The canvas is 1920×1080,** full-bleed, with no UI chrome: no control panels and no fake cursors.
- **Time is a pure function of `t`.** `?t=1.5` must render exactly the frame at 1.5 s. Without `?t`, the clip plays once.
  - This is what makes frame-exact capture and review possible.
  - Copy the `URLSearchParams(location.search).get('t')` pattern from any v2 clip.
- **Show the paper's result, not its topic,** with real values as annotations staged in the subject. A chart is fine only when the result *is* a distribution or a map.
- **Pick the technique to suit the paper.** Every clip here uses a different one (blueprint, claymation, woodcut, micro-CT, …); 3D isn't always the answer.
- **Credits are added in the edit,** not burned into the clip. Use the full title and full author list, never "et al.".

## Accuracy rules (non-negotiable)

1. **Read the actual paper.** Take every number, unit and label from it, and note the page, table or figure in `NOTES.md`.
2. **Never invent, round misleadingly or extrapolate data.** Show weak or null results as they are ("not significant, p = 0.090").
3. **Don't dress an illustration up as a measurement.** No stain legends, scale bars or instrument readouts for tests the paper didn't run. Label illustrations as illustrations.
4. **Papers sometimes contradict themselves** (caption vs figure, abstract vs methods). Check the printed figures and tables, and follow what the data supports.
5. **List what is illustrative** in `NOTES.md`, so the author can review it. The subject expert has the final say.

## Checking your work

Look at rendered frames before saying a clip is done. A clip can fail silently, for example a shader error that leaves the scene blank.

```bash
chrome --headless=new --window-size=1920,1080 --hide-scrollbars --enable-unsafe-swiftshader \
  --enable-logging=stderr --virtual-time-budget=8000 \
  --screenshot=frame.png "file:///<abs-path>/clips-v2/KOE/index.html?t=1.5"
```

- **What to check:** crop and zoom into the text, because models misspell and clip labels. Then compare every number on screen with the paper.
- **The script:** `promo/scripts/render-check.sh <CODE>` does this at 0.5, 1.5 and 2.5 s and scans the console for errors. It's written for Git Bash on Windows; adjust the Chrome path elsewhere.

## Turning a clip into video

- **Single clip:** `promo/ad/scripts/capture-html.sh <dir> <seconds> <name>` screenshots every 1/30 s with headless Chrome, then encodes the frames with ffmpeg.
- **Several clips:** to cut several into one video with music and captions, copy the Remotion approach in `promo/ad/src/Ad.tsx`.
- **Render:** `cd promo/ad && npm install && bash scripts/render.sh`.

## Slides

- **Edit** `slides/deck/src.html` and run `build.py`; never edit `slides/index.html` by hand.
- **Style:** plain and flat on purpose. No emoji, glows or neon. Few words on the slide, with the talking in the speaker notes (`<aside class="notes">`).
