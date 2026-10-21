const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let playerX = 175;
const playerY = 350;
const playerSize = 50;
const speed = 5;

let moveLeft = false;
let moveRight = false;

// Handle key presses
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') moveLeft = true;
    if (e.key === 'ArrowRight') moveRight = true;
});

document.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowLeft') false;
    if (e.key === 'ArrowRight') false;
    // Reset state
    if (e.key === 'ArrowLeft') moveLeft = false;
    if (e.key === 'ArrowRight') moveRight = false;
});

function draw() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update position
    if (moveLeft && playerX > 0) playerX -= speed;
    if (moveRight && playerX < canvas.width - playerSize) playerX += speed;

    // Draw player square
    ctx.fillStyle = '#3498db';
    ctx.fillRect(playerX, playerY, playerSize, playerSize);

    requestAnimationFrame(draw);
}

// Start the animation loop
draw();
