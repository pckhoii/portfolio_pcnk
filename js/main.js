import { renderPage } from "./renderer.js";
import { initRevealAnimations } from "./animations.js";
import { initCosmos } from "./cosmos.js";
import { initSceneDeck } from "./scenes.js";

const state = {
	lang: localStorage.getItem("portfolio_lang") || "vi",
	theme: localStorage.getItem("portfolio_theme") || "dark"
};

let cachedData = null;

async function loadData() {
	const [profile, skills, projects, experience] = await Promise.all([
		fetch("./data/profile.json").then((res) => res.json()),
		fetch("./data/skills.json").then((res) => res.json()),
		fetch("./data/projects.json").then((res) => res.json()),
		fetch("./data/experience.json").then((res) => res.json())
	]);

	return { profile, skills, projects, experience };
}

function applyTheme() {
	document.documentElement.setAttribute("data-theme", state.theme);
}

function rerender() {
	if (!cachedData) {
		return;
	}

	renderPage(cachedData, state);
	initRevealAnimations();
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
		initCosmos();

		cachedData = await loadData();
		rerender();
		initSceneDeck();
	} catch (error) {
		console.error("Failed to start portfolio app:", error);
	}
}

startApp();
