/** Pulse Clarity — design tokens (match DESIGN-BRIEF.md) */
export const PULSE = {
  bg: "#F2F2F7",
  card: "#FFFFFF",
  accent: "#0A7EA4",
  accentDark: "#065F7A",
  success: "#34C759",
  warning: "#FF9500",
  text: "#000000",
  textMuted: "#8E8E93",
  separator: "#C6C6C8",
  ringProtein: "#0A7EA4",
  ringCalories: "#FF9500",
  ringSteps: "#34C759",
  ringSleep: "#5856D6",
} as const;

export type ScreenStatus = "pending" | "mockup" | "stitch" | "review" | "approved" | "rejected";

export interface PulseScreen {
  id: string;
  title: string;
  flow: string;
  status: ScreenStatus;
  priority: number;
}

export interface PulseManifest {
  project: string;
  version: string;
  designSystem: string;
  stitchProjectName: string;
  gate: string;
  screens: PulseScreen[];
}
