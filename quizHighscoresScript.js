// Global variables
var backBtn = document.getElementById("backBtn");
var clearBtn = document.getElementById("clearBtn");
var list = document.getElementById("highscoreList");

// Go back button function
backBtn.addEventListener("click", function () {
    location.replace("1quizMain.html");
})

// Clear scores function
clearBtn.addEventListener("click", function () {
    list.remove();
})

// Adding highscores to the list
var submittedInitials = function () {
    var initials = localStorage.getItem("initials");
    var liInitial = document.createElement("li");
    liInitial.setAttribute("class", "listedInitial");
    liInitial.textContent = initials;
    list.appendChild(liInitial);
}

submittedInitials();