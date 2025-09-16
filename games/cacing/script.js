const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreElement = document.getElementById('score');

const gridSize = 20;
let snake = [{ x: 10, y: 10 }];
let food = {};
let direction = 'right';
let score = 0;
let gameOver = false;

function generateFood() {
    food = {
        x: Math.floor(Math.random() * (canvas.width / gridSize)),
        y: Math.floor(Math.random() * (canvas.height / gridSize))
    };
}

function draw() {
    // Clear canvas
    ctx.fillStyle = '#0d1117';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw snake
    ctx.fillStyle = '#2ecc71';
    snake.forEach(segment => {
        ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
    });

    // Draw food
    ctx.fillStyle = '#e74c3c';
    ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);
}

function update() {
    if (gameOver) return;

    const head = { x: snake[0].x, y: snake[0].y };

    switch (direction) {
        case 'up': head.y--; break;
        case 'down': head.y++; break;
        case 'left': head.x--; break;
        case 'right': head.x++; break;
    }

    // Check for collision with walls
    if (head.x < 0 || head.x >= canvas.width / gridSize || head.y < 0 || head.y >= canvas.height / gridSize) {
        endGame();
        return;
    }

    // Check for collision with self
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            endGame();
            return;
        }
    }

    snake.unshift(head);

    // Check for food collision
    if (head.x === food.x && head.y === food.y) {
        score++;
        scoreElement.textContent = score;
        generateFood();
    } else {
        snake.pop();
    }

    draw();
}

function endGame() {
    gameOver = true;
    alert(`Game Over! Skor Anda: ${score}`);
    window.location.reload(); // Restart game
}

document.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp': if (direction !== 'down') direction = 'up'; break;
        case 'ArrowDown': if (direction !== 'up') direction = 'down'; break;
        case 'ArrowLeft': if (direction !== 'right') direction = 'left'; break;
        case 'ArrowRight': if (direction !== 'left') direction = 'right'; break;
    }
});

generateFood();
setInterval(update, 100); // Game speed