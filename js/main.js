// Function to get a random choice by the computer
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// Main function to play the game
function playGame(userChoice) {
  const computerChoice = getComputerChoice();
  toggleOptions(userChoice, computerChoice);
}

// Function to hide and show the options
function toggleOptions(userChoice, computerChoice) {
  const options = ["rock", "paper", "scissors"];
  options.forEach(option => {
    const button = document.getElementById(option);
    button.dataset.clickable = "false";
    button.style.display = "none";
  });

  // Show the user choice
  const userChoiceButton = document.getElementById(userChoice);
  userChoiceButton.style.display = "inline-block";
  console.log("User choice:", userChoice)

  // Show the computer choice
  console.log("Computer choice:", computerChoice)
  const pcChoiceRock = document.getElementById("pc-rock");
  const pcChoicePaper = document.getElementById("pc-paper");
  const pcChoiceScissors = document.getElementById("pc-scissors");

  if (computerChoice === "rock") {
    pcChoiceRock.style.display = "inline-block";
  }
  else if (computerChoice === "paper") {
    pcChoicePaper.style.display = "inline-block";
  }
  else if (computerChoice === "scissors") {
    pcChoiceScissors.style.display = "inline-block";
  }

  // Conditions if computer wins

  if (computerChoice === "rock" && userChoice === "scissors") {
    console.log("Computer won!");
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    console.log("Computer won!");
  }
  if (computerChoice === "scissors" && userChoice === "paper") {
    console.log("Computer won!");
  }

  // Conditions if user wins

  if (computerChoice === "rock" && userChoice === "paper") {
    console.log("You won!");
  }
  if (computerChoice === "paper" && userChoice === "scissors") {
    console.log("You won!");
  }
  if (computerChoice === "scissors" && userChoice === "rock") {
    console.log("You won!");
  }

  // Conditions if tie

  if (computerChoice === "rock" && userChoice === "rock") {
    console.log("Tie!");
  }
  if (computerChoice === "paper" && userChoice === "paper") {
    console.log("Tie!");
  }
  if (computerChoice === "scissors" && userChoice === "scissors") {
    console.log("Tie!");
  }
}

// Function for each button
document.getElementById("rock").addEventListener("click", () => {
  const isClickable = document.getElementById("rock").dataset.clickable === "true";
  if (isClickable) {
    playGame("rock");
  }
});

document.getElementById("paper").addEventListener("click", () => {
  const isClickable = document.getElementById("paper").dataset.clickable === "true";
  if (isClickable) {
    playGame("paper");
  }
});

document.getElementById("scissors").addEventListener("click", () => {
  const isClickable = document.getElementById("scissors").dataset.clickable === "true";
  if (isClickable) {
    playGame("scissors");
  }
});
