/* ***********
Game Logic 
***************/

/* To do:
Find alternative to innerHTML
Make document prettier - alignment of buttons - Better pictures
Add some kind of intro / story */

function computerPlay() {
    let rand_num = Math.floor(Math.random() * 100);
    
    if (rand_num <= 32) {
        return 'rock';
    }

    else if (rand_num <= 65) {
        return 'paper';
    }

    else {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "Tie!";
    }
    else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')) {
        return "Player Wins!";
    }

    else {
        return "Computer Wins!";
    }

}

/* Returns true if valid else if false */
function validateSelection(playerSelection) {
    
    playerSelection = playerSelection.toLowerCase()

    if (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
        return false;
    }

    else {
        return true;
    }

}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    for (let gameNum = 1; gameNum <= 5; gameNum++) {

        playerSelection = prompt("Please enter your hand: ");
        computerSelection = computerPlay();
        gameResult = playRound(playerSelection, computerSelection);

        if (gameResult === "Player Wins!") {
            playerWins++;
        }
        else if (gameResult === "Computer Wins!") {
            computerWins++;   
        }

        console.log(gameResult);
        
    }

    if (playerWins > computerWins) {
        console.log("You win the game!");
    }
    else if (playerWins < computerWins) {
        console.log("You lost the game :(");
    }
    else {
        console.log("Game was tied!");
    }


}

/* Get elements */
startButton = document.querySelector("#start-button");
rockButton = document.querySelector(".player-box .rock-box button");
paperButton = document.querySelector(".player-box .paper-box button");
scissorsButton = document.querySelector(".player-box .scissor-box button");

/* Add event listeners */
rockButton.addEventListener('click', () => playGame('rock'));
paperButton.addEventListener('click', () => playGame('paper'));
scissorsButton.addEventListener('click', () => playGame('scissor'));

/* Global Variables */
let gameState = 'not started';
let round = 0;
let rounds_won = 0;
let rounds_lost = 0;



startButton.addEventListener('click', function() {
    if (gameState === 'not started') {
        gameState = 'playing';
        this.innerHTML = "Please pick rock, paper, or scissors.";
    }
})





function playGame(weapon) {
    console.log(weapon);
    if (gameState === 'playing') {
        round += 1;
        computer_move = computerPlay();
        console.log(playRound(weapon, computer_move));
    }
};
