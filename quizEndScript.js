// Global variables
var submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function () {
    var initials = document.getElementById("inputInitials").value;
    localStorage.setItem("initials", initials);

    location.href = "7Highscores.html"
})

