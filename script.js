function getComputerChoice() {
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
function rockPaperScissors(playerChoice) {
    playerChoice = playerChoice.toLowerCase();
    const computerChoice = getComputerChoice();
    if (playerChoice === computerChoice) {
        return 'The game is a tie!';
    }
    if (playerChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'You Lose! Paper beats Rock';
        } else {
            return 'You Won! Rock beats Scissors';
        }
    }
    if (playerChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'You Lose! Scissors beats Paper';
        } else {
            return 'You Won! Paper beats Rock';
        }
    }
    if (playerChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'You Lose! Rock beats Scissors';
        } else {
            return 'You Won! Scissors beats Paper';
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Enter your choice: ');
        const result = rockPaperScissors(playerSelection);
        if (result.includes('Won')) {
            playerScore++;
        } else if (result.includes('Lose')) {
            computerScore++;
        }
        console.log(result);
    }
    if (playerScore > computerScore) {
        console.log('You won the game!');
    } else if (playerScore < computerScore) {
        console.log('You lost the game!');
    } else {
        console.log('The game is a tie!');
    }
}

game();
