/* -------------------------------------------------- */
/* script.js */
/* -------------------------------------------------- */
(function () {
  // Theme toggle
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;
  const stored = localStorage.getItem('kds-theme');
  if (stored) body.setAttribute('data-theme', stored);
  updateToggleText();

  themeToggle.addEventListener('click', () => {
    const cur = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', cur);
    localStorage.setItem('kds-theme', cur);
    updateToggleText();
  });

  function updateToggleText() {
    themeToggle.textContent = body.getAttribute('data-theme') === 'dark' ? '☀️' : '🌙';
  }

  // Mobile menu toggle
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  menuToggle.addEventListener('click', () => {
    mainNav.style.display = mainNav.style.display === 'flex' ? 'none' : 'flex';
    mainNav.style.flexDirection = 'column';
    mainNav.style.position = 'absolute';
    mainNav.style.right = '1rem';
    mainNav.style.top = '64px';
    mainNav.style.background = 'var(--panel)';
    mainNav.style.padding = '1rem';
    mainNav.style.borderRadius = '8px';
  });

  // Simple PC price calculator
  const calcBtn = document.getElementById('calcBtn');
  const pcPrice = document.getElementById('pcPrice');
  const pcSummary = document.getElementById('pcSummary');
  calcBtn.addEventListener('click', () => {
    const cpu = Number(document.getElementById('cpuSelect').value);
    const gpu = Number(document.getElementById('gpuSelect').value);
    const ram = Number(document.getElementById('ramSelect').value);
    const disk = Number(document.getElementById('diskSelect').value);
    const total = cpu + gpu + ram + disk;
    pcPrice.textContent = `R$${total.toFixed(2)}`;
    pcSummary.textContent = `CPU: ${document.getElementById('cpuSelect').selectedOptions[0].text}, GPU: ${document.getElementById('gpuSelect').selectedOptions[0].text}, RAM: ${document.getElementById('ramSelect').selectedOptions[0].text}, Disco: ${document.getElementById('diskSelect').selectedOptions[0].text}`;
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Set year in footer
  document.getElementById('year').textContent = new Date().getFullYear();
})();
