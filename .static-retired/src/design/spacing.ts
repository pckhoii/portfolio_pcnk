export const spacing = {
  4: "0.25rem",
  8: "0.5rem",
  12: "0.75rem",
  16: "1rem",
  24: "1.5rem",
  32: "2rem",
  48: "3rem",
  64: "4rem",
  96: "6rem",
  128: "8rem",
} as const;

export const layout = {
  measure: "73.75rem",
  readableMeasure: "65ch",
  compactMeasure: "42ch",
} as const;

export type SpacingToken = keyof typeof spacing;
