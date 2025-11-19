// Basic interactive behaviors: mobile menu + year replacement + smooth scroll
document.addEventListener('DOMContentLoaded', function () {
  // Year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile menu toggle
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('mainNav');
  hamburger && hamburger.addEventListener('click', function () {
    nav.classList.toggle('open');
    this.classList.toggle('is-active');
  });

  // simple open behavior for small screens
  const style = document.createElement('style');
  style.innerHTML = `
    @media (max-width:640px){
      .main-nav { position: absolute; right:20px; top:72px; background:#fff; border-radius:12px; box-shadow:0 10px 30px rgba(12,18,30,0.08); padding:16px; display:none; width:220px; }
      .main-nav.open { display:block; }
      .main-nav ul { flex-direction:column; gap:10px; }
    }
  `;
  document.head.appendChild(style);

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth', block:'start'}); if(nav.classList.contains('open')) nav.classList.remove('open'); }
    });
  });
});
