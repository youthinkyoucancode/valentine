document.addEventListener("DOMContentLoaded", () => {
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const message = document.getElementById("message");
    const gameSelection = document.getElementById("gameSelection");
    const gameArea = document.getElementById("gameArea");
    const giftSelection = document.getElementById("giftSelection");
    const catchHeartsBtn = document.getElementById("catchHearts");

    // Show game selection when "Yes" is clicked
    yesBtn.addEventListener("click", () => {
        message.classList.remove("hidden");
        gameSelection.classList.remove("hidden");
    });

    // Move "No" button when hovered
    noBtn.addEventListener("mouseover", () => {
        const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
        const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    });

    // Load "Catch the Floating Hearts" Game when clicked
    catchHeartsBtn.addEventListener("click", () => {
        gameSelection.classList.add("hidden");
        gameArea.classList.remove("hidden");
        startCatchHearts();
    });

    // Music toggle
    document.getElementById("musicToggle").addEventListener("click", () => {
        let music = document.getElementById("bgMusic");
        if (music.paused) {
            music.play();
        } else {
            music.pause();
        }
    });

    // Gift Buttons
    const giftCookies = document.getElementById("giftCookies");
    const giftPasta = document.getElementById("giftPasta");
    const giftPics = document.getElementById("giftPics");
    const giftMessage = document.getElementById("giftMessage");

    // Function to show the gift selection screen
    function showGiftSelection() {
        console.log("Showing gift selection...");
        gameArea.classList.add("hidden");
        gameSelection.classList.add("hidden");
        giftSelection.classList.remove("hidden");
    }

    // Event listeners for gift buttons
    giftCookies.addEventListener("click", () => {
        giftMessage.innerHTML = "🍪 Yay! You picked Heart Cookies! Go check the cookie box in the kitchen! 💖";
    });

    giftPasta.addEventListener("click", () => {
        giftMessage.innerHTML = "🍝 Romantic dinner coming up! I hope you like it baby! 💘";
    });

    giftPics.addEventListener("click", () => {
        giftMessage.innerHTML = "📸 Aww! A cute polaroid is on its way to your phone! 💖";
    });

    // Trigger gift selection when a mini-game is finished
    document.addEventListener("giftTime", showGiftSelection);
});
