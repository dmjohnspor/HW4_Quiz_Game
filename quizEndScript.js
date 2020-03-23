// Global variables
var submitBtn = document.getElementById("submitBtn");
var timer = document.getElementById("timer");
var finalScore = document.getElementById("finalScore");
var score = localStorage.getItem("seconds");


// Display how many seconds are left
timer.textContent = "Time left: " + score;

// Display final score
finalScore.textContent = "Your final score: " + score;


// Add new score to the stored scores list
function addScore() {
    var initials = document.getElementById("inputInitials").value;
    var scoreToStore = initials + " - " + score;
    var scoreList = [];
    scoreList.push(scoreToStore);
    var highscores = localStorage.getItem("highscores");

    if (!highscores) { localStorage.setItem("highscores", scoreList) }
    else {
        scoreList.push(scoreToStore);
        var newKey = JSON.stringify(scoreList);
        localStorage.setItem("highscores", newKey);
    }
}

submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    addScore();
    location.replace("7Highscores.html");
})









