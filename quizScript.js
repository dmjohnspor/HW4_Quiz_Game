// Global scope variables for timer
var timer = document.getElementById("timer");
var secondsLeft = 100000
timer.textContent = "Time left: " + secondsLeft;

// Global scope variables for answer buttons
var wrongBtn = document.querySelectorAll(".wrong");
var correctBtn = document.querySelector("#correct");
var message = document.querySelector("#message");


// Code for timer function
setInterval(function () {
    secondsLeft--;
    timer.textContent = "Time left: " + secondsLeft;

    if (secondsLeft === 0) {
        window.location.href = "6quizEnd.html";
    }
}, 1000)

//Functions for displaying messages "wrong" or "correct"
function correctMessage() {
    message.textContent = "Correct!!!"
    setTimeout(function () { window.location.href = "3quizQuestion2.html" }, 1000);

}

//Onclick event listeners to convey the messages
correctBtn.addEventListener("click", correctMessage);
