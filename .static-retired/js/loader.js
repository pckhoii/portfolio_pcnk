const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const seenKey = "portfolio_observatory_loader_seen";
const hasSeenLoader = sessionStorage.getItem(seenKey) === "true";

const label = document.body.dataset.page === "home" ? "Entrance" : ({ journey: "Observatory", missions: "Mission Control", archive: "Archive", beyond: "Study Room", reading: "Library", notes: "Journal", contact: "North Star" }[document.body.dataset.page] || "Observatory");
const removeLoader = (element) => {
  element.classList.add("is-leaving");
  window.setTimeout(() => element.remove(), 420);
};

if (!hasSeenLoader && !reducedMotion) {
  document.documentElement.classList.add("has-loader");
  const loader = document.createElement("aside");
  loader.className = "site-loader";
  loader.setAttribute("aria-live", "polite");
  loader.innerHTML = `<div class="loader-sequence"><svg viewBox="0 0 260 260" aria-hidden="true"><circle class="loader-ring" cx="130" cy="130" r="87"/><path class="loader-scan" d="M43 130h174"/><g class="loader-points"><circle cx="82" cy="155" r="6"/><circle cx="111" cy="98" r="6"/><circle cx="153" cy="124" r="6"/><circle cx="184" cy="76" r="7"/></g><path class="loader-route" d="M82 155 111 98 153 124 184 76"/><path class="loader-compass" d="m130 52 18 70-18-10-18 10 18-70Zm0 156-18-70 18 10 18-10-18 70Z"/></svg><p class="loader-copy">Receiving signal</p><button type="button" class="loader-skip">Skip</button></div>`;
  document.body.append(loader);
  const copy = loader.querySelector(".loader-copy");
  const finish = () => { sessionStorage.setItem(seenKey, "true"); removeLoader(loader); };
  window.setTimeout(() => { copy.textContent = "Mapping coordinates"; loader.classList.add("is-mapping"); }, 720);
  window.setTimeout(() => { copy.textContent = "Direction confirmed"; loader.classList.add("is-confirmed"); }, 1480);
  window.setTimeout(finish, 2300);
  loader.querySelector(".loader-skip").addEventListener("click", finish, { once: true });
} else if (!reducedMotion) {
  const transition = document.createElement("p");
  transition.className = "route-transition-label";
  transition.textContent = label;
  document.body.append(transition);
  window.setTimeout(() => transition.remove(), 680);
}
