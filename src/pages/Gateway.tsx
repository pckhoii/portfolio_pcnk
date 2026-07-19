import { motion } from "motion/react";
import { useRef } from "react";
import { UniverseBackground, UniversePortal } from "../components/universe/UniverseSystem";
import { useI18n } from "../app/i18n";

export default function Gateway() {
  const { language, t } = useI18n(); const vi = language === "vi"; const root = useRef<HTMLElement>(null);
  const onPointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    root.current?.style.setProperty("--mouse-x", `${((event.clientX - bounds.left) / bounds.width - .5) * 2}`);
    root.current?.style.setProperty("--mouse-y", `${((event.clientY - bounds.top) / bounds.height - .5) * 2}`);
  };
  return <main ref={root} onPointerMove={onPointerMove} className="gateway-page planet-gateway"><UniverseBackground kind="gateway" />
    <section className="gateway-hero"><motion.div className="gateway-intro" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .72 }}><p className="eyebrow">{vi ? "Một website cá nhân" : "A personal website"}</p><h1>KHOI PHAM</h1><h2>Two worlds. One way of seeing.</h2><p>{vi ? "Tôi xây dựng bằng dữ liệu, tư duy qua hình ảnh và lưu giữ ý tưởng từ sách, chuyển động cùng đời sống thường ngày." : "I build with data, think through visuals, and collect ideas from books, movement and everyday life."}</p></motion.div>
      <div className="planet-field"><UniversePortal kind="personal" index="01" title={vi ? "Thế giới bên trong" : "The Inner World"} copy={vi ? "Sách, ghi chú, chuyển động, những nơi chốn và các tò mò thầm lặng làm nên con người tôi." : "Books, notes, movement, places and the quiet curiosities shaping who I am."} to="/personal/about" /><div className="intersection"><span /><p>{t("same")}</p></div><UniversePortal kind="work" index="02" title={vi ? "Đài quan sát" : "The Observatory"} copy={vi ? "Dữ liệu, hệ thống, thử nghiệm và các bài toán tôi thích giải quyết." : "Data, systems, experiments and the problems I enjoy solving."} to="/work/profile" /></div>
    </section><footer className="gateway-footer"><span>{t("curiosity")}</span><span>{t("optional")}</span></footer>
  </main>;
}
