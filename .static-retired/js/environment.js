const environments = {
  home: ["NAVIGATION CHAMBER", "Mapping routes"], journey: ["OBSERVATION DECK", "Calibrating instruments"],
  missions: ["MISSION CONTROL", "Plotting mission"], archive: ["RECORDS VAULT", "Opening record"],
  beyond: ["PERSONAL STUDY", "Adjusting desk light"], reading: ["OBSERVATORY LIBRARY", "Opening spread"],
  notes: ["FIELD JOURNAL", "Turning page"], contact: ["NAVIGATION POINT", "Aligning north"],
};
const page = document.body.dataset.page || "home";
const [label, action] = environments[page] || environments.home;
const environment = document.createElement("div");
environment.className = `page-environment environment-${page}`;
environment.setAttribute("aria-hidden", "true");
environment.innerHTML = '<div class="environment-base"></div><div class="environment-structure"></div><div class="environment-ambient"></div>';
document.body.prepend(environment);

const overlay = document.createElement("aside");
overlay.className = "route-passage";
overlay.setAttribute("aria-hidden", "true");
overlay.innerHTML = `<div><p>${label}</p><strong>${action}</strong></div>`;
document.body.append(overlay);

document.addEventListener("click", (event) => {
  const link = event.target.closest('a[href^="/"]');
  if (!link || link.target || link.getAttribute("href") === location.pathname) return;
  event.preventDefault();
  document.body.classList.add("is-departing");
  overlay.classList.add("is-active");
  window.setTimeout(() => { location.href = link.href; }, 720);
});
