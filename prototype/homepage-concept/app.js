const header = document.querySelector(".site-header");
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".site-nav a");
const revealItems = document.querySelectorAll(".reveal");
const systemCards = document.querySelectorAll(".system-card");
const systemPanels = document.querySelectorAll(".systems-panel");
const systemsIndicator = document.querySelector(".systems-indicator");
const projectCards = document.querySelectorAll(".project-card-premium");

// Mobile navigation behavior for the standalone concept.
if (toggle && header) {
  toggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("is-open");
    document.body.classList.toggle("menu-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    header?.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    toggle?.setAttribute("aria-expanded", "false");
  });
});

// Small reveal system for section rhythm without heavy motion.
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealItems.forEach((item) => observer.observe(item));

// Small interactive section to make the concept feel less static.
const setActiveSystem = (id) => {
  systemCards.forEach((card) => {
    const active = card.dataset.panel === id;
    card.classList.toggle("is-active", active);
    card.setAttribute("aria-selected", String(active));
  });

  systemPanels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.panel === id);
  });

  if (systemsIndicator) {
    const activeCard = document.querySelector(`.system-card[data-panel="${id}"]`);
    if (activeCard) {
      systemsIndicator.style.height = `${activeCard.offsetHeight}px`;
      systemsIndicator.style.transform = `translateY(${activeCard.offsetTop}px)`;
    }
  }
};

systemCards.forEach((card) => {
  const activate = () => setActiveSystem(card.dataset.panel);
  card.addEventListener("mouseenter", activate);
  card.addEventListener("focus", activate);
  card.addEventListener("click", activate);
});

projectCards.forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    const bounds = card.getBoundingClientRect();
    card.style.setProperty("--spotlight-x", `${event.clientX - bounds.left}px`);
    card.style.setProperty("--spotlight-y", `${event.clientY - bounds.top}px`);
  });
});

setActiveSystem("ownership");
