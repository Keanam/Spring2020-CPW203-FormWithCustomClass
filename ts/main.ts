class MotionPicture{
    title:string;
    score:number;
    rating:string;
    platform:boolean;
}

//test code
/*
let myShow = new MovieShow();
myShow.title = "Mortal Kombat";
myShow.rating = "3"
myShow.platform = true
*/

window.onload = function(){
    let addBtn = 
        <HTMLElement>document.querySelector("input[type=button]");
    addBtn.onclick = addMovieShow;
}
/**
 * Clears all errors in the validation summary
 */
function clearAllErrors(){
    let errSummary = document.getElementById("validation-summary");
    errSummary.innerText = "";
}

function addMovieShow(){
    console.log("Add AHHH was called");
    clearAllErrors();


    if(isAllDataValid()){
        let movieShow = getMovieShow();
        displayMovieShow(movieShow);
    }
}

/**
 *
 * Gets all motion picture data from the form
 * and returns it in a MotionPicture object
 */

function getMovieShow():MotionPicture{
    let movieShow = new MotionPicture();

    // populate with data
    let titleInput =
        <HTMLInputElement>document.getElementById("title");
    movieShow.title = titleInput.value;

    let scoreInput =
        <HTMLInputElement>document.getElementById("score");
    movieShow.score = parseFloat(scoreInput.value);

    let ratingInput =
        <HTMLInputElement>document.getElementById("rating");
    movieShow.rating = ratingInput.value;

    let checkedBox =
        <HTMLInputElement>document.getElementById("platform");
    movieShow.platform = checkedBox.checked;
    /*
    if(checkedBox.checked){
        movieShow.platform = true;
    }
    else{
        movieShow.platform = false;
    }
    */
   console.log(movieShow);
   return movieShow;
}

function displayMovieShow(myDisplay:MotionPicture):void{
    // TODO: Display movie and show below the form
    let displayDiv = document.getElementById("display");

    // Create <h2> with motion title
    let displayHeading = document.createElement("h2");
    displayHeading.innerText = myDisplay.title;

    // Create paragraph with display details
    let displayInfo = document.createElement("p");
    let mediaDisplay = "";
    if(myDisplay.platform){
        mediaDisplay = "This is a television series!";
    }
    else{
        mediaDisplay = "This was in theaters!";
    }
    /*
    displayInfo.innerText = myDisplay.title + " has an audience score of " +
                            myDisplay.score + ". The recommended audience rating is " +
                            myDisplay.rating + ". It is/was" + notDigitalDisplay + " in theaters";
    */

    displayInfo.innerText = `${myDisplay.title} has a rating of ${myDisplay.score}. 
                            The recommended audience rating is ${myDisplay.rating}. 
                            ${mediaDisplay}`;

    // Add <h2> in the <div id="display">
    displayDiv.appendChild(displayHeading);
    // Add <p> game info
    displayDiv.appendChild(displayInfo);
}

function getInputById(id:string):HTMLInputElement{
    return <HTMLInputElement>document.getElementById(id);
}

// ADD VALIDATION CODE
function isAllDataValid(){
    let isValid = true;

    let title = getInputById("title").value;
    if(title == ""){
        isValid = false;
        addErrorMessage("Title is required");
    }

    let score = getInputById("score").value;
    let scoreValue = parseFloat(score);
    if(score == "" || isNaN(scoreValue) || scoreValue < 0 || scoreValue > 5){
        isValid = false;
        addErrorMessage("Score is required! 0-5");
    }

    let rating = (<HTMLOptionElement>document.getElementById("rating")).value
    if(rating == ""){
        isValid = false;
        addErrorMessage("You must choose a rating!");
    }

    return isValid;
}

function addErrorMessage(errMsg:string){
    let errSummary = document.getElementById("validation-summary");
    let errItem = document.createElement("li");
    errItem.innerText = errMsg;
    errSummary.appendChild(errItem);
}