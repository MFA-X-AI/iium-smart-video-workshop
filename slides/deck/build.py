# Builds slides/index.html (one self-contained file) from src.html.
# Embeds the promo particle title (scene 1) as an iframe document.
# Run: uv run --no-project --python 3.12 python build.py
import base64, json, pathlib, re

here = pathlib.Path(__file__).parent
root = here.parent.parent

title = (root / "promo/ad/assets/title/index.html").read_text(encoding="utf-8")
loop = "renderAt(((timestamp - epoch) / 1000) % DURATION);"
assert loop in title, "title page changed: update the play-once patch"
# Play the title reveal once and hold the last frame instead of looping.
title = title.replace(loop, "renderAt(Math.min((timestamp - epoch) / 1000, DURATION - 0.0001));")

# The KOS 3D clip, with Three.js bundled in (made from clips/KOS/index.html), so it plays offline.
kos = (here / "embed-kos.html").read_text(encoding="utf-8")
embed = json.dumps({"title": title, "kos": kos}, ensure_ascii=False).replace("</", "<\\/").replace("<!--", "<\\!--")
src = (here / "src.html").read_text(encoding="utf-8")
assert "/*EMBED*/null" in src
out = src.replace("/*EMBED*/null", embed)
# Inline the files in slides/media (images, and any video that exists) so the page works as a single file.
def inline(m):
    f = root / "slides/media" / m.group(2)
    if not f.exists():
        return m.group(0)
    mime = {".png": "image/png", ".svg": "image/svg+xml", ".mp4": "video/mp4"}.get(f.suffix, "image/jpeg")
    return '%s="data:%s;base64,%s"' % (m.group(1), mime, base64.b64encode(f.read_bytes()).decode())
out = re.sub(r'(src|href)="media/([\w./-]+\.(?:png|jpg|svg|mp4))"', inline, out)
(root / "slides/index.html").write_text(out, encoding="utf-8")
print("wrote slides/index.html", len(out) // 1024, "KB")
