import React from "react";
import {
  AbsoluteFill, Audio, Easing, Img, interpolate, Loop, OffthreadVideo, Sequence,
  staticFile, useCurrentFrame, useVideoConfig,
} from "remotion";
import { C, mono, ORDER, sans, serif, serifItalic } from "./theme";
import { Wall } from "./Wall";
import { BED_ON, CANVA, clamp, ease, Rise, VO_ON } from "./kit";
import { Presenter } from "./Presenter";
import { Bookend, TERM_AT, TYPE1, TYPE2 } from "./Bookend";

// ---------------------------------------------------------------- timeline (frames @ 30 fps)
// Music (public/music/bed-v5.wav) starts at OPEN_END; its drop is on DROP. Montage cuts sit on
// every third beat of the bed (117.5 bpm, beats measured with librosa, see _scratch/beats.json).
export const OPEN_END = 282; // opening (old way) 0:00–0:09.4
const TYPE_START = 304;
const TYPE_END = 382;
const ENTER = 389;
const EXPAND = 392;
export const DROP = 408; // 0:13.6
const CUTS = [408, 453, 498, 543, 588, 634, 678, 723, 768, 813, 858, 903, 949, 993];
const MONT_END = 1039; // montage ends on a beat; the music stops here...
export const BREATH = 45; // ...the last montage clip lingers (slow motion) while the music dips, then dissolves into the slide
export const TEACH = MONT_END + BREATH; // slide → simulation
const XDIS = 16; // montage → slide dissolve
export const WALL = TEACH + 165;
export const END = WALL + 240; // end card: title, instructor, call to action
export const BOOK = END + 510; // closing shot: the same office, nobody there, the computer works on its own
export const TOTAL = BOOK + 330; // body length (the brand card adds PRE - XF in front); closing shot 10 s with the terminal
export const PRE = 165; // brand card
export const XF = 16; // brand card → opening crossfade
export const LINGER = 60; // the slump shot holds 2 s longer before the prompt
export const FULL = PRE - XF + LINGER + TOTAL;
const IN_AT = 27; // montage clips start 0.9 s in, where the result is on screen

const PROMPT =
  "Animate my paper: light racing around a glass microsphere, and how the Q-factor changes when the fibre touches it.";

const easeIn = Easing.bezier(0.7, 0, 0.84, 0);

// ---------------------------------------------------------------- finishing layers
const Grain: React.FC<{ opacity?: number }> = ({ opacity = 0.07 }) => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill style={{ pointerEvents: "none", mixBlendMode: "overlay", opacity }}>
      <svg width="1920" height="1080">
        <filter id="grainf">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed={f % 97} stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="1920" height="1080" filter="url(#grainf)" />
      </svg>
    </AbsoluteFill>
  );
};

const Vignette: React.FC<{ strength?: number }> = ({ strength = 0.55 }) => (
  <AbsoluteFill
    style={{
      pointerEvents: "none",
      background: `radial-gradient(ellipse 75% 70% at 50% 50%, rgba(0,0,0,0) 55%, rgba(0,0,0,${strength}) 100%)`,
    }}
  />
);

// Horizontal-only motion blur for whip transitions (SVG filter, referenced by url()).
const BlurDefs: React.FC = () => (
  <svg width="0" height="0" style={{ position: "absolute" }}>
    {[8, 20, 40, 70].map((s) => (
      <filter key={s} id={`hb${s}`} x="-20%" y="0" width="140%" height="100%">
        <feGaussianBlur stdDeviation={`${s} 0`} />
      </filter>
    ))}
  </svg>
);
const hblur = (px: number) => (px < 3 ? "none" : `url(#hb${px < 14 ? 8 : px < 30 ? 20 : px < 55 ? 40 : 70})`);

// ---------------------------------------------------------------- 1. opening: the old way
const Opening: React.FC = () => {
  const f = useCurrentFrame();
  const clock = "2:14 a.m.";
  const n = Math.floor(interpolate(f, [8, 26], [0, clock.length], clamp));
  const clockOp = interpolate(f, [70, 84], [1, 0], clamp);
  const scrim = interpolate(f, [218, 232], [0, 0.55], clamp);
  return (
    <AbsoluteFill>
      <Sequence durationInFrames={OPEN_END}>
        <OffthreadVideo src={staticFile("opening.mp4")} muted={!BED_ON} volume={(fr) => interpolate(fr, [206, 216], [1, 0.35], clamp)} />
      </Sequence>
      {/* linger: the rest of the same slump take (opening.mp4 used its first 2 s), cropped like the cut */}
      <Sequence from={OPEN_END}>
        <OffthreadVideo src={staticFile("gen/m2-slump.mp4")} muted startFrom={60} style={{ position: "absolute", left: 0, top: -100, width: 1920, height: 1280 }} />
        {BED_ON && <Audio src={staticFile("sfx/room.wav")} volume={0.6} />}
      </Sequence>
      <div style={{ position: "absolute", left: 96, top: 84, fontFamily: mono, fontSize: 30, color: C.ink, opacity: clockOp, letterSpacing: "0.06em" }}>
        {clock.slice(0, n)}<span style={{ opacity: f % 16 < 8 ? 1 : 0 }}>▍</span>
      </div>
      <AbsoluteFill style={{ background: `linear-gradient(90deg, rgba(5,7,12,${scrim}) 0%, rgba(5,7,12,${scrim * 0.3}) 60%, rgba(0,0,0,0) 100%)` }} />
      <div style={{ position: "absolute", left: 120, top: 380 }}>
        <Rise text="The research is done." at={224} size={104} />
        <Rise text="The poster isn’t." at={248} size={104} font={serifItalic} color={C.amber} />
      </div>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 2. the prompt
const Prompt: React.FC = () => {
  const f = useCurrentFrame() + OPEN_END; // absolute frame
  const boxIn = interpolate(f, [290, 308], [0, 1], { ...clamp, easing: ease });
  // typing speeds up a little as it goes, like a confident typist
  const typed = Math.floor(interpolate(f, [TYPE_START, TYPE_END], [0, 1], { ...clamp, easing: Easing.bezier(0.3, 0, 0.6, 1) }) * PROMPT.length);
  const pressed = interpolate(f, [ENTER, ENTER + 3, ENTER + 8], [0, 1, 0], clamp);
  // the card grows from its rect to the full frame, revealing the first animation inside it
  const g = interpolate(f, [EXPAND, DROP + 2], [0, 1], { ...clamp, easing: Easing.bezier(0.65, 0, 0.2, 1) });
  const W0 = 1240, H0 = 300, X0 = (1920 - W0) / 2, Y0 = 470;
  const x = interpolate(g, [0, 1], [X0, 0]), y = interpolate(g, [0, 1], [Y0, 0]);
  const w = interpolate(g, [0, 1], [W0, 1920]), h = interpolate(g, [0, 1], [H0, 1080]);
  const radius = interpolate(g, [0, 1], [28, 0]);
  const textOp = interpolate(f, [EXPAND - 2, EXPAND + 6], [1, 0], clamp);
  const clipOp = interpolate(f, [EXPAND, EXPAND + 8], [0, 1], clamp);
  const drift = interpolate(f, [282, 410], [0, 1]);
  return (
    <AbsoluteFill style={{ background: C.bg }}>
      {/* slow luminous haze behind */}
      <AbsoluteFill style={{
        background: `radial-gradient(ellipse 60% 45% at ${45 + drift * 10}% 55%, rgba(63,208,201,0.16), rgba(0,0,0,0) 70%),
                     radial-gradient(ellipse 40% 35% at ${70 - drift * 12}% 40%, rgba(255,181,71,0.10), rgba(0,0,0,0) 70%)`,
      }} />
      <Dust t={f} />
      <div style={{
        position: "absolute", left: X0, top: Y0 - 70, width: W0, fontFamily: mono, fontSize: 22, letterSpacing: "0.22em",
        color: C.dim, opacity: boxIn * textOp, transform: `translateY(${(1 - boxIn) * 20}px)`,
      }}>
        DESCRIBE YOUR RESEARCH IN PLAIN WORDS
      </div>
      <div style={{
        position: "absolute", left: x, top: y, width: w, height: h, borderRadius: radius, overflow: "hidden",
        opacity: boxIn, transform: `translateY(${(1 - boxIn) * 30}px) scale(${1 - pressed * 0.012})`,
        background: "rgba(255,255,255,0.055)", backdropFilter: "blur(20px)",
        border: `1px solid rgba(255,255,255,${0.16 + pressed * 0.4})`,
        boxShadow: `0 40px 120px rgba(0,0,0,0.6), 0 0 ${40 + pressed * 80}px rgba(63,208,201,${0.15 + pressed * 0.35}) inset`,
      }}>
        <AbsoluteFill style={{ opacity: clipOp }}>
          <Sequence from={EXPAND - OPEN_END} layout="none">
            <OffthreadVideo src={staticFile("v2/KOS.mp4")} muted
              style={{ position: "absolute", left: -x, top: -y, width: 1920, height: 1080 }} />
          </Sequence>
        </AbsoluteFill>
        <div style={{ position: "absolute", left: 56, top: 50, right: 150, fontFamily: sans, fontWeight: 300, fontSize: 44, lineHeight: 1.35, color: C.ink, opacity: textOp }}>
          {PROMPT.slice(0, typed)}
          <span style={{ color: C.teal, opacity: f % 18 < 10 || (f > TYPE_START && f < TYPE_END) ? 1 : 0 }}>▍</span>
        </div>
        {/* send key */}
        <div style={{
          position: "absolute", right: 40, bottom: 36, width: 64, height: 64, borderRadius: 32, opacity: textOp,
          background: f >= ENTER ? C.teal : "rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center",
          transform: `scale(${1 + pressed * 0.15})`, boxShadow: f >= ENTER ? `0 0 40px ${C.teal}` : "none",
        }}>
          <svg width="28" height="28" viewBox="0 0 24 24"><path d="M12 19V5M5 12l7-7 7 7" stroke={f >= ENTER ? C.bg : C.ink} strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Drifting dust motes (deterministic).
const Dust: React.FC<{ t: number }> = ({ t }) => {
  const motes = Array.from({ length: 60 }, (_, i) => {
    const r = (k: number) => { const s = Math.sin(i * 127.1 + k * 311.7) * 43758.5453; return s - Math.floor(s); };
    const x = (r(1) * 1920 + t * (0.4 + r(2) * 0.8)) % 1920;
    const y = (r(3) * 1080 - t * (0.15 + r(4) * 0.3) + 1080) % 1080;
    return { x, y, s: 1 + r(5) * 2.5, o: 0.08 + r(6) * 0.25 };
  });
  return (
    <AbsoluteFill>
      {motes.map((m, i) => (
        <div key={i} style={{ position: "absolute", left: m.x, top: m.y, width: m.s, height: m.s, borderRadius: "50%", background: C.ink, opacity: m.o, filter: "blur(0.6px)" }} />
      ))}
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 3. montage
type Tr = "whip" | "zoom" | "flash" | "wipe";
const TRS: Tr[] = ["zoom", "whip", "wipe", "flash", "whip", "zoom", "wipe", "whip", "flash", "zoom", "whip", "wipe", "zoom"];

const Shot: React.FC<{ code: string; len: number; inTr?: Tr; outTr?: Tr; startFrom: number; idx: number; rate?: number }> = ({ code, len, inTr, outTr, startFrom, idx, rate = 1 }) => {
  const f = useCurrentFrame();
  const IN = 7, OUT = 6;
  let tx = 0, scale = interpolate(f, [0, len], [1.0, 1.045]), blur = 0, bright = 1, flash = 0, clip = "none";
  const dir = idx % 2 ? -1 : 1;
  // incoming
  if (inTr && f < IN) {
    const p = interpolate(f, [0, IN], [0, 1], { ...clamp, easing: ease });
    if (inTr === "whip") { tx = (1 - p) * 900 * dir; blur = (1 - p) * 70; }
    if (inTr === "zoom") { scale *= 0.82 + 0.18 * p; blur = 0; bright = 1 + (1 - p) * 0.8; }
    if (inTr === "flash") { flash = interpolate(f, [0, 5], [0.9, 0], clamp); bright = 1 + (1 - p) * 0.6; }
    if (inTr === "wipe") {
      const e = interpolate(f, [0, IN + 2], [-15, 115], { ...clamp, easing: ease });
      clip = `polygon(0% 0%, ${e + 12}% 0%, ${e - 12}% 100%, 0% 100%)`;
    }
  }
  // outgoing
  if (outTr && f >= len - OUT) {
    const p = interpolate(f, [len - OUT, len], [0, 1], { ...clamp, easing: easeIn });
    const ndir = (idx + 1) % 2 ? -1 : 1;
    if (outTr === "whip") { tx = -p * 900 * ndir; blur = p * 70; }
    if (outTr === "zoom") { scale *= 1 + p * 0.35; bright = 1 + p * 0.9; }
    if (outTr === "flash") { bright = 1 + p * 1.2; }
  }
  const citeOp = interpolate(f, [5, 12], [0, 1], clamp);
  const wipeEdge = inTr === "wipe" && f < IN + 2 ? interpolate(f, [0, IN + 2], [-15, 115], { ...clamp, easing: ease }) : null;
  return (
    <AbsoluteFill style={{ background: C.bg }}>
      <AbsoluteFill style={{ clipPath: clip }}>
        <AbsoluteFill style={{ transform: `translateX(${tx}px) scale(${scale})`, filter: `${blur > 2 ? hblur(blur) : ""} brightness(${bright})`.trim() }}>
          <OffthreadVideo src={staticFile(`v2/${code}.mp4`)} muted startFrom={startFrom} playbackRate={rate} />
          <Img src={staticFile(`cite/${code}.png`)} style={{ position: "absolute", inset: 0, opacity: citeOp }} />
        </AbsoluteFill>
      </AbsoluteFill>
      {wipeEdge !== null && (
        <div style={{
          position: "absolute", top: -100, bottom: -100, left: `${wipeEdge}%`, width: 6, background: C.ink,
          boxShadow: `0 0 40px 10px ${C.teal}`, transform: "skewX(-12deg)", opacity: 0.9,
        }} />
      )}
      <AbsoluteFill style={{ background: "#fff", opacity: flash }} />
    </AbsoluteFill>
  );
};

const Montage: React.FC = () => (
  <>
    {ORDER.map((code, i) => {
      if (i === 0) return null; // KOS lives inside the prompt card until its cut below
      const from = CUTS[i];
      const last = i === ORDER.length - 1;
      // the last clip lingers through the breath in slow motion and runs under the slide's dissolve
      const to = last ? TEACH + XDIS : CUTS[i + 1];
      return (
        <Sequence key={code} from={from} durationInFrames={to - from}>
          <Shot code={code} len={to - from} inTr={TRS[i - 1]} outTr={last ? undefined : TRS[i]} startFrom={last ? 0 : IN_AT} idx={i} rate={last ? 0.84 : 1} />
        </Sequence>
      );
    })}
    {/* KOS after the card has filled the frame: continue the same clip without a jump */}
    <Sequence from={DROP + 2} durationInFrames={CUTS[1] - DROP - 2}>
      <Shot code="KOS" len={CUTS[1] - DROP - 2} outTr={TRS[0]} startFrom={DROP + 2 - EXPAND} idx={0} />
    </Sequence>
  </>
);

// ---------------------------------------------------------------- 4. teaching: slide → simulation
const Teach: React.FC = () => {
  const f = useCurrentFrame();
  const len = WALL - TEACH;
  const inP = interpolate(f, [0, XDIS], [0, 1], { ...clamp, easing: ease });
  return (
    <AbsoluteFill style={{ background: C.bg, opacity: inP }}>
      <AbsoluteFill style={{ transform: `scale(${1.04 - 0.04 * inP})` }}>
        <OffthreadVideo src={staticFile("teach.mp4")} muted startFrom={9} />
      </AbsoluteFill>
      <AbsoluteFill style={{ background: `linear-gradient(180deg, rgba(5,7,12,0.9) 0%, rgba(5,7,12,0.55) 22%, rgba(5,7,12,0) 38%)`, opacity: interpolate(f, [0, 10, len - 20, len - 8], [0, 1, 1, 0], clamp) }} />
      <div style={{ position: "absolute", left: 110, top: 84, textShadow: "0 2px 30px rgba(0,0,0,0.6)" }}>
        <div style={{ position: "absolute", left: 0, top: 0, width: 1700 }}>
          <Rise text="From the slide you teach today…" at={10} size={64} out={58} />
        </div>
        <div style={{ position: "absolute", left: 0, top: 0, width: 1700 }}>
          <Rise text="…to a simulation your students can play with." at={74} size={64} font={serifItalic} color={C.teal} out={len - 22} />
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- audio
const Sfx: React.FC<{ at: number; src: string; vol?: number; len?: number }> = ({ at, src, vol = 1, len = 150 }) => !BED_ON ? null : (
  <Sequence from={Math.max(0, at)} durationInFrames={len}>
    <Audio src={staticFile(`sfx/${src}`)} volume={vol} />
  </Sequence>
);

// Kokoro voiceover (public/vo, scripts/vo-kokoro.py): sparse lines at the turns; music dips under them.
const VO = [
  { id: "hours", at: 232 - LINGER, len: 109 },
  { id: "leverage", at: 306, len: 80 },
  { id: "busywork", at: 392, len: 89 },
  { id: "whatever", at: 484, len: 36 },
  { id: "f-eng", at: 520, len: 24 },
  { id: "f-med", at: 546, len: 22 },
  { id: "f-dent", at: 591, len: 25 },
  { id: "f-nurs", at: 637, len: 22 },
  { id: "f-ahs", at: 681, len: 27 },
  { id: "f-ict", at: 726, len: 24 },
  { id: "f-arch", at: 771, len: 27 },
  { id: "f-econ", at: 816, len: 25 },
  { id: "f-law", at: 861, len: 16 },
  { id: "f-hum", at: 906, len: 34 },
  { id: "f-edu", at: 952, len: 26 },
  { id: "fits", at: 996, len: 57 },
  { id: "teach", at: TEACH + 17, len: 138 },
  { id: "lifting", at: WALL + 86, len: 105, level: 0.18, vol: 1.5 },
  { id: "title", at: END + 68, len: 114 },
  { id: "by", at: END + 182, len: 122 },
  { id: "details", at: END + 306, len: 198 },
];
// the field roll-call (whatever → fits) ducks as one span so the music doesn't pump between words
const MONTAGE_VO = { at: 484, len: 996 + 57 - 484 };
const duck = (t: number) => Math.min(1,
  interpolate(t, [MONTAGE_VO.at - 8, MONTAGE_VO.at, MONTAGE_VO.at + MONTAGE_VO.len, MONTAGE_VO.at + MONTAGE_VO.len + 12], [1, 0.55, 0.55, 1], clamp),
  ...VO.filter((v) => !v.id.startsWith("f-") && v.id !== "whatever" && v.id !== "fits")
    .map((v) => { const l = (v as { level?: number }).level ?? 0.42; return interpolate(t, [v.at - 10, v.at, v.at + v.len, v.at + v.len + 12], [1, l, l, 1], clamp); }));

const Sound: React.FC = () => {
  const { fps } = useVideoConfig();
  const whooshes = CUTS.slice(1).map((c, i) => {
    const tr = TRS[i];
    const file = tr === "whip" ? (i % 2 ? "whoosh-b.wav" : "whoosh-a.wav") : tr === "zoom" ? "whoosh-c.wav" : tr === "wipe" ? "whoosh-a.wav" : "rev-swell.wav";
    const lead = file === "rev-swell.wav" ? 46 : file === "whoosh-c.wav" ? 19 : file === "whoosh-b.wav" ? 7 : 12; // peak lands on the cut
    return <Sfx key={c} at={c - lead} src={file} vol={file === "rev-swell.wav" ? 0.18 : 0.32} len={60} />;
  });
  return (
    <>
      {/* music: in at the cut to black, full through the montage, a touch under the end card */}
      <Sequence from={OPEN_END} durationInFrames={TEACH + 10 - OPEN_END}>
        {BED_ON && <Audio src={staticFile("music/bed-v5.wav")} volume={(fr) => {
          const t = fr + OPEN_END;
          return duck(t) * interpolate(t, [OPEN_END, OPEN_END + 10, DROP - 1, DROP, MONT_END - 6, MONT_END + 18, TEACH - 4, TEACH + 8], [0.0, 0.75, 0.75, 0.95, 0.95, 0.2, 0.2, 0], clamp);
        }} />}
      </Sequence>
      {/* after the breath: the same bed, resumed from where it stopped */}
      <Sequence from={TEACH - 16}>
        {BED_ON && <Audio src={staticFile("music/bed-v5.wav")} startFrom={MONT_END - OPEN_END - 16} volume={(fr) => {
          const t = fr + TEACH - 16;
          return duck(t) * interpolate(t, [TEACH - 16, TEACH, TEACH + 10, BOOK + 200, BOOK + 240], [0, 0.2, 0.95, 0.95, 0], clamp);
        }} />}
      </Sequence>
      {VO_ON && VO.map((v) => (
        <Sequence key={v.id} from={v.at} durationInFrames={v.len + 4}><Audio src={staticFile(`vo/${v.id}.wav`)} volume={(v as { vol?: number }).vol ?? 1.15} /></Sequence>
      ))}
      {/* prompt: typing, send, riser into the drop */}
      <Sequence from={TYPE_START} durationInFrames={TYPE_END - TYPE_START}>
        {BED_ON && <Loop durationInFrames={2 * fps}><Audio src={staticFile("sfx/keys-A.wav")} volume={0.55} /></Loop>}
      </Sequence>
      <Sfx at={ENTER} src="click-A.wav" vol={0.7} len={30} />
      <Sfx at={DROP - 90} src="riser.wav" vol={0.32} len={92} />
      <Sfx at={DROP - 48} src="rev-swell.wav" vol={0.35} len={50} />
      <Sfx at={DROP} src="boom.wav" vol={0.85} len={80} />
      {whooshes}
      {/* teaching */}
      <Sfx at={TEACH - 22} src="rev-swell.wav" vol={0.28} len={30} />
      <Sfx at={TEACH - 10} src="whoosh-long.wav" vol={0.14} len={70} />
      <Sfx at={TEACH + 40} src="shimmer.wav" vol={0.22} len={80} />
      {/* wall */}
      <Sfx at={WALL - 90} src="riser.wav" vol={0.26} len={92} />
      <Sfx at={WALL} src="boom.wav" vol={0.5} len={80} />
      <Sfx at={WALL + 4} src="whoosh-long.wav" vol={0.28} len={70} />
      {/* end */}
      <Sfx at={END - 48} src="rev-swell.wav" vol={0.3} len={50} />
      <Sfx at={END} src="boom-soft.wav" vol={0.7} len={60} />
      <Sfx at={END + 70} src="shimmer.wav" vol={0.25} len={80} />
      {/* closing shot: quiet room tone under the music's tail */}
      <Sfx at={BOOK} src="room-long.wav" vol={0.9} len={TOTAL - BOOK} />
      {/* the mouse working on its own (times from assets/fix/NOTES.md) */}
      {[0.64, 1.53, 2.31, 3.06, 3.76, 4.27].map((t) => <Sfx key={`c${t}`} at={BOOK + Math.round(t * 30)} src="click-A.wav" vol={0.55} len={20} />)}
      {[1.22, 2.02, 2.77, 3.49].map((t) => <Sfx key={`r${t}`} at={BOOK + Math.round(t * 30)} src="click-A.wav" vol={0.3} len={20} />)}
      {[0.73, 1.60, 2.39, 3.13].map((t) => <Sfx key={`d${t}`} at={BOOK + Math.round(t * 30)} src="drag-A.wav" vol={0.35} len={30} />)}
      {/* the terminal opens and types the closing line on its own */}
      <Sfx at={BOOK + TERM_AT} src="click-A.wav" vol={0.35} len={20} />
      {BED_ON && <Sequence from={BOOK + Math.round(TYPE1[0])} durationInFrames={Math.round(TYPE1[1] - TYPE1[0])}><Audio src={staticFile("sfx/keys-A.wav")} volume={0.5} /></Sequence>}
      {BED_ON && <Sequence from={BOOK + Math.round(TYPE2[0])} durationInFrames={Math.round(TYPE2[1] - TYPE2[0])}><Audio src={staticFile("sfx/keys-A.wav")} startFrom={20} volume={0.5} /></Sequence>}
    </>
  );
};

// ---------------------------------------------------------------- the ad
// Everything after the opening, on the original timeline; AdBody starts it LINGER frames late so the
// opening's last shot can breathe before the prompt.
const Rest: React.FC = () => {
  const f = useCurrentFrame();
  // a short dip to black between the old way and the prompt (the idea changes here)
  const dip = interpolate(f, [OPEN_END - 3, OPEN_END, OPEN_END + 6], [0, 1, 0], clamp);
  return (
    <AbsoluteFill>
      <Sequence from={OPEN_END} durationInFrames={DROP + 2 - OPEN_END}><Prompt /></Sequence>
      <Montage />
      <Sequence from={TEACH} durationInFrames={WALL - TEACH}><Teach /></Sequence>
      <Sequence from={WALL} durationInFrames={END - WALL}><Wall len={END - WALL} /></Sequence>
      <Sequence from={BOOK} durationInFrames={TOTAL - BOOK}><Bookend len={TOTAL - BOOK} /></Sequence>
      <Sequence from={END} durationInFrames={BOOK - END}><Presenter len={BOOK - END} /></Sequence>
      <AbsoluteFill style={{ background: "#000", opacity: dip }} />
      <Vignette strength={f < OPEN_END ? 0.35 : 0.5} />
      <Sound />
    </AbsoluteFill>
  );
};

const AdBody: React.FC = () => (
  <AbsoluteFill style={{ background: C.bg }}>
    <BlurDefs />
    <Sequence durationInFrames={OPEN_END + LINGER}><Opening /></Sequence>
    <Sequence from={LINGER}><Rest /></Sequence>
    <Grain opacity={0.06} />
  </AbsoluteFill>
);


// ---------------------------------------------------------------- 0. brand card, then the ad
const BrandCard: React.FC = () => {
  const f = useCurrentFrame();
  const up = (a: number) => ({
    opacity: interpolate(f, [a, a + 16], [0, 1], clamp),
    transform: `translateY(${interpolate(f, [a, a + 16], [14, 0], { ...clamp, easing: ease })}px)`,
  });
  return (
    <AbsoluteFill style={{ background: C.bg, alignItems: "center", justifyContent: "center", textAlign: "center" }}>
      <AbsoluteFill style={{ background: "radial-gradient(ellipse 55% 45% at 50% 55%, rgba(79,179,255,0.10), rgba(0,0,0,0) 70%)" }} />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", transform: `scale(${1 + 0.02 * (f / PRE)})` }}>
        <div style={up(6)}><Img src={staticFile("brand/iium-white.png")} style={{ width: 860 }} /></div>
        <div style={{ display: "contents", visibility: CANVA ? "hidden" : "visible" }}>
        <div style={{ ...up(26), marginTop: 64, fontFamily: mono, fontSize: 22, letterSpacing: "0.32em", color: C.dim }}>
          AI RESEARCH METHODOLOGY WORKSHOP SERIES · NO. 8/2026
        </div>
        <div style={{ ...up(38), marginTop: 22, fontFamily: serif, fontSize: 96, color: C.ink, lineHeight: 1.02 }}>
          Smart Video Creation
        </div>
        <div style={{ ...up(48), fontFamily: serifItalic, fontStyle: "italic", fontSize: 96, color: "#4fb3ff", lineHeight: 1.06 }}>
          with Generative AI
        </div>
        <div style={{ ...up(64), marginTop: 54, fontFamily: sans, fontWeight: 300, fontSize: 24, color: C.dim }}>
          Organised by Dar Al-Hikmah Library and the Centre for Postgraduate Studies, IIUM
        </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const Ad: React.FC = () => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill style={{ background: "#000" }}>
      <Sequence from={PRE - XF}><AdBody /></Sequence>
      <Sequence durationInFrames={PRE}>
        <AbsoluteFill style={{ opacity: interpolate(f, [PRE - XF, PRE], [1, 0], clamp) }}><BrandCard /></AbsoluteFill>
      </Sequence>
      {BED_ON && <Sequence durationInFrames={70}><Audio src={staticFile("sfx/shimmer.wav")} volume={0.18} /></Sequence>}
    </AbsoluteFill>
  );
};
