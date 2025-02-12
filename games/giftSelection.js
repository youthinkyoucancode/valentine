document.addEventListener("DOMContentLoaded", () => {
    const giftSelection = document.getElementById("giftSelection");
    const giftCookies = document.getElementById("giftCookies");
    const giftPasta = document.getElementById("giftPasta");
    const giftPics = document.getElementById("giftPics");
    const giftMessage = document.getElementById("giftMessage");

    // Function to show the gift selection screen
    function showGiftSelection() {
        document.getElementById("gameSelection").classList.add("hidden");
        document.getElementById("gameArea").classList.add("hidden");
        giftSelection.classList.remove("hidden");
    }

    // Event listeners for gift buttons
    if (giftCookies && giftPasta && giftPics) {
        giftCookies.addEventListener("click", () => {
            giftMessage.innerHTML = "🍪 Yay! You picked Heart Cookies! I'll bake some for you! 💖";
        });

        giftPasta.addEventListener("click", () => {
            giftMessage.innerHTML = "🍝 Romantic dinner coming up! Enjoy your heart pasta! 💘";
        });

        giftPics.addEventListener("click", () => {
            giftMessage.innerHTML = "🔥 Hehe... Enjoy your *special* surprise later! 😉💋";
        });
    }

    // Make sure we show the gift selection after mini-games
    document.addEventListener("giftTime", showGiftSelection);
});
