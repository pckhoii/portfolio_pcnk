import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { books, personalPages, projects, workPages } from "../data/content";
import { DirectionArtifact, UniverseBackground } from "../components/universe/UniverseSystem";
import { useI18n } from "../app/i18n";

const viPersonal: Record<string, { label: string; title: string; intro: string; items: string[] }> = {
  about: { label: "Giới thiệu", title: "Thế giới bên trong", intro: "Tôi là Khoi - một người thích hiểu cách mọi thứ vận hành, từ dataset, hệ thống hình ảnh, cuốn sách đến cách con người ra quyết định.", items: ["Hiện đang sống tại TP. Ho Chi Minh.", "Đang đọc: Placeholder - thêm tên sách hiện tại.", "Đang học: Placeholder - thêm chủ đề hiện tại.", "Điều đang say mê: Placeholder - thêm một tò mò nhỏ."] },
  notes: { label: "Ghi chú thực địa", title: "Những tín hiệu nhỏ, được giữ lại.", intro: "Một kệ mở cho các câu hỏi về dữ liệu, thiết kế, AI và đời sống thường ngày.", items: ["Ghi chú placeholder: Thêm một quan sát gần đây.", "Ghi chú placeholder: Thêm một câu hỏi đang được tìm hiểu.", "Ghi chú placeholder: Thêm điều học được khi xây dựng website."] },
  movement: { label: "Chuyển động", title: "Công việc không ai nhìn thấy.", intro: "Kỷ luật, chuyển động và những lần lặp lại lặng lẽ phía sau một quá trình tốt hơn.", items: ["Placeholder: Vì sao boxing quan trọng.", "Placeholder: Nhịp tập và tính nhất quán.", "Placeholder: Bài học từ chuyển động mang vào công việc."] },
  places: { label: "Địa điểm & Khung hình", title: "Những nơi còn ở lại trong khung hình.", intro: "Một bản đồ cho ảnh, hành trình và các chi tiết khiến nơi chốn đáng nhớ.", items: ["Địa điểm placeholder: Thêm một nơi và câu chuyện ngắn.", "Khung hình placeholder: Thêm ảnh hoặc tham chiếu hình ảnh.", "Ký ức placeholder: Thêm chi tiết còn đọng lại."] },
  learning: { label: "Nhật ký học tập", title: "Học công khai, một cách chậm rãi.", intro: "Thử nghiệm, khóa học và những thất bại hữu ích được ghi lại như một phương hướng, không phải checklist.", items: ["Thử nghiệm placeholder: Thêm dự án đang làm.", "Khóa học placeholder: Thêm khóa học hoặc khái niệm.", "Bài học placeholder: Thêm điều chưa hiệu quả và lý do."] },
};
const viWork: Record<string, { label: string; title: string; intro: string; items: string[] }> = {
  profile: { label: "Hồ sơ", title: "Biến dữ liệu thành định hướng.", intro: "Tôi biến câu hỏi kinh doanh thành phân tích có cấu trúc, hệ thống trực quan rõ ràng và các quyết định có thể hành động.", items: ["Data Analyst", "TP. Ho Chi Minh", "CV, email, LinkedIn và GitHub có tại trang Liên hệ."] },
  experience: { label: "Kinh nghiệm", title: "Hồ sơ những câu hỏi hữu ích.", intro: "Một hành trình nghề nghiệp chọn lọc. Các record chi tiết sẽ được bổ sung khi xác nhận.", items: ["Record placeholder: Thêm công ty, vai trò và thời gian.", "Record placeholder: Thêm thách thức và kết quả.", "Record placeholder: Thêm bài học được mang theo."] },
  toolkit: { label: "Bộ công cụ", title: "Những công cụ để quan sát rõ hơn.", intro: "Công cụ được nhóm theo công việc chúng hỗ trợ, không phải một bức tường logo.", items: ["Phân tích: SQL, Python, Excel", "Chuyển đổi: Power Query, Pandas, Polars, PySpark", "Trực quan: Power BI, Tableau, Looker Studio", "Xây dựng: React, Flask, databases", "Khám phá: AI agents, automation, MCP"] },
  archive: { label: "Lưu trữ", title: "Những tín hiệu cũ, vẫn trong tầm tay.", intro: "Kho lưu trữ cho thử nghiệm, dashboard nhỏ, repository và chứng chỉ.", items: ["Placeholder: Thêm filter và artifact thật.", "Placeholder: Thêm experiment hoặc mini tool.", "Placeholder: Chỉ thêm chứng chỉ khi đã xác minh."] },
};

function PageShell({ universe, label, title, intro, children }: { universe: "personal" | "work" | "contact"; label: string; title: string; intro: string; children: React.ReactNode }) {
  return <main className={`universe-page ${universe}`}><UniverseBackground kind={universe === "contact" ? "gateway" : universe} /><section className="universe-arrival"><div><p className="eyebrow">{label}</p><h1>{title}</h1><p className="page-intro">{intro}</p></div><DirectionArtifact type={universe} /></section>{children}</main>;
}

function ReadingRoom() {
  const [active, setActive] = useState(0); const book = books[active]; const { language, t } = useI18n(); const vi = language === "vi";
  return <section className="reading-room"><div className="book-spines" role="tablist" aria-label="Reading archive">{books.map((item, index) => <button key={item.title} role="tab" aria-selected={active === index} className={active === index ? "selected" : ""} onClick={() => setActive(index)}><small>{item.status}</small><span>{vi ? ["Thêm sách đang đọc", "Thêm sách đã đọc", "Thêm sách tiếp theo"][index] : item.title}</span></button>)}</div><article className="book-detail"><p className="eyebrow">{book.status} / {t("placeholder")}</p><h2>{vi ? ["Thêm sách đang đọc", "Thêm sách đã đọc", "Thêm sách tiếp theo"][active] : book.title}</h2><p className="book-author">{vi ? "Tác giả placeholder" : book.author}</p><dl><div><dt>{t("signal")}</dt><dd>{vi ? "Placeholder: Thêm ý tưởng hoặc câu hỏi đã đưa cuốn sách này vào archive." : "Placeholder: Add the idea or question that called this book into the archive."}</dd></div><div><dt>{t("stayed")}</dt><dd>{vi ? "Ghi chú cá nhân sẽ được bổ sung." : book.note}</dd></div><div><dt>{t("mattered")}</dt><dd>{vi ? "Placeholder: Thêm lý do cá nhân sau khi đọc xong." : "Placeholder: Add a personal reason once the book is read."}</dd></div></dl></article></section>;
}

export function PersonalPage() {
  const { section = "about" } = useParams();
  const { language, t } = useI18n(); const vi = language === "vi";
  if (section === "reading") return <PageShell universe="personal" label={`${t("personalUniverse")} / ${t("reading")}`} title={vi ? "Phòng đọc" : "The Reading Room"} intro={vi ? "Một bộ sưu tập sách, chuyển động, nơi chốn và những suy nghĩ còn dang dở." : "A collection of books, movement, places and unfinished thoughts."}><ReadingRoom /></PageShell>;
  const source = (vi ? viPersonal : personalPages) as Record<string, { label: string; title: string; intro: string; items: string[] }>;
  const page = source[section] ?? source.about;
  return <PageShell universe="personal" label={`${t("personalUniverse")} / ${page.label}`} title={page.title} intro={page.intro}><section className="field-records">{page.items.map((item, index) => <article key={item}><span>0{index + 1}</span><p>{item}</p></article>)}</section></PageShell>;
}

export function WorkPage() {
  const { section = "profile" } = useParams();
  const { language, t } = useI18n(); const vi = language === "vi";
  if (section === "projects") return <PageShell universe="work" label={`${t("workUniverse")} / ${t("selected")}`} title={t("selected")} intro={vi ? "Một chòm sao gồm câu hỏi, hệ thống và công việc đang mở." : "A constellation of questions, systems and work in progress."}><section className="mission-map">{projects.map((project, index) => <Link key={project.slug} to={`/work/projects/${project.slug}`} className="mission-node"><span>0{index + 1}</span><i /><h2>{project.title}</h2><p>{vi ? "Bối cảnh dự án và câu hỏi kinh doanh đang chờ xác nhận." : project.problem}</p><small>{project.tools.join(" / ")}</small></Link>)}</section></PageShell>;
  const source = (vi ? viWork : workPages) as Record<string, { label: string; title: string; intro: string; items: string[] }>;
  const page = source[section] ?? source.profile;
  return <PageShell universe="work" label={`${t("workUniverse")} / ${page.label}`} title={page.title} intro={page.intro}><section className="field-records work-records">{page.items.map((item, index) => <article key={item}><span>0{index + 1}</span><p>{item}</p></article>)}</section></PageShell>;
}

export function ProjectDetail() {
  const { slug } = useParams(); const project = projects.find((entry) => entry.slug === slug);
  if (!project) return <WorkPage />;
  const entries = ["Context", "Problem", "My role", "Data", "Process", "Key decisions", "Output", "Outcome", "What I learned", "Tools"];
  return <PageShell universe="work" label="Work Universe / Mission Detail" title={project.title} intro={project.problem}><section className="mission-detail">{entries.map((entry, index) => <article key={entry}><span>{String(index + 1).padStart(2, "0")}</span><div><h2>{entry}</h2><p>{entry === "Tools" ? project.tools.join(", ") : "Placeholder: Add verified project detail here. No outcome or decision has been invented."}</p></div></article>)}</section></PageShell>;
}

export function Contact() {
  const { language, t } = useI18n(); const vi = language === "vi";
  return <PageShell universe="contact" label={t("transmission")} title={vi ? "Có tín hiệu nào đáng để khám phá?" : "Have a signal worth exploring?"} intro={vi ? "Tôi sẵn sàng trao đổi về dự án dữ liệu, dashboard, hệ thống báo cáo và những hợp tác nhiều suy nghĩ." : "I'm open to data projects, dashboard work, reporting systems and thoughtful collaborations."}><section className="contact-links"><a href="mailto:placeholder@example.com">Email <span>{vi ? "Địa chỉ placeholder" : "Placeholder address"}</span></a><a href="#">LinkedIn <span>{vi ? "Link placeholder" : "Placeholder link"}</span></a><a href="#">GitHub <span>{vi ? "Link placeholder" : "Placeholder link"}</span></a><a href="#">Resume <span>{vi ? "File placeholder" : "Placeholder file"}</span></a></section></PageShell>;
}
