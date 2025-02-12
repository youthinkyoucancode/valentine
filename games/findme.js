function startFindMeGame() {
    const gameArea = document.getElementById("gameArea");
    gameArea.innerHTML = `
        <h2>Find Me! 🔍</h2>
        <p>Click on an object to find me! 💖</p>

        <div class="game-objects">
            <div class="hide-spot" id="wrong1">🎁</div>
            <div class="hide-spot" id="correct">🌳</div> <!-- Correct answer -->
            <div class="hide-spot" id="wrong2">🏠</div>
        </div>

        <div id="chibiCharacter" class="hidden">
            <img src="images/chibi-abir.png" alt="Chibi Me" class="chibi-img">
            <p>Yay! You found me! 🥰💖 Try another game or choose your gift below!</p>
        </div>

        <p id="resultMessage"></p>
        <button id="retryFindMe" class="hidden retry-btn">🔄 Try Again</button>
    `;

    document.getElementById("correct").addEventListener("click", () => {
        document.getElementById("chibiCharacter").classList.remove("hidden");
        document.getElementById("resultMessage").innerHTML = "";
        document.getElementById("retryFindMe").classList.add("hidden");
    });

    document.getElementById("wrong1").addEventListener("click", showWrongMessage);
    document.getElementById("wrong2").addEventListener("click", showWrongMessage);

    function showWrongMessage() {
        document.getElementById("resultMessage").innerHTML = "Oops! 😆 I'm not here! Try again!";
        document.getElementById("retryFindMe").classList.remove("hidden");
    }

    document.getElementById("retryFindMe").addEventListener("click", startFindMeGame);
}

document.addEventListener("DOMContentLoaded", () => {
    const findMeBtn = document.getElementById("findMe");
    findMeBtn.addEventListener("click", () => {
        document.getElementById("gameSelection").classList.add("hidden");
        document.getElementById("gameArea").classList.remove("hidden");
        startFindMeGame();
    });
});
