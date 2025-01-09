const movieCard = document.getElementById("movieCard");
const gameCard = document.getElementById("gameCard");
const talkCard = document.getElementById("talkCard");

movieCard.addEventListener("click", () => {
    alert("Great choice! Let's watch a movie together! 🍿");
    window.location.href = "time-setting.html";
});

gameCard.addEventListener("click", () => {
    alert("Awesome! Time to play some video games! 🎮");
    window.location.href = "time-setting.html";
});

talkCard.addEventListener("click", () => {
    alert("A heart-to-heart talk sounds perfect! 💬");
    window.location.href = "time-setting.html";
});
