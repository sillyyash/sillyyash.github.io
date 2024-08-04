document.getElementById('text').addEventListener('click', function() {
  document.getElementById('text').style.display = 'none';
  const roses = document.getElementById('roses');
  roses.style.display = 'block';

  // Create rose animations
  for (let i = 0; i < 20; i++) {
      const rose = document.createElement('div');
      rose.className = 'rose';
      rose.style.top = Math.random() * 100 + '%';
      rose.style.left = Math.random() * 100 + '%';
      roses.appendChild(rose);
  }
});
