import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Suspense, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { GlobalHeader } from "./components/navigation/Navigation";
import { StarField } from "./components/universe/UniverseSystem";
import Gateway from "./pages/Gateway";
import { Contact, PersonalPage, ProjectDetail, WorkPage } from "./pages/UniversePages";
import "./index.css";
import { LanguageProvider, useI18n } from "./app/i18n";
import { UniverseTravelProvider } from "./app/UniverseTravel";

function Loader() {
  const { t } = useI18n();
  const reducedMotion = useReducedMotion();
  const [open, setOpen] = useState(() => !sessionStorage.getItem("khoi-universe-intro"));

  useEffect(() => {
    if (!open || reducedMotion) return;
    const timer = window.setTimeout(() => setOpen(false), 3100);
    return () => window.clearTimeout(timer);
  }, [open, reducedMotion]);

  const close = () => {
    sessionStorage.setItem("khoi-universe-intro", "seen");
    setOpen(false);
  };

  if (!open || reducedMotion) return null;
  return (
    <motion.aside className="loader" initial={{ opacity: 1 }} exit={{ opacity: 0 }} aria-label="Loading website">
      <StarField density="low" />
      <div className="loader-map" aria-hidden="true"><i /><i /><i /><b /></div>
      <p className="eyebrow">{t("mapping")}</p>
      <p className="loader-status">{t("locating")}</p>
      <h1>KHOI PHAM</h1>
      <p className="loader-tagline">Two worlds. One way of seeing.</p>
      <button className="text-button" onClick={close}>{t("skip")}</button>
    </motion.aside>
  );
}

function AppRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} className="route-stage" initial={{ opacity: 0, scale: 1.025, y: 18, filter: "blur(7px)" }} animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }} exit={{ opacity: 0, scale: 0.985, y: -8, filter: "blur(4px)" }} transition={{ duration: 0.64, ease: [0.22, 1, 0.36, 1] }}>
        <Suspense fallback={null}>
          <Routes location={location}>
            <Route path="/" element={<Gateway />} />
            <Route path="/personal/:section" element={<PersonalPage />} />
            <Route path="/personal" element={<PersonalPage />} />
            <Route path="/work/projects/:slug" element={<ProjectDetail />} />
            <Route path="/work/:section" element={<WorkPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Gateway />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return <LanguageProvider><UniverseTravelProvider><GlobalHeader /><AppRoutes /><Loader /></UniverseTravelProvider></LanguageProvider>;
}
