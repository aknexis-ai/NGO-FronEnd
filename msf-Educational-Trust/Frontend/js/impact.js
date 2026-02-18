document.addEventListener("DOMContentLoaded", () => {

  const counters = document.querySelectorAll('.count');
  let hasAnimated = false;

  function animateCounters() {
    if (hasAnimated) return;

    const section = document.querySelector('.impact-section');
    const sectionTop = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight - 100) {
      hasAnimated = true;

      counters.forEach(counter => {
        const target = +counter.dataset.target;
        let current = 0;
        const increment = target / 200;

        const update = () => {
          current += increment;
          if (current < target) {
            counter.textContent = Math.floor(current).toLocaleString();
            requestAnimationFrame(update);
          } else {
            counter.textContent = target.toLocaleString();
          }
        };

        update();
      });
    }
  }

  window.addEventListener('scroll', animateCounters);
  animateCounters();

});
