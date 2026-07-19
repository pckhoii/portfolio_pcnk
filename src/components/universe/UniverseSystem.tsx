import { motion, useReducedMotion } from "motion/react";
import type { CSSProperties } from "react";
import { useI18n } from "../../app/i18n";
import { useUniverseTravel } from "../../app/UniverseTravel";

const points = Array.from({ length: 34 }, (_, index) => ({
  left: `${(index * 37 + 11) % 100}%`, top: `${(index * 61 + 7) % 100}%`, width: `${index % 7 === 0 ? 3 : 1}px`, height: `${index % 7 === 0 ? 3 : 1}px`, animationDelay: `${(index % 8) * -0.7}s`,
}));

export function StarField({ density = "high" }: { density?: "low" | "high" }) {
  return <div className={`star-field star-field-${density}`} aria-hidden="true">{points.map((point, index) => <i key={index} style={point as CSSProperties} />)}</div>;
}

export function UniverseBackground({ kind }: { kind: "personal" | "work" | "gateway" }) {
  return <div className={`universe-background ${kind}`} aria-hidden="true"><StarField /><div className="star-cloud cloud-one" /><div className="star-cloud cloud-two" /><div className="nebula" /><div className="horizon-glow" /><svg className="orbital-chart" viewBox="0 0 1000 700" preserveAspectRatio="none"><ellipse cx="500" cy="350" rx="430" ry="190" /><ellipse cx="500" cy="350" rx="320" ry="380" /><path d="M30 550C280 360 620 690 970 130" /></svg></div>;
}

export function UniversePortal({ kind, title, copy, to, index }: { kind: "personal" | "work"; title: string; copy: string; to: string; index: string }) {
  const reduced = useReducedMotion();
  const travel = useUniverseTravel(); const { t } = useI18n();
  return <motion.article className={`universe-portal ${kind}`} initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: kind === "work" ? 0.16 : 0.04 }} whileHover={reduced ? undefined : { y: -8 }}>
    <p className="portal-index">{index}</p><div className="portal-orb"><span /><i /><b /></div>
    <div className="portal-copy"><p className="eyebrow">{kind === "personal" ? t("personalUniverse") : t("workUniverse")}</p><h2>{title}</h2><p>{copy}</p><button onClick={() => travel(to, kind)} className="portal-link">{kind === "personal" ? t("enter") : t("explore")}<span aria-hidden="true">&#8599;</span></button></div>
  </motion.article>;
}

export function DirectionArtifact({ type }: { type: "personal" | "work" | "contact" }) {
  return <div className={`direction-artifact ${type}`} aria-hidden="true"><span /><i /><b /><em /></div>;
}
