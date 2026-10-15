// Build promo/citations.json: full title, FULL author list, journal, volume, pages/article, year, DOI
// for the promo picks. Sources: Crossref (by DOI) and the IRep EPrints JSON export (always, as a
// cross-check and as the fallback when there's no DOI). Usage: node promo/scripts/fetch-citations.mjs
import fs from "node:fs";

const ROOT = new URL("../../", import.meta.url);
const papers = JSON.parse(fs.readFileSync(new URL("papers.json", ROOT), "utf8"));
const PICKS = [22, 40, 7, 81, 10, 30, 54, 63, 72, 91, 122, 130, 105, 112];

const get = async (url) => {
  for (let i = 0; i < 3; i++) {
    try {
      const r = await fetch(url, { headers: { "User-Agent": "iium-workshop-promo (mailto:research@iium.edu.my)" }, signal: AbortSignal.timeout(40000) });
      if (r.ok) return await r.json();
      if (r.status === 404) return null;
    } catch {}
    await new Promise((r) => setTimeout(r, 2000 * (i + 1)));
  }
  return null;
};

// papers.json truncated some DOIs at "(" (e.g. "10.17576/jkukm-2026-38(1"); recover them from access_note.
const fullDoi = (x) => {
  const all = [x.doi, ...(x.access_note.match(/10\.\d{4,}\/\S+/g) || [])].filter(Boolean);
  const count = (s, c) => s.split(c).length - 1;
  const clean = (d) => {
    d = d.replace(/[.,;]+$/, "");
    // Drop a trailing ")" that closes the surrounding note, not the DOI itself.
    while (d.endsWith(")") && count(d, ")") > count(d, "(")) d = d.slice(0, -1);
    return d;
  };
  return all.map(clean).sort((a, b) => b.length - a.length)[0] || "";
};

const name = (a) => [a.given, a.family].filter(Boolean).join(" ").trim();

// Corrections checked against each paper's own first page (the ground truth), 30 Sep 2026.
// Metadata services disagreed with the published PDF in these cases.
const OVERRIDES = {
  KOP: { authors: ["Rafiqa Maisara Mohamad Rosly", "Muhammad Taher", "Junaidi Khotib"],
         _why: "Crossref has Muhammad Taher first; the PDF lists Mohamad Rosly first" },
  KOED: { authors: ["Muhammad Akmal Azri Omar", "Arifin Mamat", "Nur Syaza Afrina Muhamad Sani"], pages: "144-159",
          title: "The Contemporary Relevance of Al-Farabi’s Musical Theory in Interdisciplinary Studies and the Malaysian Educational Context",
          _why: "PDF and IRep list 2 authors; Crossref (publisher) lists 3. User's rule: when sources disagree on authors, use the fuller list. Pages 144-159 and title as printed on the paper" },
  AIKOL: { authors: ["Zuraini Ab Hamid", "Shukriah Mohd Sheriff", "Khariyah Mat Yaman", "Syaza Farzana Shahrul Ridhwan Shankeran"],
           _why: "The PDF spells the last author 'Shankeran'; Crossref has 'Shakeran'" },
  KAED: { title: "Human-Centric Planning of Traditional Islamic Settlements: A Space Syntax Study of Itchan Kala, Khiva",
          journal: "Planning Malaysia", issue: "6",
          _why: "Crossref stores the title and journal in all caps; issue is 6 per the PDF header (IRep had 39, the number inside the DOI)" },
  KAHS: { issue: "", _why: "Crossref issue field is '-'" },
  KOM: { doi: "10.51200/bjms.v20i3.6604", _why: "Not in Crossref/IRep lookup; printed on the PDF's first page and resolves" },
};
const out = [];
for (const i of PICKS) {
  const x = papers[i];
  const id = (x.irep_url.match(/\/(\d+)\/?$/) || [])[1];
  const doi = fullDoi(x);
  const ir = id ? await get(`https://irep.iium.edu.my/cgi/export/eprint/${id}/JSON/irep-eprint-${id}.js`) : null;
  // No DOI in papers.json? IRep often has one in id_number.
  const doi2 = doi || ((ir?.id_number || "").match(/10\.\d{4,}\/\S+/) || [""])[0];
  const cr = doi2 ? (await get(`https://api.crossref.org/works/${encodeURIComponent(doi2)}`))?.message : null;

  const irAuthors = (ir?.creators || []).map((c) => [c.name?.given, c.name?.family].filter(Boolean).join(" ").trim());
  // Crossref sometimes files an affiliation as an "author" with only a `name`; keep people only.
  const crAuthors = (cr?.author || []).filter((a) => a.given || a.family).map(name);
  const rec = {
    index: i,
    kulliyyah: x.kulliyyah,
    kulliyyah_name: x.kulliyyah_name,
    title: (cr?.title?.[0] || ir?.title || x.title).replace(/\s+/g, " ").trim(),
    authors: crAuthors.length ? crAuthors : irAuthors,
    journal: cr?.["container-title"]?.[0] || ir?.publication || "",
    volume: cr?.volume || ir?.volume || "",
    issue: cr?.issue || ir?.number || "",
    pages: cr?.page || cr?.["article-number"] || ir?.pagerange || "",
    year: cr?.issued?.["date-parts"]?.[0]?.[0] || (ir?.date ? String(ir.date).slice(0, 4) : x.year),
    doi: cr?.DOI || ir?.id_number || doi || "",
    source: cr ? "crossref" : ir ? "irep" : "papers.json only",
    check: {
      crossref_authors: crAuthors.length,
      irep_authors: irAuthors.length,
      author_count_matches: !crAuthors.length || !irAuthors.length || crAuthors.length === irAuthors.length,
      papers_json_title_matches: (cr?.title?.[0] || ir?.title || "").toLowerCase().replace(/\W/g, "").startsWith(x.title.toLowerCase().replace(/\W/g, "").slice(0, 40)),
    },
  };
  const fix = OVERRIDES[x.kulliyyah];
  if (fix) { const { _why, ...f } = fix; Object.assign(rec, f); rec.override = _why; }
  out.push(rec);
  console.log(`${x.kulliyyah.padEnd(7)} ${rec.source.padEnd(9)} authors ${String(rec.authors.length).padStart(2)} (cr ${crAuthors.length}, irep ${irAuthors.length})  title-ok ${rec.check.papers_json_title_matches}  ${rec.doi}`);
}
fs.writeFileSync(new URL("promo/citations.json", ROOT), JSON.stringify(out, null, 1));
console.log("wrote promo/citations.json");
