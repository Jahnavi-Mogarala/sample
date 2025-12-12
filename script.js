// Smooth scroll for nav links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Highlight nav link on scroll
window.addEventListener('scroll', () => {
  const fromTop = window.scrollY + 100; // offset
  navLinks.forEach(link => {
    const section = document.querySelector(link.hash);
    if(section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop){
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

// Back-to-top button
const topBtn = document.createElement('button');
topBtn.textContent = '↑';
topBtn.style.cssText = 'position:fixed;bottom:20px;right:20px;padding:10px 15px;font-size:18px;border:none;border-radius:50%;background:var(--primary);color:white;cursor:pointer;display:none;z-index:1000;';
document.body.appendChild(topBtn);
topBtn.addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'}));

window.addEventListener('scroll', () => {
  if(window.scrollY > 300) topBtn.style.display = 'block';
  else topBtn.style.display = 'none';
});
// No JavaScript used in this website.
// You can add JS later if needed.
