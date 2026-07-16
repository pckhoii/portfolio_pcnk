const sceneIds = ["universe", "signals", "systems", "certifications", "missions", "journey", "transmission"];

const normalizeSceneId = (hash) => {
	const id = (hash || "").replace("#", "");
	return sceneIds.includes(id) ? id : "universe";
};

const setActiveLink = (selector, activeId) => {
	document.querySelectorAll(selector).forEach((link) => {
		const target = normalizeSceneId(link.getAttribute("href"));
		const isActive = target === activeId;
		link.classList.toggle("is-active", isActive);
		if (isActive) {
			link.setAttribute("aria-current", "page");
		} else {
			link.removeAttribute("aria-current");
		}
	});
};

export function initSceneDeck() {
	const scenes = sceneIds
		.map((id) => document.getElementById(id))
		.filter(Boolean);

	if (!scenes.length) {
		return;
	}

	let activeId = normalizeSceneId(window.location.hash);

	const activate = (id, options = {}) => {
		const nextId = normalizeSceneId(id);
		activeId = nextId;

		scenes.forEach((scene) => {
			const isActive = scene.id === activeId;
			scene.classList.toggle("is-active", isActive);
			scene.setAttribute("aria-hidden", isActive ? "false" : "true");
			if (isActive) {
				scene.scrollTop = 0;
				scene.querySelectorAll(".reveal").forEach((item) => item.classList.add("is-visible"));
			}
		});

		setActiveLink(".main-nav a, .scene-rail a", activeId);

		if (!options.skipHash) {
			history.replaceState(null, "", `#${activeId}`);
		}
	};

	document.querySelectorAll('a[href^="#"]').forEach((link) => {
		link.addEventListener("click", (event) => {
			const targetId = normalizeSceneId(link.getAttribute("href"));
			if (!sceneIds.includes(targetId)) {
				return;
			}
			event.preventDefault();
			activate(targetId);
		});
	});

	window.addEventListener("hashchange", () => activate(window.location.hash, { skipHash: true }));

	window.addEventListener("keydown", (event) => {
		if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) {
			return;
		}

		const currentIndex = sceneIds.indexOf(activeId);
		if (event.key === "ArrowDown" || event.key === "PageDown") {
			event.preventDefault();
			activate(sceneIds[Math.min(currentIndex + 1, sceneIds.length - 1)]);
		}
		if (event.key === "ArrowUp" || event.key === "PageUp") {
			event.preventDefault();
			activate(sceneIds[Math.max(currentIndex - 1, 0)]);
		}
	});

	activate(activeId, { skipHash: !window.location.hash });
}
