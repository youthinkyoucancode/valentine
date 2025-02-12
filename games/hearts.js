function startCatchHearts() {
    const gameArea = document.getElementById("gameArea");
    gameArea.innerHTML = `
        <h2>Catch the Floating Hearts! ❤️</h2>
        <p>Move the basket with arrow keys and catch 10 hearts!</p>
        <div id="player" class="basket">🧺</div>
        <p id="score">Score: 0</p>
        <p id="time">Time Left: <span id="timeLeft">20</span>s</p>
    `;

    let score = 0;
    let timeLeft = 20;
    const player = document.getElementById("player");
    let playerLeft = gameArea.offsetWidth / 2 - 25;

    // Move Basket
    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft" && playerLeft > 0) {
            playerLeft -= 30;
        }
        if (event.key === "ArrowRight" && playerLeft < gameArea.offsetWidth - 50) {
            playerLeft += 30;
        }
        player.style.left = playerLeft + "px";
    });

    // Generate Falling Hearts
    function createHeart() {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * (gameArea.offsetWidth - 50) + "px";
        gameArea.appendChild(heart);

        let fallInterval = setInterval(() => {
            let heartTop = parseInt(window.getComputedStyle(heart).getPropertyValue("top"));
            let playerLeftPos = parseInt(window.getComputedStyle(player).getPropertyValue("left"));

            if (heartTop >= 350 && heartTop < 400 && Math.abs(playerLeftPos - parseInt(heart.style.left)) < 50) {
                score++;
                document.getElementById("score").innerText = `Score: ${score}`;
                heart.remove();
                clearInterval(fallInterval);
            }

            if (heartTop >= 400) {
                heart.remove();
                clearInterval(fallInterval);
            }
        }, 50);

        setTimeout(() => heart.remove(), 4000);
    }

    // Timer Countdown
    let gameTimer = setInterval(() => {
        timeLeft--;
        document.getElementById("timeLeft").innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(gameTimer);
            clearInterval(heartSpawner);
            endGame();
        }
    }, 1000);

    let heartSpawner = setInterval(createHeart, 1000);

    function endGame() {
        gameArea.innerHTML = `
            <h2>${score >= 10 ? "You Won! 🎉💖" : "Oops! 😢"}</h2>
            <p>${score >= 10 ? "Great job catching hearts! Try another game or choose your gift below." : "Try again to catch more hearts!"}</p>
            <p>Final Score: ${score} ❤️</p>
            <button id="retryBtn" class="retry-btn">🔄 Try Again</button>
        `;

        document.getElementById("retryBtn").addEventListener("click", startCatchHearts);
        
    }
}
