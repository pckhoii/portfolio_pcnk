import { motion, useReducedMotion } from "motion/react";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import { useI18n } from "../../app/i18n";
import { useUniverseTravel } from "../../app/UniverseTravel";

const points = Array.from({ length: 38 }, (_, index) => ({ left: `${(index * 37 + 11) % 100}%`, top: `${(index * 61 + 7) % 100}%`, width: `${index % 7 === 0 ? 3 : 1}px`, height: `${index % 7 === 0 ? 3 : 1}px`, animationDelay: `${(index % 8) * -0.7}s` }));

export function StarField({ density = "high" }: { density?: "low" | "high" }) {
  return <div className={`star-field star-field-${density}`} aria-hidden="true">{points.map((point, index) => <i key={index} style={point as CSSProperties} />)}</div>;
}

export function UniverseBackground({ kind }: { kind: "personal" | "work" | "gateway" }) {
  const [paused, setPaused] = useState(() => document.hidden);
  useEffect(() => { const update = () => setPaused(document.hidden); document.addEventListener("visibilitychange", update); return () => document.removeEventListener("visibilitychange", update); }, []);
  return <div className={`universe-background ${kind}${paused ? " is-paused" : ""}`} aria-hidden="true"><StarField /><div className="star-cloud cloud-one" /><div className="star-cloud cloud-two" /><div className="nebula" /><div className="horizon-glow" /><svg className="orbital-chart" viewBox="0 0 1000 700" preserveAspectRatio="none"><ellipse cx="500" cy="350" rx="430" ry="190" /><ellipse cx="500" cy="350" rx="320" ry="380" /><path d="M30 550C280 360 620 690 970 130" /></svg></div>;
}

export function UniversePortal({ kind, title, copy, to, index }: { kind: "personal" | "work"; title: string; copy: string; to: string; index: string }) {
  const reduced = useReducedMotion(); const travel = useUniverseTravel(); const { t } = useI18n();
  return <motion.article className={`planet-choice ${kind}`} initial={{ opacity: 0, x: kind === "personal" ? -94 : 94, scale: 0.88, filter: "blur(9px)" }} animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }} transition={{ duration: 1.08, delay: kind === "work" ? 0.2 : 0.06, ease: [0.22, 1, 0.36, 1] }} whileHover={reduced ? undefined : { y: -6 }} whileTap={reduced ? undefined : { scale: 0.985 }}>
    <button onClick={() => travel(to, kind)} aria-label={kind === "personal" ? t("enter") : t("explore")}>
      <span className="choice-index">{index}</span><span className="planet-orbit orbit-a" /><span className="planet-orbit orbit-b" /><span className="satellite satellite-a"><i /></span><span className="satellite satellite-b"><i /></span><span className="planet-body"><i /><i /><b /></span>
      <span className="planet-caption"><span className="eyebrow">{kind === "personal" ? t("personalUniverse") : t("workUniverse")}</span><strong>{title}</strong><em>{copy}</em><small>{kind === "personal" ? t("enter") : t("explore")} <b aria-hidden="true">&#8599;</b></small></span>
    </button>
  </motion.article>;
}

export function DirectionArtifact({ type }: { type: "personal" | "work" | "contact" }) {
  return <div className={`direction-artifact ${type}`} aria-hidden="true"><span /><i /><b /><em /></div>;
}
