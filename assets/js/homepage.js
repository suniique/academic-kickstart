// Research GIFs autoplay over a static, no-JavaScript fallback; reduced-motion users keep the still image.
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
const animations = [...document.querySelectorAll(".paper-media img[data-motion]")].map((image) => {
  const poster = image.getAttribute("src");
  const setPlaying = (playing) => {
    image.src = playing ? image.dataset.motion : poster;
  };
  setPlaying(!motionPreference.matches);
  return { setPlaying };
});

motionPreference.addEventListener("change", (event) => {
  animations.forEach((animation) => animation.setPlaying(!event.matches));
});
