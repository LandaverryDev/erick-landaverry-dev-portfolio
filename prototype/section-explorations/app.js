const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.15 }
);

revealItems.forEach((item) => revealObserver.observe(item));

const switchButtons = document.querySelectorAll(".switch-pill");
const switchPanels = document.querySelectorAll(".switch-panel");

function setActivePanel(panelId) {
  switchButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.panel === panelId);
  });

  switchPanels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.panelContent === panelId);
  });
}

switchButtons.forEach((button) => {
  button.addEventListener("click", () => setActivePanel(button.dataset.panel));
});
