let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

let userScorePara =document.querySelector("#user-score")
let compScorePara =document.querySelector("#comp-score")


const draw = () => {
  msg.innerText = "you draw the match".toUpperCase();
  msg.style.backgroundColor = "#081b31";

  console.log("match was draw");
};

const showWiner = (userWin) => {
  if (userWin) {
    userScore++
    userScorePara.innerHTML=userScore;
    msg.innerText = "you Won ".toLocaleUpperCase();
    msg.style.backgroundColor = "green";
  } else {
    compScore++
    compScorePara.innerHTML=compScore
    msg.innerText = "you LOSE ".toLocaleUpperCase();
    msg.style.backgroundColor = "red";
  }
};

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const playGame = (userChoice) => {
  console.log("userChoice = ", userChoice);
  //compuer choice
  const compChoice = genCompChoice();
  console.log("compChoice = ", compChoice);

  if (userChoice === compChoice) {
    draw();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      compChoice === "rock" ? false : true;
    }
    showWiner(userWin);
  }
};

choices.forEach((choice) => {
  console.log(choice);

  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
