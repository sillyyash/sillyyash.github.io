document.getElementById('text').addEventListener('click', function() {
  this.style.display = 'none'; // Hide the JAGRITY text
  const roses = document.getElementById('roses');
  const imageContainer = document.getElementById('imageContainer');
  const image = document.getElementById('image');

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
      image.style.animation = 'shatter 3s ease-out';
  }, 3000); // Duration should match animation duration

  // Reset the image animation
  image.addEventListener('animationend', function() {
      image.style.animation = 'none';
  });
});
