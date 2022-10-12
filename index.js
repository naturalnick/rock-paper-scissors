var wins = 0;
var losses = 0;

document.getElementById("rock").addEventListener("click", function() {
  determineWinner(this.id, generateBotChoice());
});

document.getElementById("paper").addEventListener("click", function() {
  determineWinner(this.id, generateBotChoice());
});

document.getElementById("scissors").addEventListener("click", function() {
  determineWinner(this.id, generateBotChoice());
});

function determineWinner(userChoice, botChoice) {
  if (userChoice === botChoice) {
    document.getElementById("result").innerHTML = "Tie!"
    document.getElementById("choices").innerHTML = `You both chose <u>${userChoice}</u>.`;
  } else if ((userChoice === "rock" && botChoice === "scissors") || (userChoice === "paper" && botChoice === "rock") || userChoice === "scissors" && botChoice === "paper")  {
    document.getElementById("result").innerHTML = "You won!";
    document.getElementById("choices").innerHTML = `Your <u>${userChoice}</u> beat the computer's <u>${botChoice}</u>.`;
    wins++;
    document.getElementById("wins").innerHTML = wins;
  } else if ((userChoice === "rock" && botChoice === "paper") || (userChoice === "paper" && botChoice === "scissors") || (userChoice === "scissors" && botChoice === "rock")) {
    document.getElementById("result").innerHTML = "You Lost!"
    document.getElementById("choices").innerHTML = `The computer's <u>${botChoice}</u> beat your <u>${userChoice}</u>.`;
    losses++
    document.getElementById("losses").innerHTML = losses;
  }
};

function generateBotChoice() {
  var newBotChoice = Math.floor(Math.random() * 3);
  if (newBotChoice === 0) return "rock";
  if (newBotChoice === 1) return "paper";
  if (newBotChoice === 2) return "scissors";
};
