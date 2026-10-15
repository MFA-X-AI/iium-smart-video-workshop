# Inlines tokens.json into src.html -> index.html (single self-contained file)
import json, pathlib
here = pathlib.Path(__file__).parent
tok = json.loads((here / "tokens.json").read_text(encoding="utf-8"))
html = (here / "src.html").read_text(encoding="utf-8")
html = html.replace("/*TOKENS*/null", json.dumps(tok, ensure_ascii=False))
(here / "index.html").write_text(html, encoding="utf-8")
print("wrote index.html", len(html))
