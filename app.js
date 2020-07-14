// Selectors
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

// Event Listeners
rock.addEventListener("click", function () {
  console.log("hello");
});
paper.addEventListener("click", function () {
  console.log("hi");
});
scissors.addEventListener("click", function () {
  console.log("bye");
});

// Functions
function computerChoice() {
  const num = Math.floor(Math.random() * 3);
  switch (num) {
    case 0:
      console.log("rock");
      break;
    case 1:
      console.log("paper");
      break;
    case 2:
      console.log("scissors");
      break;
  }
}
