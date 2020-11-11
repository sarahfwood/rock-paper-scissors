document.querySelectorAll('.choice').forEach(item => {
  item.addEventListener('click', event => {

    const playerChoice = item.value;

    if (item === document.getElementById('rock')) {
      document.getElementById('choiceDisplay').innerHTML = 'You chose Rock!!';
      alert('You clicked rock');
      return 'rock';
    } else if (item === document.getElementById('paper')) {
      document.getElementById('choiceDisplay').innerHTML = 'You chose Paper!!';
      alert('You clicked paper');
      return 'paper';
    } else if (item === document.getElementById('scissors')) {
      document.getElementById('choiceDisplay').innerHTML = 'You chose Scissors!!';
      alert('You clicked scissors');
      'return scissors';
    } else {
      alert('Clicked');
      return 'Input Error - please choose from rock, paper or scissors.';
    }
  });
});

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

function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    document.getElementById('computerChoicedisplay').innerHTML = 'Computer chose Rock!!';
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




