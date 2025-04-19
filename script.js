document.addEventListener("DOMContentLoaded", () => {
  let count = 0;
  const intervalId = setInterval(() => {
    console.log(`повідомлення ${++count}`);
    if (count === 5) {
      clearInterval(intervalId);
      console.log("інтервал зупинено");
    }
  }, 1000);

  const box = document.getElementById("box");
  let pos = 0;

  const move = setInterval(() => {
    pos += 5;
    box.style.left = pos + "px";
    box.style.width = 50 + (pos / 5) + "px";
    if (pos >= 300) clearInterval(move);
  }, 100);

  let score = 0;
  const gameArea = document.getElementById("game-area");
  const scoreDisplay = document.getElementById("score");
  const target = document.getElementById("target");

  target.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
  });

  const gameInterval = setInterval(() => {
    const x = Math.random() * (gameArea.clientWidth - 30);
    const y = Math.random() * (gameArea.clientHeight - 30);
    target.style.left = x + "px";
    target.style.top = y + "px";
  }, 800);

  setTimeout(() => {
    clearInterval(gameInterval);
    target.remove();
    alert("гру завершено! очки: " + score);
  }, 10000);

  function startTimer() {
    const seconds = parseInt(document.getElementById("timeInput").value);
    if (isNaN(seconds) || seconds <= 0) {
      alert("введіть коректне число секунд!");
      return;
    }

    setTimeout(() => {
      alert(`час вийшов! минуло ${seconds} секунд`);
    }, seconds * 1000);
  }

  const startBtn = document.getElementById("startBtn");
  startBtn.addEventListener("click", startTimer);
});
