document.addEventListener("DOMContentLoaded", function () {

  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const header = document.querySelector(".msf-header");

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", function (e) {
      mobileMenu.classList.toggle("show");
    });
  }

  document.addEventListener("click", function (e) {
  if (!mobileMenu.classList.contains("show")) return;

  if (
    !mobileMenu.contains(e.target) &&
    !menuToggle.contains(e.target)
  ) {
    mobileMenu.classList.remove("show");

    document.querySelectorAll(".mobile-menu .dropdown-menu").forEach(menu => {
      menu.classList.remove("open");
      menu.style.maxHeight = null;
    });
  }
});


  const mobileDropdownLinks = document.querySelectorAll(
    ".mobile-menu .dropdown > a"
  );

  mobileDropdownLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      const submenu = this.nextElementSibling;
      if (!submenu) return;

      document.querySelectorAll(".mobile-menu .dropdown-menu").forEach(menu => {
        if (menu !== submenu) {
          menu.classList.remove("open");
          menu.style.maxHeight = null;
        }
      });

      if (submenu.classList.contains("open")) {
        submenu.classList.remove("open");
        submenu.style.maxHeight = null;
      } else {
        submenu.classList.add("open");
        submenu.style.maxHeight = submenu.scrollHeight + "px";
      }
    });
  });

  document.querySelectorAll(".mobile-menu .dropdown-menu a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("show");

      document.querySelectorAll(".mobile-menu .dropdown-menu").forEach(menu => {
        menu.classList.remove("open");
        menu.style.maxHeight = null;
      });
    });
  });

  if (header) {
    window.addEventListener("scroll", () => {
      header.classList.toggle("scrolled", window.scrollY > 60);
    });
  }

window.addEventListener("resize", () => {
  if (window.innerWidth > 1024) {
    mobileMenu.classList.remove("show");

    document.querySelectorAll(".mobile-menu .dropdown-menu").forEach(menu => {
      menu.classList.remove("open");
      menu.style.maxHeight = null;
    });
  }
});


});




