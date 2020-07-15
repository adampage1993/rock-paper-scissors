// Selectors
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

// Event Listeners
rock.addEventListener("click", function () {
  game('rock');
});
paper.addEventListener("click", function () {
  game('paper');
});
scissors.addEventListener("click", function () {
  game('scissors');
});


// Functions
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case 'rockscissors':
    case 'paperrock':
    case 'scissorspaper':
      console.log('user wins');
      break;
    case 'rockpaper':
    case 'paperscissors':
    case 'scissorsrock':
      console.log('computer wins');
      break;
    case 'rockrock':
    case 'paperpaper':
    case 'scissorsscissors':
      console.log('draw');
      break;
  }
}

game();