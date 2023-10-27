const learnerInput = document.getElementById("learner-input");
const submitBtn = document.getElementById("submit");
const learnersList = document.getElementById("learnersList");
const raffleBtn = document.getElementById("pick");
const winnerDisplay = document.getElementById("winnerDisplay");
const removeBtn= document.getElementById("remove")
const learners = [];
const startTime = new Date();
console.log(startTime);

function addToList(learner) {
  learnersList.innerHTML =
    learnersList.innerHTML +
    `<li> ${learner} <input type="checkbox" name="${learner}" id="${learner}"> </li>`;
}

//function saveLearnerLocally() {
// localStorage.setItem(localLearners, learners);
//}

function showWinner(winner) {
  console.log(learners[winner]);
  winnerDisplay.innerHTML = `${learners[winner]}`;
}
function addLearner() {
  learners.push(learnerInput.value);
  addToList(learnerInput.value);
  console.log(learners);
  // saveLearnerLocally();
}
function clearInput() {
  learnerInput.value = "";
}
function getRandomNumber() {
  return Math.floor(Math.random() * learners.length);
}

console.log(Math.random());

submitBtn.addEventListener("click", () => {
  if (new Date() - startTime <= 600004) {
    learners.push(learnerInput.value);
  }
  addLearner();
  clearInput();
});
raffleBtn.addEventListener("click", () => {
  console.log(getRandomNumber());
  showWinner(getRandomNumber());
});
