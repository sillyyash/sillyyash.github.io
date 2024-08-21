document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const container = document.getElementById('container');
    const text = document.getElementById('text');
    const roses = document.getElementById('roses');
    const imageContainer = document.getElementById('imageContainer');
    const image = document.getElementById('image');
    const memoriesButton = document.getElementById('memoriesButton');
    const ebookButton = document.getElementById('ebookButton');
    const videoContainer = document.getElementById('videoContainer');
    const video = document.getElementById('video');
    const flower = document.querySelector('.flower');

    // Hide loader and show container after loading
    setTimeout(() => {
        loader.style.display = 'none';
        container.style.display = 'flex';
        flower.classList.remove('hidden'); // Show flower animation
    }, 3000); // Adjust time if needed

    // Animation when clicking on JAGRITY
    text.addEventListener('click', () => {
        // Hide JAGRITY text
        text.style.display = 'none';

        // Hide flower animation
        flower.classList.add('hidden');

        // Trigger roses animation
        roses.style.display = 'block';
        const roseCount = 50; // Number of roses
        for (let i = 0; i < roseCount; i++) {
            const rose = document.createElement('div');
            rose.className = 'rose';
            rose.style.left = `${Math.random() * 100}vw`;
            rose.style.top = `${Math.random() * 100}vh`;
            rose.style.animationDelay = `${Math.random() * 2}s`;
            roses.appendChild(rose);
        }
        setTimeout(() => {
            // Show image after roses animation
            imageContainer.style.display = 'flex';
            image.style.display = 'block';
            setTimeout(() => {
                // Show the buttons after 10 seconds
                buttonContainer.style.display = 'flex';
            }, 10000); // Show the buttons after 10 seconds
        }, 2000); // Time for the roses animation
    });

    // Memories button functionality
    memoriesButton.addEventListener('click', () => {
        videoContainer.style.display = 'flex';
        video.requestFullscreen();
    });

    // eBook button functionality (example action)
    ebookButton.addEventListener('click', () => {
        alert('eBook button clicked!');
    });
});
