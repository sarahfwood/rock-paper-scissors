document.querySelectorAll('.choice').forEach(item => {
  item.addEventListener('click', event => {
    
    const playerChoice = item.value;

    if (item === document.getElementById('rock')) {
      alert('You clicked rock');
      return 'rock';
    } else if (item === document.getElementById('paper')) {
      alert('You clicked paper');
      return 'paper';
    } else if (item === document.getElementById('scissors')) {
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

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'It\'s a tie!';
  }

  if (userChoice === 'rock' && computerChoice === 'paper') {
    return 'Computer wins!';
  } else {
    return 'You won!';
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
  const userChoice = getUserChoice();
  let computerChoice = getComputerChoice();
}

console.log(determineWinner(getUserChoice('scissors'), getComputerChoice()));


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
