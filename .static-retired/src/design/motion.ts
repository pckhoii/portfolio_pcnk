export const motion = {
  duration: {
    instant: "120ms",
    interface: "180ms",
    transition: "220ms",
    diagram: "420ms",
  },
  easing: {
    standard: "ease",
    enter: "cubic-bezier(0.2, 0.65, 0.3, 1)",
    exit: "cubic-bezier(0.4, 0, 1, 1)",
  },
  rules: {
    primaryMotionsPerViewport: 1,
    ambientMotionsPerViewport: 1,
    decorativeMotion: false,
    reducedMotion: "show-resolved-state",
  },
} as const;
