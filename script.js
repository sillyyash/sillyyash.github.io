document.getElementById('text').addEventListener('click', function() {
  this.style.display = 'none'; // Hide the JAGRITY text
  const roses = document.getElementById('roses');
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
});
