import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { createContext, useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

type Destination = "personal" | "work";
const TravelContext = createContext<(to: string, destination: Destination) => void>(() => undefined);

export function UniverseTravelProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate(); const reduced = useReducedMotion(); const [destination, setDestination] = useState<Destination | null>(null); const timer = useRef<number | null>(null);
  const travel = (to: string, next: Destination) => {
    if (timer.current) return;
    if (reduced) { navigate(to); return; }
    setDestination(next);
    timer.current = window.setTimeout(() => { navigate(to); setDestination(null); timer.current = null; }, 1180);
  };
  return <TravelContext.Provider value={travel}>{children}<AnimatePresence>{destination && <motion.div className={`universe-voyage voyage-${destination}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} aria-hidden="true"><svg viewBox="0 0 1400 800" preserveAspectRatio="none"><path d="M-40 630 C 340 500, 720 190, 1440 130" /></svg><motion.div className="voyage-rocket" initial={{ offsetDistance: "0%", opacity: 0 }} animate={{ offsetDistance: "100%", opacity: [0, 1, 1, 0] }} transition={{ duration: 0.94, delay: 0.12, ease: "easeInOut" }} /><p>{destination === "personal" ? "Entering the Inner World" : "Entering the Observatory"}</p></motion.div>}</AnimatePresence></TravelContext.Provider>;
}
export function useUniverseTravel() { return useContext(TravelContext); }
