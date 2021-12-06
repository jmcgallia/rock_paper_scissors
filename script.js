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

// game();