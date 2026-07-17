const uiText = {
	vi: {
		brand: "Khoi Pham",
		navJourneyMain: "The Journey",
		navBeyondMain: "Beyond the Data",
		navMissions: "Constellations",
		navTransmission: "Contact",
		heroKicker: "Entering the universe",
		heroSummary: "I transform scattered data into meaningful insights that help people make better decisions.",
		heroPrimaryBtn: "Explore the Journey",
		signalsKicker: "The Observer",
		signalsTitle: "I look for patterns hidden inside complexity.",
		signalsIntro: "Every dataset is like a sky full of stars. Individual points may look random, but when connected carefully, they become constellations that guide decisions.",
		processKicker: "Finding the Constellation",
		processTitle: "A question becomes a map.",
		systemsKicker: "Tools of Exploration",
		systemsTitle: "The instruments I use to navigate data.",
		certificationsKicker: "Coordinates",
		certificationsTitle: "Learning signals along the route.",
		missionsKicker: "Constellations",
		missionsTitle: "Projects are maps made from scattered stars.",
		missionsIntro: "Each project begins as uncertainty, then slowly becomes a readable shape: a question, a signal, a system, and a decision.",
		journeyKicker: "My Orbit",
		journeyTitle: "The path that shaped the way I see data.",
		transmissionKicker: "Final Transmission",
		transmissionTitle: "The Next Signal",
		contactText: "Every meaningful journey begins with a question. Whether you have a data problem, a project idea, or an opportunity to collaborate, I would be glad to hear the signal.",
		contactBtn: "Start a Conversation",
		cvBtn: "CV",
		footer: "He doesn't just analyze data. He navigates complexity, connects patterns, and turns information into direction.",
		locationLabel: "Base",
		emailLabel: "Email",
		phoneLabel: "Phone",
		socialLabel: "Channels",
		languageSwitchLabel: "VI / EN",
		themeSwitchLabel: "Light / Dark",
		certificationPreviewLabel: "Certificate preview",
		viewCase: "Open Galaxy",
		viewDashboard: "Dashboard",
		viewCode: "GitHub",
		process: ["Question", "Collect", "Clean", "Analyze", "Visualize", "Decision"],
		traits: [
			{ title: "Curious Observer", body: "I start by asking what changed, why it matters, and who needs the answer." },
			{ title: "System Thinker", body: "I care about the structure behind the insight, because trustworthy systems create trustworthy decisions." },
			{ title: "Quiet Builder", body: "I prefer calm, useful tools that keep working after the first presentation ends." }
		]
	},
	en: {
		brand: "Khoi Pham",
		navJourneyMain: "The Journey",
		navBeyondMain: "Beyond the Data",
		navMissions: "Constellations",
		navTransmission: "Contact",
		heroKicker: "Entering the universe",
		heroSummary: "I transform scattered data into meaningful insights that help people make better decisions.",
		heroPrimaryBtn: "Explore the Journey",
		signalsKicker: "The Observer",
		signalsTitle: "I look for patterns hidden inside complexity.",
		signalsIntro: "Every dataset is like a sky full of stars. Individual points may look random, but when connected carefully, they become constellations that guide decisions.",
		processKicker: "Finding the Constellation",
		processTitle: "A question becomes a map.",
		systemsKicker: "Tools of Exploration",
		systemsTitle: "The instruments I use to navigate data.",
		certificationsKicker: "Coordinates",
		certificationsTitle: "Learning signals along the route.",
		missionsKicker: "Constellations",
		missionsTitle: "Projects are maps made from scattered stars.",
		missionsIntro: "Each project begins as uncertainty, then slowly becomes a readable shape: a question, a signal, a system, and a decision.",
		journeyKicker: "My Orbit",
		journeyTitle: "The path that shaped the way I see data.",
		transmissionKicker: "Final Transmission",
		transmissionTitle: "The Next Signal",
		contactText: "Every meaningful journey begins with a question. Whether you have a data problem, a project idea, or an opportunity to collaborate, I would be glad to hear the signal.",
		contactBtn: "Start a Conversation",
		cvBtn: "CV",
		footer: "He doesn't just analyze data. He navigates complexity, connects patterns, and turns information into direction.",
		locationLabel: "Base",
		emailLabel: "Email",
		phoneLabel: "Phone",
		socialLabel: "Channels",
		languageSwitchLabel: "VI / EN",
		themeSwitchLabel: "Light / Dark",
		certificationPreviewLabel: "Certificate preview",
		viewCase: "Open Galaxy",
		viewDashboard: "Dashboard",
		viewCode: "GitHub",
		process: ["Question", "Collect", "Clean", "Analyze", "Visualize", "Decision"],
		traits: [
			{ title: "Curious Observer", body: "I start by asking what changed, why it matters, and who needs the answer." },
			{ title: "System Thinker", body: "I care about the structure behind the insight, because trustworthy systems create trustworthy decisions." },
			{ title: "Quiet Builder", body: "I prefer calm, useful tools that keep working after the first presentation ends." }
		]
	}
};

const pickText = (value, lang) => {
	if (typeof value === "string") return value;
	if (Array.isArray(value)) return value;
	if (!value) return "";
	return value[lang] || value.en || value.vi || "";
};

const setText = (id, text) => {
	const node = document.getElementById(id);
	if (node) node.textContent = text;
};

const setVisibility = (id, isVisible) => {
	const node = document.getElementById(id);
	if (node) node.hidden = !isVisible;
};

const createTags = (tags = []) => tags.map((tag) => `<span class="tag">${tag}</span>`).join("");

const bindText = (t) => {
	const bindings = {
		brandText: "brand",
		navJourneyMain: "navJourneyMain",
		navBeyondMain: "navBeyondMain",
		navMissions: "navMissions",
		navTransmission: "navTransmission",
		heroKicker: "heroKicker",
		heroSummary: "heroSummary",
		heroPrimaryBtn: "heroPrimaryBtn",
		signalsKicker: "signalsKicker",
		signalsTitle: "signalsTitle",
		signalsIntro: "signalsIntro",
		processKicker: "processKicker",
		processTitle: "processTitle",
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
	Object.entries(bindings).forEach(([id, key]) => setText(id, t[key]));
};

export function renderPage(data, state) {
	const { profile, skills, projects, experience, beyond, books } = data;
	const lang = state.lang;
	const t = uiText[lang];
	const featuredProjects = [...projects].filter((item) => item.featured).sort((a, b) => (a.order || 99) - (b.order || 99));
	const certifications = Array.isArray(profile.certifications) ? profile.certifications : [];

	document.documentElement.lang = lang;
	bindText(t);
	setText("aboutText", pickText(profile.about, lang));
	setText("locationText", profile.location);

	const traitGrid = document.getElementById("traitGrid");
	if (traitGrid) {
		traitGrid.innerHTML = t.traits
			.map(
				(item, index) => `
				<article class="observer-planet observer-planet-${index + 1}">
					<span>0${index + 1}</span>
					<h3>${item.title}</h3>
					<p>${item.body}</p>
				</article>
			`
			)
			.join("");
	}

	const processConstellation = document.getElementById("processConstellation");
	if (processConstellation) {
		processConstellation.innerHTML = `
			<div class="process-line" aria-hidden="true"></div>
			${t.process
				.map(
					(step, index) => `
					<article class="process-star process-star-${index + 1}">
						<span class="star-dot"></span>
						<p>${step}</p>
					</article>
				`
				)
				.join("")}
		`;
	}

	const projectsGrid = document.getElementById("projectsGrid");
	if (projectsGrid) {
		projectsGrid.innerHTML = featuredProjects
			.map((item, index) => {
				const mission = item.mission || {};
				const detailUrl = item.detailUrl || item.demoUrl || "#";
				return `
				<article class="project-constellation project-constellation-${index + 1}" role="link" tabindex="0" data-detail-url="${detailUrl}">
					<div class="constellation-map" aria-hidden="true">
						<span class="constellation-star s1"></span>
						<span class="constellation-star s2"></span>
						<span class="constellation-star s3"></span>
						<span class="constellation-star s4"></span>
						<span class="constellation-line l1"></span>
						<span class="constellation-line l2"></span>
						<span class="constellation-line l3"></span>
					</div>
					<div class="project-info">
						<p class="mission-code">Constellation ${String(index + 1).padStart(2, "0")}</p>
						<h3>${pickText(item.title, lang)}</h3>
						<p>${pickText(mission.question, lang) || pickText(item.description, lang)}</p>
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
				if (detailUrl && detailUrl !== "#") window.location.href = detailUrl;
			};
			card.addEventListener("click", (event) => {
				if (!event.target.closest("a")) openDetail();
			});
			card.addEventListener("keydown", (event) => {
				if (event.key === "Enter" || event.key === " ") {
					event.preventDefault();
					openDetail();
				}
			});
		});
	}

	const skillsGrid = document.getElementById("skillsGrid");
	if (skillsGrid) {
		skillsGrid.innerHTML = skills
			.map(
				(group, index) => `
				<article class="tool-orbit tool-orbit-${index + 1}">
					<h3>${pickText(group.title, lang)}</h3>
					<div class="tag-row">${createTags(group.items)}</div>
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
				<article class="orbit-planet orbit-planet-${index + 1}">
					<div class="planet-node">${String(index + 1).padStart(2, "0")}</div>
					<div class="planet-copy">
						<p class="timeline-meta">${item.period}</p>
						<h3>${pickText(item.position, lang)}</h3>
						<p class="timeline-company">${item.company}</p>
						<ul>${pickText(item.highlights, lang).map((point) => `<li>${point}</li>`).join("")}</ul>
					</div>
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
					${item.image ? `<div class="cert-media"><img src="${item.image}" alt="${pickText(item.title, lang)} - ${t.certificationPreviewLabel}" loading="lazy" /></div>` : ""}
					<h3>${pickText(item.title, lang)}</h3>
				</a>
			`
			)
			.join("");
	}
	setVisibility("certifications", certifications.length > 0);

	const beyondGrid = document.getElementById("beyondGrid");
	if (beyondGrid && beyond) {
		setText("beyondTitle", pickText(beyond.title, lang));
		setText("beyondSummary", pickText(beyond.summary, lang));
		beyondGrid.innerHTML = (beyond.items || [])
			.map(
				(item, index) => `
				<article class="beyond-card beyond-card-${index + 1}">
					<p class="mission-code">${String(index + 1).padStart(2, "0")} / ${item.id}</p>
					<h3>${pickText(item.title, lang)}</h3>
					<p>${pickText(item.description, lang)}</p>
					<span>${pickText(item.placeholder, lang)}</span>
				</article>
			`
			)
			.join("");
	}

	const readingArchive = document.getElementById("readingArchive");
	if (readingArchive && books) {
		const bookItems = books.items || [];
		const current = books.current || {};
		const renderBookDetail = (book = bookItems[0]) => {
			if (!book) {
				return `
					<div class="book-detail-empty">
						<p class="mission-code">Reading Archive</p>
						<h3>The first field note is coming soon.</h3>
						<p>More signals are being collected.</p>
					</div>
				`;
			}

			return `
				<div class="book-detail-copy">
					<p class="mission-code">${book.status === "placeholder" ? "Placeholder artifact" : "Reading artifact"}</p>
					<h3>${pickText(book.title, lang)}</h3>
					<p class="book-author">${pickText(book.author, lang)}</p>
					<div class="book-detail-grid">
						<section>
							<h4>The Signal</h4>
							<p>${pickText(book.signal, lang)}</p>
						</section>
						<section>
							<h4>What Stayed With Me</h4>
							<p>${pickText(book.reflection, lang)}</p>
						</section>
						<section>
							<h4>Why It Mattered</h4>
							<p>${pickText(book.why, lang)}</p>
						</section>
						<section class="before-after">
							<div>
								<h4>Before</h4>
								<p>${pickText(book.before, lang)}</p>
							</div>
							<div>
								<h4>After</h4>
								<p>${pickText(book.after, lang)}</p>
							</div>
						</section>
					</div>
					<p class="personal-note">${pickText(book.note, lang)}</p>
					<div class="tag-row">${(book.relatedIdeas || []).map((item) => `<span class="tag">${item}</span>`).join("")}</div>
				</div>
			`;
		};

		readingArchive.innerHTML = `
			<div class="reading-head">
				<p class="section-kicker">Reading Archive</p>
				<h3>Ideas as quiet signals.</h3>
				<p>A reflective archive for books and ideas that shape how I work, learn, and make decisions.</p>
			</div>
			<aside class="current-signal">
				<p class="mission-code">${pickText(current.author, lang)}</p>
				<h4>${pickText(current.title, lang)}</h4>
				<p>${pickText(current.observation, lang)}</p>
			</aside>
			<div class="book-artifacts" role="list">
				${bookItems
					.map(
						(book, index) => `
						<button class="book-artifact ${index === 0 ? "is-active" : ""}" type="button" data-book-index="${index}" role="listitem">
							<span>${String(index + 1).padStart(2, "0")}</span>
							<strong>${pickText(book.title, lang)}</strong>
							<small>${pickText(book.author, lang)}</small>
						</button>
					`
					)
					.join("")}
			</div>
			<article class="book-detail" aria-live="polite">
				${renderBookDetail(bookItems[0])}
			</article>
		`;

		const detail = readingArchive.querySelector(".book-detail");
		readingArchive.querySelectorAll(".book-artifact").forEach((button) => {
			button.addEventListener("click", () => {
				const index = Number(button.dataset.bookIndex || 0);
				readingArchive.querySelectorAll(".book-artifact").forEach((item) => item.classList.remove("is-active"));
				button.classList.add("is-active");
				if (detail) {
					detail.innerHTML = renderBookDetail(bookItems[index]);
				}
			});
		});
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
	if (contactBtn) contactBtn.href = `mailto:${profile.email}`;

	const cvBtn = document.getElementById("cvBtn");
	if (cvBtn && profile.cvUrl && profile.cvUrl !== "#") {
		cvBtn.href = profile.cvUrl;
		cvBtn.removeAttribute("aria-disabled");
	}

	const socialList = document.getElementById("socialList");
	if (socialList) {
		socialList.innerHTML = profile.socials
			.map((item) => `<li><a href="${item.url}" target="_blank" rel="noreferrer">${item.label}</a></li>`)
			.join("");
	}

	const themeSwitch = document.getElementById("themeSwitch");
	if (themeSwitch) themeSwitch.checked = state.theme === "dark";

	const languageSwitch = document.getElementById("languageSwitch");
	if (languageSwitch) languageSwitch.checked = lang === "en";
}
