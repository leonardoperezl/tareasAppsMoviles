function change_color_pomodoro(mode) {
    if (mode === "break") {
        document.getElementById("body").className = "body--break"
        document.getElementById("container").className = "container--break"
        document.getElementById("pomodoroButton").className = "container__modeButtons-pButton--break"
        document.getElementById("breakButton").className = "container__modeButtons-bButton--break"
        document.getElementById("startButton").className = "container__timeButtons-iButton--break"
        document.getElementById("resetButton").className = "container__timeButtons-rButton--break"
        document.querySelector(".container__timer").textContent = "5:00"
    } else if (mode === "pomodoro") {
        document.getElementById("body").className = "body--pomodoro"
        document.getElementById("container").className = "container--pomodoro"
        document.getElementById("pomodoroButton").className = "container__modeButtons-pButton--pomodoro"
        document.getElementById("breakButton").className = "container__modeButtons-bButton--pomodoro"
        document.getElementById("startButton").className = "container__timeButtons-iButton--pomodoro"
        document.getElementById("resetButton").className = "container__timeButtons-rButton--pomodoro"
        document.querySelector(".container__timer").textContent = "25:00"
    }
}


// function change_color_pomodoro(mode) {
//     const themeStylesheet = document.getElementById("themeStylesheet");

//     if (mode === "pomodoro") {
//         themeStylesheet.setAttribute("href", "styles_pomodoro.css");
//         document.querySelector(".pomodoro__container-timer").textContent = "25:00"
//     } else if (mode === "break") {
//         themeStylesheet.setAttribute("href", "styles_break.css");
//         document.querySelector(".pomodoro__container-timer").textContent = "5:00"
//     }
// }

// function startTimer(duration, display) {
//     let timer = duration, minutes, seconds;
//     timerInterval = setInterval(function () {
//         minutes = parseInt(timer / 60, 10);
//         seconds = parseInt(timer % 60, 10);

//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         display.textContent = minutes + ":" + seconds;

//         if (--timer < 0) {
//             clearInterval(timerInterval);
//             alert("Time's up!");
//             isRunning = false;
//         }
//     }, 1000);
// }

// document.getElementById('startButton').addEventListener('click', function () {
//     if (!isRunning) {
//         isRunning = true;
//         let duration = 60 * 25; // 25 minutes
//         let display = document.querySelector('.pomodoro__container-timer');
//         startTimer(duration, display);
//     }
// });

// function resetTimer() {
//     clearInterval(timerInterval);
//     document.querySelector('.pomodoro__container-timer').textContent = "25:00";
//     isRunning = false;
// }