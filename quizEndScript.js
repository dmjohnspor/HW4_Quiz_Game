// Global variables
var submitBtn = document.getElementById("submitBtn");
var score = localStorage.getItem("seconds");
var timer = document.getElementById("timer");
var finalScore = document.getElementById("finalScore");

// Display how many seconds where left
timer.textContent = "Time left: " + score;

// Display final score
finalScore.textContent = "Your final score: " + score;


submitBtn.addEventListener("click", function () {
    var initials = document.getElementById("inputInitials").value;
    localStorage.setItem("initials", initials);

    location.href = "7Highscores.html"
})

