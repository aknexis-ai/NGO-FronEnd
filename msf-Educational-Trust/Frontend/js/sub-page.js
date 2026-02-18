  document.addEventListener("scroll", () => {
    const hero = document.querySelector(".subpage-hero");
    const y = window.scrollY * 0.25;
    hero.style.backgroundPosition = `center ${y}px`;
  });

//ContactUs
const cards = document.querySelectorAll('.contact-card, .location-box');

window.addEventListener('scroll', () => {
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });
});

//ContactUs Form
document.querySelector(".premium-form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Thank you! Your message has been sent successfully.");
});

const form = document.querySelector(".premium-form");
const toast = document.getElementById("toast");

form.addEventListener("submit", e => {
  e.preventDefault();

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
    form.reset();
  }, 3000);
});

const revealItems = document.querySelectorAll(
  ".media-box, .contact-form-area"
);

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal");
    }
  });
}, { threshold: 0.2 });

revealItems.forEach(item => revealObserver.observe(item));


//Contact Form Intro Video

const video = document.getElementById("ytVideo");
const section = document.getElementById("video-box");

let played = false;

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !played) {
      const src = video.getAttribute("src");
      video.setAttribute("src", src + "&autoplay=1");
      played = true;
    }
  });
}, { threshold: 0.6 });

observer.observe(section);

const subHero = document.querySelector('.sub-hero-slide');

window.addEventListener('scroll', () => {
  if (!subHero) return;

  const scrollY = window.scrollY;
  subHero.style.transform = `scale(1.05) translateY(${scrollY * 0.15}px)`;
});
