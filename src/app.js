document.querySelectorAll('.choice').forEach(item => {
  item.addEventListener('click', event => {

    const playerChoice = item.value;

    if (item === document.getElementById('rock')) {
      document.getElementById('choiceDisplay').innerHTML = 'You chose Rock!!';
      return 'rock';
    } else if (item === document.getElementById('paper')) {
      document.getElementById('choiceDisplay').innerHTML = 'You chose Paper!!';
      return 'paper';
    } else if (item === document.getElementById('scissors')) {
      document.getElementById('choiceDisplay').innerHTML = 'You chose Scissors!!';
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
    document.getElementById('computerChoicedisplay').innerHTML = 'Computer chose Paper!!';
    return 'paper';
  } else {
    document.getElementById('computerChoicedisplay').innerHTML = 'Computer chose Scissors!!';
    return 'scissors';
  }
}

const computerChoice = getComputerChoice();


function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    document.getElementById('result').innerHTML = 'It\'s a tie';
  } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
    document.getElementById('result').innerHTML = 'Scissors cut paper, you win!!';
  } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
    document.getElementById('result').innerHTML = 'Rock crushes Scissors, you win!!';
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




