import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { createContext, useContext, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type Destination = "personal" | "work";
const TravelContext = createContext<(to: string, destination: Destination) => void>(() => undefined);

export function UniverseTravelProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate(); const location = useLocation(); const reduced = useReducedMotion();
  const [flight, setFlight] = useState<{ from: Destination; to: Destination } | null>(null);
  const timer = useRef<number | null>(null);
  const travel = (to: string, next: Destination) => {
    if (timer.current) return;
    if (reduced) { navigate(to); return; }
    const from: Destination = location.pathname.startsWith("/work") ? "work" : location.pathname.startsWith("/personal") ? "personal" : next === "personal" ? "work" : "personal";
    setFlight({ from, to: next });
    timer.current = window.setTimeout(() => {
      navigate(to);
      window.setTimeout(() => { setFlight(null); timer.current = null; }, 170);
    }, 940);
  };
  const leftToRight = flight?.from === "personal";
  return <TravelContext.Provider value={travel}>{children}
    <AnimatePresence>{flight && <motion.div className={`planet-flight flight-${flight.to} ${leftToRight ? "to-right" : "to-left"}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .18 }} aria-hidden="true">
      <div className="transit-diagram"><div className="transit-track"><span className="transit-orbit" /><i className="transit-planet origin" /><i className="transit-planet destination" /><motion.b className="transit-craft" initial={{ left: leftToRight ? "0%" : "100%", bottom: "0%", opacity: 0 }} animate={{ left: leftToRight ? ["0%", "50%", "100%"] : ["100%", "50%", "0%"], bottom: ["0%", "88%", "0%"], opacity: [0, 1, 1, 0] }} transition={{ duration: .76, delay: .07, ease: [0.45, 0, 0.55, 1] }} /></div><p>{flight.to === "personal" ? "INNER WORLD" : "THE OBSERVATORY"}</p></div>
    </motion.div>}</AnimatePresence>
  </TravelContext.Provider>;
}
export function useUniverseTravel() { return useContext(TravelContext); }
