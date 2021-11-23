/* eslint-disable */
window.onload = function() {};

function play() {
  let words = ["pokemon"];
  let wordsIndex = Math.floor(Math.random() * words.length);
  let output = words[wordsIndex].split("");
  let blanks = [];
  let solutionSoFar;

  for (let i = 0; i <= output.length; i++) {
    let blankinput = blanks.push("_");
  }
  console.log("Guess a letter. Any Letter!");
  console.log(blanks);
  let count = 0;
  for (let x = 0; x <= 5; x++) {
    let answer = prompt("Guess a letter. Any Letter!");
    if (answer == output[wordsIndex]) {
      blanks[wordsIndex] = answer;
      console.log(blanks);
    } else if (answer != output[wordsIndex] && count == 0) {
      console.log(" O");
      count++;
    } else if (answer != output[wordsIndex] && count == 1) {
      console.log(" O", "\n", "|");
      count++;
    } else if (answer != output[wordsIndex] && count == 2) {
      console.log("  O", "\n", "-|");
      count++;
    } else if (answer != output[wordsIndex] && count == 3) {
      console.log("  O", "\n", "-|-");
      count++;
    } else if (answer != output[wordsIndex] && count == 4) {
      console.log("  O", "\n", "-|-", "\n", " /");
      count++;
    } else if (answer != output[wordsIndex] && count == 5) {
      console.log("  O", "\n", "-|-", "\n", " /\\");
      console.log("Game Over");
      playAgainDialogue();
      return;
    }
  }
  console.log(count);
}
function displayBoard() {
  console.log(solutionSoFar.join(" "));
}

function playAgainDialogue() {
  if (confirm("Play again?")) {
    console.log("");
    play();
  }
  console.log("Bye!");
}

document.getElementById("play").addEventListener("click", play);
