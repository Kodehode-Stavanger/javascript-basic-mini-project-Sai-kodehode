// user turns
const userOption = document.getElementById("useroption");
// computer turns
const restartDiv = document.getElementsByClassName("restartdiv")[0];
// computer selection
const computerOption = document.getElementById("computeroption");
// user score
const userScore = document.getElementById("userscore");
// computer score
const computerScore = document.getElementById("computerscore");

let userScoreDetails = 0;
let computerScoreDetails = 0;

// making function for random generation from computer
let rockPaperSissor = ["✊", "✋", "✌️"];
let computerResult;
function computerFunction(items) {
  return items[Math.floor(Math.random() * items.length)];
}

// Restart button function
const restartPage = () => {
  computerOption.textContent = "";
  userOption.textContent = "";
  javaResult.textContent = "";
  userScoreDetails = 0;
  computerScoreDetails = 0;
  userScore.textContent = `User : 0`;
  computerScore.textContent = `Computer : 0`;
};

// Increment computer Score
function computerScoreFunction() {
  computerScoreDetails++;
  computerScore.textContent = `Computer : ${computerScoreDetails}`;
}

// Increment user Score
function userScoreFunction() {
  userScoreDetails++;
  userScore.textContent = `User : ${userScoreDetails}`;
}

// to print the result
const javaResult = document.createElement("h1");
javaResult.classList.add("printoutput");
restartDiv.prepend(javaResult);

// when user selects rock
const rockBtn = () => {
  document.getElementById("paper-btn").disabled = true;
  document.getElementById("scissor-btn").disabled = true;
  javaResult.textContent = "";
  javaResult.textContent = "";
  userOption.textContent = "";
  computerOption.textContent = "";
  setTimeout(() => {
    userOption.textContent = "✊";
    computerOption.textContent = computerFunction(rockPaperSissor);
    play();

    setTimeout(() => {
      document.getElementById("paper-btn").disabled = false;
      document.getElementById("scissor-btn").disabled = false;
    }, 500);
  }, 1000); // 1000 milliseconds (1 second) delay
};

// when user selects paper
const paperBtn = () => {
  document.getElementById("rock-btn").disabled = true;
  document.getElementById("scissor-btn").disabled = true;
  javaResult.textContent = "";
  userOption.textContent = "";
  computerOption.textContent = "";
  setTimeout(() => {
    userOption.textContent = "✋";
    computerOption.textContent = computerFunction(rockPaperSissor);
    play();
    setTimeout(() => {
      document.getElementById("rock-btn").disabled = false;
      document.getElementById("scissor-btn").disabled = false;
    }, 500);
  }, 1000);
};

// when user selects scissor
const scissorBtn = () => {
  document.getElementById("paper-btn").disabled = true;
  document.getElementById("rock-btn").disabled = true;
  javaResult.textContent = "";
  userOption.textContent = "";
  computerOption.textContent = "";
  setTimeout(() => {
    userOption.textContent = "✌️";
    computerOption.textContent = computerFunction(rockPaperSissor);
    play();
    setTimeout(() => {
      document.getElementById("paper-btn").disabled = false;
      document.getElementById("rock-btn").disabled = false;
    }, 500);
  }, 1000);
};

// Function to check the User and Computer selections
function play() {
  if (
    (userOption.textContent === "✊" && computerOption.textContent === "✌️") ||
    (userOption.textContent === "✋" && computerOption.textContent === "✊") ||
    (userOption.textContent === "✌️" && computerOption.textContent === "✋")
  ) {
    setTimeout(() => {
      javaResult.textContent = "User won 🥳";
      javaResult.style.backgroundColor = "lightskyblue";
      userScoreFunction();
    }, 500);
  } else if (userOption.textContent === computerOption.textContent) {
    setTimeout(() => {
      javaResult.textContent = "Draw 😎";
      javaResult.style.backgroundColor = "lightgreen";
    }, 500);
  } else {
    setTimeout(() => {
      javaResult.textContent = "Computer won 😒";
      javaResult.style.backgroundColor = "khaki";
      computerScoreFunction();
    }, 500);
  }
}
