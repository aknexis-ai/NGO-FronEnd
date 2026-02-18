document.querySelectorAll('.file-input input').forEach(input => {
  input.addEventListener('change', function () {
    const fileName = this.files.length ? this.files[0].name : 'No file chosen';
    this.closest('.file-input').querySelector('.file-name').innerText = fileName;
  });
});

const revealItems = document.querySelectorAll('.volunteer-image, .volunteer-form-wrapper');

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

revealItems.forEach(item => revealObserver.observe(item));

document.querySelectorAll('.input-group input').forEach(input => {
  input.addEventListener('focus', () => {
    input.parentElement.style.boxShadow = '0 0 18px rgba(255,183,3,.6)';
  });

  input.addEventListener('blur', () => {
    input.parentElement.style.boxShadow = 'none';
  });
});

document.querySelectorAll('.volunteer-btn').forEach(button => {
  button.addEventListener('click', function (e) {
    const circle = document.createElement('span');
    const diameter = Math.max(this.clientWidth, this.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - this.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${e.clientY - this.getBoundingClientRect().top - radius}px`;
    circle.classList.add('ripple');

    const ripple = this.querySelector('.ripple');
    if (ripple) ripple.remove();

    this.appendChild(circle);
  });
});