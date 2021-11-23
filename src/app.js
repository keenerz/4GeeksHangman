/* eslint-disable */
window.onload = function() {
  let words = ["pokemon"];
  let wordsIndex = Math.floor(Math.random() * words.length);

  let output = words[wordsIndex].split("");

  let blanks = [];

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
    } else if (answer != output[wordsIndex] && x == 0) {
      console.log(" O");
      count + 1;
    } else if (answer != output[wordsIndex] && x == 1) {
      console.log(" O", "\n", "|");
      count + 1;
    } else if (answer != output[wordsIndex] && x == 2) {
      console.log("  O", "\n", "-|");
      count + 1;
    } else if (answer != output[wordsIndex] && x == 3) {
      console.log("  O", "\n", "-|-");
      count + 1;
    } else if (answer != output[wordsIndex] && x == 4) {
      console.log("  O", "\n", "-|-", "\n", " /");
      count + 1;
    } else if (answer != output[wordsIndex] && x == 5) {
      console.log("  O", "\n", "-|-", "\n", " /\\");
      console.log("Game Over");
      break;
    }
  }
  console.log(count);
};
