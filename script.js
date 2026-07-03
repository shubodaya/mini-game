const GAME_DURATION_SECONDS = 30;
const TARGET_SIZE = 58;
const DIFFICULTIES = {
  easy: {
    label: "Easy",
    moveIntervalMs: 1400,
  },
  medium: {
    label: "Medium",
    moveIntervalMs: 900,
  },
  hard: {
    label: "Hard",
    moveIntervalMs: 550,
  },
};

const arena = document.querySelector("#arena");
const target = document.querySelector("#target");
const scoreElement = document.querySelector("#score");
const timeElement = document.querySelector("#time");
const finalScoreElement = document.querySelector("#finalScore");
const gameOverElement = document.querySelector("#gameOver");
const restartButton = document.querySelector("#restartButton");
const playAgainButton = document.querySelector("#playAgainButton");
const difficultyButtons = document.querySelectorAll("[data-difficulty]");

const state = {
  score: 0,
  timeRemaining: GAME_DURATION_SECONDS,
  timerId: null,
  moveTimerId: null,
  isRunning: false,
  difficulty: "easy",
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
  stopMoveTimer();
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

function stopMoveTimer() {
  if (state.moveTimerId) {
    window.clearInterval(state.moveTimerId);
    state.moveTimerId = null;
  }
}

function startMoveTimer() {
  stopMoveTimer();
  state.moveTimerId = window.setInterval(moveTarget, DIFFICULTIES[state.difficulty].moveIntervalMs);
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
  stopMoveTimer();

  state.score = 0;
  state.timeRemaining = GAME_DURATION_SECONDS;
  state.isRunning = true;

  updateScore();
  updateTimer();

  gameOverElement.hidden = true;
  target.hidden = false;
  moveTarget();

  state.timerId = window.setInterval(tick, 1000);
  startMoveTimer();
}

function updateDifficultyButtons() {
  difficultyButtons.forEach((button) => {
    const isActive = button.dataset.difficulty === state.difficulty;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", isActive.toString());
  });
}

function setDifficulty(difficulty) {
  if (!DIFFICULTIES[difficulty]) {
    return;
  }

  state.difficulty = difficulty;
  updateDifficultyButtons();

  if (state.isRunning) {
    startGame();
  }
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
difficultyButtons.forEach((button) => {
  button.addEventListener("click", () => setDifficulty(button.dataset.difficulty));
});
window.addEventListener("resize", () => {
  if (state.isRunning) {
    moveTarget();
  }
});

updateDifficultyButtons();
startGame();
