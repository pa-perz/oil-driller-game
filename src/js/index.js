let display = document.getElementById("display");
let buttonAdd = document.getElementById("buttonAdd");
let buttonBucket = document.getElementById("buttonBucket");
let buttonWorker = document.getElementById("buttonWorker");
let buttonRobot = document.getElementById("buttonRobot");
let mainTheme = document.getElementById("main-theme");
let musicIcon = document.getElementById("music-icon");

let money = 0;
let bonus = 0;
let workers = 0;
let robots = 0;

let bonusCost = 20.0;
let workerCost = 200.0;
let robotCost = 1000.0;

mainTheme.volume = 0.5;
mainTheme.play();

function togglePlay() {
  return mainTheme.paused() ? mainTheme.play() : mainTheme.pause();
}

function moneyFormat(number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);
}

function displayMoney() {
  display.textContent = moneyFormat(money);
}

function displayBonus() {
  buttonBucket.textContent =
    "Increase bucket capacity (cost = " + bonusCost + ")";
}

function displayWorker() {
  buttonWorker.textContent = "Hire a worker (cost = " + workerCost + ")";
}

function displayRobot() {
  buttonRobot.textContent = "Buy a robot (cost = " + robotCost + ")";
}

function addMoney() {
  money += 1 + bonus;
  displayMoney();
  enableButtons();
}

function enableBonus() {
  if (money >= bonusCost) {
    buttonBucket.disabled = false;
    buttonBucket.classList.remove("is-disabled");
  } else {
    buttonBucket.disabled = true;
    buttonBucket.classList.add("is-disabled");
  }
}

function enableWorker() {
  if (money >= workerCost) {
    buttonWorker.disabled = false;
    buttonWorker.classList.remove("is-disabled");
  } else {
    buttonWorker.disabled = true;
    buttonWorker.classList.add("is-disabled");
  }
}

function enableRobot() {
  if (money >= robotCost) {
    buttonRobot.disabled = false;
    buttonRobot.classList.remove("is-disabled");
  } else {
    buttonRobot.disabled = true;
    buttonRobot.classList.add("is-disabled");
  }
}

function enableButtons() {
  enableBonus();
  enableWorker();
  enableRobot();
}

function increaseBonus() {
  money -= bonusCost;
  bonus += 2;
  bonusCost = (bonusCost * 1.25).toFixed(2);
  displayMoney();
  displayBonus();
  enableButtons();
}

function increaseWorker() {
  money -= workerCost;
  workers++;
  workerCost = (workerCost * 1.25).toFixed(2);
  displayMoney();
  displayWorker();
  enableButtons();
}

function increaseRobot() {
  money -= robotCost;
  robots++;
  robotCost = (robotCost * 1.25).toFixed(2);
  displayMoney();
  displayRobot();
  enableButtons();
}

function workerClick() {
  for (let i = 0; i < workers; i++) addMoney();
}

function robotClick() {
  for (let i = 0; i < robots; i++) addMoney();
}

displayMoney();
displayBonus();
displayWorker();
displayRobot();
buttonBucket.disabled = true;
buttonWorker.disabled = true;
buttonRobot.disabled = true;

buttonAdd.addEventListener("click", addMoney);
buttonBucket.addEventListener("click", increaseBonus);
buttonWorker.addEventListener("click", increaseWorker);
buttonRobot.addEventListener("click", increaseRobot);
musicIcon.addEventListener("click", musicControl);

workerInterval = window.setInterval(workerClick, 5000);
robotInterval = window.setInterval(robotClick, 1000);
