// Navigation and general scripts for portfolio
document.addEventListener('DOMContentLoaded', function() {
  // Set active navigation link based on current page
  const currentPage = window.location.pathname;
  const navLinks = document.querySelectorAll('.navbar a');

  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage ||
        (currentPage.includes('index.html') && link.getAttribute('href').includes('index.html'))) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Hamburger menu functionality
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    const mobileNavLinks = mobileMenu.querySelectorAll('a');
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!hamburger.contains(event.target) && !mobileMenu.contains(event.target)) {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
      }
    });
  }
});


