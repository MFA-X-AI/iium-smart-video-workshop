import React from "react";
import { AbsoluteFill, interpolate, OffthreadVideo, Sequence, staticFile, useCurrentFrame } from "remotion";
import { clamp, ease } from "./kit";
import { C, mono, sans } from "./theme";

// What the laptop shows in the bookend shot: the assistant writes code on its own and the
// animation builds itself in the preview. Rendered at 1600x1000 and composited onto the screen.
export const SCREEN_LEN = 150;
const CODE = [
  `const scene = new THREE.Scene();`,
  `const sphere = new THREE.Mesh(`,
  `  new THREE.SphereGeometry(1, 128, 128),`,
  `  new THREE.MeshPhysicalMaterial({`,
  `    transmission: 1, roughness: 0.02 }));`,
  `const fibre = makeTaperedFibre(gap);`,
  `ring.intensity = qFactor(gap);`,
  `slider.on("input", (g) => setGap(g));`,
  `renderer.setAnimationLoop(draw);`,
];

export const Screen: React.FC = () => {
  const f = useCurrentFrame();
  const all = CODE.join("\n");
  const n = Math.floor(interpolate(f, [6, 100], [0, all.length], clamp));
  const prev = interpolate(f, [30, 54], [0, 1], { ...clamp, easing: ease });
  const bar = interpolate(f, [8, 60], [0, 1], clamp);
  return (
    <AbsoluteFill style={{ background: "#0b0f17", fontFamily: sans }}>
      {/* title bar */}
      <div style={{ height: 56, background: "#121826", display: "flex", alignItems: "center", gap: 12, padding: "0 22px" }}>
        {["#ff5f57", "#febc2e", "#28c840"].map((c) => <div key={c} style={{ width: 16, height: 16, borderRadius: 8, background: c }} />)}
        <div style={{ marginLeft: 20, fontSize: 22, color: "rgba(255,255,255,0.6)" }}>microsphere-sensor.html</div>
      </div>
      <div style={{ position: "absolute", top: 56, left: 0, bottom: 0, width: 640, padding: 30, borderRight: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ background: "rgba(63,208,201,0.14)", border: "1px solid rgba(63,208,201,0.4)", borderRadius: 16, padding: "16px 20px", fontSize: 22, color: C.ink, lineHeight: 1.4 }}>
          Animate my paper: light racing around a glass microsphere…
        </div>
        <div style={{ marginTop: 26, fontFamily: mono, fontSize: 19, lineHeight: 1.65, color: C.ink, whiteSpace: "pre" }}>
          {all.slice(0, n).split(/("[^"]*"|\b\d+(?:\.\d+)?\b)/).map((s, i) => (
            <span key={i} style={{ color: s.startsWith("\"") ? "#9be38a" : /^\d/.test(s) ? C.amber : C.ink }}>{s}</span>
          ))}
          <span style={{ color: C.teal, opacity: f % 14 < 8 ? 1 : 0 }}>▍</span>
        </div>
        <div style={{ position: "absolute", left: 30, right: 30, bottom: 34, height: 6, borderRadius: 3, background: "rgba(255,255,255,0.08)" }}>
          <div style={{ width: `${bar * 100}%`, height: "100%", borderRadius: 3, background: C.teal, boxShadow: `0 0 12px ${C.teal}` }} />
        </div>
      </div>
      <div style={{ position: "absolute", top: 56, left: 640, right: 0, bottom: 0, background: "#05070c", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: 24, top: 18, fontFamily: mono, fontSize: 18, letterSpacing: "0.2em", color: "rgba(255,255,255,0.5)", zIndex: 2 }}>PREVIEW</div>
        <AbsoluteFill style={{ opacity: prev, transform: `scale(${1.06 - 0.06 * prev})`, filter: `blur(${(1 - prev) * 14}px)` }}>
          <Sequence from={30} layout="none">
            <OffthreadVideo src={staticFile("v2/KOS.mp4")} muted style={{ position: "absolute", left: -40, top: 170, width: 1040, height: 585 }} />
          </Sequence>
        </AbsoluteFill>
      </div>
    </AbsoluteFill>
  );
};
