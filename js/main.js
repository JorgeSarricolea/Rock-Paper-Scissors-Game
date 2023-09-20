const options = ["rock", "paper", "scissors"];
// Function to get a random choice by the computer
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  return randomIndex;
}

// Main function to play the game
function playGame(userChoice) {
  // const computerChoice = getComputerChoice();
  const n = getComputerChoice();
  toggleOptions(userChoice, n);
  gameResults(userChoice, n);
}

// Function to hide and show the options
function toggleOptions(userChoice, computerChoice) {
  options.forEach(option => {
    const button = document.getElementById(option);
    button.dataset.clickable = "false";
    button.style.display = "none";

    // Show the user choice
    const userChoiceButton = document.getElementById(options[userChoice]);
    userChoiceButton.style.display = "inline-block";
    console.log("User choice:", userChoice)
  });

  // Show the computer choice
  console.log("Computer choice:", computerChoice)
  const pcChoiceRock = document.getElementById("pc-rock");
  const pcChoicePaper = document.getElementById("pc-paper");
  const pcChoiceScissors = document.getElementById("pc-scissors");

  const pcResults = [pcChoiceRock, pcChoicePaper, pcChoiceScissors];
  pcResults[computerChoice].style.display = "flex"
}

function gameResults(userChoice, computerChoice) {
  if (computerChoice === userChoice) {
    console.log("Tie!");
  } else {
    switch (computerChoice) {
      case 0:
        if (userChoice === 1) {
          console.log("You won!");
          document.body.classList.toggle("user-won");
        } else {
          console.log("Computer won!");
          document.body.classList.toggle("computer-won");
        }
        break;
      case 1:
        if (userChoice === 2) {
          console.log("You won!");
          document.body.classList.toggle("user-won");
        } else {
          console.log("Computer won!");
          document.body.classList.toggle("computer-won");
        }
        break;
      case 2:
        if (userChoice === 0) {
          console.log("You won!");
          document.body.classList.toggle("user-won");
        } else {
          console.log("Computer won!");
          document.body.classList.toggle("computer-won");
        }
        break;
    }
  }
}

function showResults(action, n) {
  document.getElementById(action).addEventListener("click", () => {
    const isClickable = document.getElementById(action).dataset.clickable === "true";
    if (isClickable) {
      playGame(n);
    }
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