// ============== DOM Elements ==============
const timeDisplay = document.getElementById("time");
const stopButton = document.getElementById("stop-btn");
const stopWatchBtn = document.getElementById("stop-watch-btn");
const resetBtn = document.getElementById("reset-btn");
const fullscreenBtn = document.getElementById("fullscreen-btn");
const fullscreenCloseBtn = document.getElementById("fullscreen-close");
const container = document.querySelector(".container");
const body = document.body;
const lightModeBtn = document.getElementById("light-mode-btn");
const studyModeBtn = document.getElementById("study-mode-btn");
const lapCountDisplay = document.getElementById("lap-count");
const bestLapDisplay = document.getElementById("best-lap");

// ============== Clock Variables ==============
let clockInterval = null;
let clockRunning = true;

// ============== Stopwatch Variables ==============
let seconds = 0;
let minutes = 0;
let hours = 0;
let stopwatchInterval = null;
let isRunning = false;
let laps = [];
let bestLapTime = null;

// ============== Mode Variables ==============
let isDarkMode = false;
let isStudyMode = false;
let isFullscreen = false;

// ============== Clock Functions ==============
function formatTime(date) {
    const h = String(date.getHours()).padStart(2, '0');
    const m = String(date.getMinutes()).padStart(2, '0');
    const s = String(date.getSeconds()).padStart(2, '0');
    return `${h}:${m}:${s}`;
}

function showTime() {
    if (clockRunning) {
        const currentTime = new Date();
        timeDisplay.innerText = formatTime(currentTime);
    }
}

function initClock() {
    showTime();
    clockInterval = setInterval(showTime, 1000);
}

// ============== Stopwatch Functions ==============
function formatStopwatchTime(h, m, s) {
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function updateStopwatch() {
    seconds++;
    
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
    
    document.getElementById("stop-watch").innerText = formatStopwatchTime(hours, minutes, seconds);
}

function startStopwatch() {
    if (!isRunning) {
        isRunning = true;
        stopwatchInterval = setInterval(updateStopwatch, 100); // Faster updates for smoothness
        stopWatchBtn.innerHTML = '⏸ Stop';
    }
}

function stopStopwatch() {
    if (isRunning) {
        isRunning = false;
        clearInterval(stopwatchInterval);
        stopWatchBtn.innerHTML = '▶ Start';
    }
}

function recordLap() {
    if (isRunning) {
        const lapTime = formatStopwatchTime(hours, minutes, seconds);
        laps.push({ time: lapTime, hours, minutes, seconds });
        
        // Update best lap
        if (laps.length === 1) {
            bestLapTime = { hours, minutes, seconds };
            bestLapDisplay.innerText = lapTime;
        } else {
            const currentLapSeconds = hours * 3600 + minutes * 60 + seconds;
            const bestLapSeconds = bestLapTime.hours * 3600 + bestLapTime.minutes * 60 + bestLapTime.seconds;
            
            if (currentLapSeconds < bestLapSeconds) {
                bestLapTime = { hours, minutes, seconds };
                bestLapDisplay.innerText = lapTime;
            }
        }
        
        lapCountDisplay.innerText = laps.length;
    }
}

function resetStopwatch() {
    stopStopwatch();
    seconds = 0;
    minutes = 0;
    hours = 0;
    laps = [];
    bestLapTime = null;
    document.getElementById("stop-watch").innerText = "00:00:00";
    lapCountDisplay.innerText = "0";
    bestLapDisplay.innerText = "--:--";
}

// ============== Fullscreen Functions ==============
function enterFullscreen() {
    isFullscreen = true;
    container.classList.add("fullscreen");
    fullscreenCloseBtn.classList.remove("hidden");
    stopWatchBtn.innerHTML = '⏸ Stop';
    
    // Make fullscreen elements take full viewport
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(err => {
            console.log("Fullscreen request failed:", err);
        });
    }
    
    startStopwatch();
}

function exitFullscreen() {
    isFullscreen = false;
    container.classList.remove("fullscreen");
    fullscreenCloseBtn.classList.add("hidden");
    stopStopwatch();
    
    if (document.fullscreenElement) {
        document.exitFullscreen();
    }
}

// ============== Mode Functions ==============
function toggleStudyMode() {
    isStudyMode = !isStudyMode;
    isDarkMode = isStudyMode;
    
    const elements = [body, container];
    
    if (isStudyMode) {
        elements.forEach(el => el.classList.add("study-mode"));
        document.querySelectorAll(".section-title").forEach(el => el.classList.add("study-mode"));
        document.querySelectorAll(".time-display").forEach(el => el.classList.add("study-mode"));
        document.querySelectorAll(".header").forEach(el => el.classList.add("study-mode"));
        document.querySelectorAll(".mode-btn").forEach(el => el.classList.add("study-mode"));
        studyModeBtn.classList.add("active");
        lightModeBtn.classList.remove("active");
    } else {
        elements.forEach(el => el.classList.remove("study-mode"));
        document.querySelectorAll(".section-title").forEach(el => el.classList.remove("study-mode"));
        document.querySelectorAll(".time-display").forEach(el => el.classList.remove("study-mode"));
        document.querySelectorAll(".header").forEach(el => el.classList.remove("study-mode"));
        document.querySelectorAll(".mode-btn").forEach(el => el.classList.remove("study-mode"));
        studyModeBtn.classList.remove("active");
        lightModeBtn.classList.add("active");
    }
}

function toggleLightMode() {
    isStudyMode = false;
    isDarkMode = false;
    
    const elements = [body, container];
    elements.forEach(el => el.classList.remove("study-mode"));
    document.querySelectorAll(".study-mode").forEach(el => el.classList.remove("study-mode"));
    studyModeBtn.classList.remove("active");
    lightModeBtn.classList.add("active");
}

// ============== Event Listeners ==============
// Clock Controls
stopButton.addEventListener("click", () => {
    clockRunning = !clockRunning;
    stopButton.innerHTML = clockRunning ? '⏸ Pause Clock' : '▶ Resume Clock';
});

// Stopwatch Controls
stopWatchBtn.addEventListener("click", () => {
    if (isRunning) {
        stopStopwatch();
    } else {
        startStopwatch();
    }
});

resetBtn.addEventListener("click", resetStopwatch);

// Fullscreen Controls
fullscreenBtn.addEventListener("click", enterFullscreen);
fullscreenCloseBtn.addEventListener("click", exitFullscreen);

// Mode Controls
lightModeBtn.addEventListener("click", toggleLightMode);
studyModeBtn.addEventListener("click", toggleStudyMode);

// Keyboard shortcuts
document.addEventListener("keydown", (e) => {
    if (isFullscreen) {
        if (e.key === "Escape") {
            exitFullscreen();
        } else if (e.key === " ") {
            e.preventDefault();
            if (isRunning) {
                stopStopwatch();
            } else {
                startStopwatch();
            }
        } else if (e.key === "l" || e.key === "L") {
            recordLap();
        } else if (e.key === "r" || e.key === "R") {
            resetStopwatch();
        }
    }
});

// Initialize
initClock();
lightModeBtn.classList.add("active");