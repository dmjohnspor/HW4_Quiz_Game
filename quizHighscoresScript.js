// Global variables
var backBtn = document.getElementById("backBtn");
var clearBtn = document.getElementById("clearBtn");
var highscoreList = document.getElementById("highscoreList");
var score = localStorage.getItem("seconds");
var initials = localStorage.getItem("initials");
var storedScores = [];

// "Go back" button function
backBtn.addEventListener("click", function () {
    location.replace("1quizMain.html");
})

// "Clear" scores function
clearBtn.addEventListener("click", function () {
    highscoreList.remove();
    localStorage.clear();
})

// // Adding highscores to localStorage
var currentScore = initials + " - " + score;
var storedScore = localStorage.setItem("highscore", currentScore);

// Adding highscores to the list
var li = document.createElement("li");
li.textContent = "😍 " + localStorage.getItem("highscore");
highscoreList.appendChild(li);





