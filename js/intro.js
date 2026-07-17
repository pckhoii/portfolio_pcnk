const introSteps = ["Receiving transmission...", "Searching for coordinates...", "Signal acquired."];

export function initSignalIntro() {
	const intro = document.getElementById("signalIntro");
	const status = document.getElementById("introStatus");
	const begin = document.getElementById("beginJourneyBtn");
	const skip = document.getElementById("skipIntroBtn");
	const missions = document.getElementById("introMissionsBtn");
	if (!intro || !status || !begin || !skip) return;

	const close = (target = "#journeyChapter") => {
		intro.classList.add("is-hidden");
		intro.setAttribute("aria-hidden", "true");
		localStorage.setItem("portfolio_intro_seen", "true");
		if (target !== "#journeyChapter") document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
	};

	if (localStorage.getItem("portfolio_intro_seen") === "true") {
		intro.classList.add("is-hidden");
		intro.setAttribute("aria-hidden", "true");
	} else {
		introSteps.forEach((step, index) => window.setTimeout(() => { status.textContent = step; }, index * 700));
	}
	begin.addEventListener("click", () => close());
	skip.addEventListener("click", () => close());
	missions?.addEventListener("click", () => close("#missionScene"));
}

const scenes = [
	{ id: "top", key: "signal", index: "01 / 07", name: "Signal acquired" },
	{ id: "explorerScene", key: "explorer", index: "02 / 07", name: "The explorer" },
	{ id: "constellationScene", key: "constellation", index: "03 / 07", name: "Finding the constellation" },
	{ id: "observatoryScene", key: "observatory", index: "04 / 07", name: "The observatory" },
	{ id: "missionScene", key: "missions", index: "05 / 07", name: "Mission control" },
	{ id: "archiveScene", key: "archive", index: "06 / 07", name: "Flight archive" },
	{ id: "turningPointScene", key: "turning-point", index: "07 / 07", name: "The edge of the map" }
];

export function initJourneyStory() {
	const stage = document.getElementById("journeyStage");
	const indexNode = document.getElementById("stageIndex");
	const nameNode = document.getElementById("stageName");
	const contextLabel = document.getElementById("contextLabel");
	const contextSteps = document.getElementById("contextSteps");
	const navLinks = [...document.querySelectorAll(".main-nav a")];
	if (!stage) return;
	if (contextSteps) contextSteps.innerHTML = scenes.map((scene) => `<b data-context="${scene.key}">${scene.index} ${scene.name}</b>`).join("");

	let activeKey = "";
	const setScene = (scene) => {
		if (scene.key === activeKey) return;
		activeKey = scene.key;
		stage.dataset.scene = scene.key;
		if (indexNode) indexNode.textContent = scene.index;
		if (nameNode) nameNode.textContent = scene.name;
		if (contextLabel) contextLabel.textContent = scene.name;
		document.querySelectorAll(".story-scene").forEach((node) => node.classList.toggle("is-active", node.dataset.scene === scene.key));
		document.querySelectorAll("[data-context]").forEach((node) => node.classList.toggle("is-active", node.dataset.context === scene.key));
		navLinks.forEach((link) => link.classList.toggle("is-active", link.getAttribute("href") === "#missionScene" && scene.key === "missions"));
	};

	const update = () => {
		const marker = window.scrollY + window.innerHeight * .5;
		let selected = scenes[0];
		scenes.forEach((scene) => { const node = document.getElementById(scene.id); if (node && node.offsetTop <= marker) selected = scene; });
		setScene(selected);
	};
	update();
	window.addEventListener("scroll", update, { passive: true });

	document.querySelectorAll(".main-nav a").forEach((link) => link.addEventListener("click", () => {
		navLinks.forEach((item) => item.classList.remove("is-active"));
		link.classList.add("is-active");
	}));

	document.getElementById("enterBeyondBtn")?.addEventListener("click", () => {
		const pass = document.getElementById("chapterPass");
		pass?.classList.add("is-active");
		window.setTimeout(() => document.getElementById("beyondChapter")?.scrollIntoView({ behavior: "instant", block: "start" }), 440);
		window.setTimeout(() => pass?.classList.remove("is-active"), 1050);
	});
}
