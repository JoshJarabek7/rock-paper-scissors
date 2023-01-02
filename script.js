const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const result = document.querySelector('#result');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const reset = document.querySelector('#reset');
let playerScoreCount = 0;
let computerScoreCount = 0;
let playerSelection = '';
let computerSelection = '';

function computerPlay() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return 'The game is a tie!';

    }
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            computerScoreCount++;
            return 'You Lose! Paper beats Rock';
        } else {
            playerScoreCount++;
            return 'You Won! Rock beats Scissors';
        }
    }
    if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            computerScoreCount++;
            return 'You Lose! Scissors beats Paper';
        } else {
            playerScoreCount++;
            return 'You Won! Paper beats Rock';
        }
    }
    if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            computerScoreCount++;
            return 'You Lose! Rock beats Scissors';
        } else {
            playerScoreCount++;

            return 'You Won! Scissors beats Paper';
        }
    }
}
function game() {
    if (playerScoreCount === 5) {
        result.textContent = 'You won the game!';
        playerScoreCount = 0;
        computerScoreCount = 0;
    } else if (computerScoreCount === 5) {
        result.textContent = 'You lost the game!';
        playerScoreCount = 0;
        computerScoreCount = 0;
    }
    playerScore.textContent = playerScoreCount;
    computerScore.textContent = computerScoreCount;
}
function resetGame() {
    playerScoreCount = 0;
    computerScoreCount = 0;
    playerScore.textContent = playerScoreCount;
    computerScore.textContent = computerScoreCount;
    result.textContent = '';
}
rock.addEventListener('click', () => {
    playerSelection = 'rock';
    computerSelection = computerPlay();
    result.textContent = playRound(playerSelection, computerSelection);
    game();
});
paper.addEventListener('click', () => {
    playerSelection = 'paper';
    computerSelection = computerPlay();
    result.textContent = playRound(playerSelection, computerSelection);
    game();
});
scissors.addEventListener('click', () => {
    playerSelection = 'scissors';
    computerSelection = computerPlay();
    result.textContent = playRound(playerSelection, computerSelection);
    game();
}
);
reset.addEventListener('click', resetGame);
game();
resetGame();