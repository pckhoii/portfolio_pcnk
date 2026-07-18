const plot = document.getElementById("signalPlot");
const controls = [...document.querySelectorAll(".process-controls [data-step]")];

const captions = {
	question: "Question / scattered points, no assumed route.",
	collect: "Collect / observations enter the same coordinate field.",
	clean: "Clean / noise recedes and the field becomes comparable.",
	analyze: "Analyze / measurement rings reveal a connected pattern.",
	visualize: "Visualize / the pattern becomes a readable map.",
	decide: "Decide / one route is highlighted and locked to direction."
};

function setStep(step) {
	if (!plot || !captions[step]) return;
	plot.dataset.step = step;
	document.getElementById("plotCaption").textContent = captions[step];
	controls.forEach((button) => button.setAttribute("aria-selected", String(button.dataset.step === step)));
}

controls.forEach((button, index) => {
	button.addEventListener("click", () => setStep(button.dataset.step));
	button.addEventListener("keydown", (event) => {
		if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
		event.preventDefault();
		let next = index;
		if (event.key === 'ArrowRight') next = (index + 1) % controls.length;
		if (event.key === 'ArrowLeft') next = (index - 1 + controls.length) % controls.length;
		if (event.key === 'Home') next = 0;
		if (event.key === 'End') next = controls.length - 1;
		controls[next].focus();
		setStep(controls[next].dataset.step);
	});
});
