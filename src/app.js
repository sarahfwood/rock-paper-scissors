const playerChoice;


document.querySelectorAll('.choice').forEach(item => {
  item.addEventListener('click', event => {
    
    // const playerChoice = item.value;

    if (playerChoice === document.getElementById('rock')) {
      alert('You clicked rock');
      return 'rock';
    } else if (itplayerChoiceem === document.getElementById('paper')) {
      alert('You clicked paper');
      return 'paper';
    } else if (itplayerChoiceem === document.getElementById('scissors')) {
      alert('You clicked scissors');
      'return scissors';
    } else {
      alert('Clicked');
      return 'Input Error - please choose from rock, paper or scissors.';
    }
  });
});

function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return 'rock';
  } else if (choice === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

const computerChoice = getComputerChoice();

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'It\'s a tie!';
  }

  if (playerChoice === 'rock' && computerChoice === 'paper') {
    return 'Computer wins!';
  } else {
    return 'You won!';
  }

  if (playerChoice === 'paper' && computerChoice === 'scissors') {
    return 'Computer wins!'
  } else {
    return 'You won!'
  }

  if (playerChoice === 'scissors' && computerChoice === 'rock') {
    return 'Computer wins!'
  } else {
    return 'You won!'
  }
}



function playGame() {
  const userChoice = playerChoice;
  let computerChoice = getComputerChoice();
}

console.log(determineWinner(playerChoice('scissors'), getComputerChoice()));


document.getElementById('reset').addEventListener('click', resetButton);

function resetButton() {
  alert('reset button clicked');
}




// const getUserChoice = (userInput) => {
//   userInput = userInput.toLowerCase();
//   if (userInput === 'rock') {
//     return 'rock';
//   } else if (userInput === 'paper') {
//     return 'paper';
//   } else if (userInput === 'scissors') {
//     return 'scissors';
//   } else {
//     return 'Input Error - please choose from rock, paper or scissors.';
//   }
// };
