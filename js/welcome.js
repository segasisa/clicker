const exitButton = document.querySelector("#exit")
const startButton = document.querySelector("#start")

exitButton.addEventListener("click", () => window.close());

startButton.addEventListener("click", () => window.location.href = 'game.html');