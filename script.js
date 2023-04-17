document.addEventListener('DOMContentLoaded', () => {
    const firstName = document.querySelector('.first-name');
    const lastName = document.querySelector('.last-name');
    const tagLine = document.querySelector('.tagline');
  
    // Wait for slide-in animations to finish before starting color transition and fadeIn animations
    setTimeout(() => {
      firstName.style.animation = 'colorTransition 10s ease-in-out infinite';
      lastName.style.animation = 'colorTransition 10.1s ease-in-out infinite';
  
      // Fade-in tagline
      tagLine.style.opacity = '1';
    }, 1000); // Wait 1000ms (1 second) before starting color transition and fadeIn animations
  });
  