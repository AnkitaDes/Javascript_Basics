//Gather the informantion you will need

let randomNumber = parseInt(Math.random() * 100 + 1);
console.log("randomNumber:", randomNumber);

const submit = document.querySelector("#subt");

const userInput = document.querySelector("#guessField");

let allGuessedNums = document.querySelector(".guesses");

const attemptsRemaining = document.querySelector(".lastResult");

const lowOrHigh = document.querySelector(".lowOrHi");

const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

// Define the variables
let prevGuess = [];
let numGuess = 1;
let playGame = true;

//TAKE the userinput and conolelog it
//Whenever we get the input value from the form it is obtained as a string and has to be converted to number if we want to use it as a number

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log("GuessNum:", guess);
    validateGuess(guess);
  });
}

//Define the functions/methods

//VALIDATE the user INPUT
//check if the user enters a valid number and not a string
// check if the number is not less than 1 or greater than 100
//Very Important validation of the userInput

// After validation i.e if the userInput is a valid number
// Add the number to the array
// check the number of guess if equal to 11 or less
//if number of guess === 11 we have to end the game, display the message game over and hte random number was____
//end game
//if guess number less than 11
//display the guess number
// add it to the array
//reduce the number of remaining guesses

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a number greater than 1");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

// CHECK the guess number is low or high as compared to random number
// checks if the number is equal to the actual number
// log a message

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`The Number is TOO Low`);
  } else if (guess > randomNumber) {
    displayMessage(`The Number is TOO High`);
  }
}

//Manipulation with the DOM
// Add the number to the precious guess array
// Reduce the number from the remaining guesses
// Empty the user input field in the form reset the value to empty

function displayGuess(guess) {
  userInput.value = "";
  allGuessedNums.innerHTML += `${guess}, `;
  numGuess++;
  attemptsRemaining.innerHTML = `${11 - numGuess}`;
}

// display the message

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    allGuessedNums.innerHTML = "";
    attemptsRemaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
