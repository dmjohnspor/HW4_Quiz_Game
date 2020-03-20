// Global scope variables for timer
var timer = document.getElementById("timer");
var secondsLeft = 75;
timer.textContent = "Time left: " + secondsLeft;

// Global scope variables for answer buttons
var wrongBtns = document.getElementsByClassName("wrongBtn")
var correctBtn = document.getElementById("correctBtn");
var message = document.querySelector("#message");


// Code for timer function
setInterval(function () {
    secondsLeft--;
    timer.textContent = "Time left: " + secondsLeft;

    if (secondsLeft <= 0) {
        window.location.href = "6quizEnd.html";
    }
}, 1000)

//Event listeners for the correct answer. Displays "correct" and redirects to next question.
correctBtn.addEventListener("click", function () {
    message.textContent = "Correct!!!";
    setTimeout(function () { window.location.href = "5quizQuestion4.html" }, 1000);
});

//Event listener for the wrong answer. Displays "wrong" and subtracts 5 seconds off the timer.
for (var i = 0; i < wrongBtns.length; i++) {
    wrongBtns[i].addEventListener("click", function () {
        secondsLeft -= 5;
        message.textContent = "Wrong...";
        setTimeout(function () { message.textContent = ""; }, 1000)
    });
}