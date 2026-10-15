import { loadFont as loadSans } from "@remotion/google-fonts/Inter";
import { loadFont as loadSerif } from "@remotion/google-fonts/InstrumentSerif";
import { loadFont as loadMono } from "@remotion/google-fonts/JetBrainsMono";

export const sans = loadSans("normal", { weights: ["300", "400", "500", "600"], subsets: ["latin"] }).fontFamily;
export const serif = loadSerif("normal", { subsets: ["latin"] }).fontFamily;
export const serifItalic = loadSerif("italic", { subsets: ["latin"] }).fontFamily;
export const mono = loadMono("normal", { weights: ["400", "500"], subsets: ["latin"] }).fontFamily;

export const C = {
  bg: "#05070c",
  ink: "#f4f1ea",
  dim: "rgba(244,241,234,0.62)",
  teal: "#3fd0c9",
  amber: "#ffb547",
};

// Montage order and clip codes (v2 = result clips, v1 = first-round clips)
export const ORDER = ["KOS", "KOP", "KOE", "KOM", "KOD", "KON", "KAHS", "KICT", "KAED", "KENMS", "AIKOL", "KIRKHS", "KOED", "KSTCL"];
