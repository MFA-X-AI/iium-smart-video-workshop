// Fetch candidate sound effects from Freesound, CC0 (public domain) only, most-downloaded first.
// No API key: uses the public search page and the public HQ preview MP3s. Each candidate's licence is
// re-checked on its own sound page before it is kept. Writes promo/public/sfx/<cue>-<n>-<id>.mp3 and
// promo/public/sfx/sources.csv (for the credits). Usage: node promo/scripts/fetch-sfx.mjs
import fs from "node:fs";

const OUT = new URL("../public/sfx/", import.meta.url);
fs.mkdirSync(OUT, { recursive: true });
const PER = 3;
const CUES = {  // several searches per cue; results are pooled
  click: ["mouse click single", "computer mouse click"],
  drag: ["mouse movement", "computer mouse moving", "mouse pad"],
  keys: ["laptop keyboard typing soft", "keyboard typing"],
  ctrlz: ["keyboard key press", "keyboard single key"],
  sigh: ["man tired sigh exhale", "sigh male", "sigh"],
  chair: ["office chair creak lean back", "office chair"],
};
const UA = { "User-Agent": "Mozilla/5.0" };
const get = async (u) => (await fetch(u, { headers: UA, signal: AbortSignal.timeout(40000) })).text();

const rows = ["cue,file,freesound_id,author,url,license"];
for (const [cue, qs] of Object.entries(CUES)) {
  let html = "";
  for (const q of qs) html += await get(`https://freesound.org/search/?q=${encodeURIComponent(q)}&f=license%3A%22Creative+Commons+0%22&s=Downloads`);
  const hits = [...html.matchAll(/href="\/people\/([^/]+)\/sounds\/(\d+)\/"/g)]
    .map((m) => ({ user: m[1], id: m[2] }))
    .filter((h, i, a) => a.findIndex((x) => x.id === h.id) === i);
  let kept = 0;
  for (const h of hits) {
    if (kept >= PER) break;
    const page = await get(`https://freesound.org/people/${h.user}/sounds/${h.id}/`);
    if (!/creativecommons\.org\/publicdomain\/zero/i.test(page)) continue; // licence check on the sound's own page
    const mp3 = (page.match(/https:\/\/cdn\.freesound\.org\/previews\/[^"]+-hq\.mp3/) ||
                 html.match(new RegExp(`https://cdn\\.freesound\\.org/previews/\\d+/${h.id}_[^"]+-lq\\.mp3`)) || [])[0];
    if (!mp3) continue;
    const buf = Buffer.from(await (await fetch(mp3.replace("-lq.mp3", "-hq.mp3"), { headers: UA })).arrayBuffer());
    const file = `${cue}-${kept + 1}-${h.id}.mp3`;
    fs.writeFileSync(new URL(file, OUT), buf);
    rows.push([cue, file, h.id, h.user, `https://freesound.org/people/${h.user}/sounds/${h.id}/`, "CC0"].join(","));
    kept++;
  }
  console.log(`${cue.padEnd(6)} ${kept} CC0 files`);
}
fs.writeFileSync(new URL("sources.csv", OUT), rows.join("\n") + "\n");
