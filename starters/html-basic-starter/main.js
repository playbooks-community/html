// Mobile menu toggle
const toggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelector('.nav__links');

toggle.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!expanded));
  navLinks.classList.toggle('is-open', !expanded);
});

// Close menu when a nav link is clicked
navLinks.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    toggle.setAttribute('aria-expanded', 'false');
    navLinks.classList.remove('is-open');
  }
});

// Dark mode toggle
const darkToggle = document.querySelector('.dark-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

function applyTheme(dark) {
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  darkToggle.textContent = dark ? '☀' : '☾';
  localStorage.setItem('theme', dark ? 'dark' : 'light');
}

// Init theme from saved preference or system setting
const saved = localStorage.getItem('theme');
applyTheme(saved ? saved === 'dark' : prefersDark.matches);

darkToggle.addEventListener('click', () => {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  applyTheme(!isDark);
});
