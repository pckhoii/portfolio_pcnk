export const typography = {
  family: {
    display: '"Fraunces", Georgia, serif',
    sans: '"Inter", Arial, sans-serif',
  },
  role: {
    hero: { family: "display", size: "clamp(2.75rem, 6vw, 5.75rem)", lineHeight: 1.04 },
    pageTitle: { family: "display", size: "clamp(2.25rem, 4vw, 4rem)", lineHeight: 1.08 },
    sectionTitle: { family: "display", size: "clamp(2rem, 3.5vw, 3.55rem)", lineHeight: 1.1 },
    contentTitle: { family: "sans", size: "1.05rem", lineHeight: 1.25, weight: 700 },
    body: { family: "sans", size: "0.9375rem", lineHeight: 1.7 },
    technicalLabel: { family: "sans", size: "0.68rem", lineHeight: 1.4, weight: 800, tracking: "0.14em" },
    metadata: { family: "sans", size: "0.73rem", lineHeight: 1.5 },
    caption: { family: "sans", size: "0.65rem", lineHeight: 1.5, tracking: "0.1em" },
    annotation: { family: "sans", size: "0.65rem", lineHeight: 1.4, tracking: "0.08em" },
    navigation: { family: "sans", size: "0.73rem", lineHeight: 1, weight: 700, tracking: "0.04em" },
    button: { family: "sans", size: "0.76rem", lineHeight: 1, weight: 800, tracking: "0.04em" },
  },
} as const;
