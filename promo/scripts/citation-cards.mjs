// Render one transparent 1920x1080 citation overlay per clip from promo/citations.json.
// Full citation (never paraphrased or truncated): kulliyyah, full title, ALL authors, journal
// volume(issue), pages (year) · DOI. Bottom-right block, the corner every clip keeps clear.
// Output: promo/_scratch/cite/<CODE>.png. Usage: node promo/scripts/citation-cards.mjs
import fs from "node:fs";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const PROMO = new URL("../", import.meta.url);
// CITE_OUT / LIGHT env vars let v2 use its own card set (v2 backgrounds differ from v1).
const OUT = new URL(process.env.CITE_OUT || "_scratch/cite/", PROMO);
fs.mkdirSync(OUT, { recursive: true });
const cites = JSON.parse(fs.readFileSync(new URL("citations.json", PROMO), "utf8"));
const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const KULLIYYAH = {
  KOE: "Kulliyyah of Engineering", KICT: "Kulliyyah of Information and Communication Technology",
  KOS: "Kulliyyah of Science", KAED: "Kulliyyah of Architecture and Environmental Design",
  KOP: "Kulliyyah of Pharmacy", KOM: "Kulliyyah of Medicine", KOD: "Kulliyyah of Dentistry",
  KON: "Kulliyyah of Nursing", KAHS: "Kulliyyah of Allied Health Sciences",
  KENMS: "Kulliyyah of Economics and Management Sciences", AIKOL: "Ahmad Ibrahim Kulliyyah of Laws",
  KIRKHS: "AbdulHamid AbuSulayman Kulliyyah of Islamic Revealed Knowledge and Human Sciences",
  KOED: "Kulliyyah of Education", KSTCL: "Kulliyyah of Sustainable Tourism and Contemporary Languages",
};
// Clips whose bottom-right corner is light (measured mean luma > 200 of 255 at t=1.5 s): dark text on a
// light scrim. A dark scrim there reads as a smudge.
const LIGHT = new Set(process.env.LIGHT ? process.env.LIGHT.split(",") : ["KOP", "KON", "KENMS", "AIKOL", "KSTCL"]);
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");

for (const c of cites) {
  const vol = [c.volume, c.issue ? `(${c.issue})` : ""].join("");
  const src = [`<i>${esc(c.journal)}</i> ${esc(vol)}${c.pages ? `, ${esc(c.pages)}` : ""} (${c.year})`,
               c.doi ? `doi:${esc(c.doi)}` : ""].filter(Boolean).join(" · ");
  const [ink, scrim, shadow] = LIGHT.has(c.kulliyyah)
    ? ["#1f2328", "250,248,244", "0 1px 2px rgba(255,255,255,.6)"]
    : ["#f4f0e8", "6,10,14", "0 1px 3px rgba(0,0,0,.55)"];
  const html = `<!doctype html><meta charset="utf-8"><style>
html,body{margin:0;width:1920px;height:1080px;background:transparent;overflow:hidden}
.scrim{position:absolute;right:0;bottom:0;width:1250px;height:470px;
  background:radial-gradient(ellipse at 100% 100%,rgba(${scrim},.88) 0%,rgba(${scrim},.62) 45%,rgba(${scrim},0) 72%)}
.cite{position:absolute;right:64px;bottom:52px;width:900px;text-align:right;color:${ink};
  font-family:"Segoe UI",system-ui,sans-serif;text-shadow:${shadow}}
.k{font-size:15px;letter-spacing:.16em;text-transform:uppercase;opacity:.75;margin-bottom:10px}
.t{font-size:23px;font-weight:600;line-height:1.25;margin-bottom:8px}
.a{font-size:16.5px;line-height:1.38;opacity:.88;margin-bottom:6px}
.j{font-size:15px;opacity:.72}
</style><div class="scrim"></div><div class="cite">
<div class="k">${esc(KULLIYYAH[c.kulliyyah])}</div>
<div class="t">${esc(c.title)}</div>
<div class="a">${c.authors.map(esc).join(", ")}</div>
<div class="j">${src}</div></div>`;
  const htmlFile = new URL(`${c.kulliyyah}.html`, OUT);
  fs.writeFileSync(htmlFile, html);
  execFileSync(CHROME, ["--headless=new", `--user-data-dir=${fileURLToPath(new URL("_scratch/chrome-cite", PROMO))}`,
    "--window-size=1920,1080", "--hide-scrollbars", "--default-background-color=00000000",
    `--screenshot=${fileURLToPath(new URL(`${c.kulliyyah}.png`, OUT))}`, htmlFile.href], { stdio: "ignore" });
  console.log(c.kulliyyah, "ok");
}
