var MotionPicture = (function () {
    function MotionPicture() {
    }
    return MotionPicture;
}());
window.onload = function () {
    var addBtn = document.querySelector("input[type=button]");
    addBtn.onclick = addMovieShow;
};
function clearAllErrors() {
    var errSummary = document.getElementById("validation-summary");
    errSummary.innerText = "";
}
function addMovieShow() {
    console.log("Add AHHH was called");
    clearAllErrors();
    if (isAllDataValid()) {
        var movieShow = getMovieShow();
        displayMovieShow(movieShow);
    }
}
function getMovieShow() {
    var movieShow = new MotionPicture();
    var titleInput = document.getElementById("title");
    movieShow.title = titleInput.value;
    var scoreInput = document.getElementById("score");
    movieShow.score = parseFloat(scoreInput.value);
    var ratingInput = document.getElementById("rating");
    movieShow.rating = ratingInput.value;
    var checkedBox = document.getElementById("platform");
    movieShow.platform = checkedBox.checked;
    console.log(movieShow);
    return movieShow;
}
function displayMovieShow(myDisplay) {
    var displayDiv = document.getElementById("display");
    var displayHeading = document.createElement("h2");
    displayHeading.innerText = myDisplay.title;
    var displayInfo = document.createElement("p");
    var mediaDisplay = "";
    if (myDisplay.platform) {
        mediaDisplay = "This is a television series!";
    }
    else {
        mediaDisplay = "This was in theaters!";
    }
    displayInfo.innerText = myDisplay.title + " has a rating of " + myDisplay.score + ". \n                            The recommended audience rating is " + myDisplay.rating + ". \n                            " + mediaDisplay;
    displayDiv.appendChild(displayHeading);
    displayDiv.appendChild(displayInfo);
}
function getInputById(id) {
    return document.getElementById(id);
}
function isAllDataValid() {
    var isValid = true;
    var title = getInputById("title").value;
    if (title == "") {
        isValid = false;
        addErrorMessage("Title is required");
    }
    var score = getInputById("score").value;
    var scoreValue = parseFloat(score);
    if (score == "" || isNaN(scoreValue) || scoreValue < 0 || scoreValue > 5) {
        isValid = false;
        addErrorMessage("Score is required! 0-5");
    }
    var rating = document.getElementById("rating").value;
    if (rating == "") {
        isValid = false;
        addErrorMessage("You must choose a rating!");
    }
    return isValid;
}
function addErrorMessage(errMsg) {
    var errSummary = document.getElementById("validation-summary");
    var errItem = document.createElement("li");
    errItem.innerText = errMsg;
    errSummary.appendChild(errItem);
}
