let wins = 0;
let losses = 0;

const buttons = document.getElementsByClassName("btn");
const result = document.getElementById("result");
const choices = document.getElementById("choices");
const scores = document.getElementById("scores");

for (let button of buttons) {
  button.addEventListener("click", playGame);
}

function playGame(event) {
  const userChoice = event.target.id;
  const botChoice = generateBotChoice();
  const winner = determineWinner(userChoice, botChoice);
  updateScores(winner);
  displayMessages(winner, userChoice, botChoice);
}

function determineWinner(userChoice, botChoice) {
  if (userChoice === botChoice) return "Tie!";
    switch (userChoice) {
      case "rock":
        return botChoice === "paper" ? "You lost!" : "You won!"
        case "paper":
          return botChoice === "scissors" ? "You lost!" : "You won!"
        case "scissors":
        return botChoice === "rock" ? "You lost!" : "You won!"
  }
};

function generateBotChoice() {
  const botChoices = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * 3);
  return botChoices[random];
};

function updateScores(winner) {
  if (winner != "Tie!") return winner === "You won!" ? wins++ : losses++;
}

function displayMessages(winner, userChoice, botChoice) {
  result.textContent = winner;
  switch (winner) {
    case "You won!":
      choices.textContent = `Your ${userChoice} beat the computers ${botChoice}.`;
      break;
      case "You lost!":
      choices.textContent = `The computers ${botChoice} beat your ${userChoice}.`;
      break;
      case "Tie!":
      choices.textContent = `You both chose ${userChoice}.`;
      break;
  }
  scores.textContent = `Wins: ${wins} - Losses ${losses}`
}