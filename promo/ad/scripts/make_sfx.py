"""Procedural SFX for the ad (deterministic): whooshes, sub booms, risers, a reverse swell, a tick.
uv run --no-project --python 3.12 --with numpy --with scipy --with soundfile python scripts/make_sfx.py"""
import numpy as np, soundfile as sf
from scipy.signal import butter, sosfilt, sosfiltfilt
from pathlib import Path
SR = 48000
OUT = Path(__file__).resolve().parent.parent / "public" / "sfx"
OUT.mkdir(parents=True, exist_ok=True)
rng = np.random.default_rng(42)

def sweep_filter(x, f0, f1, q=1.5):
    # time-varying bandpass via short blocks
    out = np.zeros_like(x); n = len(x); B = 512
    for i in range(0, n, B):
        t = i / n; f = f0 * (f1 / f0) ** t
        lo, hi = max(30, f / q), min(SR / 2 - 100, f * q)
        sos = butter(2, [lo, hi], btype="band", fs=SR, output="sos")
        seg = x[max(0, i - 2048): i + B]
        out[i:i + B] = sosfilt(sos, seg)[-len(x[i:i + B]):]
    return out

def norm(x, peak=0.9):
    return x / (np.abs(x).max() + 1e-9) * peak

def stereo(m, pan_from=0.0, pan_to=0.0):
    p = np.linspace(pan_from, pan_to, len(m))
    l = m * np.cos((p + 1) * np.pi / 4); r = m * np.sin((p + 1) * np.pi / 4)
    return np.stack([l, r], 1)

def whoosh(dur, f0, f1, peak_at=0.6, pan=(-0.7, 0.7)):
    n = int(dur * SR); t = np.linspace(0, 1, n)
    x = sweep_filter(rng.standard_normal(n), f0, f1)
    env = np.where(t < peak_at, (t / peak_at) ** 2.2, np.exp(-(t - peak_at) / (1 - peak_at) * 4))
    return stereo(norm(x * env), *pan)

def boom(dur=2.5, f0=70, f1=32):
    n = int(dur * SR); t = np.arange(n) / SR
    f = f1 + (f0 - f1) * np.exp(-t * 6)
    s = np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t * 1.8)
    click = sosfilt(butter(2, 2500, "low", fs=SR, output="sos"), rng.standard_normal(n)) * np.exp(-t * 60) * 0.5
    tail = sosfilt(butter(2, 300, "low", fs=SR, output="sos"), rng.standard_normal(n)) * np.exp(-t * 2.5) * 0.15
    m = norm(np.tanh(1.6 * (s + click + tail)))
    return np.stack([m, m], 1)

def riser(dur=3.0):
    n = int(dur * SR); t = np.linspace(0, 1, n)
    x = sweep_filter(rng.standard_normal(n), 300, 9000, q=1.3) * t ** 2.5
    f = 180 * (8 ** t)
    tone = np.sin(2 * np.pi * np.cumsum(f) / SR) * 0.25 * t ** 3
    tone += np.sin(2 * np.pi * np.cumsum(f * 1.5) / SR) * 0.12 * t ** 3
    m = norm(x + tone)
    m[-int(0.01 * SR):] *= np.linspace(1, 0, int(0.01 * SR))
    return stereo(m, -0.2, 0.2)

def reverse_swell(dur=1.6):
    n = int(dur * SR); t = np.linspace(0, 1, n)
    x = sosfilt(butter(2, [200, 6000], "band", fs=SR, output="sos"), rng.standard_normal(n))
    m = norm(x * t ** 4)
    m[-200:] *= np.linspace(1, 0, 200)
    return stereo(m, 0, 0)

def shimmer(dur=2.5):
    n = int(dur * SR); t = np.arange(n) / SR
    m = sum(np.sin(2 * np.pi * f * t + i) * a for i, (f, a) in enumerate([(1046.5, .3), (1318.5, .25), (1568, .2), (2093, .15), (2637, .1)]))
    m *= (1 - np.exp(-t * 30)) * np.exp(-t * 1.6) * (1 + 0.2 * np.sin(2 * np.pi * 6 * t))
    return stereo(norm(m, 0.7), -0.3, 0.3)

files = {
    "whoosh-a.wav": whoosh(0.7, 400, 5000, 0.55, (-0.8, 0.8)),
    "whoosh-b.wav": whoosh(0.6, 3000, 300, 0.4, (0.8, -0.8)),
    "whoosh-c.wav": whoosh(0.9, 200, 2500, 0.7, (0, 0)),
    "whoosh-long.wav": whoosh(2.2, 150, 4000, 0.8, (-0.4, 0.4)),
    "boom.wav": boom(),
    "boom-soft.wav": boom(1.8, 60, 35) * 0.6,
    "riser.wav": riser(3.0),
    "riser-short.wav": riser(1.6),
    "rev-swell.wav": reverse_swell(),
    "shimmer.wav": shimmer(),
}
for k, v in files.items():
    sf.write(OUT / k, v.astype(np.float32), SR, subtype="PCM_16")
    print(k, f"{len(v)/SR:.2f}s")
