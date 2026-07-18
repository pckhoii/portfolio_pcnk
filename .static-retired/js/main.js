import { renderPage } from "./renderer.js";
import { initJourneyStory, initSignalIntro } from "./intro.js";

const state = {
	lang: localStorage.getItem("portfolio_lang") || "vi",
	theme: localStorage.getItem("portfolio_theme") || "dark"
};

let cachedData = null;

async function loadData() {
	const [profile, skills, projects, experience, beyond, books] = await Promise.all([
		fetch("./data/profile.json").then((res) => res.json()),
		fetch("./data/skills.json").then((res) => res.json()),
		fetch("./data/projects.json").then((res) => res.json()),
		fetch("./data/experience.json").then((res) => res.json()),
		fetch("./data/beyond.json").then((res) => res.json()),
		fetch("./data/books.json").then((res) => res.json())
	]);

	return { profile, skills, projects, experience, beyond, books };
}

function applyTheme() {
	document.documentElement.setAttribute("data-theme", state.theme);
}

function rerender() {
	if (!cachedData) {
		return;
	}

	renderPage(cachedData, state);
}

function bindToolbar() {
	const languageSwitch = document.getElementById("languageSwitch");
	const themeSwitch = document.getElementById("themeSwitch");

	if (languageSwitch) {
		languageSwitch.addEventListener("change", (event) => {
			state.lang = event.target.checked ? "en" : "vi";
			localStorage.setItem("portfolio_lang", state.lang);
			rerender();
		});
	}

	if (themeSwitch) {
		themeSwitch.addEventListener("change", (event) => {
			state.theme = event.target.checked ? "dark" : "light";
			localStorage.setItem("portfolio_theme", state.theme);
			applyTheme();
			rerender();
		});
	}
}

async function startApp() {
	try {
		applyTheme();
		bindToolbar();
		initSignalIntro();

		cachedData = await loadData();
		rerender();
		initJourneyStory();
	} catch (error) {
		console.error("Failed to start portfolio app:", error);
	}
}

startApp();
