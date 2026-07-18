export function initRevealAnimations() {
	const items = document.querySelectorAll(".reveal");

	if (!items.length) {
		return;
	}

	if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
		items.forEach((item) => item.classList.add("is-visible"));
		return;
	}

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("is-visible");
					observer.unobserve(entry.target);
				}
			});
		},
		{
			threshold: 0.15
		}
	);

	items.forEach((item) => {
		const delay = item.getAttribute("data-reveal-delay");
		if (delay) {
			item.style.setProperty("--reveal-delay", `${delay}ms`);
		}

		observer.observe(item);
	});
}
