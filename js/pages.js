const root = "..";
const pick = (value) => typeof value === "string" ? value : value?.en || value?.vi || "";
const artifact = (name) => `${root}/src/assets/artifacts/${name}`;

function setActiveNav() {
	const path = location.pathname.replace(/\/$/, "") || "/";
	document.querySelectorAll(".route-header nav a").forEach((link) => link.classList.toggle("is-active", link.getAttribute("href") === path));
}

async function data(name) { const response = await fetch(`${root}/data/${name}.json`); return response.json(); }

async function journeyPage() {
	const [profile, skills, experience] = await Promise.all([data("profile"), data("skills"), data("experience")]);
	document.querySelector("#journeyAbout").textContent = pick(profile.about);
	document.querySelector("#systemDeck").innerHTML = skills.map((group) => `<article><h3>${pick(group.title)}</h3><p>${group.items.join(" · ")}</p></article>`).join("");
	document.querySelector("#journeyTimeline").innerHTML = experience.map((item) => `<article><p>${item.period}</p><h3>${pick(item.position)}</h3><strong>${item.company}</strong><ul>${(pick(item.highlights) || []).map((point) => `<li>${point}</li>`).join("")}</ul></article>`).join("");
}

async function missionsPage() {
	const projects = await data("projects");
	const featured = projects.filter((project) => project.featured).sort((a,b) => (a.order || 99) - (b.order || 99));
	document.querySelector("#missionList").innerHTML = featured.map((project, index) => { const mission = project.mission || {}; return `<article class="mission-page-log"><img src="${artifact(index ? "mission-log.svg" : "mission-map.svg")}" alt="" /><div><p class="eyebrow">Mission ${String(index + 1).padStart(2, "0")}</p><h2>${pick(project.title)}</h2><p>${pick(mission.question) || pick(project.description)}</p><dl><div><dt>Signal</dt><dd>${pick(mission.signal)}</dd></div><div><dt>System</dt><dd>${pick(mission.system)}</dd></div><div><dt>Outcome</dt><dd>${pick(mission.outcome)}</dd></div></dl><p class="route-links"><a href="${root}/${project.detailUrl}">Case study</a><a href="${project.demoUrl}" target="_blank" rel="noreferrer">Dashboard</a><a href="${project.repoUrl}" target="_blank" rel="noreferrer">GitHub</a></p></div></article>`; }).join("");
}

async function archivePage() {
	const [profile, experience] = await Promise.all([data("profile"), data("experience")]);
	document.querySelector("#archiveEntries").innerHTML = experience.map((item) => `<article><p>${item.period}</p><h3>${pick(item.position)}</h3><strong>${item.company}</strong><ul>${(pick(item.highlights) || []).map((point) => `<li>${point}</li>`).join("")}</ul></article>`).join("");
	document.querySelector("#credentialList").innerHTML = (profile.certifications || []).map((item) => `<a href="${item.url}" target="_blank" rel="noreferrer"><img src="${root}/${item.image.replace(/^\.\//, "")}" alt="${pick(item.title)}" /><span>${pick(item.title)}</span></a>`).join("");
}

async function beyondPage() {
	const beyond = await data("beyond");
	const artifactMap = { "field-notes": "notebook.svg", boxing: "flight-recorder.svg", reading: "open-book.svg", design: "constellation-map.svg", "photography-travel": "contact-sheet.svg", "learning-log": "observatory.svg" };
	document.querySelector("#beyondWorld").innerHTML = beyond.items.map((item) => `<article><img src="${artifact(artifactMap[item.id])}" alt="" /><p class="eyebrow">${item.id}</p><h3>${pick(item.title)}</h3><p>${pick(item.description)}</p><small>${pick(item.placeholder)}</small></article>`).join("");
}

async function readingPage() {
	const books = await data("books"); let active = books.items[0]; let filter = "all";
	const render = () => { const shown = books.items.filter((book) => filter === "all" || book.status === filter); if (!shown.includes(active)) active = shown[0]; const section = (name, value) => `<section><h4>${name}</h4><p>${pick(value) || "Transmission in progress."}</p></section>`; document.querySelector("#readingInterface").innerHTML = `<div class="archive-controls">${["all","reading","read","next"].map((status) => `<button data-status="${status}" class="${status === filter ? "is-active" : ""}">${status}</button>`).join("")}</div><div class="archive-map">${shown.map((book,index) => `<button data-book="${book.id}" class="${book === active ? "is-active" : ""}"><img src="${artifact("open-book.svg")}" alt="" /><span>${String(index + 1).padStart(2,"0")} / ${book.status}</span><strong>${pick(book.title)}</strong></button>`).join("")}</div>${active ? `<article class="archive-detail"><p class="eyebrow">${active.status} / ${pick(active.author)}</p><h2>${pick(active.title)}</h2><div>${section("The Signal",active.signal)}${section("What Stayed With Me",active.reflection)}${section("Why It Mattered",active.why)}${section("Before",active.before)}${section("After",active.after)}${section("Personal Reflection",active.note)}</div></article>` : ""}`; document.querySelectorAll("[data-status]").forEach((button) => button.onclick = () => { filter = button.dataset.status; render(); }); document.querySelectorAll("[data-book]").forEach((button) => button.onclick = () => { active = books.items.find((book) => book.id === button.dataset.book); render(); }); };
	render();
}

async function contactPage() { const profile = await data("profile"); document.querySelector("#contactDetails").innerHTML = `<p><span>Base</span>${profile.location}</p><p><span>Email</span><a href="mailto:${profile.email}">${profile.email}</a></p><p><span>Phone</span><a href="tel:${profile.phone}">${profile.phone}</a></p><p><span>Channels</span>${profile.socials.map((item) => `<a href="${item.url}" target="_blank" rel="noreferrer">${item.label}</a>`).join(" · ")}</p>`; }

setActiveNav();
const page = document.body.dataset.page;
({ journey: journeyPage, missions: missionsPage, archive: archivePage, beyond: beyondPage, reading: readingPage, contact: contactPage }[page] || (() => {}))().catch((error) => console.error("Unable to load page data", error));
