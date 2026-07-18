const page = document.body.dataset.page;
const signatureTargets = {
  home: ".world-index",
  journey: ".signal-process",
  missions: ".mission-list",
  archive: ".route-archive .route-split",
  beyond: ".beyond-world",
  reading: ".reading-interface",
  notes: ".notes-empty",
  contact: ".route-contact .route-hero",
};

document.documentElement.classList.add("scene-js");
document.body.dataset.scene = page || "unknown";

requestAnimationFrame(() => {
  requestAnimationFrame(() => document.body.classList.add("scene-arrived"));
});

const activateSignature = (target) => {
  if (!target || target.classList.contains("is-active")) return;
  const observer = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return;
    target.classList.add("is-active");
    observer.disconnect();
  }, { threshold: 0.32 });
  observer.observe(target);
};

activateSignature(document.querySelector(signatureTargets[page]));

const exit = document.querySelector(".site-footer");
if (exit) {
  const exitObserver = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) exit.classList.add("is-active");
  }, { threshold: 0.2 });
  exitObserver.observe(exit);
}

document.addEventListener("click", (event) => {
  const link = event.target.closest('a[href^="/"]');
  if (link) sessionStorage.setItem("portfolio_scene_origin", page || "home");
});
