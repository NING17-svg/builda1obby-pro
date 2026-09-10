import type { ThemeConfig } from "@/types/theme";

export const theme = {
  mode: "light",
  tokens: {
    pageBg: "#EAF4FB",
    surface1: "#FFFFFF",
    surface2: "#F4F8FC",
    surface3: "#E3ECF4",
    surfaceInverse: "#0F2A44",
    textPrimary: "#0F2A44",
    textMuted: "#46607A",
    textInverse: "#FFFFFF",
    textOnAccentPrimary: "#0B1A0B",
    textLink: "#0B6BCB",
    focusRing: "#0B6BCB",
    line: "#C8D6E2",
    lineStrong: "#8FA5B8",
    accentPrimary: "#1F9D55",
    accentSecondary: "#F2A93B",
    accentBright: "#5BD685",
    statusConfirmed: "#1F9D55",
    statusCaution: "#E08A1A",
    statusUnknown: "#8FA5B8",
  },
  typography: {
    headingFamily:
      "Nunito, 'Inter', 'Helvetica Neue', system-ui, sans-serif",
    bodyFamily: "Inter, 'Helvetica Neue', system-ui, sans-serif",
    headingWeight: 800,
  },
  shape: {
    radius: "10px",
    borderWidth: "1px",
    shadow: "0 2px 6px rgba(15, 42, 68, 0.08)",
    hoverLift: "2px",
  },
  density: "comfortable",
  background: { mode: "gradient", overlay: 0, position: "top center" },
  variants: {
    home: "split-panel",
    hub: "card-grid",
    content: "reading-right-rail",
    workspace: "full-width",
  },
  decoration: { motif: "grid", intensity: "low" },
} satisfies ThemeConfig;