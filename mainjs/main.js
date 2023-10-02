
console.log("main loaded");

let myNumber = "";
let gameStarted = false;

let myButton = document.querySelector(".myButton");


document.querySelectorClass = ("something").innerHTML = 'je hebt verloren';

function showMessage(message) {
    document.querySelector(".interface").textContent = message;
}

function getRandomNumber () {
    return Math.floor(Math.random() * 6) + 1;
   
}

function rollDice() {
    myNumber = getRandomNumber(11);
    console.log('random getal is ' + myNumber);
}

myButton = document.addEventListener("click", function(){
    rollDice();
})


document.querySelector(".higher-button").addEventListener("click", () => {
    setupGame("higher-button");
});

document.querySelector(".higher-button").addEventListener("click", () => {
    setupGame("lower-button");
})

document.querySelector(".higher-button").addEventListener("click", () => {
    setupGame("myButton");
})

function setupGame(guess) {
    if (!gameStarted){
        gameStarted = true;

    }
}
//document.querySelectorClass = ("something").innerHTML = 'je hebt verloren';