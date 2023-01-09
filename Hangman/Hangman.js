console.log(`HANGMAN`);

/*
Step #1 declearing the DOM and the rest of the stuff that we are going to need.
*/

// Alphabet BTNs
let alphabetContainer = document.getElementById("alphabetContainer");
let btnA = alphabetContainer.firstElementChild;
let btnB = btnA.nextElementSibling;
let btnC = btnB.nextElementSibling;
let btnD = btnC.nextElementSibling;
let btnE = btnD.nextElementSibling;
let btnF = btnE.nextElementSibling;
let btnG = btnF.nextElementSibling;
let btnH = btnG.nextElementSibling;
let btnI = btnH.nextElementSibling;
let btnJ = btnI.nextElementSibling;
let btnK = btnJ.nextElementSibling;
let btnL = btnK.nextElementSibling;
let btnM = btnL.nextElementSibling;
let btnN = btnM.nextElementSibling;
let btnO = btnN.nextElementSibling;
let btnP = btnO.nextElementSibling;
let btnQ = btnP.nextElementSibling;
let btnR = btnQ.nextElementSibling;
let btnS = btnR.nextElementSibling;
let btnT = btnS.nextElementSibling;
let btnU = btnT.nextElementSibling;
let btnV = btnU.nextElementSibling;
let btnW = btnV.nextElementSibling;
let btnX = btnW.nextElementSibling;
let btnY = btnX.nextElementSibling;
let btnZ = btnY.nextElementSibling;
let btnSpace = document.lastElementChild;

let categorySelection = document.getElementById("categorySelection");
let topicInfo = document.getElementById("topicInfo");

//Food category BTN + food array + clues
let foodBtn = document.getElementById("foodBtn");
let arrayOfFoods = ["french-tost", "crispy-fried-calamari", "reviera-hamburger"];
let arrayOfFoodClues = ["pressed bread", "sea cooked tentacles", "spanish burger"];

//Movies category BTN + movies array + clues
let moviesBtn = document.getElementById("moviesBtn");
let arrayOfMovies = ["harry-potter-two", "lord-of-the rings", "terminator"];
let arrayOfMovieClues = ["brooms", "tolken", "skynet"]

//TV Shows category BTN + TV Shows array + clues
let tvShowsBtn = document.getElementById("tvShowsBtn");
let arrayOfTvShows = ["super-naturale", "the-walking-dead", "rings-of-power"];
let arrayOfTvShowClues = ["brother hunters", "zombies", "tolken"];

//Games category BTN + Games array + clues
let gamesBtn = document.getElementById("gamesBtn");
let arrayOfGames = ["call-of-duty", "world-of-warcraft", "age-of-empires"];
let arrayOfGameClues = ["activision", "blizzard", "ensemble studios"]

// Chosen category display options
let chosenCategoryDiv = document.getElementById("chosenCategoryDiv");
let arrayOfChoise = ["food", "movies", "tv shows", "games"];

// GUESS CONTAINER INPUT
let guessContainer = document.getElementById("guessContainer");
let guesses = [];
let wrongGuesses = [];

// Lives container
let livesContainer = document.getElementById("livesContainer");
let livesArray = [1, 2, 3, 4, 5, 6];

// Clue container
let clueContainer = document.getElementById("clueContainer");

// Display Hangman Div etc.
let displayHangman = document.getElementById("displayHangman");
let head = document.getElementById("head");
let leftArm = document.getElementById("leftArm");
let torso = document.getElementById("torso");
let rightArm = document.getElementById("rightArm");
let leftLeg = document.getElementById("leftLeg");
let rightLeg = document.getElementById("rightLeg");

// Hint & Play again BTNs
let hintBtn = document.getElementById("hintBtn");
let playAgainBtn = document.getElementById("playAgainBtn");

/*
Step #2 Creating:
1. Function for random selection for topic, to draw random index from aray.
2. Function to creat "empty space" for the guess array. 
3. Function to create <ul> and <li> as a empty spaces for the aphabet guessing letters and apend them on our html.
*/

//Topick random function
function selectingRandom(arr) {
    //get random index value
    let randomIndex = Math.floor(Math.random() * arr.length);

    //get random item
    let item = arr[randomIndex];

    return item;
};
// Helper for hiden corect guess
function emptyField(arr) {
    guesses = new Array(arr.length).fill('_')
};
// Helper for printing it as <li> with empty/dashed space
function letterBox() {
    guessContainer.innerHTML = "";
    let ulList = document.createElement("ul");
    for (i = 0; i < guesses.length; i++) {
        ulList.innerHTML += `<li> ${guesses[i]} </li>`
    }
    guessContainer.appendChild(ulList);
};

/*
Step #3 Creating:
1. Event listeners for the topic buttons
- It will return like a quote for what is picked,
- It will use the random selecting function to give a word for guessing,
- It will alsow give a clue, to bring you closer to your guess
- And it will remove the category and other stuff so u cant pick again and mix things up when u already have a word for guessing 
*/

// Topick Events
// Food
let randomResult = ""
foodBtn.addEventListener("click", function () {
    chosenCategoryDiv.innerHTML = "The Chosen Category is Food"
    randomResult = selectingRandom(arrayOfFoods);
    emptyField(randomResult);
    letterBox()
    if (randomResult === arrayOfFoods[0]) {
        clueContainer.innerHTML += arrayOfFoodClues[0]
    }
    else if (randomResult === arrayOfFoods[1]) {
        clueContainer.innerHTML += arrayOfFoodClues[1]
    }
    else {
        clueContainer.innerHTML += arrayOfFoodClues[2]
    }
    categorySelection.style.display = "none"
    topicInfo.style.display = "none"
    console.log(guesses);
});
// Movies
moviesBtn.addEventListener("click", function () {
    chosenCategoryDiv.innerHTML = "The Chosen Category is Movies"
    randomResult = selectingRandom(arrayOfMovies);
    emptyField(randomResult);
    letterBox()
    if (randomResult === arrayOfMovies[0]) {
        clueContainer.innerHTML += arrayOfMovieClues[0]
    }
    else if (randomResult === arrayOfMovies[1]) {
        clueContainer.innerHTML += arrayOfMovieClues[1]
    }
    else {
        clueContainer.innerHTML += arrayOfMovieClues[2]
    }
    categorySelection.style.display = "none"
    topicInfo.style.display = "none"
    console.log(guesses);
});
// TV Shows
tvShowsBtn.addEventListener("click", function () {
    chosenCategoryDiv.innerHTML = "The Chosen Category is TV Shows"
    randomResult = selectingRandom(arrayOfTvShows);
    emptyField(randomResult);
    letterBox()
    if (randomResult === arrayOfTvShows[0]) {
        clueContainer.innerHTML += arrayOfTvShowClues[0]
    }
    else if (randomResult === arrayOfTvShows[1]) {
        clueContainer.innerHTML += arrayOfTvShowClues[1]
    }
    else {
        clueContainer.innerHTML += arrayOfTvShowClues[2]
    }
    categorySelection.style.display = "none"
    topicInfo.style.display = "none"
    console.log(guesses);
});
// Games
gamesBtn.addEventListener("click", function () {
    chosenCategoryDiv.innerHTML = "The Chosen Category is Games"
    randomResult = selectingRandom(arrayOfGames);
    emptyField(randomResult);
    letterBox()
    if (randomResult === arrayOfGames[0]) {
        clueContainer.innerHTML += arrayOfGameClues[0]
    }
    else if (randomResult === arrayOfGames[1]) {
        clueContainer.innerHTML += arrayOfGameClues[1]
    }
    else {
        clueContainer.innerHTML += arrayOfGameClues[2]
    }
    categorySelection.style.display = "none"
    topicInfo.style.display = "none"
    console.log(guesses);
});

/*
Step #4 Creating function to:
1. Mesure points and update you for your game
2. To draw Hangman for your game
3. And to say if we Lost, Won, or still in the game
*/

//Alphabet Events and Functions
//Helper declaration 
let x = ""

// Function for points & DrawHangMan
function pointsFuntion() {
    if(randomResult === "") return
    switch (true) {
        case (wrongGuesses.length === 6):
            livesContainer.innerHTML = `You Lost!`
            rightLeg.style.visibility = "visible"
            break
        case (!guesses.includes("_")):
            livesContainer.innerHTML = `You have WON!`
            break
        case (wrongGuesses.length === 5):
            livesContainer.innerHTML = `You have 1 more life`
            leftLeg.style.visibility = "visible"
            break
        case (wrongGuesses.length === 4):
            livesContainer.innerHTML = `You have 2 more lives`
            rightArm.style.visibility = "visible"
            break
        case (wrongGuesses.length === 3):
            livesContainer.innerHTML = `You have 3 more lives`
            leftArm.style.visibility = "visible"
            break
        case (wrongGuesses.length === 2):
            livesContainer.innerHTML = `You have 4 more lives`
            torso.style.visibility = "visible"
            break
        case (wrongGuesses.length === 1):
            livesContainer.innerHTML = `You have 5 more lives`
            head.style.visibility = "visible"
            break
        case (wrongGuesses.length === 0):
            livesContainer.innerHTML = `You have 6 lives`
            break
    }
}

/*
Step #5 Creating function to:
1. Iterate for letters for our guess array
2. To push inside the array the corect unsers
3. And to use the points&gangman functions if is the wrong letter
*/

// helper variable for clusterfuck moments:)
let test = false;
// Function for letter iteration for guess
function letterSearch() {
    test = false
    for (i = 0; i < randomResult.length; i++) {
        if (randomResult[i] === x) {
            guesses[i] = x;
            test = true
        }
    }
    if(test === false){
        wrongGuesses.push(x);
    }
    letterBox()
    pointsFuntion()
}

/*
Step #6 Creating events for the letters
*/

//  Alphabet BTNs event listeners
btnA.addEventListener("click", function () {
    x = "a"
    letterSearch();
})
btnB.addEventListener("click", function () {
    x = "b"
    letterSearch();
})
btnC.addEventListener("click", function () {
    x = "c"
    letterSearch();
})
btnD.addEventListener("click", function () {
    x = "d"
    letterSearch();
})
btnE.addEventListener("click", function () {
    x = "e"
    letterSearch();
})
btnF.addEventListener("click", function () {
    x = "f"
    letterSearch();
})
btnG.addEventListener("click", function () {
    x = "g"
    letterSearch();
})
btnH.addEventListener("click", function () {
    x = "h"
    letterSearch();
})
btnI.addEventListener("click", function () {
    x = "i"
    letterSearch();
})
btnJ.addEventListener("click", function () {
    x = "j"
    letterSearch();
})
btnK.addEventListener("click", function () {
    x = "k"
    letterSearch();
})
btnL.addEventListener("click", function () {
    x = "l"
    letterSearch();
})
btnM.addEventListener("click", function () {
    x = "m"
    letterSearch();
})
btnN.addEventListener("click", function () {
    x = "n"
    letterSearch();
})
btnO.addEventListener("click", function () {
    x = "o"
    letterSearch();
})
btnP.addEventListener("click", function () {
    x = "p"
    letterSearch();
})
btnQ.addEventListener("click", function () {
    x = "q"
    letterSearch();
})
btnR.addEventListener("click", function () {
    x = "r"
    letterSearch();
})
btnS.addEventListener("click", function () {
    x = "s"
    letterSearch();
})
btnT.addEventListener("click", function () {
    x = "t"
    letterSearch();
})
btnU.addEventListener("click", function () {
    x = "u"
    letterSearch();
})
btnV.addEventListener("click", function () {
    x = "v"
    letterSearch();
})
btnW.addEventListener("click", function () {
    x = "w"
    letterSearch();
})
btnX.addEventListener("click", function () {
    x = "x"
    letterSearch();
})
btnY.addEventListener("click", function () {
    x = "y"
    letterSearch();
})
btnZ.addEventListener("click", function () {
    x = "z"
    letterSearch();
})
btnSpace.addEventListener("click", function () {
    x = "-"
    letterSearch();
})

/*
Step #7 i wanted to give clues right from the start, so ppl dont lose easy with just 6 wrong gesses, So i just add the hint button to show aler with no more clues
*/
hintBtn.addEventListener("click", function(){
    alert("You dont have more clues left, Sorry try your best!");
})

/*
Step #8 Creating events for Play again to reset page, this i saw from the net i didnt want to clear everything that i insert from the game, it was like + 60js roads:)
*/
playAgainBtn.addEventListener("click", function(){
    window.location.reload()
})

/*
Step #9 CHILL THEN DO CALCULATOR:)
*/
