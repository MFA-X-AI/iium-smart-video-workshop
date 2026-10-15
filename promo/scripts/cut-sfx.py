"""Cut single, usable events out of the raw CC0 recordings in promo/public/sfx/ (I can't listen, so
selection is by signal analysis): onset detection finds events; each is scored by how clean and
isolated it is. Writes promo/public/sfx/cut/<cue>-<take>.wav (48 kHz mono) and prints a summary.
Usage: uv run --no-project --with librosa --with soundfile --with numpy python promo/scripts/cut-sfx.py
"""
import csv
from pathlib import Path

import librosa
import numpy as np
import soundfile as sf

SFX = Path(__file__).resolve().parent.parent / "public" / "sfx"
OUT = SFX / "cut"
OUT.mkdir(exist_ok=True)
SR = 48000
# cue -> (length of the cut in s, pre-roll in s, how many takes to keep)
SPEC = {"click": (0.25, 0.01, 2), "ctrlz": (0.45, 0.01, 2), "keys": (2.0, 0.0, 2),
        "drag": (0.7, 0.0, 2), "sigh": (1.9, 0.08, 2), "chair": (0.9, 0.05, 2)}
# Judged by title (can't listen): wrong sound for the cue.
SKIP = {"drag-3-851733.mp3",   # "Thick Sand Movements"
        "keys-3-546167.mp3"}   # mechanical keyboard; he types on a laptop


def fade(x, ms=6):
    n = int(SR * ms / 1000)
    x[:n] *= np.linspace(0, 1, n)
    x[-n:] *= np.linspace(1, 0, n)
    return x


def candidates(y, cue):
    L, pre, _ = SPEC[cue]
    rms = librosa.feature.rms(y=y, hop_length=256)[0]
    t_rms = librosa.frames_to_time(np.arange(len(rms)), sr=SR, hop_length=256)
    if cue in ("click", "ctrlz", "chair"):
        on = librosa.onset.onset_detect(y=y, sr=SR, hop_length=256, units="time", backtrack=True)
        out = []
        for i, t in enumerate(on):
            gap_before = t - on[i - 1] if i else 9
            gap_after = on[i + 1] - t if i + 1 < len(on) else 9
            # click: isolated single event; ctrlz: a pair of presses 60-250 ms apart
            if cue == "ctrlz":
                if not (0.06 < gap_after < 0.25 and gap_before > 0.4):
                    continue
            elif min(gap_before, gap_after) < L + 0.1:
                continue
            seg = y[int((t - pre) * SR): int((t - pre + L) * SR)]
            if len(seg) < L * SR * 0.9:
                continue
            peak = np.abs(seg).max()
            floor = np.percentile(np.abs(y[max(0, int((t - 1) * SR)): int((t - pre) * SR)]) + 1e-6, 50) if t > pre + 0.2 else 1e-3
            out.append((peak / (floor + 1e-4), t))  # score: event-to-background ratio
        return sorted(out, reverse=True)
    # continuous cues: pick windows by level. sigh = loudest sustained breath; keys = steady typing;
    # drag = quiet but non-silent friction between clicks.
    win = int(L * SR / 256)
    smooth = np.convolve(rms, np.ones(win) / win, mode="valid")
    target = {"sigh": smooth.max(), "keys": np.median(smooth), "drag": np.percentile(smooth, 30)}[cue]
    order = np.argsort(np.abs(smooth - target))
    picks = []
    for k in order:
        t = t_rms[k]
        if all(abs(t - p) > L for _, p in picks):
            picks.append((float(smooth[k]), t))
        if len(picks) >= 3:
            break
    return picks


rows = list(csv.DictReader((SFX / "sources.csv").open(encoding="utf-8")))
summary = []
for cue, (L, pre, keep) in SPEC.items():
    pool = []
    for r in rows:
        if r["cue"] != cue or r["file"] in SKIP:
            continue
        y, _ = librosa.load(SFX / r["file"], sr=SR, mono=True)
        for score, t in candidates(y, cue)[:2]:
            pool.append((score, t, r["file"], y))
    pool.sort(key=lambda p: p[0], reverse=True)
    for n, (score, t, f, y) in enumerate(pool[:keep], 1):
        seg = fade(y[max(0, int((t - pre) * SR)): int((t - pre + L) * SR)].copy())
        seg = seg / (np.abs(seg).max() + 1e-9) * 0.7  # normalise; the mix sets final levels
        sf.write(OUT / f"{cue}-{'AB'[n - 1]}.wav", seg, SR)
        summary.append(f"{cue}-{'AB'[n - 1]}: {f} @ {t:.2f}s, score {score:.3g}")

# click-1 is a whole file that is exactly one click (no background to score against): use it as take B.
y, _ = librosa.load(SFX / "click-1-534103.mp3", sr=SR, mono=True)
sf.write(OUT / "click-B.wav", fade(y / (np.abs(y).max() + 1e-9) * 0.7), SR)
summary = [s for s in summary if not s.startswith("click-B")] + ["click-B: click-1-534103.mp3 (whole file)"]
print("\n".join(summary))
