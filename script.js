const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let userScore      = 0,
        computerScore  = 0,
        computerChoice,
        userChoice     = e.target.id;
    const res   = document.createElement("div");
    const body  = document.querySelector("body");
    res.innerText = "";

    function playRound() {
      function getComputerChoice() {
        const rndm = Math.floor(Math.random() * 3) + 1;
        switch (rndm) {
          case 1: {
            res.innerText += "\nComputer chose Rock";
            computerChoice = "rock";
            break;
          }
          case 2: {
            res.innerText += "\nComputer chose Paper";
            computerChoice = "paper";
            break;
          }
          case 3: {
            res.innerText += "\nComputer chose Scissors";
            computerChoice = "scissors";
            break;
          }
        }
      }
      getComputerChoice();
      res.innerText += `\nYou chose ${userChoice}`;

      if (computerChoice == userChoice) {
        res.innerText += "tie!";
      } else if (
        (computerChoice == "paper" && userChoice == "scissors") ||
        (computerChoice == "scissors" && userChoice == "rock") ||
        (computerChoice == "rock" && userChoice == "paper")
      ) {
        res.innerText += "you win!";
        userScore++;
      } else {
        res.innerText += "computer wins!";
        computerScore++;
      }

      res.innerText += `\n Running score: \n Computer - ${computerScore} \n You - ${userScore}`;

      body.appendChild(res);
    }

    playRound();

    //Display the running score, and announce a winner of the game once one player reaches 5 points. 

    // if(userScore == 5 ){
    //     res.innerText += "You are the WInner of this round"
    //     return;
    // }else if (computerScore == 5){
    //     res.innerText += "Computer is the WInner of this round"
    //     return;
    // }
  });
});
