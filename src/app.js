const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock') {
    return 'rock';
  } else if (userInput === 'paper') {
    return 'paper';
  } else if (userInput === 'scissors') {
    return 'scissors';
  } else {
    return 'Input Error - please choose from rock, paper or scissors.'
  }
}



function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return 'rock';
  } else if (choice === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'It\'s a tie!';
  }

  if (userChoice === 'rock' && computerChoice === 'paper') {
    return 'Computer wins!'
  } else {
    return 'You won!'
  }

  if (userChoice === 'paper' && computerChoice === 'scissors') {
    return 'Computer wins!'
  } else {
    return 'You won!'
  }

  if (userChoice === 'scissors' && computerChoice === 'rock') {
    return 'Computer wins!'
  } else {
    return 'You won!'
  }
}



function playGame() {
  let userChoice = getUserChoice();
  let computerChoice = getComputerChoice();
}

console.log(determineWinner(getUserChoice('scissors'), getComputerChoice()));