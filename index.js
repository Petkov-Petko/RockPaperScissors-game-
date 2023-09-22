const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

choiceBtns.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    result = check();
    resultText.textContent = result;
  })
);

function computerTurn() {
  const num = Math.floor(Math.random() * 3) + 1;

  switch (num) {
    case 1:
      computer = "ROCK";
      break;
    case 2:
      computer = "PAPER";
      break;
    case 3:
      computer = "SCISSORS";
      break;
  }
}

function check() {
  if (player == computer) {
    return "DRAW!";
  } else if (computer == "ROCK") {
    return player == "PAPER" ? "You Win!" : "You LOSE!";
  } else if (computer == "PAPER") {
    return player == "SCISSORS" ? "You Win!" : "You LOSE!";
  } else if (computer == "SCISSORS") {
    return player == "ROCK" ? "You Win!" : "You LOSE!";
  }
}
