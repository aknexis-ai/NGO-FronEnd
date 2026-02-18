document.addEventListener("DOMContentLoaded", () => {

  const slides = document.querySelectorAll(".story-item");
  const nextBtn = document.querySelector(".story-arrow.next");
  const prevBtn = document.querySelector(".story-arrow.prev");

  let current = 0;

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
  }

  nextBtn.addEventListener("click", () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  });

  prevBtn.addEventListener("click", () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  });

  // Auto slide
  let autoTimer = setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 5000);

  // Pause on hover
  const slider = document.querySelector(".success-slider");

  slider.addEventListener("mouseenter", () => clearInterval(autoTimer));
  slider.addEventListener("mouseleave", () => {
    autoTimer = setInterval(() => {
      current = (current + 1) % slides.length;
      showSlide(current);
    }, 5000);
  });

});

document.querySelectorAll('.engage-card').forEach(card=>{
  card.addEventListener('click',e=>{
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--x', x + 'px');
    card.style.setProperty('--y', y + 'px');

    card.classList.remove('ripple');
    void card.offsetWidth;
    card.classList.add('ripple');

    card.style.setProperty('--x', x + 'px');
    card.style.setProperty('--y', y + 'px');
  });
});

