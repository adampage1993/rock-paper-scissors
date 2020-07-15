let userScore = 0;
let compScore = 0;

// Selectors
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const userScore_div = document.querySelector("#user-score");
const compScore_div = document.querySelector("#comp-score");
const result = document.querySelector("#result");

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

function win(userChoice, computerChoice) {
  userScore++;
  userScore_div.innerHTML = userScore;
  result.innerHTML = `${userChoice} beats ${computerChoice}. You win!`
}
function lose(userChoice, computerChoice) {
  compScore++;
  compScore_div.innerHTML = compScore
  result.innerHTML = `${computerChoice} beats ${userChoice}. Computer wins!`
}
function draw() {
  result.innerHTML = `It's a draw!`
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case 'rockscissors':
    case 'paperrock':
    case 'scissorspaper':
      win(userChoice, computerChoice);
      break;
    case 'rockpaper':
    case 'paperscissors':
    case 'scissorsrock':
      lose(userChoice, computerChoice);
      break;
    case 'rockrock':
    case 'paperpaper':
    case 'scissorsscissors':
      draw(userChoice, computerChoice);
      break;
  }
}

game();