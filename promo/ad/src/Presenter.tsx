import React from "react";
import { AbsoluteFill, Img, interpolate, OffthreadVideo, Sequence, staticFile, useCurrentFrame } from "remotion";
import { CANVA, clamp, ease, Rise } from "./kit";
import { C, mono, sans, serifItalic } from "./theme";

// End card in three clean beats, one idea per frame: 1 title, 2 instructor, 3 call to action.
export const NAME = "Muhammad Fahreza Alghifari";
export const ROLE = "AI Engineer Lead";
export const CRED = "7+ years in the AI industry";
export const MAKES = "FIGURES  ·  POSTERS  ·  PRESENTATIONS  ·  ANIMATIONS";
export const DAY = "Friday, 16 October 2026";
export const TIME = "10.00 a.m. – 12.00 p.m.";
export const PLACE = "Computer Lab Abu Bakar & Umar, Level 2\nM. Kamal Hassan Library, IIUM";
export const LINK = "bit.ly/AI_SmartVC"; // from the official poster (7 Oct 2026)

const TITLE_LEN = 180;
const B2 = 180; // instructor beat starts
const B3 = 292; // call-to-action beat starts

export const Presenter: React.FC<{ len: number }> = ({ len }) => {
  const f = useCurrentFrame();
  const t1 = interpolate(f, [B2 - 14, B2 + 2], [1, 0], clamp);
  const t2 = interpolate(f, [B2, B2 + 14, len - 10, len - 1], [0, 1, 1, 0], clamp); // photo: stays to the end
  const tA = interpolate(f, [B2, B2 + 14, B3 - 10, B3 + 2], [0, 1, 1, 0], clamp); // left: instructor
  const t3 = interpolate(f, [B3, B3 + 16, len - 10, len - 1], [0, 1, 1, 0], clamp);
  const logo = interpolate(f, [84, 108, len - 10, len - 1], [0, 1, 1, 0], clamp);
  const p2 = interpolate(f, [B2, B2 + 30], [0, 1], { ...clamp, easing: ease });
  const ring = interpolate(f, [B2, B2 + 40], [0, 1], { ...clamp, easing: ease });
  const sweep = interpolate(f, [B2 + 10, B2 + 46], [-30, 130], clamp);
  const drift = interpolate(f, [B2, len], [0, 1]);
  const lineP = interpolate(f, [B3 + 22, B3 + 42], [0, 1], { ...clamp, easing: ease });
  return (
    <AbsoluteFill style={{ background: C.bg }}>
      {/* IIUM header on the title and call-to-action beats */}
      <div style={{ position: "absolute", left: 0, right: 0, top: 56, display: "flex", justifyContent: "center", opacity: logo }}>
        <Img src={staticFile("brand/iium-white.png")} style={{ width: 720 }} />
      </div>

      {/* 1 · title */}
      <AbsoluteFill style={{ opacity: t1, mixBlendMode: "lighten", transform: `scale(${1 + interpolate(f, [B2 - 14, B2 + 2], [0, 0.04], clamp)})` }}>
        <Sequence durationInFrames={TITLE_LEN}>
          <OffthreadVideo src={staticFile("title.mp4")} muted />
        </Sequence>
      </AbsoluteFill>

      {/* 2 · instructor */}
      <AbsoluteFill style={{ opacity: t2 }}>
        <div style={{
          position: "absolute", left: 930, top: 110, width: 940, height: 940, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(63,208,201,0.20) 0%, rgba(255,181,71,0.06) 45%, rgba(0,0,0,0) 70%)",
          transform: `scale(${0.85 + 0.15 * ring})`,
        }} />
        <svg width="1920" height="1080" style={{ position: "absolute", inset: 0 }}>
          <circle cx={1400} cy={580} r={430} fill="none" stroke={C.teal} strokeWidth={1.5} opacity={0.45}
            strokeDasharray={2 * Math.PI * 430} strokeDashoffset={2 * Math.PI * 430 * (1 - ring)} transform="rotate(-90 1400 580)" />
        </svg>
        <div style={{
          position: "absolute", left: 830, top: 40 + (1 - p2) * 50, width: 1140, height: 1710,
          WebkitMaskImage: "linear-gradient(180deg, #000 0%, #000 56%, rgba(0,0,0,0) 62%)",
          maskImage: "linear-gradient(180deg, #000 0%, #000 56%, rgba(0,0,0,0) 62%)",
          transform: `scale(${1 + drift * 0.025})`, transformOrigin: "50% 30%",
        }}>
          <Img src={staticFile("presenter/cutout.png")} style={{
            width: 1140, height: 1710, objectFit: "contain",
            filter: "drop-shadow(-6px 0 18px rgba(63,208,201,0.45)) drop-shadow(8px 0 26px rgba(255,181,71,0.22)) contrast(1.04)",
          }} />
          <div style={{
            position: "absolute", inset: 0, mixBlendMode: "screen",
            background: `linear-gradient(105deg, rgba(0,0,0,0) ${sweep - 12}%, rgba(255,255,255,0.2) ${sweep}%, rgba(0,0,0,0) ${sweep + 12}%)`,
            WebkitMaskImage: `url(${staticFile("presenter/cutout.png")})`, WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat",
            maskImage: `url(${staticFile("presenter/cutout.png")})`, maskSize: "contain", maskRepeat: "no-repeat",
          }} />
        </div>
        <div style={{ position: "absolute", left: 160, top: 400, opacity: tA, visibility: CANVA ? "hidden" : "visible" }}>
          <div style={{ fontFamily: mono, fontSize: 22, letterSpacing: "0.32em", color: C.teal, opacity: interpolate(f, [B2 + 4, B2 + 16], [0, 1], clamp) }}>
            YOUR INSTRUCTOR
          </div>
          <Rise text={NAME} at={B2 + 8} size={80} stagger={3} style={{ marginTop: 20, maxWidth: 720 }} />
          <Rise text={ROLE} at={B2 + 24} size={40} font={sans} weight={300} stagger={2} tracking="0" style={{ marginTop: 24 }} />
          <div style={{
            marginTop: 14, fontFamily: mono, fontSize: 24, color: C.amber, letterSpacing: "0.04em",
            opacity: interpolate(f, [B2 + 32, B2 + 46], [0, 1], clamp),
          }}>{CRED}</div>
        </div>
      </AbsoluteFill>

      {/* 3 · call to action: left side only; the instructor stays on the right */}
      <AbsoluteFill style={{ opacity: t3 }}>
        <div style={{ position: "absolute", left: 160, top: 300, width: 800, visibility: CANVA ? "hidden" : "visible" }}>
          <div style={{ fontFamily: mono, fontSize: 18, letterSpacing: "0.26em", color: C.teal, marginBottom: 24, opacity: interpolate(f, [B3 + 2, B3 + 16], [0, 1], clamp) }}>
            {MAKES}
          </div>
          <Rise text="From the AI basics…" at={B3 + 4} size={74} stagger={3} />
          <Rise text="to hands-on, practical applications." at={B3 + 14} size={66} font={serifItalic} color={C.amber} stagger={3} />
          <div style={{ width: interpolate(lineP, [0, 1], [0, 520]), height: 1, background: `linear-gradient(90deg, ${C.amber}, rgba(0,0,0,0))`, margin: "34px 0 26px" }} />
          <div style={{ opacity: interpolate(f, [B3 + 26, B3 + 40], [0, 1], clamp) }}>
            <div style={{ fontFamily: sans, fontWeight: 400, fontSize: 34, color: C.ink }}>{DAY}</div>
            <div style={{ fontFamily: sans, fontWeight: 300, fontSize: 24, color: C.dim, marginTop: 10 }}>{TIME}</div>
            <div style={{ fontFamily: sans, fontWeight: 300, fontSize: 24, color: C.dim, marginTop: 6, whiteSpace: "pre-line", lineHeight: 1.35 }}>{PLACE}</div>
          </div>
          <div style={{
            marginTop: 30, display: "inline-flex", alignItems: "center", gap: 16, padding: "14px 28px", borderRadius: 999,
            border: `1px solid ${C.amber}`, background: "rgba(255,181,71,0.10)",
            boxShadow: `0 0 34px rgba(255,181,71,${0.28 * interpolate(f, [B3 + 40, B3 + 52, B3 + 76], [0, 1, 0.45], clamp)})`,
            opacity: interpolate(f, [B3 + 34, B3 + 48], [0, 1], clamp),
          }}>
            <span style={{ fontFamily: mono, fontSize: 18, letterSpacing: "0.24em", color: C.amber }}>REGISTER</span>
            <span style={{ fontFamily: mono, fontSize: 30, color: C.ink }}>{LINK}</span>
          </div>
        </div>
        <div style={{
          position: "absolute", left: 160, bottom: 40, visibility: CANVA ? "hidden" : "visible", fontFamily: mono, fontSize: 15, letterSpacing: "0.22em", color: C.dim,
          opacity: interpolate(f, [B3 + 40, B3 + 54], [0, 0.7], clamp),
        }}>
          WITH DAR AL-HIKMAH LIBRARY · CENTRE FOR POSTGRADUATE STUDIES
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
