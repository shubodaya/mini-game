const GAME_DURATION_SECONDS = 30;
const TARGET_SIZE = 58;

const arena = document.querySelector("#arena");
const target = document.querySelector("#target");
const scoreElement = document.querySelector("#score");
const timeElement = document.querySelector("#time");
const finalScoreElement = document.querySelector("#finalScore");
const gameOverElement = document.querySelector("#gameOver");
const restartButton = document.querySelector("#restartButton");
const playAgainButton = document.querySelector("#playAgainButton");

const state = {
  score: 0,
  timeRemaining: GAME_DURATION_SECONDS,
  timerId: null,
  isRunning: false,
};

function updateScore() {
  scoreElement.textContent = state.score.toString();
}

function updateTimer() {
  timeElement.textContent = state.timeRemaining.toString();
}

function getRandomPosition() {
  const bounds = arena.getBoundingClientRect();
  const maxX = Math.max(0, bounds.width - TARGET_SIZE);
  const maxY = Math.max(0, bounds.height - TARGET_SIZE);

  return {
    x: Math.floor(Math.random() * maxX),
    y: Math.floor(Math.random() * maxY),
  };
}

function moveTarget() {
  const position = getRandomPosition();

  target.style.left = `${position.x}px`;
  target.style.top = `${position.y}px`;
}

function showGameOver() {
  state.isRunning = false;
  target.hidden = true;
  finalScoreElement.textContent = state.score.toString();
  gameOverElement.hidden = false;
}

function stopTimer() {
  if (state.timerId) {
    window.clearInterval(state.timerId);
    state.timerId = null;
  }
}

function tick() {
  state.timeRemaining -= 1;
  updateTimer();

  if (state.timeRemaining <= 0) {
    stopTimer();
    showGameOver();
  }
}

function startGame() {
  stopTimer();

  state.score = 0;
  state.timeRemaining = GAME_DURATION_SECONDS;
  state.isRunning = true;

  updateScore();
  updateTimer();

  gameOverElement.hidden = true;
  target.hidden = false;
  moveTarget();

  state.timerId = window.setInterval(tick, 1000);
}

target.addEventListener("click", () => {
  if (!state.isRunning) {
    return;
  }

  state.score += 1;
  updateScore();
  moveTarget();
});

restartButton.addEventListener("click", startGame);
playAgainButton.addEventListener("click", startGame);
window.addEventListener("resize", () => {
  if (state.isRunning) {
    moveTarget();
  }
});

startGame();
