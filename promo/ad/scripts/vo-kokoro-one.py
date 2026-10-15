"""Kokoro-82M voiceover lines for the ad (af_heart, speed 0.95, as the KERICE film).
Needs a Python env with kokoro, soundfile and torch (e.g. uv run --with kokoro --with soundfile python ...). Writes public/vo/<id>.wav and public/vo/lines.json (durations)."""
import json
from pathlib import Path
import numpy as np, soundfile as sf, torch
from kokoro import KPipeline
OUT = Path(__file__).resolve().parent.parent / "public" / "vo"
SR = 24000
LINES = {  # id: (shown text, spoken text with respellings)
  "title": ("Smart Video Creation with Generative AI.", "Smart video creation, with generative A.I."),
}
def trim(a):
    th = 10 ** (-45 / 20) * np.abs(a).max(); i = np.flatnonzero(np.abs(a) > th); p = int(0.02 * SR)
    return a[max(0, i[0] - p): i[-1] + p]
pipe = KPipeline(lang_code="a", repo_id="hexgrad/Kokoro-82M", device="cuda" if torch.cuda.is_available() else "cpu")
OUT.mkdir(parents=True, exist_ok=True)
meta = json.loads((OUT / "lines.json").read_text(encoding="utf-8")) if (OUT / "lines.json").exists() else {}
for k, (shown, say) in LINES.items():
    chunks = [r.audio.numpy() if hasattr(r.audio, "numpy") else np.asarray(r.audio) for r in pipe(say, voice="af_heart", speed=0.95)]
    a = trim(np.concatenate(chunks)); a = a / np.abs(a).max() * 0.89
    sf.write(OUT / f"{k}.wav", a.astype(np.float32), SR); meta[k] = {"text": shown, "dur": round(len(a) / SR, 3)}
    print(k, meta[k]["dur"])
(OUT / "lines.json").write_text(json.dumps(meta, indent=2), encoding="utf-8")
