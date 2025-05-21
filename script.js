document.addEventListener('DOMContentLoaded', function() {
  // Check if Unicode star displays correctly, if not use SVG fallback
  function checkStarSupport() {
    const testSpan = document.createElement('span');
    testSpan.textContent = '✶';
    testSpan.style.position = 'absolute';
    testSpan.style.opacity = '0';
    document.body.appendChild(testSpan);
    
    // Check if the width is close to the expected width for this character
    const width = testSpan.offsetWidth;
    document.body.removeChild(testSpan);
    
    // If the width is too small, the browser might not be rendering the character correctly
    if (width < 5) {
      const stars = document.querySelectorAll('.chicago-star');
      stars.forEach(star => star.classList.add('fallback'));
    }
  }
  
  checkStarSupport();

  // Add smooth scrolling to all links
  const links = document.querySelectorAll('a[href^="#"]');
  
  for (const link of links) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    });
  }

  // Add stars animation
  const flagStars = document.querySelectorAll('.chicago-star');
  setInterval(() => {
    flagStars.forEach(star => {
      // Use transform scale for both the star and its ::before content
      star.style.transform = 'scale(1.2)';
      
      setTimeout(() => {
        star.style.transform = 'scale(1)';
      }, 300);
    });
  }, 3000);
}); 