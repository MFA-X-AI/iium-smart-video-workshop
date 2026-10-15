#!/usr/bin/env python3
"""
Download the open-access PDFs listed in papers.json.

Usage (Python 3.8+, no extra packages needed):
    python download_papers.py              # all 140 papers
    python download_papers.py --shortlist  # only the 28 top picks and runners-up
    python download_papers.py --only KOE   # one kulliyyah

PDFs go into papers/<KULLIYYAH>/. A report, download_report.csv, lists what
worked and what didn't. Papers whose IRep copy is restricted are fetched from
the journal instead when a DOI or journal link is known. Anything that still
fails can be opened by hand from the link in the report (being on the IIUM
network or logged in to IRep may help).
"""
import argparse, csv, json, re, sys, time, urllib.request, urllib.error
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urljoin

HERE = Path(__file__).resolve().parent
UA = "Mozilla/5.0 (research-workshop paper downloader)"
TIMEOUT = 40


class MetaLinks(HTMLParser):
    """Collect citation_pdf_url meta tags and links that look like PDFs."""
    def __init__(self):
        super().__init__()
        self.meta, self.links = [], []

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == "meta" and (a.get("name") or "").lower() in ("citation_pdf_url", "eprints.document_url"):
            if a.get("content"):
                self.meta.append(a["content"])
        elif tag == "a" and a.get("href"):
            href = a["href"]
            cls = (a.get("class") or "").lower()
            if (href.lower().split("?")[0].endswith(".pdf")
                    or "/article/download/" in href
                    or "obj_galley_link" in cls and "pdf" in cls):
                self.links.append(href)


def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "*/*"})
    with urllib.request.urlopen(req, timeout=TIMEOUT) as r:
        return r.geturl(), r.headers.get("Content-Type", ""), r.read()


def is_pdf(body):
    # Page objects are invisible when compressed (0 found), so only reject a
    # short page count when pages are actually visible in the raw bytes.
    pages = len(re.findall(rb"/Type\s*/Page[^s]", body))
    return (body[:5] == b"%PDF-"
            and (pages == 0 or pages > 2)
            and b"under maintenance" not in body
            and b"Brought to you by" not in body)


def pdf_candidates(page_url):
    """Open a landing page and return likely PDF URLs, best first."""
    final, ctype, body = fetch(page_url)
    if is_pdf(body):
        return final, body, []
    if body.startswith(b"%PDF-"):
        return final, None, []
    p = MetaLinks()
    try:
        p.feed(body.decode("utf-8", "ignore"))
    except Exception:
        pass
    cands = [urljoin(final, u) for u in p.meta + p.links]
    # OJS "view" galley pages: /article/view/A/B  ->  /article/download/A/B
    cands += [c.replace("/article/view/", "/article/download/") for c in cands if "/article/view/" in c]
    seen, out = set(), []
    for c in cands:
        if c not in seen:
            seen.add(c)
            out.append(c)
    return final, None, out


def try_source(url):
    final, body, cands = pdf_candidates(url)
    if body:
        return body, final
    for c in cands[:6]:
        try:
            f2, _, b2 = fetch(c)
            if is_pdf(b2):
                return b2, f2
            # one more hop (OJS galley viewer page -> download)
            _, b3, c3 = pdf_candidates(c)
            if b3:
                return b3, c
            for cc in c3[:3]:
                _, _, b4 = fetch(cc)
                if is_pdf(b4):
                    return b4, cc
        except (urllib.error.URLError, TimeoutError, ConnectionError, ValueError):
            continue
    return None, None


def safe_name(s, n=90):
    s = re.sub(r"[^\w\s-]", "", s, flags=re.UNICODE).strip()
    return re.sub(r"\s+", "_", s)[:n] or "paper"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--shortlist", action="store_true", help="only top picks and runners-up")
    ap.add_argument("--only", help="kulliyyah code, e.g. KOE, KOM, AIKOL")
    args = ap.parse_args()

    for path in (HERE / "papers").rglob("*.pdf"):
        if not is_pdf(path.read_bytes()):
            path.unlink()
            print("Removed invalid PDF:", path.relative_to(HERE))

    papers = json.loads((HERE / "papers.json").read_text(encoding="utf-8"))
    if args.shortlist:
        papers = [p for p in papers if p["shortlist"]]
    if args.only:
        papers = [p for p in papers if p["kulliyyah"].lower() == args.only.lower()]

    report = []
    for i, p in enumerate(papers, 1):
        folder = HERE / "papers" / p["kulliyyah"]
        folder.mkdir(parents=True, exist_ok=True)
        tag = "TOP_" if "Top pick" in p["shortlist"] else ("RUNNERUP_" if p["shortlist"] else "")
        dest = folder / f"{tag}{p['year']}_{safe_name(p['title'])}.pdf"
        label = f"[{i}/{len(papers)}] {p['kulliyyah']}: {p['title'][:70]}"
        if dest.exists():
            print(label, "-> already downloaded")
            report.append({**p, "status": "ok", "file": str(dest.relative_to(HERE)), "source": ""})
            continue

        sources = [p["best_link"], p["paper_url"], p["irep_url"]]
        if p["doi"]:
            sources.append("https://doi.org/" + p["doi"])
        sources = [s for j, s in enumerate(sources) if s and s not in sources[:j]]

        body = src = None
        last_err = ""
        for s in sources:
            try:
                body, src = try_source(s)
                if body:
                    break
            except urllib.error.HTTPError as e:
                last_err = f"HTTP {e.code} at {s}"
            except Exception as e:  # network hiccups, timeouts
                last_err = f"{type(e).__name__} at {s}"
            time.sleep(1)

        if body:
            dest.write_bytes(body)
            print(label, "-> saved")
            report.append({**p, "status": "ok", "file": str(dest.relative_to(HERE)), "source": src})
        else:
            print(label, "-> NOT FOUND", last_err)
            report.append({**p, "status": "failed: " + (last_err or "no open PDF link found"),
                           "file": "", "source": ""})
        time.sleep(1.5)  # be polite to IRep and the journals

    out = HERE / "download_report.csv"
    cols = ["status", "kulliyyah", "title", "file", "source", "best_link", "irep_url", "doi", "shortlist"]
    with out.open("w", newline="", encoding="utf-8-sig") as f:
        w = csv.DictWriter(f, fieldnames=cols, extrasaction="ignore")
        w.writeheader()
        w.writerows(report)
    ok = sum(r["status"] == "ok" for r in report)
    print(f"\nDone: {ok} of {len(report)} PDFs saved in papers/. Details in download_report.csv")
    if ok < len(report):
        print("For the rest, open the best_link in the report by hand.")


if __name__ == "__main__":
    sys.exit(main())
