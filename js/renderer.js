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
			"Bạn có ý tưởng, dashboard hoặc luồng phân tích cần làm rõ? Tôi có thể hỗ trợ từ việc bóc tách bài toán đến xây hệ thống báo cáo dễ dùng cho team.",
		contactBtn: "Gửi email",
		footer: "Portfolio được xây dựng bằng HTML, CSS và JavaScript.",
		locationLabel: "Địa điểm",
		emailLabel: "Email",
		socialLabel: "Mạng xã hội",
		viewDemo: "Live Demo",
		viewCode: "Source",
		themeSwitchLabel: "Light / Dark",
		languageSwitchLabel: "VI / EN",
		projectSummaryLabel: "Case study nổi bật",
		impactSummaryValue: "Insight",
		impactSummaryLabel: "Thiết kế cho quyết định kinh doanh",
		availabilityText: "Sẵn sàng cho dự án mới",
		availabilityNote:
			"Mở cho freelance analytics, tối ưu dashboard, và các cơ hội phân tích dữ liệu in-house.",
		specializations: [
			"Business intelligence và reporting",
			"A/B testing và đo hiệu quả",
			"Funnel, cohort và retention analysis",
			"Dashboard storytelling cho stakeholder"
		],
		contactPoints: [
			{ title: "Email trực tiếp", value: "Phản hồi nhanh cho trao đổi dự án" },
			{ title: "Dashboard review", value: "Rà soát chỉ số, flow và câu chuyện dữ liệu" },
			{ title: "Data consulting", value: "Thiết kế cấu trúc báo cáo và metric framework" }
		],
		stats: [
			{ value: "20+", label: "Báo cáo đã triển khai" },
			{ value: "95%", label: "Độ chính xác dữ liệu" },
			{ value: "12", label: "Dự án thực chiến" }
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
			"If you need a clearer analytics workflow, sharper dashboard storytelling, or support translating raw data into action, I'd love to help.",
		contactBtn: "Send Email",
		footer: "Portfolio built with HTML, CSS, and JavaScript.",
		locationLabel: "Location",
		emailLabel: "Email",
		socialLabel: "Social",
		viewDemo: "Live Demo",
		viewCode: "Source",
		themeSwitchLabel: "Light / Dark",
		languageSwitchLabel: "VI / EN",
		projectSummaryLabel: "Featured case studies",
		impactSummaryValue: "Impact",
		impactSummaryLabel: "Designed for business decisions",
		availabilityText: "Available for new projects",
		availabilityNote:
			"Open to freelance analytics work, dashboard optimization, and in-house data opportunities.",
		specializations: [
			"Business intelligence and reporting",
			"A/B testing and impact measurement",
			"Funnel, cohort, and retention analysis",
			"Dashboard storytelling for stakeholders"
		],
		contactPoints: [
			{ title: "Direct email", value: "Fast replies for project discussions" },
			{ title: "Dashboard review", value: "Review metrics, flow, and data narrative" },
			{ title: "Data consulting", value: "Build reporting structure and metric frameworks" }
		],
		stats: [
			{ value: "20+", label: "Reports Delivered" },
			{ value: "95%", label: "Data Accuracy" },
			{ value: "12", label: "Hands-on Projects" }
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
	setText("heroPrimaryBtn", t.heroPrimaryBtn || (lang === "en" ? "View Projects" : "Xem dự án"));
	setText("heroSecondaryBtn", t.heroSecondaryBtn || (lang === "en" ? "Contact" : "Liên hệ"));

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
		statRow.innerHTML = t.stats
			.map(
				(item) => `
				<article class="stat-card">
					<p class="stat-value">${item.value}</p>
					<p class="stat-label">${item.label}</p>
				</article>
			`
			)
			.join("");
	}

	const aboutHighlights = document.getElementById("aboutHighlights");
	if (aboutHighlights) {
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
				<article class="project-card project-card-${index + 1}">
					<div class="project-top">
						<div>
							<p class="project-chip">${lang === "en" ? "Case Study" : "Case Study"}</p>
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
