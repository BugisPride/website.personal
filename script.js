// animasi toggle
const menuToggle = document.querySelector('.menu-toggel');
const navLinks = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
  navLinks.classList.toggle('slide');
}); 