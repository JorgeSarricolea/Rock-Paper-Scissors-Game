// Funtion to get random choise by the PC
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// Function to get the status of the game
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "TIE";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "YOU WON!";
  } else {
    return "JAVASCRIPT WON";
  }
}

// Main Function to play the game
function playGame(userChoice) {
  const computerChoice = getComputerChoice();
  const result = determineWinner(userChoice, computerChoice);
  const resultMessage = `You chose ${userChoice}, JavaScript chose ${computerChoice}. ${result}`;
  document.querySelector(".result").textContent = resultMessage;
}

// Functions for each buttons
document.getElementById("rock").addEventListener("click", () => {
  playGame("rock");
});
document.getElementById("paper").addEventListener("click", () => {
  playGame("paper");
});
document.getElementById("scissors").addEventListener("click", () => {
  playGame("scissors");
});
