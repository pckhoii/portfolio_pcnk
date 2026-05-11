const uiText = {
	vi: {
		brand: "Portfolio",
		navAbout: "Giới thiệu",
		navSkills: "Kỹ năng",
		navProjects: "Dự án",
		navExperience: "Kinh nghiệm",
		navContact: "Liên hệ",
		aboutTitle: "Giới thiệu",
		aboutKicker: "About",
		aboutFeatureTitle: "Biến dữ liệu thành định hướng",
		skillsTitle: "Kỹ năng cốt lõi",
		skillsKicker: "Toolkit",
		skillsAsideTitle: "Trọng tâm",
		projectsTitle: "Dự án nổi bật",
		projectsKicker: "Selected Work",
		experienceTitle: "Kinh nghiệm",
		experienceKicker: "Journey",
		contactTitle: "Cùng hợp tác",
		contactKicker: "Contact",
		contactText:
			"Bạn cần dashboard BI rõ ràng hơn, luồng ETL ổn định hơn, hay một góc nhìn dữ liệu giúp ra quyết định nhanh hơn? Tôi có thể hỗ trợ từ phân tích bài toán đến triển khai hệ thống báo cáo thực tế.",
		contactBtn: "Gửi email",
		footer: "Portfolio được xây dựng bằng HTML, CSS và JavaScript.",
		locationLabel: "Địa điểm",
		emailLabel: "Email",
		phoneLabel: "Số điện thoại",
		socialLabel: "Mạng xã hội",
		viewDemo: "Live Demo",
		viewCode: "Source",
		themeSwitchLabel: "Light / Dark",
		languageSwitchLabel: "VI / EN",
		projectSummaryLabel: "Case study nổi bật",
		impactSummaryValue: "Impact",
		impactSummaryLabel: "Tập trung vào quyết định kinh doanh",
		availabilityText: "Sẵn sàng cho cơ hội mới",
		availabilityNote:
			"Mở cho các cơ hội Data Analyst, Data Engineer, dashboard BI và tối ưu pipeline dữ liệu.",
		specializations: [
			"Dashboard BI và theo dõi KPI",
			"ETL/ELT pipeline và chuẩn hóa dữ liệu",
			"Data warehouse và data modeling",
			"Phân tích vận hành, logistics và tài chính"
		],
		contactPoints: [
			{ title: "Trao đổi công việc", value: "Phản hồi nhanh cho cơ hội Data Analyst / Data Engineer" },
			{ title: "BI dashboard", value: "Thiết kế và theo dõi KPI cho stakeholder" },
			{ title: "Data pipeline", value: "Chuẩn hóa dữ liệu, ETL và data warehouse phục vụ báo cáo" }
		],
		stats: [
			{ value: "10+", label: "Dashboard BI đã triển khai" },
			{ value: "20+", label: "Nguồn dữ liệu đã tích hợp" },
			{ value: "2", label: "Vai trò chuyên môn chính" }
		]
	},
	en: {
		brand: "Portfolio",
		navAbout: "About",
		navSkills: "Skills",
		navProjects: "Projects",
		navExperience: "Experience",
		navContact: "Contact",
		aboutTitle: "About",
		aboutKicker: "About",
		aboutFeatureTitle: "Turning data into direction",
		skillsTitle: "Core Skills",
		skillsKicker: "Toolkit",
		skillsAsideTitle: "Focus Areas",
		projectsTitle: "Featured Projects",
		projectsKicker: "Selected Work",
		experienceTitle: "Experience",
		experienceKicker: "Journey",
		contactTitle: "Let's Work Together",
		contactKicker: "Contact",
		contactText:
			"If you need clearer BI dashboards, more reliable ETL workflows, or stronger analytics support for business decisions, I'd love to help.",
		contactBtn: "Send Email",
		footer: "Portfolio built with HTML, CSS, and JavaScript.",
		locationLabel: "Location",
		emailLabel: "Email",
		phoneLabel: "Phone",
		socialLabel: "Social",
		viewDemo: "Live Demo",
		viewCode: "Source",
		themeSwitchLabel: "Light / Dark",
		languageSwitchLabel: "VI / EN",
		projectSummaryLabel: "Featured case studies",
		impactSummaryValue: "Impact",
		impactSummaryLabel: "Designed for business decisions",
		availabilityText: "Available for new opportunities",
		availabilityNote:
			"Open to Data Analyst and Data Engineer opportunities, BI dashboard work, and data pipeline optimization.",
		specializations: [
			"BI dashboards and KPI monitoring",
			"ETL/ELT pipelines and data standardization",
			"Data warehousing and data modeling",
			"Operational, logistics, and financial analytics"
		],
		contactPoints: [
			{ title: "Work inquiries", value: "Fast replies for Data Analyst and Data Engineer opportunities" },
			{ title: "BI dashboards", value: "Build KPI reporting experiences for stakeholders" },
			{ title: "Data pipelines", value: "Support ETL, data warehousing, and reporting readiness" }
		],
		stats: [
			{ value: "10+", label: "BI Dashboards Delivered" },
			{ value: "20+", label: "Data Sources Standardized" },
			{ value: "2", label: "Core Data Roles" }
		]
	}
};

const pickText = (value, lang) => {
	if (typeof value === "string") {
		return value;
	}

	if (!value) {
		return "";
	}

	return value[lang] || value.en || value.vi || "";
};

const setText = (id, text) => {
	const node = document.getElementById(id);
	if (node) {
		node.textContent = text;
	}
};

const initialsFromName = (name) => {
	if (!name) {
		return "DA";
	}

	return name
		.split(/\s+/)
		.filter(Boolean)
		.slice(0, 2)
		.map((part) => part[0].toUpperCase())
		.join("");
};

export function renderPage(data, state) {
	const { profile, skills, projects, experience } = data;
	const lang = state.lang;
	const t = uiText[lang];
	const featuredProjects = [...projects]
		.filter((item) => item.featured)
		.sort((a, b) => (a.order || 99) - (b.order || 99));

	document.documentElement.lang = lang;

	setText("brandText", t.brand);
	setText("navAbout", t.navAbout);
	setText("navSkills", t.navSkills);
	setText("navProjects", t.navProjects);
	setText("navExperience", t.navExperience);
	setText("navContact", t.navContact);

	setText("heroKicker", pickText(profile.role, lang));
	setText("heroRole", profile.name || pickText(profile.role, lang));
	setText("heroHeadline", pickText(profile.headline, lang));
	setText("heroSummary", pickText(profile.summary, lang));
	setText("heroPrimaryBtn", lang === "en" ? "View Projects" : "Xem dự án");
	setText("heroSecondaryBtn", lang === "en" ? "Contact" : "Liên hệ");

	setText("aboutTitle", t.aboutTitle);
	setText("aboutKicker", t.aboutKicker);
	setText("aboutFeatureTitle", t.aboutFeatureTitle);
	setText("aboutText", pickText(profile.about, lang));

	setText("skillsTitle", t.skillsTitle);
	setText("skillsKicker", t.skillsKicker);
	setText("skillsAsideTitle", t.skillsAsideTitle);
	setText("projectsTitle", t.projectsTitle);
	setText("projectsKicker", t.projectsKicker);
	setText("experienceTitle", t.experienceTitle);
	setText("experienceKicker", t.experienceKicker);
	setText("contactTitle", t.contactTitle);
	setText("contactKicker", t.contactKicker);
	setText("contactText", t.contactText);
	setText("contactBtn", t.contactBtn);
	setText("footerText", t.footer);
	setText("themeSwitchLabel", t.themeSwitchLabel);
	setText("languageSwitchLabel", t.languageSwitchLabel);
	setText("locationLabel", t.locationLabel);
	setText("emailLabel", t.emailLabel);
	setText("phoneLabel", t.phoneLabel);
	setText("socialLabel", t.socialLabel);
	setText("projectSummaryValue", `${featuredProjects.length}`);
	setText("projectSummaryLabel", t.projectSummaryLabel);
	setText("impactSummaryValue", t.impactSummaryValue);
	setText("impactSummaryLabel", t.impactSummaryLabel);
	setText("availabilityText", t.availabilityText);
	setText("availabilityNote", t.availabilityNote);

	const contactBtn = document.getElementById("contactBtn");
	if (contactBtn) {
		contactBtn.href = `mailto:${profile.email}`;
	}

	setText("locationText", profile.location);

	const emailLink = document.getElementById("emailLink");
	if (emailLink) {
		emailLink.href = `mailto:${profile.email}`;
		emailLink.textContent = profile.email;
	}

	const phoneLink = document.getElementById("phoneLink");
	if (phoneLink) {
		phoneLink.href = `tel:${profile.phone || ""}`;
		phoneLink.textContent = profile.phone || "";
	}

	const socialList = document.getElementById("socialList");
	if (socialList) {
		socialList.innerHTML = profile.socials
			.map(
				(item) => `
				<li>
					<a href="${item.url}" target="_blank" rel="noreferrer">${item.label}</a>
				</li>
			`
			)
			.join("");
	}

	const statRow = document.getElementById("statRow");
	if (statRow) {
		const stats = Array.isArray(profile.stats) && profile.stats.length ? profile.stats : t.stats;

		statRow.innerHTML = stats
			.map(
				(item) => `
				<article class="stat-card">
					<p class="stat-value">${item.value}</p>
					<p class="stat-label">${pickText(item.label, lang)}</p>
				</article>
			`
			)
			.join("");
	}

	const aboutHighlights = document.getElementById("aboutHighlights");
	if (aboutHighlights) {
		if (Array.isArray(profile.highlights) && profile.highlights.length) {
			aboutHighlights.innerHTML = profile.highlights
				.map(
					(item) => `
					<article class="mini-card">
						<p class="mini-value">${item.value}</p>
						<h4>${pickText(item.title, lang)}</h4>
						<p>${pickText(item.description, lang)}</p>
					</article>
				`
				)
				.join("");
		} else {
			aboutHighlights.innerHTML = `
				<article class="mini-card">
					<p class="mini-value">${initialsFromName(profile.name)}</p>
					<h4>${pickText(profile.role, lang)}</h4>
					<p>${lang === "en" ? "Focused on clarity, velocity, and stakeholder-ready insight." : "Tập trung vào sự rõ ràng, tốc độ và insight dễ dùng cho stakeholder."}</p>
				</article>
				<article class="mini-card">
					<p class="mini-value">${featuredProjects.length}+</p>
					<h4>${lang === "en" ? "Featured Work" : "Case Study"}</h4>
					<p>${lang === "en" ? "From forecasting to retention and funnel optimization." : "Từ forecasting đến retention và tối ưu conversion funnel."}</p>
				</article>
				<article class="mini-card">
					<p class="mini-value">${profile.location.split(",")[0]}</p>
					<h4>${lang === "en" ? "Based In" : "Đang làm việc tại"}</h4>
					<p>${lang === "en" ? "Open to remote collaboration and cross-functional data work." : "Sẵn sàng cho collaboration remote và các bài toán dữ liệu liên phòng ban."}</p>
				</article>
			`;
		}
	}

	const skillsGrid = document.getElementById("skillsGrid");
	if (skillsGrid) {
		skillsGrid.innerHTML = skills
			.map(
				(group) => `
				<article class="skill-card">
					<div class="skill-card-head">
						<h4>${pickText(group.title, lang)}</h4>
					</div>
					<div class="tag-row">
						${group.items.map((item) => `<span class="tag">${item}</span>`).join("")}
					</div>
				</article>
			`
			)
			.join("");
	}

	const specializationList = document.getElementById("specializationList");
	if (specializationList) {
		specializationList.innerHTML = t.specializations
			.map(
				(item) => `
				<div class="specialization-item">
					<span class="specialization-dot"></span>
					<p>${item}</p>
				</div>
			`
			)
			.join("");
	}

	const projectsGrid = document.getElementById("projectsGrid");
	if (projectsGrid) {
		projectsGrid.innerHTML = featuredProjects
			.map(
				(item, index) => `
				<article class="project-card project-card-${index + 1}" role="link" tabindex="0" data-detail-url="${item.detailUrl || item.demoUrl}">
					<div class="project-top">
						<div>
							<p class="project-chip">Case Study</p>
							<h4>${pickText(item.title, lang)}</h4>
						</div>
						<div class="project-icon project-icon-${(index % 3) + 1}"></div>
					</div>
					<p class="project-desc">${pickText(item.description, lang)}</p>
					<div class="tag-row">
						${item.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
					</div>
					<div class="project-links">
						<a href="${item.demoUrl}" target="_blank" rel="noreferrer">${t.viewDemo}</a>
						<a href="${item.repoUrl}" target="_blank" rel="noreferrer">${t.viewCode}</a>
					</div>
				</article>
			`
			)
			.join("");

		projectsGrid.querySelectorAll("[data-detail-url]").forEach((card) => {
			const openDetail = () => {
				const detailUrl = card.getAttribute("data-detail-url");
				if (detailUrl) {
					window.location.href = detailUrl;
				}
			};

			card.addEventListener("click", (event) => {
				if (!event.target.closest("a")) {
					openDetail();
				}
			});

			card.addEventListener("keydown", (event) => {
				if (event.key === "Enter" || event.key === " ") {
					event.preventDefault();
					openDetail();
				}
			});
		});
	}

	const experienceList = document.getElementById("experienceList");
	if (experienceList) {
		experienceList.innerHTML = experience
			.map(
				(item, index) => `
				<article class="timeline-item reveal" data-reveal-delay="${index * 80}">
					<div class="timeline-marker"></div>
					<div class="timeline-card">
						<div class="timeline-head">
							<div>
								<h4>${pickText(item.position, lang)}</h4>
								<p class="timeline-company">${item.company}</p>
							</div>
							<p class="timeline-meta">${item.period}</p>
						</div>
						<ul>
							${pickText(item.highlights, lang).map((point) => `<li>${point}</li>`).join("")}
						</ul>
					</div>
				</article>
			`
			)
			.join("");
	}

	const contactPoints = document.getElementById("contactPoints");
	if (contactPoints) {
		contactPoints.innerHTML = t.contactPoints
			.map(
				(item) => `
				<div class="contact-point">
					<h4>${item.title}</h4>
					<p>${item.value}</p>
				</div>
			`
			)
			.join("");
	}

	const themeSwitch = document.getElementById("themeSwitch");
	if (themeSwitch) {
		themeSwitch.checked = state.theme === "dark";
	}

	const languageSwitch = document.getElementById("languageSwitch");
	if (languageSwitch) {
		languageSwitch.checked = lang === "en";
	}
}
