// Original research GIFs have a static, no-JavaScript fallback and a pause control.
const navigationLinks = [...document.querySelectorAll('.site-header nav a')];
const navigationSections = navigationLinks.map((link) => document.querySelector(link.getAttribute('href')));
const updateNavigation = () => {
  let active = 0;
  navigationSections.forEach((section, index) => {
    if (section && section.getBoundingClientRect().top <= 160) active = index;
  });
  navigationLinks.forEach((link, index) => {
    if (index === active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
};
window.addEventListener('scroll', updateNavigation, { passive: true });
updateNavigation();

const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
const animations = [...document.querySelectorAll(".paper-media")].flatMap((media) => {
  const image = media.querySelector("img[data-motion]");
  const button = media.querySelector(".motion-toggle");
  if (!image || !button) return [];

  const poster = image.getAttribute("src");
  const title = media.closest("article").querySelector("h4").textContent;
  let playing = false;
  const setPlaying = (next) => {
    playing = next;
    image.src = playing ? image.dataset.motion : poster;
    button.textContent = playing ? "Pause animation" : "Play animation";
    button.setAttribute("aria-label", `${playing ? "Pause" : "Play"} animation for ${title}`);
    button.setAttribute("aria-pressed", String(playing));
  };

  button.hidden = false;
  setPlaying(!motionPreference.matches);
  button.addEventListener("click", () => setPlaying(!playing));
  return [{ setPlaying }];
});

motionPreference.addEventListener("change", (event) => {
  if (event.matches) animations.forEach((animation) => animation.setPlaying(false));
});
