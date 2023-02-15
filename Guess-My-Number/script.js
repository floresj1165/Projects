"use strict";
//document.querySelector("") lets you manipulate an element in html.
//.textContent reads the content of the element

/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "🎉Correct Number!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/
// grab the document using the querySelector with the class of check then added a event handler with .addEventListener which is the function

// .random gives a number between 0 and 1
// .trunc removes the decimals
// add the + 1 to make sure it goes all the way to 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  // if guess doesn't have a value change .message to the string
  //when no input
  if (!guess) {
    displayMessage("⛔️ No Number");
    // document.querySelector(".message").textContent = "⛔️ No Number";
    // when player wins
  } else if (guess === secretNumber) {
    displayMessage("🎉Correct Number!");
    // document.querySelector(".message").textContent = "🎉Correct Number!";
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  // When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess > secretNumber ? "📈 Too high" : "📉 Too low";
      displayMessage(guess > secretNumber ? "📈 Too high" : "📉 Too low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      // document.querySelector(".message").textContent = "💥 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});
//   // when guess is greater
// } else if (guess > secretNumber) {
//   if (score > 1) {
//     document.querySelector(".message").textContent = "📈 Too high";
//     score--;
//     document.querySelector(".score").textContent = score;
//   } else {
//     document.querySelector(".message").textContent = "💥 You lost the game!";
//     document.querySelector(".score").textContent = 0;
//   }
//   // when guess is lower
// } else if (guess < secretNumber) {
//   if (score > 1) {
//     document.querySelector(".message").textContent = "📉 Too low";
//     score--;
//     document.querySelector(".score").textContent = score;
//   } else {
//     document.querySelector(".message").textContent = "💥 You lost the game!";
//     document.querySelector(".score").textContent = 0;
//   }
// }

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = "20";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  displayMessage("Start guessing...");
  // document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
});
