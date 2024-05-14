const timer = document.querySelector(".timer");
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    timer.innerHTML = formatTime(elapsedTime);
  }, 10);
  startBtn.disabled = true;
  stopBtn.disabled = false;
}

function formatTime() {
  const milliSeconds = Math.floor((elapsedTime % 1000) / 10);
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));

  return (
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
    ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    ":" +
    (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
    "." +
    (milliSeconds > 9 ? milliSeconds : "0" + milliSeconds)
  );
}

function stop() {
  clearInterval(timerInterval);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

function reset() {
  timer.innerHTML = "00:00:00";
  clearInterval(timerInterval);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);
