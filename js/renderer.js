const uiText = {
	vi: {
		brand: "Khoi Pham",
		navSignals: "Signals",
		navSystems: "Systems",
		navMissions: "Missions",
		navJourney: "Journey",
		navTransmission: "Transmission",
		heroKicker: "A Small Universe of Data",
		heroHeadline: "A data analyst with a dreamer's eye.",
		heroSummary:
			"Tôi thu nhặt những tín hiệu rời rạc, sắp chúng thành hệ thống, rồi biến con số thành câu chuyện mà người khác có thể dùng để ra quyết định.",
		heroPrimaryBtn: "Explore Missions",
		heroSecondaryBtn: "Enter the Lab",
		heroNodeSignals: "Signals",
		heroNodeSystems: "Systems",
		heroNodeStories: "Stories",
		signalsKicker: "Signals",
		signalsTitle: "Tôi đọc hỗn độn như thế nào",
		signalsIntro:
			"Mỗi bài toán dữ liệu bắt đầu bằng một nhiễu động nhỏ: một KPI lệch, một dashboard chưa đủ rõ, hoặc một câu hỏi business chưa có hình dạng.",
		systemsKicker: "Systems",
		systemsTitle: "Những module tôi dùng để xây insight",
		certificationsKicker: "Coordinates",
		certificationsTitle: "Tín hiệu học tập",
		missionsKicker: "Missions",
		missionsTitle: "Mission Logs",
		missionsIntro:
			"Project là phần trung tâm của vũ trụ này: mỗi mission bắt đầu bằng một câu hỏi, lần theo tín hiệu, dựng hệ thống, rồi kết thúc bằng insight có thể hành động.",
		journeyKicker: "Journey",
		journeyTitle: "Flight Path",
		transmissionKicker: "Transmission",
		transmissionTitle: "Have a signal worth exploring?",
		contactText:
			"Gửi tôi một tin nhắn. Tôi mở với các dự án data, dashboard, reporting system và những collaboration có chiều sâu.",
		contactBtn: "Send a Message",
		cvBtn: "CV",
		footer: "A small universe of data, built with HTML, CSS, JavaScript, and a stubborn love for clear stories.",
		locationLabel: "Base",
		emailLabel: "Email",
		phoneLabel: "Phone",
		socialLabel: "Channels",
		languageSwitchLabel: "VI / EN",
		themeSwitchLabel: "Light / Dark",
		certificationPreviewLabel: "Certificate preview",
		viewCase: "View Case Study",
		viewDashboard: "Dashboard",
		viewCode: "GitHub",
		traits: [
			{
				title: "Curious Observer",
				body: "Tôi thích bắt đầu từ câu hỏi thật: điều gì đang lệch, vì sao nó quan trọng, và ai sẽ dùng câu trả lời này."
			},
			{
				title: "System Thinker",
				body: "Insight chỉ bền khi dữ liệu phía sau đủ sạch, đủ ổn định và được tổ chức để người khác tin mà dùng."
			},
			{
				title: "Quiet Builder",
				body: "Tôi xây dashboard, pipeline và reporting flow theo hướng gọn, rõ, ít ồn ào nhưng có ích lâu dài."
			}
		],
		stats: [
			{ value: "10+", label: "BI dashboards delivered" },
			{ value: "20+", label: "data sources standardized" },
			{ value: "2", label: "worlds: analysis and engineering" }
		]
	},
	en: {
		brand: "Khoi Pham",
		navSignals: "Signals",
		navSystems: "Systems",
		navMissions: "Missions",
		navJourney: "Journey",
		navTransmission: "Transmission",
		heroKicker: "A Small Universe of Data",
		heroHeadline: "A data analyst with a dreamer's eye.",
		heroSummary:
			"I collect scattered signals, shape them into systems, and turn numbers into stories people can actually use.",
		heroPrimaryBtn: "Explore Missions",
		heroSecondaryBtn: "Enter the Lab",
		heroNodeSignals: "Signals",
		heroNodeSystems: "Systems",
		heroNodeStories: "Stories",
		signalsKicker: "Signals",
		signalsTitle: "How I Read The Noise",
		signalsIntro:
			"Every data problem begins as a small disturbance: a KPI that does not feel right, a dashboard that does not explain enough, or a business question waiting for shape.",
		systemsKicker: "Systems",
		systemsTitle: "Modules I Build With",
		certificationsKicker: "Coordinates",
		certificationsTitle: "Learning Signals",
		missionsKicker: "Missions",
		missionsTitle: "Mission Logs",
		missionsIntro:
			"Projects are the center of this universe: each mission starts with a question, follows the signal, builds a system, and lands on usable insight.",
		journeyKicker: "Journey",
		journeyTitle: "Flight Path",
		transmissionKicker: "Transmission",
		transmissionTitle: "Have a signal worth exploring?",
		contactText:
			"Send me a message. I'm open to data projects, dashboard work, reporting systems, and thoughtful collaborations.",
		contactBtn: "Send a Message",
		cvBtn: "CV",
		footer: "A small universe of data, built with HTML, CSS, JavaScript, and a stubborn love for clear stories.",
		locationLabel: "Base",
		emailLabel: "Email",
		phoneLabel: "Phone",
		socialLabel: "Channels",
		languageSwitchLabel: "VI / EN",
		themeSwitchLabel: "Light / Dark",
		certificationPreviewLabel: "Certificate preview",
		viewCase: "View Case Study",
		viewDashboard: "Dashboard",
		viewCode: "GitHub",
		traits: [
			{
				title: "Curious Observer",
				body: "I like starting with the real question: what is shifting, why it matters, and who needs the answer."
			},
			{
				title: "System Thinker",
				body: "Insight lasts longer when the data behind it is clean, stable, and organized enough to be trusted."
			},
			{
				title: "Quiet Builder",
				body: "I build dashboards, pipelines, and reporting flows that are calm, clear, and useful beyond the first presentation."
			}
		],
		stats: [
			{ value: "10+", label: "BI dashboards delivered" },
			{ value: "20+", label: "data sources standardized" },
			{ value: "2", label: "worlds: analysis and engineering" }
		]
	}
};

const pickText = (value, lang) => {
	if (typeof value === "string") {
		return value;
	}

	if (Array.isArray(value)) {
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

const setVisibility = (id, isVisible) => {
	const node = document.getElementById(id);
	if (node) {
		node.hidden = !isVisible;
	}
};

const createTags = (tags = []) => tags.map((tag) => `<span class="tag">${tag}</span>`).join("");

export function renderPage(data, state) {
	const { profile, skills, projects, experience } = data;
	const lang = state.lang;
	const t = uiText[lang];
	const featuredProjects = [...projects]
		.filter((item) => item.featured)
		.sort((a, b) => (a.order || 99) - (b.order || 99));
	const certifications = Array.isArray(profile.certifications) ? profile.certifications : [];

	document.documentElement.lang = lang;

	const textBindings = {
		brandText: "brand",
		navSignals: "navSignals",
		navSystems: "navSystems",
		navMissions: "navMissions",
		navJourney: "navJourney",
		navTransmission: "navTransmission",
		heroKicker: "heroKicker",
		heroHeadline: "heroHeadline",
		heroPrimaryBtn: "heroPrimaryBtn",
		heroSecondaryBtn: "heroSecondaryBtn",
		heroNodeSignals: "heroNodeSignals",
		heroNodeSystems: "heroNodeSystems",
		heroNodeStories: "heroNodeStories",
		signalsKicker: "signalsKicker",
		signalsTitle: "signalsTitle",
		signalsIntro: "signalsIntro",
		systemsKicker: "systemsKicker",
		systemsTitle: "systemsTitle",
		certificationsKicker: "certificationsKicker",
		certificationsTitle: "certificationsTitle",
		missionsKicker: "missionsKicker",
		missionsTitle: "missionsTitle",
		missionsIntro: "missionsIntro",
		journeyKicker: "journeyKicker",
		journeyTitle: "journeyTitle",
		transmissionKicker: "transmissionKicker",
		transmissionTitle: "transmissionTitle",
		contactText: "contactText",
		contactBtn: "contactBtn",
		cvBtn: "cvBtn",
		footerText: "footer",
		locationLabel: "locationLabel",
		emailLabel: "emailLabel",
		phoneLabel: "phoneLabel",
		socialLabel: "socialLabel",
		languageSwitchLabel: "languageSwitchLabel",
		themeSwitchLabel: "themeSwitchLabel"
	};

	Object.entries(textBindings).forEach(([id, key]) => setText(id, t[key]));

	setText("heroRole", profile.name || "Khoi Pham");
	setText("heroSummary", t.heroSummary);
	setText("aboutText", pickText(profile.about, lang));
	setText("locationText", profile.location);

	const statRow = document.getElementById("statRow");
	if (statRow) {
		const stats = Array.isArray(profile.stats) && profile.stats.length ? profile.stats : t.stats;
		statRow.innerHTML = stats
			.map(
				(item) => `
				<article class="orbit-stat">
					<p class="stat-value">${item.value}</p>
					<p class="stat-label">${pickText(item.label, lang)}</p>
				</article>
			`
			)
			.join("");
	}

	const traitGrid = document.getElementById("traitGrid");
	if (traitGrid) {
		traitGrid.innerHTML = t.traits
			.map(
				(item, index) => `
				<article class="trait-card trait-card-${index + 1}">
					<span class="trait-index">0${index + 1}</span>
					<h4>${item.title}</h4>
					<p>${item.body}</p>
				</article>
			`
			)
			.join("");
	}

	const skillsGrid = document.getElementById("skillsGrid");
	if (skillsGrid) {
		skillsGrid.innerHTML = skills
			.map(
				(group, index) => `
				<article class="system-card system-card-${index + 1}">
					<p class="module-id">Module 0${index + 1}</p>
					<h4>${pickText(group.title, lang)}</h4>
					<div class="tag-row">${createTags(group.items)}</div>
				</article>
			`
			)
			.join("");
	}

	const certificationsGrid = document.getElementById("certificationsGrid");
	if (certificationsGrid) {
		certificationsGrid.innerHTML = certifications
			.map(
				(item) => `
				<a class="cert-card" href="${item.url}" target="_blank" rel="noreferrer" aria-label="${pickText(item.title, lang)}">
					${item.image ? `
						<div class="cert-media">
							<img src="${item.image}" alt="${pickText(item.title, lang)} - ${t.certificationPreviewLabel}" loading="lazy" />
						</div>
					` : ""}
					<h4>${pickText(item.title, lang)}</h4>
				</a>
			`
			)
			.join("");
	}

	setVisibility("certifications", certifications.length > 0);

	const projectsGrid = document.getElementById("projectsGrid");
	if (projectsGrid) {
		projectsGrid.innerHTML = featuredProjects
			.map((item, index) => {
				const mission = item.mission || {};
				const detailUrl = item.detailUrl || item.demoUrl || "#";

				return `
					<article class="mission-card" role="link" tabindex="0" data-detail-url="${detailUrl}">
						<div class="mission-planet" aria-hidden="true">
							<span>${String(index + 1).padStart(2, "0")}</span>
						</div>
						<div class="mission-content">
							<div class="mission-top">
								<p class="mission-code">Mission ${String(index + 1).padStart(2, "0")}</p>
								<h4>${pickText(item.title, lang)}</h4>
							</div>
							<div class="mission-log">
								<div>
									<span>Question</span>
									<p>${pickText(mission.question, lang) || pickText(item.description, lang)}</p>
								</div>
								<div>
									<span>Signal</span>
									<p>${pickText(mission.signal, lang) || "Performance signals hidden behind campaign volume."}</p>
								</div>
								<div>
									<span>System</span>
									<p>${pickText(mission.system, lang) || item.tags.join(", ")}</p>
								</div>
								<div>
									<span>Outcome</span>
									<p>${pickText(mission.outcome, lang) || "A clearer decision layer for business users."}</p>
								</div>
							</div>
							<div class="tag-row">${createTags(item.tags)}</div>
							<div class="mission-links">
								<a href="${detailUrl}">${t.viewCase}</a>
								<a href="${item.demoUrl}" target="_blank" rel="noreferrer">${t.viewDashboard}</a>
								<a href="${item.repoUrl}" target="_blank" rel="noreferrer">${t.viewCode}</a>
							</div>
						</div>
					</article>
				`;
			})
			.join("");

		projectsGrid.querySelectorAll("[data-detail-url]").forEach((card) => {
			const openDetail = () => {
				const detailUrl = card.getAttribute("data-detail-url");
				if (detailUrl && detailUrl !== "#") {
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
				<article class="flight-stop">
					<div class="flight-marker">${String(index + 1).padStart(2, "0")}</div>
					<div class="flight-card">
						<p class="timeline-meta">${item.period}</p>
						<h4>${pickText(item.position, lang)}</h4>
						<p class="timeline-company">${item.company}</p>
						<ul>
							${pickText(item.highlights, lang).map((point) => `<li>${point}</li>`).join("")}
						</ul>
					</div>
				</article>
			`
			)
			.join("");
	}

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

	const contactBtn = document.getElementById("contactBtn");
	if (contactBtn) {
		contactBtn.href = `mailto:${profile.email}`;
	}

	const cvBtn = document.getElementById("cvBtn");
	if (cvBtn && profile.cvUrl) {
		cvBtn.href = profile.cvUrl;
		cvBtn.removeAttribute("aria-disabled");
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

	const themeSwitch = document.getElementById("themeSwitch");
	if (themeSwitch) {
		themeSwitch.checked = state.theme === "dark";
	}

	const languageSwitch = document.getElementById("languageSwitch");
	if (languageSwitch) {
		languageSwitch.checked = lang === "en";
	}
}
