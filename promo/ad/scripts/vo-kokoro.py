"""Kokoro-82M voiceover lines for the ad (af_heart, speed 0.95, as the KERICE film).
Needs a Python env with kokoro, soundfile and torch (e.g. uv run --with kokoro --with soundfile python ...). Writes public/vo/<id>.wav and public/vo/lines.json (durations)."""
import json
from pathlib import Path
import numpy as np, soundfile as sf, torch
from kokoro import KPipeline
OUT = Path(__file__).resolve().parent.parent / "public" / "vo"
SR = 24000
LINES = {  # id: (shown text, spoken text with respellings)
  "hours": ("Not every hour in academia goes into the research itself.", "Not every hour in academia, goes into the research itself."),
  "leverage": ("Learn how to leverage artificial intelligence…", "Learn how to leverage artificial intelligence..."),
  "busywork": ("…to automate the busywork, and deliver your best work.", "to automate the busywork, and deliver your best work."),
  "styles": ("Whatever your field, from blueprints to claymation to 3D, find the style that fits your research.", "Whatever your field, from blueprints, to claymation, to 3D, find the style that fits your research."),
  "teach": ("Make your lectures interactive, with simulations where students see how things work.", "Make your lectures interactive, with simulations where students see how things work."),
  "lifting": ("AI can do the heavy lifting. Your expertise keeps it right.", "A.I. can do the heavy lifting. Your expertise keeps it right."),
  "title": ("Smart Video Creation with Generative AI.", "Smart video creation, with generative A.I."),
  "by": ("A workshop by an engineer with over seven years in the AI industry.", "A workshop by an engineer, with over seven years in the A.I. industry."),
  "details": ("Learn AI from the basics to practical applications, hands-on. Friday, the sixteenth of October.", "Learn A.I. from the basics, to practical applications, hands-on. Friday, the sixteenth of October."),
}
def trim(a):
    th = 10 ** (-45 / 20) * np.abs(a).max(); i = np.flatnonzero(np.abs(a) > th); p = int(0.02 * SR)
    return a[max(0, i[0] - p): i[-1] + p]
pipe = KPipeline(lang_code="a", repo_id="hexgrad/Kokoro-82M", device="cuda" if torch.cuda.is_available() else "cpu")
OUT.mkdir(parents=True, exist_ok=True); meta = {}
for k, (shown, say) in LINES.items():
    chunks = [r.audio.numpy() if hasattr(r.audio, "numpy") else np.asarray(r.audio) for r in pipe(say, voice="af_heart", speed=0.95)]
    a = trim(np.concatenate(chunks)); a = a / np.abs(a).max() * 0.89
    sf.write(OUT / f"{k}.wav", a.astype(np.float32), SR); meta[k] = {"text": shown, "dur": round(len(a) / SR, 3)}
    print(k, meta[k]["dur"])
(OUT / "lines.json").write_text(json.dumps(meta, indent=2), encoding="utf-8")
