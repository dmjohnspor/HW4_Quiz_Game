// Global scope variables for timer
var timer = document.getElementById("timer");
var secondsLeft = 100000
timer.textContent = "Time left: " + secondsLeft;

// Global scope variables for answer buttons
var wrongBtns = document.getElementsByClassName("wrongBtn")
var correctBtn = document.getElementById("correctBtn");
var message = document.querySelector("#message");


// Code for timer function
setInterval(function () {
    secondsLeft--;
    timer.textContent = "Time left: " + secondsLeft;

    if (secondsLeft === 0) {
        window.location.href = "6quizEnd.html";
    }
}, 1000)

//Onclick event listeners to convey the messages
correctBtn.addEventListener("click", function () {
    message.textContent = "Correct!!!";
    setTimeout(function () { window.location.href = "3quizQuestion2.html" }, 1000);
});

for (var i = 0; i < wrongBtns.length; i++) {
    wrongBtns[i].addEventListener("click", function () {
        message.textContent = "Wrong...";
        setTimeout(function () { message.textContent = ""; }, 1000)
    });
}
