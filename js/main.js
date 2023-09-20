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
  options.forEach(option => {
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

// Function to determine the result of the game
function gameResults(userChoice, computerChoice) {
  const userWonMessage = "you won!";
  const computerWonMessage = "computer won!";
  const tieMessage = "tie!";
  const showMesage = document.getElementById("result-text");
  if (computerChoice === userChoice) {
    document.body.classList.toggle("tie");
    showMesage.textContent = tieMessage.toUpperCase();
  } else {
    switch (computerChoice) {
      case 0:
        if (userChoice === 1) {
          document.body.classList.toggle("user-won");
          showMesage.textContent = userWonMessage.toUpperCase();
        } else {
          document.body.classList.toggle("computer-won");
          showMesage.textContent = computerWonMessage.toUpperCase();
        }
        break;
      case 1:
        if (userChoice === 2) {
          document.body.classList.toggle("user-won");
          showMesage.textContent = userWonMessage.toUpperCase();
        } else {
          document.body.classList.toggle("computer-won");
          showMesage.textContent = computerWonMessage.toUpperCase();
        }
        break;
      case 2:
        if (userChoice === 0) {
          document.body.classList.toggle("user-won");
          showMesage.textContent = userWonMessage.toUpperCase();
        } else {
          document.body.classList.toggle("computer-won");
          showMesage.textContent = computerWonMessage.toUpperCase();
        }
        break;
    }
  }
}

// Funtion to display the results of the game
function showResults(action, n) {
  document.getElementById(action).addEventListener("click", () => {
    const isClickable = document.getElementById(action).dataset.clickable === "true";
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