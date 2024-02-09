function getComputerChoice() {
    let arr = ["rock", "paper", "scissors"];
    return arr[Math.floor(Math.random()* arr.length)];
}

const computerSelection = getComputerChoice();

function  playRound (lPlayerSelection, computerSelection){
    if(lPlayerSelection === computerSelection)
    {
         return console.log("It's a tie!");
    }
    else
    {
        if(lPlayerSelection === "rock")
        {
            if(computerSelection === "paper")
            {
                return console.log("You Lose! Paper beats Rock");
            }
            else
            {
                return console.log("You Win! Rock beats scissors");
            }
        }
        else if(lPlayerSelection === "paper")
        {
            if(computerSelection === "rock")
            {
                return console.log("You Win! Paper beats Rock");
            }
            else
            {
                return console.log("You Lose! Scissors beats paper");
            }
        }
        else if(lPlayerSelection === "scissors")
        {
            if(computerSelection === "paper")
            {
                return console.log("You Win! Scissors beats paper");
            }
            else
            {
                return console.log("You Lose! Rock beats scissors");
            }
        }
        else {
            return console.log("Please check your spelling");
        }
    }
}

for(i=5; i>=1;)
{
    let playerSelection = prompt("Please select Rock, Paper or Scissor", "Rock");
    let lPlayerSelection = playerSelection.toLowerCase();
    playRound(lPlayerSelection, computerSelection);
    i--;
}

