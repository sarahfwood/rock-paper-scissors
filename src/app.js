function getPlayerChoice() {
  document.querySelectorAll('.choice').forEach(item => {
    item.addEventListener('click', event => {

      const playerChoice = item.value;

      if (item === document.getElementById('rock')) {
        document.getElementById('choiceDisplay').textContent = 'You chose Rock!!';
        return 'rock';
      } else if (item === document.getElementById('paper')) {
        document.getElementById('choiceDisplay').textContent = 'You chose Paper!!';
        return 'paper';
      } else if (item === document.getElementById('scissors')) {
        document.getElementById('choiceDisplay').textContent = 'You chose Scissors!!';
        'return scissors';
      } else {
        alert('Clicked');
        return 'Input Error - please choose from rock, paper or scissors.';
      }
    });
  });
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

function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    document.getElementById('computerChoicedisplay').textContent = 'Computer chose Rock!!';
    return 'rock';
  } else if (choice === 1) {
    document.getElementById('computerChoicedisplay').textContent = 'Computer chose Paper!!';
    return 'paper';
  } else {
    document.getElementById('computerChoicedisplay').textContent = 'Computer chose Scissors!!';
    return 'scissors';
  }
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    document.getElementById('result').textContent = 'It\'s a tie';
  } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
    document.getElementById('result').textContent = 'Scissors cut paper, you win!!';
  } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
    document.getElementById('result').textContent = 'Rock crushes Scissors, you win!!';
  } else if (playerChoice === 'paper' && computerChoice === 'rock') {
    document.getElementById('result').textContent = 'Paper covers Rock, you win!!';
  } else {
    document.getElementById('result').textContent = 'Computer wins';
  }
}

console.log(determineWinner(playerChoice, computerChoice));



function playGame() {
  const computerChoice = getComputerChoice();
  const playerChoice = getPlayerChoice();
  // const userChoice = playerChoice;
  // let computerChoice = getComputerChoice();
}

// console.log(determineWinner(playerChoice('scissors'), getComputerChoice()));


document.getElementById('reset').addEventListener('click', resetButton);

function resetButton() {
  alert('reset button clicked');
}




