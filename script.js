let player = 0 ; 
let computer = 0 ; 
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");


function getComputerChoice() {
    let arr = ["rock", "paper", "scissors"];
    return arr[Math.floor(Math.random()* arr.length)];
}

function reset() {
    if(player == 0)
    {
        champion.textContent ="";
        list.appendChild(champion);
    }
}

const champion = document.createElement("h1");

function final() {
    if(Math.max(player, computer)>=5){
        if(player>computer){
            champion.textContent = "Congrats! You are the winner";
            list.appendChild(champion);
        }
        else {
            champion.textContent = "Sorry! Computer wins";
            list.appendChild(champion);
        }
        return computerDisplay.textContent = ("Computer :") +  computer, result.textContent, playerDisplay.textContent = ("Player :") + player, player =0, computer =0;
    }
}

function  playRound (lPlayerSelection, computerSelection)
{
    
    if(lPlayerSelection === computerSelection)
    {
        return result.textContent = "It's a tie!";
    }
    else
    {
        if(lPlayerSelection === "rock")
        {
            if(computerSelection === "paper")
            {
                return computer ++, result.textContent = "You Lose! Paper beats Rock";
            }
            else
            {
                return player ++, result.textContent = "You Win! Rock beats scissors";
            }
        }

        else if(lPlayerSelection === "paper")
        {
            if(computerSelection === "rock")
            {
                return player ++, result.textContent = "You Win! Paper beats Rock";
            }
            else
            {
            
                return computer ++, result.textContent = "You Lose! Scissors beats paper";
            }
        }
        else(lPlayerSelection === "scissors")
        {
            if(computerSelection === "paper")
            {
                return player ++, result.textContent = "You Win! Scissors beats paper";
            }
            else
            {
                return computer ++, result.textContent = "You Lose! Rock beats scissors";
            }
        }
    }
}

rock.addEventListener("click", () => {
    lPlayerSelection = "rock";
    let computerSelection = getComputerChoice();
    playRound(lPlayerSelection, computerSelection);
    playerDisplay.textContent = ("Player :") + player;
    computerDisplay.textContent = ("Computer :") +  computer;
    reset();
    final();
});

paper.addEventListener("click", () => {
    lPlayerSelection = "paper";
    let computerSelection = getComputerChoice();
    playRound(lPlayerSelection, computerSelection);
    playerDisplay.textContent = ("Player :") + player;
    computerDisplay.textContent = ("Computer :") +  computer;
    reset();
    final();
});

scissors.addEventListener("click", () => {
    lPlayerSelection = "scissors";
    let computerSelection = getComputerChoice();
    playRound(lPlayerSelection, computerSelection);
    playerDisplay.textContent = ("Player :") + player;
    computerDisplay.textContent = ("Computer :") +  computer;
    reset();
    final();
});

const list = document.querySelector("body");
const result = document.createElement("div");
list.appendChild(result);

const playerDisplay = document.createElement("div");
playerDisplay.textContent = ("Player :") + player;
list.appendChild(playerDisplay);

const computerDisplay = document.createElement("div");
computerDisplay.textContent = ("Computer :") +  computer;
list.appendChild(computerDisplay);
