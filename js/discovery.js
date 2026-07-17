const togglePanel = (trigger) => {
  const panel = document.getElementById(trigger.getAttribute("aria-controls"));
  if (!panel) return;

  if (!trigger.dataset.closedLabel) {
    trigger.dataset.closedLabel = trigger.textContent;
    trigger.dataset.openLabel = trigger.classList.contains("mission-discovery") ? "Close mission record" : "Close field note";
  }
  const expanded = trigger.getAttribute("aria-expanded") === "true";
  trigger.setAttribute("aria-expanded", String(!expanded));
  trigger.textContent = expanded ? trigger.dataset.closedLabel : trigger.dataset.openLabel;
  panel.hidden = expanded;
  trigger.closest("article, .notes-empty")?.classList.toggle("is-expanded", !expanded);
};

document.addEventListener("click", (event) => {
  const trigger = event.target.closest(".discovery-toggle");
  if (trigger) togglePanel(trigger);
});

document.querySelectorAll(".discovery-toggle").forEach((trigger) => {
  trigger.dataset.closedLabel = trigger.textContent;
  trigger.dataset.openLabel = trigger.classList.contains("mission-discovery") ? "Close mission record" : trigger.classList.contains("beyond-discovery") ? "Close field note" : "Close field note";
});

const plot = document.getElementById("signalPlot");
const caption = document.getElementById("plotCaption");
const signalNotes = {
  "node-a": "Source A / an observation is only a starting point.",
  "node-b": "Measured signal / evidence gains context through comparison.",
  "node-c": "Cross-check / keep the question visible while cleaning the field.",
  "node-d": "Pattern / a relationship becomes worth naming.",
  "node-e": "Route / a decision can now be traced back to evidence.",
  "node-f": "Outlier / not every point belongs in the route.",
  "node-g": "Alternative path / inspect before treating it as direction.",
};

if (plot && caption) {
  const originalCaption = caption.textContent;
  plot.querySelectorAll(".node").forEach((node) => {
    node.setAttribute("tabindex", "0");
    node.setAttribute("role", "button");
    node.setAttribute("aria-label", signalNotes[node.classList[1]] || "Signal annotation");
    const reveal = () => { caption.textContent = signalNotes[node.classList[1]] || originalCaption; };
    const restore = () => { if (!node.dataset.locked) caption.textContent = originalCaption; };
    node.addEventListener("mouseenter", reveal);
    node.addEventListener("mouseleave", restore);
    node.addEventListener("focus", reveal);
    node.addEventListener("blur", restore);
    node.addEventListener("click", () => { node.dataset.locked = node.dataset.locked ? "" : "true"; reveal(); });
    node.addEventListener("keydown", (event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); node.click(); } });
  });
}

const northStar = document.querySelector(".route-contact .route-hero > img");
if (northStar) {
  northStar.tabIndex = 0;
  northStar.setAttribute("role", "button");
  northStar.setAttribute("aria-pressed", "false");
  northStar.setAttribute("aria-label", "Align the north star");
  const align = () => {
    const aligned = northStar.closest(".route-hero").classList.toggle("is-discovered");
    northStar.setAttribute("aria-pressed", String(aligned));
  };
  northStar.addEventListener("click", align);
  northStar.addEventListener("keydown", (event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); align(); } });
}
