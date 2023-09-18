// Función para obtener la elección aleatoria de la computadora
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// Función para determinar el resultado del juego
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "Empate";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "¡Ganaste!";
  } else {
    return "La computadora ganó.";
  }
}

// Función principal para manejar el juego
function playGame(userChoice) {
  const computerChoice = getComputerChoice();
  const result = determineWinner(userChoice, computerChoice);
  const resultMessage = `Elegiste ${userChoice}, la computadora eligió ${computerChoice}. ${result}`;
  document.querySelector(".result").textContent = resultMessage;
}

// Agregar eventos a los botones
document.getElementById("rock").addEventListener("click", () => {
  playGame("rock");
});
document.getElementById("paper").addEventListener("click", () => {
  playGame("paper");
});
document.getElementById("scissors").addEventListener("click", () => {
  playGame("scissors");
});
