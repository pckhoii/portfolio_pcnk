const uiText = {
	vi: {
		brand: "Portfolio",
		navAbout: "Giới thiệu",
		navSkills: "Kỹ năng",
		navProjects: "Dự án",
		navExperience: "Kinh nghiệm",
		navContact: "Liên hệ",
		aboutTitle: "Giới thiệu",
		skillsTitle: "Kỹ năng cốt lõi",
		projectsTitle: "Dự án nổi bật",
		experienceTitle: "Kinh nghiệm",
		contactTitle: "Cùng hợp tác",
		contactText: "Bạn có ý tưởng hoặc dự án cần phân tích dữ liệu? Hãy liên hệ với tôi.",
		contactBtn: "Gửi email",
		heroPrimaryBtn: "Xem dự án",
		heroSecondaryBtn: "Liên hệ",
		footer: "Portfolio được xây dựng bằng HTML, CSS và JavaScript.",
		locationLabel: "Địa điểm",
		emailLabel: "Email",
		socialLabel: "Mạng xã hội",
		viewDemo: "Live Demo",
		viewCode: "Source",
		themeSwitchLabel: "Light / Dark",
		languageSwitchLabel: "VI / EN",
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
		skillsTitle: "Core Skills",
		projectsTitle: "Featured Projects",
		experienceTitle: "Experience",
		contactTitle: "Let's Work Together",
		contactText: "If you have an idea or project that needs data analysis, feel free to reach out.",
		contactBtn: "Send Email",
		heroPrimaryBtn: "View Projects",
		heroSecondaryBtn: "Contact",
		footer: "Portfolio built with HTML, CSS, and JavaScript.",
		locationLabel: "Location",
		emailLabel: "Email",
		socialLabel: "Social",
		viewDemo: "Live Demo",
		viewCode: "Source",
		themeSwitchLabel: "Light / Dark",
		languageSwitchLabel: "VI / EN",
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

export function renderPage(data, state) {
	const { profile, skills, projects, experience } = data;
	const lang = state.lang;
	const t = uiText[lang];

	document.documentElement.lang = lang;

	setText("brandText", t.brand);
	setText("navAbout", t.navAbout);
	setText("navSkills", t.navSkills);
	setText("navProjects", t.navProjects);
	setText("navExperience", t.navExperience);
	setText("navContact", t.navContact);

	setText("heroKicker", pickText(profile.role, lang));
	setText("heroRole", pickText(profile.role, lang));
	setText("heroHeadline", pickText(profile.headline, lang));
	setText("heroSummary", pickText(profile.summary, lang));

	setText("aboutTitle", t.aboutTitle);
	setText("aboutText", pickText(profile.about, lang));
	setText("skillsTitle", t.skillsTitle);
	setText("projectsTitle", t.projectsTitle);
	setText("experienceTitle", t.experienceTitle);
	setText("contactTitle", t.contactTitle);
	setText("contactText", t.contactText);
	setText("contactBtn", t.contactBtn);
	setText("footerText", t.footer);

	setText("heroPrimaryBtn", t.heroPrimaryBtn);
	setText("heroSecondaryBtn", t.heroSecondaryBtn);
	setText("themeSwitchLabel", t.themeSwitchLabel);
	setText("languageSwitchLabel", t.languageSwitchLabel);

	const contactBtn = document.getElementById("contactBtn");
	if (contactBtn) {
		contactBtn.href = `mailto:${profile.email}`;
	}

	const locationLabel = document.querySelectorAll(".meta-label")[0];
	const emailLabel = document.querySelectorAll(".meta-label")[1];
	const socialLabel = document.querySelectorAll(".meta-label")[2];

	if (locationLabel) {
		locationLabel.textContent = t.locationLabel;
	}

	if (emailLabel) {
		emailLabel.textContent = t.emailLabel;
	}

	if (socialLabel) {
		socialLabel.textContent = t.socialLabel;
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
				(item) =>
					`<li><a href="${item.url}" target="_blank" rel="noreferrer">${item.label}</a></li>`
			)
			.join("");
	}

	const skillsGrid = document.getElementById("skillsGrid");
	if (skillsGrid) {
		skillsGrid.innerHTML = skills
			.map(
				(group) => `
				<article class="card">
					<h4>${pickText(group.title, lang)}</h4>
					<div class="tag-row">
						${group.items.map((item) => `<span class="tag">${item}</span>`).join("")}
					</div>
				</article>
			`
			)
			.join("");
	}

	const statRow = document.getElementById("statRow");
	if (statRow) {
		statRow.innerHTML = t.stats
			.map(
				(item) => `
				<div class="stat-item">
					<p class="stat-value">${item.value}</p>
					<p class="stat-label">${item.label}</p>
				</div>
			`
			)
			.join("");
	}

	const projectsGrid = document.getElementById("projectsGrid");
	if (projectsGrid) {
		const sorted = [...projects].sort((a, b) => (a.order || 99) - (b.order || 99));

		projectsGrid.innerHTML = sorted
			.filter((item) => item.featured)
			.map(
				(item) => `
				<article class="project-card">
					<h4>${pickText(item.title, lang)}</h4>
					<p>${pickText(item.description, lang)}</p>
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
				(item) => `
				<article class="timeline-item">
					<h4>${pickText(item.position, lang)} - ${item.company}</h4>
					<p class="timeline-meta">${item.period}</p>
					<ul>
						${pickText(item.highlights, lang).map((point) => `<li>${point}</li>`).join("")}
					</ul>
				</article>
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
