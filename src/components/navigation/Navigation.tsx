import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useI18n } from "../../app/i18n";
import { useUniverseTravel } from "../../app/UniverseTravel";

const personal = [["About", "/personal/about"], ["Reading", "/personal/reading"], ["Notes", "/personal/notes"], ["Movement", "/personal/movement"], ["Places", "/personal/places"], ["Learning", "/personal/learning"]];
const work = [["Profile", "/work/profile"], ["Projects", "/work/projects"], ["Experience", "/work/experience"], ["Toolkit", "/work/toolkit"], ["Archive", "/work/archive"]];

export function GlobalHeader() {
  const { pathname } = useLocation(); const [open, setOpen] = useState(false);
  const { language, setLanguage, t } = useI18n(); const travel = useUniverseTravel();
  const isPersonal = pathname.startsWith("/personal"); const isWork = pathname.startsWith("/work");
  const links = isPersonal ? personal : isWork ? work : [];
  return <header className={`site-header ${isPersonal ? "header-personal" : isWork ? "header-work" : "header-gateway"}`}>
    <Link className="brand" to="/">KHOI PHAM</Link>
    {links.length > 0 && <p className="universe-name">{isPersonal ? "INNER WORLD" : "THE OBSERVATORY"}</p>}
    <nav className={open ? "is-open" : ""} aria-label="Primary navigation">
      {links.length > 0 ? links.map(([label, to]) => <NavLink key={to} to={to} onClick={() => setOpen(false)}>{language === "vi" ? ({ About: "Giới thiệu", Reading: "Đọc sách", Notes: "Ghi chú", Movement: "Chuyển động", Places: "Địa điểm", Learning: "Học tập", Profile: "Hồ sơ", Projects: "Dự án", Experience: "Kinh nghiệm", Toolkit: "Công cụ", Archive: "Lưu trữ" }[label] || label) : label}</NavLink>) : <><NavLink to="/personal/about">{t("personal")}</NavLink><NavLink to="/work/profile">{t("work")}</NavLink><NavLink to="/contact">{t("contact")}</NavLink></>}
      {links.length > 0 && <button className="switch-link" onClick={() => travel(isPersonal ? "/work/profile" : "/personal/about", isPersonal ? "work" : "personal")}>{t("switch")} <span aria-hidden="true">&#8599;</span></button>}
    </nav>
    <button className="language-toggle" onClick={() => setLanguage(language === "en" ? "vi" : "en")} aria-label="Change language"><span className={language === "en" ? "active" : ""}>EN</span><i>/</i><span className={language === "vi" ? "active" : ""}>VI</span></button>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu"><i /><i /></button>
  </header>;
}
