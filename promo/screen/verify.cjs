// Browser-free verification: node promo/screen/verify.cjs
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];
new vm.Script(script);
assert(!/https?:\/\//.test(html.replace('http://www.w3.org/2000/svg', '')));
assert(!/Math\.random|Date\.now|setTimeout|setInterval|@keyframes/.test(script));
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
assert.equal(new Set(ids).size, ids.length, 'All SVG IDs must be unique');
function boot(search) {
  const nodes = new Map(ids.map(id => [id, { innerHTML: '', attrs: {}, setAttribute(k,v) { this.attrs[k]=v; } }]));
  const frames = [];
  const context = vm.createContext({ document: { getElementById: id => {
    assert(nodes.has(id), `Missing DOM node: ${id}`);
    return nodes.get(id);
  } }, location: { search }, URLSearchParams, requestAnimationFrame: f => frames.push(f) });
  vm.runInContext(script, context);
  return {
    nodes, frames,
    render: t => vm.runInContext(`render(${t})`, context),
    markup: id => nodes.get(id).innerHTML,
    snapshot: () => JSON.stringify([...nodes])
  };
}
const page=boot('?t=0');
assert.equal(page.frames.length,0,'Fixed-time mode must never schedule an animation');
const snapshots = [];
for(let frame=0;frame<=210;frame++) {
  page.render(frame/30);
  const state=page.snapshot();
  assert(!/NaN|undefined|Infinity/.test(state), `Invalid geometry at frame ${frame}`);
  snapshots.push(state);
}
for(let frame=210;frame>=0;frame--) {
  page.render(frame/30);
  assert.equal(page.snapshot(),snapshots[frame],`Frame ${frame} must not depend on playback history`);
}
page.render(1.1);
assert.match(page.markup('figure'),/translate\(238 314\)/);
assert.match(page.markup('selection'),/circle/);
page.render(1.9);
assert.match(page.markup('figure'),/translate\(244 314\)/);
const heldCursor=page.nodes.get('cursor').attrs.transform;
page.render(2.12);
assert.match(page.markup('figure'),/translate\(244 545\)/);
assert.match(page.markup('methods'),/is placed in contact/);
page.render(2.46);
assert.match(page.markup('results'),/translate\(444 182\)/);
page.render(2.72);
assert.match(page.markup('caption'),/y="495"/);
page.render(3.02);
assert.match(page.markup('overflow'),/translate\(142 740\)/);
page.render(3.32);
assert.match(page.markup('conclusion'),/translate\(590 441\)/);
page.render(3.9);
assert.match(page.markup('figure'),/translate\(244 622\)/);
assert.equal(page.nodes.get('cursor').attrs.transform,heldCursor);
assert.equal(page.nodes.get('screen').attrs['data-state'],'wrecked');
page.render(5.4);
assert.match(page.markup('figure'),/translate\(238 314\)/);
assert.match(page.markup('results'),/translate\(286 563\)/);
assert.match(page.markup('overflow'),/translate\(166 675\)/);
assert.match(page.markup('toast'),/Ctrl\+Z/);
assert.equal(page.nodes.get('cursor').attrs.transform,heldCursor);
page.render(6.7);
assert.equal(page.markup('toast'),'');
page.render(7);
assert.equal(page.nodes.get('screen').attrs['data-state'],'undo');
assert.equal(boot('?t=bad').nodes.get('screen').attrs['data-time'],'0.000000');
assert.equal(boot('?t=99').nodes.get('screen').attrs['data-time'],'7.000000');
const playback=boot('');
assert.equal(playback.frames.length,1);
playback.frames.shift()(1000);
assert.equal(playback.nodes.get('screen').attrs['data-time'],'0.000000');
playback.frames.shift()(7900);
assert.equal(playback.nodes.get('screen').attrs['data-state'],'undo');
playback.frames.shift()(8000);
assert.equal(playback.nodes.get('screen').attrs['data-time'],'0.000000');
console.log('PASS: 211 deterministic frames; all beat boundaries; frozen cursor; fixed-time mode; playback loop. No browser launched.');
