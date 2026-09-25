const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open);
  menuToggle.textContent = open ? '×' : '☰';
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    if (menuToggle) menuToggle.textContent = '☰';
  });
});

const sections = [...document.querySelectorAll('main section[id]')];
const links = [...document.querySelectorAll('.nav a[href^="#"]')];

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    links.forEach(link => link.classList.toggle(
      'active',
      link.getAttribute('href') === `#${entry.target.id}`
    ));
  });
}, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });

sections.forEach(section => observer.observe(section));

document.getElementById('year').textContent = new Date().getFullYear();
