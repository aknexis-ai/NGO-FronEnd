const slides = document.querySelectorAll('.hero-slide');
const indicators = document.querySelectorAll('.hero-indicators span');

let current = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  indicators.forEach(dot => dot.classList.remove('active'));

  slides[index].classList.add('active');
  indicators[index].classList.add('active');
}

indicators.forEach(dot => {
  dot.addEventListener('click', () => {
    current = Number(dot.dataset.slide);
    showSlide(current);
  });
});

setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 5000);