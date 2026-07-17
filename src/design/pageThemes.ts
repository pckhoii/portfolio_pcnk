import type { ArtifactId } from "./artifacts";

export type PageTheme = {
  artifact: ArtifactId;
  primaryColor: "professional" | "personal";
  secondaryColor: "softCyan" | "greyLavender" | "mutedGold" | "dustyBlue";
  density: "low" | "medium";
  motion: "minimal" | "explanatory";
  texture: "none" | "technicalGrid" | "paper";
};

export const pageThemes: Record<string, PageTheme> = {
  "/": { artifact: "signalBeacon", primaryColor: "professional", secondaryColor: "softCyan", density: "low", motion: "minimal", texture: "technicalGrid" },
  "/journey": { artifact: "observatory", primaryColor: "professional", secondaryColor: "softCyan", density: "medium", motion: "explanatory", texture: "technicalGrid" },
  "/missions": { artifact: "missionChart", primaryColor: "professional", secondaryColor: "dustyBlue", density: "medium", motion: "minimal", texture: "technicalGrid" },
  "/archive": { artifact: "flightRecorder", primaryColor: "professional", secondaryColor: "mutedGold", density: "low", motion: "minimal", texture: "technicalGrid" },
  "/beyond": { artifact: "archiveFolder", primaryColor: "personal", secondaryColor: "greyLavender", density: "medium", motion: "minimal", texture: "paper" },
  "/reading": { artifact: "openBook", primaryColor: "personal", secondaryColor: "greyLavender", density: "medium", motion: "minimal", texture: "paper" },
  "/notes": { artifact: "notebook", primaryColor: "personal", secondaryColor: "mutedGold", density: "low", motion: "minimal", texture: "paper" },
  "/contact": { artifact: "northStar", primaryColor: "professional", secondaryColor: "mutedGold", density: "low", motion: "minimal", texture: "none" },
};
