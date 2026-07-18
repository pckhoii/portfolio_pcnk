export type ArtifactId =
  | "signalBeacon"
  | "observatory"
  | "constellationMap"
  | "navigationCompass"
  | "missionChart"
  | "archiveFolder"
  | "flightRecorder"
  | "notebook"
  | "openBook"
  | "northStar";

export const artifacts: Record<ArtifactId, {
  asset: string;
  meaning: string;
  dominantRoutes: string[];
  maxAppearancesPerPage: number;
}> = {
  signalBeacon: { asset: "signal-beacon.svg", meaning: "first observed question", dominantRoutes: ["/"], maxAppearancesPerPage: 1 },
  observatory: { asset: "observatory.svg", meaning: "measurement and inquiry", dominantRoutes: ["/journey"], maxAppearancesPerPage: 1 },
  constellationMap: { asset: "constellation-map.svg", meaning: "relationships becoming visible", dominantRoutes: [], maxAppearancesPerPage: 2 },
  navigationCompass: { asset: "navigation-compass.svg", meaning: "decision criteria", dominantRoutes: [], maxAppearancesPerPage: 2 },
  missionChart: { asset: "mission-map.svg", meaning: "bounded business investigation", dominantRoutes: ["/missions"], maxAppearancesPerPage: 1 },
  archiveFolder: { asset: "archive-library.svg", meaning: "accumulated records", dominantRoutes: ["/beyond"], maxAppearancesPerPage: 1 },
  flightRecorder: { asset: "flight-recorder.svg", meaning: "time and evidence", dominantRoutes: ["/archive"], maxAppearancesPerPage: 1 },
  notebook: { asset: "notebook.svg", meaning: "provisional observations", dominantRoutes: ["/notes"], maxAppearancesPerPage: 1 },
  openBook: { asset: "open-book.svg", meaning: "knowledge becoming an idea map", dominantRoutes: ["/reading"], maxAppearancesPerPage: 1 },
  northStar: { asset: "north-star.svg", meaning: "resolved direction", dominantRoutes: ["/contact"], maxAppearancesPerPage: 1 },
};
