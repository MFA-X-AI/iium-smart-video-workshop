# Workshop promo (Remotion)

**Final:** `out/iium-ad-FINAL-2026-10-07.mp4` (official poster title, bit.ly/AI_SmartVC, room on the end card; 1080p, -14.1 LUFS) + `-share720p.mp4`
(same as `out/iium-ad-2026-10-07-v1.mp4`; the 4 Oct cut used the old title and link). All earlier cuts are kept in `out/`.

Rebuild: `scripts/render.sh` (renders, masters to -14 LUFS / -1 dBTP, makes the 720p copy, never overwrites).
Stills: `npx remotion still src/index.ts Ad _scratch/f.png --frame=N --scale=0.25`.

| Part | What | Source |
|---|---|---|
| Brand card | IIUM logo, series No. 8/2026, "Smart Video Creation / with Generative AI" (official poster title, 7 Oct), organisers | `src/Ad.tsx` BrandCard, `public/brand/iium-white.png` (iium.edu.my) |
| Opening | 2:14 a.m. poster wreck, slump (+2 s linger); "The research is done. / The poster isn't." | `public/opening.mp4`, `public/gen/m2-slump.mp4` |
| Prompt → reveal | typed prompt expands into the KOS clip on the music drop | `src/Ad.tsx` Prompt |
| Montage | 14 v2 result clips on the beat with full citations; VO field roll-call; last clip lingers and dissolves | `public/v2`, `public/cite` |
| Teaching | slide → wave-tank simulation (linear wave theory), two-part caption | `assets/teach` (Astra) → `public/teach.mp4` |
| Wall | 63 screens, "AI does the heavy lifting. / Your expertise keeps it right." | `src/Wall.tsx`, `public/px` |
| End card | particle title → instructor (photo stays right) → details + bit.ly/AI_SmartVC | `src/Presenter.tsx`, `assets/title` (Astra), `public/presenter/cutout.png` |
| Closing shot | empty office, static close-up: robot cursor fixes the opening's poster; terminal types "This video was made with the help of AI. / Come learn how." | `src/Bookend.tsx`, `assets/fix-nochip` → `public/fix2.mp4`, `public/bookend/` |

Audio: Stable Audio 3 bed (`public/music/bed-v5.wav`, prompts in `_scratch/music/`), Kokoro-82M `af_heart`
voiceover (`scripts/vo-kokoro*.py` → `public/vo/`), procedural SFX (`scripts/make_sfx.py`) + CC0 freesound clicks/keys.
Asset pages are captured frame-exact with `scripts/capture-html.sh <dir> <seconds> <name>`.
