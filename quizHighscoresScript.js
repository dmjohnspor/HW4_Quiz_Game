// Global variables
var backBtn = document.getElementById("backBtn");
var clearBtn = document.getElementById("clearBtn");
var highscoreList = document.getElementById("highscoreList");
var li = document.createElement("li");


// "Go back" button function
backBtn.addEventListener("click", function () {
    location.replace("1quizMain.html");
})

// "Clear" scores function
clearBtn.addEventListener("click", function () {
    highscoreList.remove();
    localStorage.clear();
})

// Render highscore list
function renderHighscores() {
    var highscores = localStorage.getItem("highscores");
    JSON.parse(highscores);
    for (var i = 0; i < highscores.length; i++) {
        var li = document.createElement("li");
        li.textContent = "😍 " + highscores[i];
        li.setAttribute("class", "li");
        highscoreList.appendChild(li);
    }
}

renderHighscores();