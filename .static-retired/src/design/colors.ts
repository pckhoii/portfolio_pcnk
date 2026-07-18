export const colors = {
  background: {
    primary: "#081018",
    secondary: "#0D1820",
    personal: "#141D29",
  },
  surface: {
    editorial: "#0E1921",
    technical: "#101D26",
    personal: "#1B2531",
    paper: "#E8ECE8",
  },
  text: {
    primary: "#E8ECE8",
    secondary: "#99A6AD",
    muted: "#718088",
    ink: "#081018",
  },
  accent: {
    professional: "#8CAAB4",
    personal: "#9494AA",
    softCyan: "#8CAAB4",
    dustyBlue: "#7899A3",
    greyLavender: "#9494AA",
    mutedGold: "#A79E81",
  },
  line: {
    technical: "rgba(157, 187, 195, 0.22)",
    editorial: "rgba(232, 236, 232, 0.12)",
  },
  state: {
    hover: "rgba(140, 170, 180, 0.08)",
    focus: "#8CAAB4",
    warning: "#A79E81",
    success: "#8CAAB4",
    selection: "rgba(148, 148, 170, 0.20)",
  },
} as const;

export type ColorToken = typeof colors;
