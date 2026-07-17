const introSteps = ["Receiving transmission...", "Searching for coordinates...", "Signal acquired."];

export function initSignalIntro() {
	const intro = document.getElementById("signalIntro");
	const status = document.getElementById("introStatus");
	const begin = document.getElementById("beginJourneyBtn");
	const skip = document.getElementById("skipIntroBtn");

	if (!intro || !status || !begin || !skip) {
		return;
	}

	const closeIntro = () => {
		intro.classList.add("is-hidden");
		intro.setAttribute("aria-hidden", "true");
		localStorage.setItem("portfolio_intro_seen", "true");
		document.querySelector("#top")?.scrollIntoView({ behavior: "smooth" });
	};

	if (localStorage.getItem("portfolio_intro_seen") === "true") {
		intro.classList.add("is-hidden");
		intro.setAttribute("aria-hidden", "true");
		return;
	}

	introSteps.forEach((step, index) => {
		window.setTimeout(() => {
			status.textContent = step;
			if (index === introSteps.length - 1) {
				intro.classList.add("is-acquired");
			}
		}, 760 * index);
	});

	begin.addEventListener("click", closeIntro);
	skip.addEventListener("click", closeIntro);
}

export function initJourneyMap() {
	const links = [...document.querySelectorAll(".journey-map a")];
	const targets = links
		.map((link) => document.querySelector(link.getAttribute("href")))
		.filter(Boolean);

	if (!links.length || !targets.length) {
		return;
	}

	const setActive = () => {
		const midpoint = window.scrollY + window.innerHeight * 0.45;
		let activeIndex = 0;
		targets.forEach((section, index) => {
			if (section.offsetTop <= midpoint) {
				activeIndex = index;
			}
		});

		links.forEach((link, index) => {
			const isActive = index === activeIndex;
			link.classList.toggle("is-active", isActive);
			if (isActive) {
				link.setAttribute("aria-current", "location");
			} else {
				link.removeAttribute("aria-current");
			}
		});
	};

	setActive();
	window.addEventListener("scroll", setActive, { passive: true });
}
