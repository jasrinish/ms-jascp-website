/* ms-jascp-website/assets/js/main.js */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Hamburger Toggle
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when links are clicked
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // Header Scroll Effect
  const header = document.querySelector('header');
  const checkScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
      header.style.boxShadow = 'var(--shadow-md)';
    } else {
      header.classList.remove('scrolled');
      header.style.boxShadow = 'none';
    }
  };
  window.addEventListener('scroll', checkScroll);
  checkScroll(); // Initial check

  // Highlight Active Link based on pathname
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    // Standardize comparison for file system paths and server paths
    const linkPath = link.getAttribute('href');
    if (currentPath.includes(linkPath) && linkPath !== '') {
      link.classList.add('active');
    } else if (currentPath.endsWith('/') && linkPath === 'index.html') {
      link.classList.add('active');
    }
  });

  // Footer Dynamic Copyright Year
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Fade-in on Scroll / Intersection Observer
  const revealElements = document.querySelectorAll('.animate-fade-in-up, .animate-slide-left, .animate-slide-right');
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          // Force reflow to re-trigger css animation if needed
          entry.target.style.animationPlayState = 'running';
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(el => {
      el.style.opacity = '0';
      observer.observe(el);
    });
  } else {
    // Fallback: Show all elements instantly if browser doesn't support IntersectionObserver
    revealElements.forEach(el => {
      el.style.opacity = '1';
    });
  }
});
