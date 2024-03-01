
const clicker = document.querySelector("#icon");
const upgradeButtons = document.querySelectorAll(".upgrade");

const balanceField = document.querySelector("#score");

// Основные переменные

let balance = 0;

// Характеристики

let diamondsPerClick = 1;
let diamondPerSecond = 0;

// Кликер

clicker.addEventListener("click", () => {
    balance += diamondsPerClick;
    balanceField.innerHTML = balance;
})

upgradeButtons.forEach((button) => {
    button.addEventListener("click", handleUpgrade, { once: true });
})

function handleUpgrade(e) {
    console.log(e);
}