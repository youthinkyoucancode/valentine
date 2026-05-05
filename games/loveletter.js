function startLoveLetterGame() {
    const gameArea = document.getElementById("gameArea");
    gameArea.innerHTML = `
        <h2>Complete the Love Letter 💌</h2>
        <p>Drag the correct words into the blanks and click "Submit Answer"!</p>

        <div class="letter">
            <p>Dear Love,</p>
            <p>I <span class="blank" id="blank1">____</span> you more than <span class="blank" id="blank2">____</span>.</p>
            <p>You make my heart <span class="blank" id="blank3">____</span> every day! 💖</p>
        </div>

        <div class="words">
            <span class="word" draggable="true" id="word1">love</span>
            <span class="word" draggable="true" id="word2">pizza</span>
            <span class="word" draggable="true" id="word3">smile</span>
        </div>

        <button id="submitAnswer" class="check-btn">✔ Submit Answer</button>
        <p id="resultMessage"></p>
        <button id="retryLoveLetter" class="hidden retry-btn">🔄 Try Again</button>
    `;

    let selectedWords = { blank1: "", blank2: "", blank3: "" };

    const words = document.querySelectorAll(".word");
    const blanks = document.querySelectorAll(".blank");

    words.forEach(word => {
        word.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text", e.target.id);
        });
    });

    blanks.forEach(blank => {
        blank.addEventListener("dragover", (e) => e.preventDefault());
        blank.addEventListener("drop", (e) => {
            e.preventDefault();
            let wordId = e.dataTransfer.getData("text");
            let wordElement = document.getElementById(wordId);
            blank.textContent = wordElement.textContent;
            selectedWords[blank.id] = wordElement.textContent;
        });
    });

    document.getElementById("submitAnswer").addEventListener("click", () => {
        if (selectedWords.blank1 === "love" && selectedWords.blank2 === "pizza" && selectedWords.blank3 === "smile") {
            document.getElementById("resultMessage").innerHTML = "💖 You completed the love letter! So sweet! 💌 Try another game or choose your gift below!";
            document.getElementById("retryLoveLetter").classList.add("hidden");
            setTimeout(() => document.dispatchEvent(new CustomEvent("giftTime")), 2500);
        } else {
            document.getElementById("resultMessage").innerHTML = "Oops! Try again! 😢";
            document.getElementById("retryLoveLetter").classList.remove("hidden");
        }
    });

    document.getElementById("retryLoveLetter").addEventListener("click", startLoveLetterGame);
}

document.addEventListener("DOMContentLoaded", () => {
    const loveLetterBtn = document.getElementById("loveLetter");
    loveLetterBtn.addEventListener("click", () => {
        document.getElementById("gameSelection").classList.add("hidden");
        document.getElementById("gameArea").classList.remove("hidden");
        startLoveLetterGame();
    });
    
});
