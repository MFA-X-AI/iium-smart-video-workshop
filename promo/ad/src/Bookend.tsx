import React from "react";
import { AbsoluteFill, Easing, Freeze, Img, interpolate, OffthreadVideo, Sequence, staticFile, useCurrentFrame } from "remotion";
import { clamp } from "./kit";
import { C, mono } from "./theme";

// Bookend: the opening's office, same night, nobody in the chair: the computer builds the animation
// on its own. The still is 1536x1024 (shot-bookend-empty.png); the Screen composition (1600x1000) is
// mapped onto the laptop's screen quad with a homography, so it sits exactly on the glass.
const STILL = "bookend/shot-bookend-empty.png";
const QUAD: [number, number][] = [[682, 370], [1130, 368], [1114, 648], [650, 625]]; // TL TR BR BL in still pixels (set from find-screen-quad.py)
const SW = 1920, SH = 1080; // public/fix.mp4: the poster editor, fixed by the AI cursor (assets/fix)

// 3x3 homography mapping the unit rect corners of (w,h) to quad, as a CSS matrix3d
const homography = (w: number, h: number, q: [number, number][]) => {
  const src = [[0, 0], [w, 0], [w, h], [0, h]];
  const A: number[][] = [], b: number[] = [];
  for (let i = 0; i < 4; i++) {
    const [x, y] = src[i], [u, v] = q[i];
    A.push([x, y, 1, 0, 0, 0, -u * x, -u * y]); b.push(u);
    A.push([0, 0, 0, x, y, 1, -v * x, -v * y]); b.push(v);
  }
  // Gaussian elimination
  const n = 8, M = A.map((r, i) => [...r, b[i]]);
  for (let c = 0; c < n; c++) {
    let p = c; for (let r = c + 1; r < n; r++) if (Math.abs(M[r][c]) > Math.abs(M[p][c])) p = r;
    [M[c], M[p]] = [M[p], M[c]];
    for (let r = 0; r < n; r++) if (r !== c) { const k = M[r][c] / M[c][c]; for (let k2 = c; k2 <= n; k2++) M[r][k2] -= k * M[c][k2]; }
  }
  const [a, bb, cc, d, e, f, g, hh] = M.map((r, i) => r[n] / r[i]);
  return `matrix3d(${a},${d},0,${g},${bb},${e},0,${hh},0,0,1,0,${cc},${f},0,1)`;
};

// After the poster is fixed, a terminal opens in the middle of the screen and types the closing line.
const FIX_LEN = 180; // fix2.mp4 is 6 s; the fix is done by 4.6 s
export const TERM_AT = 152; // terminal opens
const LINE1 = "This video was made with the help of AI.";
const LINE2 = "Come learn how.";
export const TYPE1: [number, number] = [TERM_AT + 12, TERM_AT + 12 + LINE1.length * 1.3];
export const TYPE2: [number, number] = [TYPE1[1] + 18, TYPE1[1] + 18 + LINE2.length * 1.8];

const Terminal: React.FC<{ f: number }> = ({ f }) => {
  const open = interpolate(f, [TERM_AT, TERM_AT + 9], [0, 1], { ...clamp, easing: Easing.bezier(0.2, 1.3, 0.4, 1) });
  if (f < TERM_AT) return null;
  const n1 = Math.floor(interpolate(f, TYPE1, [0, LINE1.length], clamp));
  const n2 = Math.floor(interpolate(f, TYPE2, [0, LINE2.length], clamp));
  const caretOn = f % 16 < 9;
  return (
    <div style={{
      position: "absolute", left: 960 - 760, top: 540 - 190, width: 1520, height: 380, borderRadius: 18, overflow: "hidden",
      background: "rgba(10,13,20,0.97)", border: "1px solid rgba(255,255,255,0.14)",
      boxShadow: "0 40px 120px rgba(0,0,0,0.55), 0 0 0 1px rgba(0,0,0,0.4)",
      opacity: Math.min(1, open * 1.4), transform: `scale(${0.92 + 0.08 * open})`,
    }}>
      <div style={{ height: 52, background: "#161b26", display: "flex", alignItems: "center", gap: 12, padding: "0 22px" }}>
        {["#ff5f57", "#febc2e", "#28c840"].map((c) => <div key={c} style={{ width: 16, height: 16, borderRadius: 8, background: c }} />)}
        <div style={{ marginLeft: 16, fontFamily: mono, fontSize: 22, color: "rgba(255,255,255,0.55)" }}>terminal</div>
      </div>
      <div style={{ padding: "46px 54px", fontFamily: mono, fontSize: 54, lineHeight: 1.4, color: "#f4f1ea", whiteSpace: "nowrap" }}>
        <div><span style={{ color: C.teal }}>&gt; </span>{LINE1.slice(0, n1)}{f < TYPE2[0] && <span style={{ color: C.teal, opacity: caretOn || f < TYPE1[1] ? 1 : 0 }}>▍</span>}</div>
        {f >= TYPE2[0] && (
          <div><span style={{ color: C.teal }}>&gt; </span><span style={{ color: C.amber }}>{LINE2.slice(0, n2)}</span><span style={{ color: C.teal, opacity: caretOn || f < TYPE2[1] ? 1 : 0 }}>▍</span></div>
        )}
      </div>
    </div>
  );
};

export const Bookend: React.FC<{ len: number }> = ({ len }) => {
  const f = useCurrentFrame();
  const S = 1920 / 1536; // still → frame (cover; crops 100 px top and bottom)
  const q = QUAD.map(([x, y]) => [x * S, y * S - 100] as [number, number]);
  const cx = (q[0][0] + q[2][0]) / 2, cy = (q[0][1] + q[2][1]) / 2;
  const push = 1.72; // static close-up on the laptop: the camera holds, only the screen moves
  return (
    <AbsoluteFill style={{ background: C.bg, overflow: "hidden" }}>
      <AbsoluteFill style={{ transform: `scale(${push})`, transformOrigin: `${cx}px ${cy}px` }}>
        <Img src={staticFile(STILL)} style={{ position: "absolute", left: 0, top: -100, width: 1920, height: 1280 }} />
        {/* the screen */}
        <div style={{ position: "absolute", left: 0, top: 0, width: SW, height: SH, transformOrigin: "0 0", transform: homography(SW, SH, q), filter: "blur(0.3px) brightness(1.05)" }}>
          <Sequence durationInFrames={FIX_LEN}>
            <OffthreadVideo src={staticFile("fix2.mp4")} muted style={{ width: SW, height: SH }} />
          </Sequence>
          <Sequence from={FIX_LEN}>
            <Freeze frame={FIX_LEN - 1}><OffthreadVideo src={staticFile("fix2.mp4")} muted style={{ width: SW, height: SH }} /></Freeze>
          </Sequence>
          <Terminal f={f} />
        </div>
        {/* light spill from the screen */}
        <div style={{
          position: "absolute", left: cx - 500, top: cy - 300, width: 1000, height: 600, borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(120,190,255,0.10), rgba(0,0,0,0) 70%)", mixBlendMode: "screen",
        }} />
      </AbsoluteFill>
      {/* in from the end card's black; the last frame stays on the scene */}
      <AbsoluteFill style={{ background: "#000", opacity: interpolate(f, [0, 14], [1, 0], clamp) }} />
    </AbsoluteFill>
  );
};
