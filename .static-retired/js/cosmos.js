const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const cssColor = (name, fallback) => {
	const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
	return value || fallback;
};

function setupCursorGlow() {
	let frame = null;
	let nextX = window.innerWidth / 2;
	let nextY = window.innerHeight / 2;

	const write = () => {
		document.documentElement.style.setProperty("--cursor-x", `${nextX}px`);
		document.documentElement.style.setProperty("--cursor-y", `${nextY}px`);
		frame = null;
	};

	window.addEventListener(
		"pointermove",
		(event) => {
			nextX = event.clientX;
			nextY = event.clientY;
			if (!frame) {
				frame = requestAnimationFrame(write);
			}
		},
		{ passive: true }
	);
}

function createStar(width, height) {
	const depth = Math.random();
	return {
		x: Math.random() * width,
		y: Math.random() * height,
		r: 0.5 + depth * 1.4,
		a: 0.2 + depth * 0.65,
		vx: (Math.random() - 0.5) * (0.06 + depth * 0.08),
		vy: (0.02 + depth * 0.08),
		depth
	};
}

function createSignal(width, height, index) {
	return {
		angle: Math.random() * Math.PI * 2,
		speed: 0.002 + Math.random() * 0.002 + index * 0.00025,
		rx: width * (0.24 + Math.random() * 0.28),
		ry: height * (0.12 + Math.random() * 0.14),
		offsetX: width * (0.42 + Math.random() * 0.16),
		offsetY: height * (0.28 + Math.random() * 0.22),
		colorIndex: index % 3
	};
}

export function initCosmos() {
	setupCursorGlow();

	const canvas = document.getElementById("cosmosCanvas");
	if (!canvas) {
		return;
	}

	const ctx = canvas.getContext("2d");
	if (!ctx) {
		return;
	}

	let width = 0;
	let height = 0;
	let dpr = 1;
	let stars = [];
	let signals = [];
	let animationId = null;
	const reduced = prefersReducedMotion();

	const resize = () => {
		dpr = Math.min(window.devicePixelRatio || 1, 2);
		width = window.innerWidth;
		height = window.innerHeight;
		canvas.width = Math.floor(width * dpr);
		canvas.height = Math.floor(height * dpr);
		canvas.style.width = `${width}px`;
		canvas.style.height = `${height}px`;
		ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

		const starCount = width < 700 ? 82 : 150;
		stars = Array.from({ length: starCount }, () => createStar(width, height));
		signals = Array.from({ length: width < 700 ? 3 : 5 }, (_, index) => createSignal(width, height, index));
	};

	const drawConstellationLines = (accent) => {
		for (let i = 0; i < stars.length; i += 1) {
			for (let j = i + 1; j < stars.length; j += 1) {
				const a = stars[i];
				const b = stars[j];
				if (a.depth < 0.72 || b.depth < 0.72) {
					continue;
				}

				const dx = a.x - b.x;
				const dy = a.y - b.y;
				const distance = Math.hypot(dx, dy);
				if (distance < 92) {
					ctx.globalAlpha = (1 - distance / 92) * 0.18;
					ctx.strokeStyle = accent;
					ctx.lineWidth = 1;
					ctx.beginPath();
					ctx.moveTo(a.x, a.y);
					ctx.lineTo(b.x, b.y);
					ctx.stroke();
				}
			}
		}
	};

	const draw = () => {
		const accent = cssColor("--accent", "#7ddcff");
		const gold = cssColor("--accent-2", "#f2d77b");
		const warm = cssColor("--accent-3", "#f0a15f");
		const colors = [accent, gold, warm];

		ctx.clearRect(0, 0, width, height);
		ctx.globalCompositeOperation = "source-over";

		const gradient = ctx.createRadialGradient(width * 0.5, height * 0.2, 0, width * 0.5, height * 0.2, Math.max(width, height));
		gradient.addColorStop(0, "rgba(125, 220, 255, 0.08)");
		gradient.addColorStop(0.35, "rgba(125, 220, 255, 0.015)");
		gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
		ctx.fillStyle = gradient;
		ctx.fillRect(0, 0, width, height);

		stars.forEach((star) => {
			ctx.globalAlpha = star.a;
			ctx.fillStyle = star.depth > 0.82 ? accent : "#ffffff";
			ctx.beginPath();
			ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
			ctx.fill();

			if (!reduced) {
				star.x += star.vx;
				star.y += star.vy;
				if (star.y > height + 8) {
					star.y = -8;
					star.x = Math.random() * width;
				}
				if (star.x < -8) star.x = width + 8;
				if (star.x > width + 8) star.x = -8;
			}
		});

		ctx.globalCompositeOperation = "lighter";
		drawConstellationLines(accent);

		signals.forEach((signal) => {
			const x = signal.offsetX + Math.cos(signal.angle) * signal.rx;
			const y = signal.offsetY + Math.sin(signal.angle) * signal.ry;
			const color = colors[signal.colorIndex];

			ctx.globalAlpha = 0.85;
			ctx.strokeStyle = color;
			ctx.lineWidth = 1;
			ctx.beginPath();
			ctx.ellipse(signal.offsetX, signal.offsetY, signal.rx, signal.ry, -0.22, 0, Math.PI * 2);
			ctx.stroke();

			const tailX = signal.offsetX + Math.cos(signal.angle - 0.08) * signal.rx;
			const tailY = signal.offsetY + Math.sin(signal.angle - 0.08) * signal.ry;
			const trail = ctx.createLinearGradient(tailX, tailY, x, y);
			trail.addColorStop(0, "rgba(255, 255, 255, 0)");
			trail.addColorStop(1, color);
			ctx.strokeStyle = trail;
			ctx.lineWidth = 2;
			ctx.beginPath();
			ctx.moveTo(tailX, tailY);
			ctx.lineTo(x, y);
			ctx.stroke();

			ctx.globalAlpha = 1;
			ctx.fillStyle = color;
			ctx.beginPath();
			ctx.arc(x, y, 3.2, 0, Math.PI * 2);
			ctx.fill();

			if (!reduced) {
				signal.angle += signal.speed;
			}
		});

		ctx.globalAlpha = 1;
		ctx.globalCompositeOperation = "source-over";

		if (!reduced) {
			animationId = requestAnimationFrame(draw);
		}
	};

	resize();
	draw();

	window.addEventListener("resize", resize, { passive: true });

	if (reduced && animationId) {
		cancelAnimationFrame(animationId);
	}
}
