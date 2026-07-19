import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "en" | "vi";
const dictionary = {
  en: { personal: "Personal", work: "Work", contact: "Contact", switch: "Switch universe", skip: "Skip intro", mapping: "Mapping two worlds...", locating: "Locating Khoi's universe...", same: "Same person. Different ways of seeing.", curiosity: "Curiosity connects both worlds.", optional: "Scroll is optional. Choose a direction.", enter: "Enter my world", explore: "Explore my work", personalUniverse: "Personal Universe", workUniverse: "Work Universe", inner: "The Inner World", observatory: "The Observatory", reading: "Reading", placeholder: "Placeholder record", signal: "The signal", stayed: "What stayed with me", mattered: "Why it mattered", selected: "Selected Missions", transmission: "Transmission" },
  vi: { personal: "Cá nhân", work: "Công việc", contact: "Liên hệ", switch: "Đổi vũ trụ", skip: "Bỏ qua", mapping: "Đang lập bản đồ hai vũ trụ...", locating: "Đang định vị vũ trụ của Khoi...", same: "Cùng một người. Hai cách nhìn.", curiosity: "Sự tò mò kết nối hai thế giới.", optional: "Không cần cuộn. Hãy chọn một hướng đi.", enter: "Đi vào thế giới của tôi", explore: "Khám phá công việc", personalUniverse: "Vũ trụ cá nhân", workUniverse: "Vũ trụ công việc", inner: "Thế giới bên trong", observatory: "Đài quan sát", reading: "Đọc sách", placeholder: "Nội dung đang chờ bổ sung", signal: "Tín hiệu", stayed: "Điều đọng lại", mattered: "Vì sao điều này quan trọng", selected: "Các nhiệm vụ chọn lọc", transmission: "Truyền tín hiệu" },
} as const;
type Key = keyof typeof dictionary.en;
const I18nContext = createContext<{ language: Language; setLanguage: (language: Language) => void; t: (key: Key) => string } | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => (localStorage.getItem("khoi-language") as Language) || "en");
  useEffect(() => { localStorage.setItem("khoi-language", language); document.documentElement.lang = language; }, [language]);
  const value = useMemo(() => ({ language, setLanguage, t: (key: Key) => dictionary[language][key] }), [language]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
export function useI18n() { const value = useContext(I18nContext); if (!value) throw new Error("useI18n must be used inside LanguageProvider"); return value; }
