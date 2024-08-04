document.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader');
  const container = document.getElementById('container');

  // Remove loader after a delay
  setTimeout(() => {
      loader.style.display = 'none';
      container.style.display = 'flex';
  }, 3000); // Adjust this duration to match the loader animation time

  document.getElementById('text').addEventListener('click', function() {
      this.style.display = 'none'; // Hide the JAGRITY text
      const roses = document.getElementById('roses');
      const imageContainer = document.getElementById('imageContainer');

      roses.style.display = 'block'; // Show the roses container

      // Clear any existing roses
      roses.innerHTML = '';

      // Create rose animations
      for (let i = 0; i < 100; i++) {
          const rose = document.createElement('div');
          rose.className = 'rose';
          rose.style.top = Math.random() * 100 + '%';
          rose.style.left = Math.random() * 100 + '%';
          rose.style.animationDelay = Math.random() * 2 + 's'; // Stagger start times
          roses.appendChild(rose);
      }

      // Hide roses and show image container after animation
      setTimeout(() => {
          roses.style.display = 'none';
          imageContainer.style.display = 'block';
      }, 3000); // Duration should match animation duration
  });
});
