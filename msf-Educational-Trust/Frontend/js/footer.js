const footerItems = document.querySelectorAll('.footer-animate');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
},{ threshold: 0.15 });

footerItems.forEach(item => observer.observe(item));

const backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backTop.classList.add("show");
  } else {
    backTop.classList.remove("show");
  }
});

backTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
