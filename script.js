<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Glowing Text and Animation</title>
    <style>
        body {
            margin: 0;
            overflow: hidden;
            background-color: black;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            color: white;
        }

        #text {
            font-size: 5rem;
            color: #fff;
            text-shadow: 0 0 20px purple, 0 0 30px purple, 0 0 40px purple, 0 0 50px purple, 0 0 60px purple, 0 0 70px purple, 0 0 80px purple;
            cursor: pointer;
            position: relative;
            animation: wave 2s infinite;
        }

        @keyframes wave {
            0%, 100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-20px);
            }
        }

        .hidden {
            display: none;
        }

        #image-container {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            width: 100vw;
            overflow: hidden;
        }

        #image {
            display: block;
            position: absolute;
            width: 0;
            height: 0;
            border-radius: 50%;
            transition: width 1s ease, height 1s ease;
        }

        .show {
            width: 200px;
            height: 200px;
        }

        .hearts {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 10;
            pointer-events: none;
        }

        .heart {
            position: absolute;
            width: 20px;
            height: 20px;
            background: red;
            clip-path: polygon(50% 0%, 0% 50%, 50% 100%, 100% 50%);
            animation: drop 2s infinite;
        }

        @keyframes drop {
            0% {
                opacity: 1;
                transform: translateY(-50px);
            }
            100% {
                opacity: 0;
                transform: translateY(500px);
            }
        }
    </style>
</head>
<body>
    <div id="text">JAGRITY</div>
    <div id="image-container" class="hidden">
        <img id="image" src="your-image.jpg" alt="Popping Image">
        <div class="hearts" id="hearts"></div>
    </div>

    <script>
        document.getElementById('text').addEventListener('click', function() {
            document.getElementById('image-container').classList.remove('hidden');

            setTimeout(() => {
                document.getElementById('image').classList.add('show');
                createHearts();
            }, 100);
        });

        function createHearts() {
            const container = document.getElementById('hearts');
            const numberOfHearts = 30; // Number of hearts to drop

            for (let i = 0; i < numberOfHearts; i++) {
                const heart = document.createElement('div');
                heart.className = 'heart';
                heart.style.left = `${Math.random() * 100}vw`;
                heart.style.animationDuration = `${Math.random() * 1 + 1}s`; // Random duration between 1s and 2s
                container.appendChild(heart);
            }
        }
    </script>
</body>
</html>
