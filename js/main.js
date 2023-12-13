// Global choices
const options = ["rock", "paper", "scissors"];

// Function to get a random choice by the computer
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  return randomIndex;
}

// Main function to play the game
function playGame(userChoice) {
  const n = getComputerChoice();
  toggleOptions(userChoice, n);
  gameResults(userChoice, n);
}

// Function to hide and show the options
function toggleOptions(userChoice, computerChoice) {
  options.forEach((option) => {
    const button = document.getElementById(option);
    button.dataset.clickable = "false";
    button.style.display = "none";

    // Show the user choice
    const userChoiceButton = document.getElementById(options[userChoice]);
    userChoiceButton.style.display = "inline-block";
  });

  // Show the computer choice
  const pcChoiceRock = document.getElementById("pc-rock");
  const pcChoicePaper = document.getElementById("pc-paper");
  const pcChoiceScissors = document.getElementById("pc-scissors");

  const pcResults = [pcChoiceRock, pcChoicePaper, pcChoiceScissors];
  pcResults[computerChoice].style.display = "flex";
}

// Function to determine the result of the game using a hash table
function gameResults(userChoice, computerChoice) {
  const resultMessages = {
    tie: "tie!",
    userWon: "you won!",
    computerWon: "computer won!",
  };

  const outcomes = {
    "0-0": "tie",
    "0-1": "computerWon",
    "0-2": "userWon",
    "1-0": "userWon",
    "1-1": "tie",
    "1-2": "computerWon",
    "2-0": "computerWon",
    "2-1": "userWon",
    "2-2": "tie",
  };

  const resultKey = `${userChoice}-${computerChoice}`;
  const result = outcomes[resultKey];

  const showMesage = document.getElementById("result-text");
  const body = document.body;

  switch (result) {
    case "tie":
      body.classList.toggle("tie");
      break;
    case "userWon":
      body.classList.toggle("user-won");
      break;
    case "computerWon":
      body.classList.toggle("computer-won");
      break;
  }

  showMesage.textContent = resultMessages[result].toUpperCase();
}

// Funtion to display the results of the game
function showResults(action, n) {
  document.getElementById(action).addEventListener("click", () => {
    const isClickable =
      document.getElementById(action).dataset.clickable === "true";
    if (isClickable) {
      playGame(n);
    }
    // To show the restart button
    document.getElementById("restart").style.display = "flex";

    //To hide the main title
    document.getElementById("main-title").classList.toggle("hide-style");
  });
}

for (var i = 0; i < 3; i++) {
  (function (index) {
    showResults(options[index], index);
  })(i);
}

// Refresh the page to restart the game
const refreshButton = document.getElementById("restart");
refreshButton.addEventListener("click", () => {
  location.reload();
});
