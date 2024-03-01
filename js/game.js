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

// Улучшения

upgradeButtons.forEach((button) => {
    button.addEventListener("click", handleUpgrade);
})

function handleUpgrade(event) {
    const button = event.target.closest("div");
    const price = Number(button.querySelector(".price").innerHTML);

    if (balance < price) return;

    balance -= price;
    balanceField.innerHTML = balance;

    button.removeEventListener("click", handleUpgrade);
    button.classList.add("buyed");

    switch (button.id) {
        case "upgrade1":
            diamondsPerClick *= 2;
            break;
        case "upgrade2":
            diamondPerSecond += 5;
            break;
        case "upgrade3":
            diamondsPerClick *= 10;
            break;
        case "upgrade4":
            diamondPerSecond += 25;
            break;
        case "upgrade5":
            diamondPerSecond += 50;
            break;
        case "upgrade6":
            diamondPerSecond += 150;
            break;
    }
}

// Добыча в секунду

setInterval(() => {
    balance += diamondPerSecond;
    balanceField.innerHTML = balance;
}, 1000)

// Прощание

window.onbeforeunload = function() {
    return false;
};