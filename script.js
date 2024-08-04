document.getElementById('text').addEventListener('click', function() {
  const rosesImg = document.getElementById('roses');
  const text = document.getElementById('text');
  
  if (rosesImg.style.display === 'none') {
      text.style.display = 'none';
      rosesImg.style.display = 'block';
  } else {
      rosesImg.style.display = 'none';
      text.style.display = 'block';
  }
});
