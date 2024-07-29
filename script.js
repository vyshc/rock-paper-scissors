//functionality: 
//user clicks on button to choose --> userChoice
//computer generates the choice already --> computerChoice
//compare the choices
//declare the winner for the round --> create a div element 
//put winner in the div element --> update the scores after every round 
//-->change the innerText and set it to the score variables --> userScore and computerSccore
//when either of the score becomes 5 --> add a new paragraph to the div element -->declare the final winner
//--> keep running scores as is and add the final winner
//--> then reset the div element --> remove the element 
//have a button to refresh the page? //optional

//first generate computerChoice using getComputerChoice
const body = document.querySelector("body");
const div = document.createElement("div");
const buttons = document.querySelectorAll("button");

body.appendChild(div);

let computerChoice = "", userChoice ="", computerScore = 0, userScore = 0;

function getComputerChoice() {
  const rndm = Math.floor(Math.random() * 3) + 1;
  switch (rndm) {
    case 1: {
      return "rock";
    }
    case 2: {
      return "paper";
    }
    case 3: {
      return "scissors";
    }
  }
}

//define computerScore and userScore

function compareChoice(uc){
  computerChoice = getComputerChoice();
  console.log("computer chose:", computerChoice);

  if (
    (computerChoice == "paper" && userChoice == "scissors") ||
    (computerChoice == "scissors" && userChoice == "rock") ||
    (computerChoice == "rock" && userChoice == "paper")
  ) {
    userScore++;
  } else if (uc == computerChoice) {
    console.log("tie - no change in the scores");
  } else{
    computerScore++;
  }
}

function playRound(){
  let runningScore =  `\n running score: ` + `\n your score: ${userScore}` + `\n computer score: ${computerScore}`;
  div.innerText = runningScore;
  console.log(computerScore, userScore);

  if(userScore==5 || computerScore == 5){
    (userScore > computerScore) ? div.innerText = "You win!!!"   : div.innerText = "computer wins!!!";
  }
}

//get userChoice from the buttons and play!

buttons.forEach(button => button.addEventListener("click", ()=>{
  div.innerText = "";
  console.log(`you chose: ${button.id}`);
  userChoice = button.id;
  compareChoice(userChoice);
  playRound();
})); 