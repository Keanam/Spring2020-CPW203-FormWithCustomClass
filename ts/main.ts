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

function getMovieShow():MovieShow{
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

function displayMovieShow(myDisplay:MovieShow):void{
    // TODO: Display video game below the form
}

// ADD VALIDATION CODE
function isAllDataValid(){
    return true;
}