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

const roleButtons = document.querySelectorAll(".role-toggle");
const rolePanels = document.querySelectorAll(".role-panel");

function setActiveRole(roleId) {
  roleButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.role === roleId);
  });

  rolePanels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.rolePanel === roleId);
  });
}

roleButtons.forEach((button) => {
  button.addEventListener("click", () => setActiveRole(button.dataset.role));
});
