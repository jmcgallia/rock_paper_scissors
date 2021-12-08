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
        rounds_won += 1;
        return "Player Wins!";
    }

    else {
        rounds_lost += 1;
        return "Computer Wins!";
    }

}

function gameResult(rounds_lost, rounds_won) {
    if (rounds_won === rounds_lost) {
        return 'Game tied!';
    }
    else if (rounds_won > rounds_lost) {
        return 'You won the game!';
    }
    else {
        return 'You lost the game!';
    }
}

/* Get elements */
startButton = document.querySelector("#start-button");
rockButton = document.querySelector(".player-box .rock-box button");
paperButton = document.querySelector(".player-box .paper-box button");
scissorsButton = document.querySelector(".player-box .scissor-box button");
playerImage = document.querySelector(".player-choice-box img");
aiImage = document.querySelector(".ai-choice-box img");


/* Add event listeners */
rockButton.addEventListener('click', () => playGame('rock'));
paperButton.addEventListener('click', () => playGame('paper'));
scissorsButton.addEventListener('click', () => playGame('scissors'));

/* Global Variables */
let gameState = 'not started';
let round = 0;
let rounds_won = 0;
let rounds_lost = 0;



startButton.addEventListener('click', function() {
    if (gameState === 'not started') {
        removeScales();
        gameState = 'playing';
        this.innerHTML = "Please pick rock, paper, or scissors.";
        document.querySelector(".game-display").innerHTML = 'Pick a weapon!'
        document.querySelector(".player-score-box").innerHTML = '0';
        document.querySelector(".ai-score-box").innerHTML = '0';

    }
})

// Remove scale from previous human and AI choices
function removeScales() {
        
    scaledBoxes = Array.from(document.getElementsByClassName('scaled'));
    scaledBoxes.forEach(function (element) {
        element.classList.remove('scaled');
        })
}


function playGame(weapon) {

    if (gameState === 'playing') {

        // Remove scale from previous human and AI choices
        removeScales();

        // Get the computer's move
        computerMove = computerPlay();

        // Get the elements that will be enlarged to show the ai and human choice. Enlarge them.
        aiBox = document.querySelector(`div[data-weapon='${computerMove}']`);
        aiBox.classList.add('scaled');
        humanBox = document.querySelector(`div[data-humanWeapon='${weapon}']`);
        humanBox.classList.add('scaled');
        
        // Game & Round logic
        round += 1;
        roundResult = playRound(weapon, computerMove);

        document.querySelector(".player-score-box").innerHTML = rounds_won.toString();
        document.querySelector(".ai-score-box").innerHTML = rounds_lost.toString();

        if (round == 5) {
            // Reset play button
            startButton.innerHTML = "PLAY AGAIN";
            
            // Logic to display winner
            document.querySelector(".game-display").innerHTML = `Round ${round}: ${roundResult} \n ${gameResult(rounds_lost, rounds_won)}`;

            // Reset Game State
            round = 0;
            rounds_lost = 0;
            rounds_won = 0;
            gameState = 'not started';

            return;
        }

        document.querySelector(".game-display").innerHTML = `Round ${round}: ${roundResult}`;

    }
};
