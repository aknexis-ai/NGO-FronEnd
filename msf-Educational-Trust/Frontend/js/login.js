const volunteerSections = document.querySelectorAll(
  ".volunteer-info, .volunteer-form-card"
);

const volunteerObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

volunteerSections.forEach(section => {
  volunteerObserver.observe(section);
});
