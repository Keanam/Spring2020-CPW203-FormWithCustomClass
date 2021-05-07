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

function addMovieShow(){
    console.log("Add AHHH was called");

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

// ADD VALIDATION CODE
function isAllDataValid(){
    return true;
}