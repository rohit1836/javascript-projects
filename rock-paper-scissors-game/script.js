const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissor = document.getElementById("scissor")

const result = document.getElementById("result-annoucement")
const computerscore = document.getElementById("computerScore")
const playerscore = document.getElementById("playerScore")
const tiescore = document.getElementById("tieScore")

const compMove = document.getElementById("computer-move")

let computerWon=0;
let playerWon=0;
let tie=0;

function updateScore(userChoice){
    let computerChoice = Math.floor(Math.random() * 3)  
    // 0 -> rock, 1-> paper, 2-> scissor
    if (computerChoice === 0){
        compMove.textContent = `Computer Chose: Rock`;
    } else if (computerChoice === 1){
        compMove.textContent = `Computer Chose: Paper`;
    } else if (computerChoice === 2){
        compMove.textContent = `Computer Chose: Scissor`;
    } 

    if (userChoice === 'rock' && computerChoice === 0){
        tie++;
        tiescore.textContent = `Tie Score: ${tie}`;
        result.textContent = "It's a tie.";
    } else if (userChoice === 'paper' && computerChoice === 1){
        tie++;
        tiescore.textContent = `Tie Score: ${tie}`;
        result.textContent = "It's a tie.";
    } else if (userChoice === 'scissor' && computerChoice === 2){
        tie++;
        tiescore.textContent = `Tie Score: ${tie}`;
        result.textContent = "It's a tie.";
    } else {
        if(userChoice === 'rock' && computerChoice === 2){
            playerWon++;
            playerscore.textContent = `Player Score: ${playerWon}`;
            result.textContent = "You WON!";
        } 
        if(userChoice === 'paper' && computerChoice === 0){
            playerWon++;
            playerscore.textContent = `Player Score: ${playerWon}`;
            result.textContent = "You WON!";
        } 
        if(userChoice === 'scissor' && computerChoice === 1){
            playerWon++;
            playerscore.textContent = `Player Score: ${playerWon}`;
            result.textContent = "You WON!";
        } 
        if(userChoice === 'rock' && computerChoice === 1){
            computerWon++;
            computerscore.textContent = `Computer Score: ${computerWon}`;
            result.textContent = "Computer WON!";
        } 
        if(userChoice === 'paper' && computerChoice === 2){
            computerWon++;
            computerscore.textContent = `Computer Score: ${computerWon}`;
            result.textContent = "Computer WON!";
        } 
        if(userChoice === 'scissor' && computerChoice === 0){
            computerWon++;
            computerscore.textContent = `Computer Score: ${computerWon}`;
            result.textContent = "Computer WON!";
        } 
    }

}