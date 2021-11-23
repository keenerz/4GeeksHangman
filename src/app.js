/* eslint-disable */
window.onload = function() {};

const words = [
  "pokemon",
  "pikachu",
  "coding",
  "thanksgiving",
  "turkey",
  "chrome",
  "tabasco"
];
let count = 5;
let theword;
let wrong;
let solutionSoFar;
let potg = false;

function displayBoard() {
  console.log(solutionSoFar.join(" "));
}

function play() {
  potg = true;
  let wordsIndex = Math.floor(Math.random() * words.length);
  theword = words[wordsIndex];
  wrong = 0;
  solutionSoFar = new Array(theword.length).fill("_");
  console.log("Guess a Letter! or bet it all on a word!");
  while (potg) {
    displayBoard();
    playerState();
  }
}

function playAgainDialogue() {
  if (confirm("Play again?")) {
    console.log("");
    let count = 5;
    play();
  } else {
    console.log("Bye!");
    return;
  }
}

function playerState() {
  if (wrong >= count) {
    console.log("Game Over.");
    console.log("  O", "\n", "-|-", "\n", " /\\");
    potg = false;
    playAgainDialogue();
    return;
  }
  if (solutionSoFar.join("") === theword) {
    console.log("Good Work. Keep going!");
    playAgainDialogue();
  }
  let remainingGuesses = count - wrong;
  let guess = prompt(
    "Guess a letter. You have " + remainingGuesses + " remaining guesses"
  );

  if (guess == null) {
    playAgainDialogue();
    return;
  }
  let playerGuess = guess.toLowerCase();

  if (playerGuess == theword && playerGuess.length > 1) {
    console.log("One and done good job. You guessed " + theword + ".");
    playAgainDialogue();
    return;
  } else if (playerGuess != theword && playerGuess.length > 1) {
    console.log("You betted it all and lost! Game Over.");
    playAgainDialogue();
    return;
  } else {
    if (theword.indexOf(playerGuess) === -1 && wrong === 0) {
      console.log("Wrong");
      console.log(" O");
      wrong += 1;
    } else if (theword.indexOf(playerGuess) === -1 && wrong === 1) {
      console.log("Wrong");
      console.log(" O", "\n", "|");
      wrong += 1;
    } else if (theword.indexOf(playerGuess) === -1 && wrong === 2) {
      console.log("Wrong");
      console.log("  O", "\n", "-|");
      wrong += 1;
    } else if (theword.indexOf(playerGuess) === -1 && wrong === 3) {
      console.log("Wrong");
      console.log("  O", "\n", "-|-");
      wrong += 1;
    } else if (theword.indexOf(playerGuess) === -1 && wrong === 4) {
      console.log("Wrong");
      console.log("  O", "\n", "-|-", "\n", " /");
      wrong += 1;
    } else {
      console.log("Well done.");
      solutionSoFar.forEach(function(val, index) {
        if (theword.split("")[index] === playerGuess) {
          solutionSoFar[index] = playerGuess;
        }
      });
    }
  }
}
let btnAdd = document.querySelector("#add");
let input = document.querySelector("input");

btnAdd.addEventListener("click", () => {
  if (input == null) {
    return;
  } else {
    words.push(input.value);
    input.value = "";
  }
});

document.getElementById("play").addEventListener("click", play);
