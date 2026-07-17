const uiText = {
	vi: {
		brand: "Khoi Pham", navJourneyMain: "The Journey", navBeyondMain: "Beyond the Data", navMissions: "Missions", navTransmission: "Contact",
		heroSummary: "I collect scattered signals, shape them into systems, and turn numbers into stories people can actually use.", heroPrimaryBtn: "Enter the observatory",
		signalsKicker: "The Explorer", signalsTitle: "I look for patterns hidden inside complexity.", signalsIntro: "A useful answer starts with noticing the question behind the numbers.",
		processKicker: "Finding the Constellation", processTitle: "A question becomes a map.", systemsKicker: "The Observatory", systemsTitle: "The instruments I use to navigate data.",
		missionsKicker: "Mission Control", missionsTitle: "Projects are maps made from scattered stars.", missionsIntro: "Choose a destination. Each mission turns an uncertain business question into a system people can use.",
		journeyKicker: "Flight Archive", journeyTitle: "The path that shaped the way I see data.", transmissionKicker: "Transmission", transmissionTitle: "Have a signal worth exploring?",
		contactText: "Send me a message. I am open to data projects, dashboard work, reporting systems, and thoughtful collaborations.", footer: "A Small Universe of Data.",
		locationLabel: "Base", emailLabel: "Email", phoneLabel: "Phone", socialLabel: "Channels", languageSwitchLabel: "VI / EN", themeSwitchLabel: "Light / Dark",
		viewCase: "View case study", viewDashboard: "Dashboard", viewCode: "GitHub", all: "All", read: "Read", reading: "Reading", next: "Next",
		process: ["Question", "Collect", "Clean", "Analyze", "Visualize", "Decide"],
		traits: [
			{ title: "Curious Observer", body: "I start by asking what changed, why it matters, and who needs the answer." },
			{ title: "System Thinker", body: "I care about the structure behind the insight, because trustworthy systems create trustworthy decisions." },
			{ title: "Quiet Builder", body: "I prefer calm, useful tools that keep working after the first presentation ends." }
		]
	},
	en: {}
};
uiText.en = uiText.vi;

const pickText = (value, lang) => {
	if (typeof value === "string") return value;
	if (Array.isArray(value)) return value;
	if (!value) return "";
	const preferred = value[lang] || value.en || value.vi || "";
	return typeof preferred === "string" && /Ã|Ä|á»/.test(preferred) ? value.en || preferred : preferred;
};

const setText = (id, value) => { const node = document.getElementById(id); if (node) node.textContent = value || ""; };
const tags = (items = []) => `<div class="tag-row">${items.map((item) => `<span class="tag">${item}</span>`).join("")}</div>`;

function bindText(t) {
	const bindings = { brandText: "brand", navJourneyMain: "navJourneyMain", navBeyondMain: "navBeyondMain", navMissions: "navMissions", navTransmission: "navTransmission", heroSummary: "heroSummary", heroPrimaryBtn: "heroPrimaryBtn", signalsKicker: "signalsKicker", signalsTitle: "signalsTitle", signalsIntro: "signalsIntro", processKicker: "processKicker", processTitle: "processTitle", systemsKicker: "systemsKicker", systemsTitle: "systemsTitle", missionsKicker: "missionsKicker", missionsTitle: "missionsTitle", missionsIntro: "missionsIntro", journeyKicker: "journeyKicker", journeyTitle: "journeyTitle", transmissionKicker: "transmissionKicker", transmissionTitle: "transmissionTitle", contactText: "contactText", footerText: "footer", locationLabel: "locationLabel", emailLabel: "emailLabel", phoneLabel: "phoneLabel", socialLabel: "socialLabel", languageSwitchLabel: "languageSwitchLabel", themeSwitchLabel: "themeSwitchLabel" };
	Object.entries(bindings).forEach(([id, key]) => setText(id, t[key]));
}

function renderMissionNavigator(container, projects, lang, t) {
	let activeIndex = 0;
	const detail = (project, index) => {
		const mission = project.mission || {};
		return `<p class="mission-code">Mission ${String(index + 1).padStart(2, "0")} / ${project.id}</p><h3>${pickText(project.title, lang)}</h3><p>${pickText(mission.question, lang) || pickText(project.description, lang)}</p><div class="mission-facts"><div><span>Signal</span><p>${pickText(mission.signal, lang) || "Transmission in progress."}</p></div><div><span>System</span><p>${pickText(mission.system, lang) || "System map is being assembled."}</p></div><div><span>Outcome</span><p>${pickText(mission.outcome, lang) || "New coordinates will be available soon."}</p></div></div>${tags(project.tags)}<div class="mission-links"><a href="${project.detailUrl || project.demoUrl || "#"}">${t.viewCase}</a>${project.demoUrl ? `<a href="${project.demoUrl}" target="_blank" rel="noreferrer">${t.viewDashboard}</a>` : ""}${project.repoUrl ? `<a href="${project.repoUrl}" target="_blank" rel="noreferrer">${t.viewCode}</a>` : ""}</div>`;
	};
	const render = () => {
		if (!projects.length) { container.innerHTML = "<p>Mission coordinates are being assembled.</p>"; return; }
		container.innerHTML = `<div class="mission-dock">${projects.map((project, index) => `<button class="mission-select ${index === activeIndex ? "is-active" : ""}" type="button" data-mission="${index}">0${index + 1} ${pickText(project.title, lang)}</button>`).join("")}</div><article class="mission-detail">${detail(projects[activeIndex], activeIndex)}</article>`;
		container.querySelectorAll("[data-mission]").forEach((button) => button.addEventListener("click", () => { activeIndex = Number(button.dataset.mission); render(); }));
	};
	render();
}

function renderBeyondHub(container, beyond, lang) {
	const items = beyond?.items || [];
	const artifactForDestination = {
		"field-notes": "notebook.svg",
		boxing: "flight-recorder.svg",
		reading: "open-book.svg",
		design: "constellation-map.svg",
		"photography-travel": "contact-sheet.svg",
		"learning-log": "observatory.svg"
	};
	let activeIndex = Math.max(0, items.findIndex((item) => item.id === "reading"));
	const destination = document.getElementById("personalDestination");
	const render = () => {
		container.innerHTML = items.map((item, index) => `<button class="destination-button ${index === activeIndex ? "is-active" : ""}" type="button" role="tab" aria-selected="${index === activeIndex}" data-destination="${index}"><img src="src/assets/artifacts/${artifactForDestination[item.id] || "navigation-compass.svg"}" alt="" aria-hidden="true" /><span>${pickText(item.title, lang)}<small>${String(index + 1).padStart(2, "0")} / archive</small></span></button>`).join("");
		const item = items[activeIndex];
		if (destination && item) {
			destination.innerHTML = `<p class="destination-id">${item.id}</p><h3>${pickText(item.title, lang)}</h3><p>${pickText(item.description, lang)}</p><p class="destination-status">${pickText(item.placeholder, lang)}</p>`;
			destination.classList.add("is-visible");
		}
		container.querySelectorAll("[data-destination]").forEach((button) => button.addEventListener("click", () => { activeIndex = Number(button.dataset.destination); render(); if (items[activeIndex]?.id === "reading") document.getElementById("readingArchive")?.scrollIntoView({ behavior: "smooth", block: "center" }); }));
	};
	render();
}

function renderReadingArchive(container, books, lang, t) {
	const bookItems = books?.items || [];
	let filter = "all";
	let activeId = bookItems[0]?.id;
	const statusText = { read: t.read, reading: t.reading, next: t.next, placeholder: "Archive" };
	const render = () => {
		const shown = bookItems.filter((book) => filter === "all" || book.status === filter);
		if (!shown.some((book) => book.id === activeId)) activeId = shown[0]?.id;
		const active = shown.find((book) => book.id === activeId) || bookItems[0];
		const field = (label, value) => `<section><h4>${label}</h4><p>${value || "Transmission in progress."}</p></section>`;
		container.innerHTML = `<div class="reading-layout"><div class="reading-copy"><p class="eyebrow">Reading Archive</p><h3>Ideas, kept close.</h3><p>An index of unfinished and remembered ideas. Placeholder entries stay explicitly unfinished until real notes are added.</p><div class="book-filters">${["all", "reading", "read", "next"].map((key) => `<button type="button" class="book-filter ${filter === key ? "is-active" : ""}" data-filter="${key}">${key === "all" ? t.all : statusText[key]}</button>`).join("")}</div></div><div><div class="book-catalog">${shown.map((book, index) => `<button type="button" class="book-artifact ${book.id === activeId ? "is-active" : ""}" data-book="${book.id}"><img src="src/assets/artifacts/open-book.svg" alt="" aria-hidden="true" /><span>${String(index + 1).padStart(2, "0")} / ${statusText[book.status] || "Archive"}</span><strong>${pickText(book.title, lang)}</strong></button>`).join("") || "<p>More signals are being collected.</p>"}</div>${active ? `<article class="book-detail"><p class="book-meta">${statusText[active.status] || "Archive"} / ${pickText(active.author, lang)}</p><h3>${pickText(active.title, lang)}</h3><p class="book-author">${pickText(active.author, lang)}</p><div class="book-fields">${field("The Signal", pickText(active.signal, lang))}${field("What Stayed With Me", pickText(active.reflection, lang))}${field("Why It Mattered", pickText(active.why, lang))}${field("Before", pickText(active.before, lang))}${field("After", pickText(active.after, lang))}${field("Personal Note", pickText(active.note, lang))}</div></article>` : ""}</div></div>`;
		container.querySelectorAll("[data-filter]").forEach((button) => button.addEventListener("click", () => { filter = button.dataset.filter; render(); }));
		container.querySelectorAll("[data-book]").forEach((button) => button.addEventListener("click", () => { activeId = button.dataset.book; render(); }));
	};
	render();
}

export function renderPage(data, state) {
	const { profile, skills = [], projects = [], experience = [], beyond, books } = data;
	const lang = state.lang;
	const t = uiText[lang] || uiText.en;
	document.documentElement.lang = lang;
	bindText(t);
	setText("heroRole", "Turning Data Into Direction");
	setText("aboutText", pickText(profile.about, lang));
	setText("locationText", profile.location);

	const traitGrid = document.getElementById("traitGrid");
	if (traitGrid) traitGrid.innerHTML = t.traits.map((item, index) => `<article class="trait-item"><span>0${index + 1}</span><div><h3>${item.title}</h3><p>${item.body}</p></div></article>`).join("");
	const process = document.getElementById("processConstellation");
	if (process) process.innerHTML = t.process.map((step, index) => `<span class="process-step"><b>0${index + 1}</b>${step}</span>`).join("");
	const systems = document.getElementById("skillsGrid");
	if (systems) systems.innerHTML = skills.map((group) => `<article class="system-module"><h3>${pickText(group.title, lang)}</h3>${tags(group.items)}</article>`).join("");

	renderMissionNavigator(document.getElementById("missionNavigator"), projects.filter((item) => item.featured).sort((a,b) => (a.order || 99) - (b.order || 99)), lang, t);
	const archive = document.getElementById("experienceList");
	if (archive) archive.innerHTML = experience.map((item) => `<article class="flight-entry"><p class="flight-meta">${item.period}</p><h3>${pickText(item.position, lang)}</h3><p class="company">${item.company}</p><ul>${(pickText(item.highlights, lang) || []).map((point) => `<li>${point}</li>`).join("")}</ul></article>`).join("");
	const certs = document.getElementById("certificationsGrid");
	if (certs) certs.innerHTML = (profile.certifications || []).map((item) => `<a class="credential" href="${item.url}" target="_blank" rel="noreferrer" title="${pickText(item.title, lang)}">${item.image ? `<img src="${item.image}" alt="${pickText(item.title, lang)}" loading="lazy" />` : ""}</a>`).join("");

	setText("beyondTitle", pickText(beyond?.title, lang));
	setText("beyondSummary", pickText(beyond?.summary, lang));
	renderBeyondHub(document.getElementById("beyondDestinations"), beyond, lang);
	renderReadingArchive(document.getElementById("readingArchive"), books, lang, t);

	const email = document.getElementById("emailLink"); if (email) { email.href = `mailto:${profile.email}`; email.textContent = profile.email; }
	const phone = document.getElementById("phoneLink"); if (phone) { phone.href = `tel:${profile.phone || ""}`; phone.textContent = profile.phone || ""; }
	const contact = document.getElementById("contactBtn"); if (contact) contact.href = `mailto:${profile.email}`;
	const cv = document.getElementById("cvBtn"); if (cv && profile.cvUrl && profile.cvUrl !== "#") { cv.href = profile.cvUrl; cv.removeAttribute("aria-disabled"); }
	const social = document.getElementById("socialList"); if (social) social.innerHTML = (profile.socials || []).map((item) => `<li><a href="${item.url}" target="_blank" rel="noreferrer">${item.label}</a></li>`).join("");
	const languageSwitch = document.getElementById("languageSwitch"); if (languageSwitch) languageSwitch.checked = lang === "en";
	const themeSwitch = document.getElementById("themeSwitch"); if (themeSwitch) themeSwitch.checked = state.theme === "dark";
}
