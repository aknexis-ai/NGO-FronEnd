document.addEventListener("DOMContentLoaded", () => {

  const track = document.querySelector(".programs-track");
  const cards = document.querySelectorAll(".program-card");
  const nextBtn = document.querySelector(".program-btn.next");
  const prevBtn = document.querySelector(".program-btn.prev");

  let index = 0;
  let autoTimer;
  const gap = 30;

  function visibleCards() {
    return window.innerWidth <= 900 ? 1 : 2;
  }

  function slide() {
    const cardWidth = cards[0].offsetWidth + gap;
    track.scrollTo({
      left: index * cardWidth,
      behavior: "smooth"
    });
  }

  function next() {
    if (index < cards.length - visibleCards()) {
      index++;
    } else {
      index = 0;
    }
    slide();
  }

  function prev() {
    if (index > 0) {
      index--;
    } else {
      index = cards.length - visibleCards();
    }
    slide();
  }

  nextBtn.addEventListener("click", () => {
    stopAuto();
    next();
    startAuto();
  });

  prevBtn.addEventListener("click", () => {
    stopAuto();
    prev();
    startAuto();
  });

  function startAuto() {
    autoTimer = setInterval(next, 3500);
  }

  function stopAuto() {
    clearInterval(autoTimer);
  }

  track.addEventListener("mouseenter", stopAuto);
  track.addEventListener("mouseleave", startAuto);

  // Swipe Support
  let startX = 0;

  track.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
    stopAuto();
  });

  track.addEventListener("touchend", e => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }

    startAuto();
  });

  window.addEventListener("resize", slide);

  startAuto();
});



document.addEventListener("DOMContentLoaded", () => {

  const tTrack = document.querySelector('.testimonial-track');
  const tSlides = document.querySelectorAll('.testimonial');
  const tPrev  = document.querySelector('.test-prev');
  const tNext  = document.querySelector('.test-next');

  let tIndex = 0;

  function updateTestimonials() {
    tTrack.style.transform = `translateX(-${tIndex * 100}%)`;

    tSlides.forEach(el => el.classList.remove('active'));
    tSlides[tIndex].classList.add('active');
  }

  tNext.addEventListener('click', () => {
    tIndex = (tIndex + 1) % tSlides.length;
    updateTestimonials();
  });

  tPrev.addEventListener('click', () => {
    tIndex = (tIndex - 1 + tSlides.length) % tSlides.length;
    updateTestimonials();
  });

  // Auto slide
  setInterval(() => {
    tIndex = (tIndex + 1) % tSlides.length;
    updateTestimonials();
  }, 6000);

});
