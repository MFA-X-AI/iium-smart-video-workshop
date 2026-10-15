import React from "react";
import { AbsoluteFill, Easing, interpolate, Loop, OffthreadVideo, Sequence, staticFile, useCurrentFrame } from "remotion";
import { clamp, ease, Rise } from "./kit";
import { C, mono, ORDER, serifItalic } from "./theme";

// The zoom-out wall: the teaching simulation is the centre screen; the camera pulls back through
// rings of screens (every research clip, v2 then v1) until the whole wall hangs in the dark.
const COLS = 9, ROWS = 7, W = 1920, H = 1080, GAP = 140;
const LEN = 299;

const rnd = (i: number, k: number) => { const s = Math.sin(i * 91.3 + k * 47.7) * 43758.5453; return s - Math.floor(s); };

type Tile = { c: number; r: number; d: number; src: string | null; off: number; i: number };
const TILES: Tile[] = (() => {
  const cells: Tile[] = [];
  for (let r = 0; r < ROWS; r++) for (let c = 0; c < COLS; c++) {
    const dc = c - (COLS - 1) / 2, dr = r - (ROWS - 1) / 2;
    cells.push({ c: dc, r: dr, d: Math.hypot(dc, dr * 1.25), src: null, off: 0, i: 0 });
  }
  cells.sort((a, b) => a.d - b.d || a.c - b.c);
  const pool = [...ORDER.map((k) => `px/v2-${k}.mp4`), ...ORDER.map((k) => `px/v1-${k}.mp4`)];
  cells.forEach((t, i) => {
    t.i = i;
    t.src = i === 0 ? null : pool[(i - 1) % pool.length];
    t.off = Math.floor(rnd(i, 3) * 80);
  });
  return cells;
})();

const CenterTile: React.FC = () => (
  <>
    <Sequence durationInFrames={21}>
      <OffthreadVideo src={staticFile("teach.mp4")} muted startFrom={174} style={{ width: W, height: H }} />
    </Sequence>
    <Sequence from={21}>
      <Loop durationInFrames={75}>
        <OffthreadVideo src={staticFile("teach.mp4")} muted startFrom={120} style={{ width: W, height: H }} />
      </Loop>
    </Sequence>
  </>
);

const Screen: React.FC<{ t: Tile; f: number; pull: number }> = ({ t, f, pull }) => {
  // power-on: a CRT-like line opens vertically with a flash, rings light up outwards
  const on = t.i === 0 ? -100 : 8 + t.d * 9 + rnd(t.i, 5) * 6;
  const p = interpolate(f, [on, on + 7], [0, 1], { ...clamp, easing: ease });
  const flash = interpolate(f, [on + 2, on + 5, on + 12], [0, 0.8, 0], clamp);
  const zFloat = (rnd(t.i, 1) - 0.5) * 1400 * pull * (t.i === 0 ? 0 : 1);
  const x = t.c * (W + GAP), y = t.r * (H + GAP);
  const out = interpolate(f, [236 + rnd(t.i, 7) * 30, 262 + rnd(t.i, 7) * 30], [1, 0], clamp);
  return (
    <div style={{
      position: "absolute", left: -W / 2, top: -H / 2, width: W, height: H,
      transform: `translate3d(${x}px, ${y}px, ${zFloat}px)`,
      opacity: out,
    }}>
      <div style={{
        width: W, height: H, overflow: "hidden", borderRadius: 18 * pull + 2, background: "#000",
        transform: `scaleY(${0.01 + 0.99 * p})`, opacity: p > 0 ? 1 : 0,
        boxShadow: `0 0 ${120 * pull}px rgba(63,208,201,${0.25 * pull}), 0 0 0 ${6 * pull}px rgba(255,255,255,0.12)`,
      }}>
        {t.i === 0 ? <CenterTile /> : (
          <Sequence from={-t.off}>
            <Loop durationInFrames={90}>
              <OffthreadVideo src={staticFile(t.src!)} muted style={{ width: W, height: H }} />
            </Loop>
          </Sequence>
        )}
        <AbsoluteFill style={{ background: "#fff", opacity: flash }} />
        {/* glass sheen */}
        <AbsoluteFill style={{ background: "linear-gradient(115deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 35%)", opacity: pull }} />
      </div>
    </div>
  );
};

export const Wall: React.FC<{ len?: number }> = ({ len = LEN + 1 }) => {
  const f = (useCurrentFrame() * (LEN + 1)) / len; // the move is designed for 300 frames; compress to fit
  const k = len / (LEN + 1); // for components that read the real frame (Rise)
  // camera: a quick first pull to the 3×3 ring, then a long, accelerating pull to the whole wall
  const z1 = interpolate(f, [0, 60], [0, 5200], { ...clamp, easing: Easing.bezier(0.5, 0, 0.2, 1) });
  const z2 = interpolate(f, [70, 240], [0, 17000], { ...clamp, easing: Easing.bezier(0.45, 0, 0.25, 1) });
  const z3 = interpolate(f, [240, LEN], [0, 6000], { ...clamp, easing: Easing.bezier(0.5, 0, 1, 1) });
  const z = z1 + z2 + z3;
  const pull = interpolate(z, [0, 4000], [0, 1], clamp);
  const ry = interpolate(f, [20, 260], [0, -17], { ...clamp, easing: Easing.inOut(Easing.sin) });
  const rx = interpolate(f, [20, 260], [0, 9], { ...clamp, easing: Easing.inOut(Easing.sin) });
  const rz = interpolate(f, [20, 260], [0, -2.5], { ...clamp, easing: Easing.inOut(Easing.sin) });
  const shiftX = interpolate(f, [60, 260], [0, 380], { ...clamp, easing: Easing.inOut(Easing.sin) });
  const scrim = interpolate(f, [120, 140, 228, 250], [0, 1, 1, 0], clamp);
  const endDark = interpolate(f, [262, LEN], [0, 1], clamp);
  return (
    <AbsoluteFill style={{ background: C.bg, overflow: "hidden" }}>
      {/* floor glow */}
      <AbsoluteFill style={{
        background: `radial-gradient(ellipse 70% 40% at 50% 90%, rgba(63,208,201,${0.12 * pull}), rgba(0,0,0,0) 70%)`,
      }} />
      <AbsoluteFill style={{ perspective: 2000, perspectiveOrigin: "50% 50%" }}>
        <div style={{
          position: "absolute", left: 960, top: 540, transformStyle: "preserve-3d",
          transform: `translateZ(${-z}px) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg) translateX(${shiftX}px)`,
        }}>
          {TILES.map((t) => <Screen key={t.i} t={t} f={f} pull={pull} />)}
        </div>
      </AbsoluteFill>
      {/* captions */}
      <AbsoluteFill style={{ background: "linear-gradient(180deg, rgba(5,7,12,0.85) 0%, rgba(5,7,12,0) 22%)", opacity: interpolate(f, [70, 90, 228, 244], [0, 1, 1, 0], clamp) }} />
      <div style={{
        position: "absolute", left: 0, right: 0, top: 84, textAlign: "center", fontFamily: mono, fontSize: 24,
        letterSpacing: "0.32em", color: C.ink, opacity: interpolate(f, [70, 90, 228, 244], [0, 0.85, 0.85, 0], clamp),
      }}>
        REAL IIUM RESEARCH
      </div>
      <AbsoluteFill style={{ background: "radial-gradient(ellipse 58% 40% at 50% 52%, rgba(5,7,12,0.94) 30%, rgba(5,7,12,0) 100%)", opacity: scrim }} />
      <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", textAlign: "center", textShadow: "0 4px 40px rgba(0,0,0,0.9)" }}>
        <Rise text="AI does the heavy lifting." at={Math.round(124 * k)} size={120} out={Math.round(232 * k)} style={{ display: "flex", justifyContent: "center" }} />
        <Rise text="Your expertise keeps it right." at={Math.round(156 * k)} size={84} font={serifItalic} color={C.amber} out={Math.round(236 * k)} style={{ display: "flex", justifyContent: "center", marginTop: 18 }} />
      </AbsoluteFill>
      <AbsoluteFill style={{ background: C.bg, opacity: endDark }} />
    </AbsoluteFill>
  );
};
