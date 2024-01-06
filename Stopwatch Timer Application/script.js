const minuteLabel = document.getElementById('minutes');
const secondLabel = document.getElementById('seconds');
const millisecondLabel = document.getElementById('milliseconds');

const startButton = document.getElementById('startBtn');
const lapButton = document.getElementById('lapBtn');
const pauseButton = document.getElementById('pauseBtn');
const resetButton = document.getElementById('resetBtn');
const clearLapButton = document.getElementById('clearLapBtn');

const lapList = document.getElementById('laplist');

let minutes = 0, seconds = 0, milliseconds = 0;
let interval;

startButton.addEventListener('click', startTimer);
lapButton.addEventListener('click', lapTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
clearLapButton.addEventListener('click', clearLapList);

function startTimer() {
    interval = setInterval(updateTimer, 10);
    startButton.disabled = true;
}
function lapTimer() { 
    addToLapList();
    startButton.disabled = false;
}
function pauseTimer() {
    clearInterval(interval);
    startButton.disabled = false;
}
function resetTimer() {
    clearInterval(interval);
    resetTimerData();
    startButton.disabled = false;
}
function clearLapList() {
    lapList.innerHTML = '';
}

function updateTimer() {
    milliseconds++;
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
    }
    displayTimer();
}
function displayTimer() {
    millisecondLabel.textContent = padTime(milliseconds);
    secondLabel.textContent = padTime(seconds);
    minuteLabel.textContent = padTime(minutes);
}
function padTime(time) {
    return time.toString().padStart(2, '0');
}

function resetTimerData() {
    minutes = 0; seconds = 0; milliseconds = 0;
    displayTimer();
}
function addToLapList() {
    const lapTime = `${padTime(minutes)}:${padTime(seconds)}:${padTime(milliseconds)}`;
    const listItem = document.createElement('li');
    listItem.innerHTML = `<span>Lap ${lapList.childElementCount +1}: </span> ${lapTime}`;
    lapList.appendChild(listItem);
}