import React from "react";
import { Easing, getInputProps, interpolate, useCurrentFrame } from "remotion";
import { C, serif } from "./theme";

export const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;
export const ease = Easing.bezier(0.16, 1, 0.3, 1);

// Words that rise in one by one with a soft blur-to-sharp (kinetic type).
export const Rise: React.FC<{
  text: string; at: number; size: number; font?: string; color?: string; stagger?: number; style?: React.CSSProperties;
  out?: number; weight?: number; tracking?: string;
}> = ({ text, at, size, font = serif, color = C.ink, stagger = 3, style, out, weight = 400, tracking = "-0.01em" }) => {
  const f = useCurrentFrame();
  const fadeOut = out === undefined ? 1 : interpolate(f, [out, out + 10], [1, 0], clamp);
  return (
    <div style={{ fontFamily: font, fontSize: size, color, lineHeight: 1.05, letterSpacing: tracking, fontWeight: weight, opacity: fadeOut, ...style }}>
      {text.split(" ").map((w, i) => {
        const p = interpolate(f, [at + i * stagger, at + i * stagger + 16], [0, 1], { ...clamp, easing: ease });
        return (
          <span key={i} style={{
            display: "inline-block", marginRight: "0.25em", opacity: p,
            transform: `translateY(${(1 - p) * 0.45}em)`, filter: `blur(${(1 - p) * 10}px)`,
          }}>{w}</span>
        );
      })}
    </div>
  );
};


// Canva export switches (scripts/canva-export.sh): --props='{"canva":true,"audio":"vo"}'.
// canva hides the brand card text and the end card's instructor/details text so they can be retyped in Canva;
// audio picks "mix" (default), "vo" (voiceover only) or "bed" (music, ambience and sound effects).
const props = getInputProps() as { canva?: boolean; audio?: "mix" | "vo" | "bed" };
export const CANVA = props.canva === true;
export const VO_ON = props.audio !== "bed";
export const BED_ON = props.audio !== "vo";
