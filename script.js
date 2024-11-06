// Variáveis para pontuação, vida e controle do jogo
let score = 0;
let lives = 20;
let gameInterval;
let ralphInterval;

// Seleção de elementos
const scoreDisplay = document.getElementById("score");
const livesDisplay = document.getElementById("lives");
const gameOverDisplay = document.getElementById("gameOver");
const finalScoreDisplay = document.getElementById("finalScore");

// Função para iniciar o jogo
function startGame() {
  gameInterval = setInterval(decreaseLife, 2000);
  ralphInterval = setInterval(showRalph, 1000);
}

// Função para diminuir a vida
function decreaseLife() {
  lives--;
  livesDisplay.textContent = lives;
  if (lives <= 0) endGame();
}

// Função para mostrar Ralph aleatoriamente
function showRalph() {
  const windows = document.querySelectorAll(".window");
  const randomWindow = windows[Math.floor(Math.random() * windows.length)];

  const ralphImage = document.createElement("img");
  ralphImage.src = "ralph.png"; // Coloque aqui a imagem de Ralph
  ralphImage.className = "ralph";
  randomWindow.appendChild(ralphImage);
  ralphImage.style.display = "block";

  // Ao clicar em Ralph, aumente os pontos
  ralphImage.addEventListener("click", () => {
    score += 10;
    scoreDisplay.textContent = score;
    randomWindow.removeChild(ralphImage);
  });

  // Remover Ralph após um tempo
  setTimeout(() => {
    if (randomWindow.contains(ralphImage)) {
      randomWindow.removeChild(ralphImage);
    }
  }, 800);
}

// Função para terminar o jogo
function endGame() {
  clearInterval(gameInterval);
  clearInterval(ralphInterval);
  finalScoreDisplay.textContent = score;
  gameOverDisplay.style.display = "block";
}

// Iniciar o jogo
startGame();
