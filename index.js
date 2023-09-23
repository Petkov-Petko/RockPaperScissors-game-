const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
const choiceBtns2 = document.querySelectorAll(".choiceBtn2");
const restart = document.querySelector("#restart");
const scorePl1 = document.querySelector(".score1");
const scorePl2 = document.querySelector(".score2");

let player;
let player2 = "";
let result;
let score1 = Number(scorePl1.textContent);
let score2 = Number(scorePl2.textContent);

let scores = {
  PL1: score1,
  PL2: score2,
};

console.log(scores["PL1"]);
choiceBtns.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.textContent;
    playerText.textContent = `Player1: ${player}`;
    result = check();
    resultText.textContent = result;
    dissable(choiceBtns);
  })
);

choiceBtns2.forEach((btn) => {
  btn.addEventListener("click", () => {
    player2 = btn.textContent;
    computerText.textContent = `Player2: ${player2}`;
    result = check();
    resultText.textContent = result;
    dissable(choiceBtns2);
  });
});

function check() {
  if (player === player2) {
    return "DRAW!";
  } else if (player2 === "ROCK") {
    if (player === "PAPER") {
      scorePl1.innerHTML = score1 += 1;
      return "Player 1 WINS";
    } else {
      scorePl2.innerHTML = score2 += 1;
      return "Player 2 WINS";
    }
  } else if (player2 === "PAPER") {
    if (player === "SCISSORS") {
      scorePl1.innerHTML = score1 += 1;
      return "Player 1 WINS";
    } else {
      scorePl2.innerHTML = score2 += 1;
      return "Player 2 WINS";
    }
  } else if (player2 === "SCISSORS") {
    if (player === "ROCK") {
      scorePl1.innerHTML = score1 += 1;
      return "Player 1 WINS";
    } else {
      scorePl2.innerHTML = score2 += 1;
      return "Player 2 WINS";
    }
  }
}

function dissable(buttons) {
  buttons.forEach((btn) => {
    btn.disabled = true;
  });
}

function enable(buttons) {
  buttons.forEach((btn) => {
    btn.disabled = false;
  });
}

function restartGame() {
  playerText.textContent = `Player1: `;
  computerText.textContent = `Player1: `;
  resultText.textContent = "Result:";
  enable(choiceBtns2);
  enable(choiceBtns);
  player = "";
  player2 = "";
}
