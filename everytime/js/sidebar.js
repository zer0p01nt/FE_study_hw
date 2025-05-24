const sidebar = document.querySelector(".mini-side");
const hamburger = document.querySelector(".hamburger");
const darken = document.querySelector(".darken");

function toggleSidebar() {
  sidebar.classList.toggle("hidden");
  darken.classList.toggle("hidden");

  window.addEventListener("resize", () => {
    if (window.innerWidth > 640) {
      toggleSidebar();
    }
  });
}

hamburger.addEventListener("click", toggleSidebar);
darken.addEventListener("click", toggleSidebar);
