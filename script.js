const learnerInput = document.getElementById("learner-input");
const submitBtn = document.getElementById("submit");
const learnersList = document.getElementById("learnersList");
const raffleBtn = document.getElementById("pick");
const winnerDisplay = document.getElementById("winnerDisplay");
const removeBtn = document.getElementById("remove");
const rouletteDisplay = document.getElementById("roulette");
const rollBtn = document.getElementById("roll");
const learnersToDisplayList = [];
const learnersForRaffleList = [];
const startTime = new Date();

if (!localStorage.getItem("time")) {
  localStorage.setItem("time", startTime);
}
function addLearnerToDisplayList() {
  learnersToDisplayList.push(learnerInput.value);
}
function addLearnerToRaffleList() {
  learnersForRaffleList.push(learnerInput.value);
}
function addLearnerToPage() {
  for (i = 0; i < learnersToDisplayList.length; i++)
    learnersList.innerHTML =
      learnersList.innerHTML + `<li> ${learnersToDisplayList[i]}  </li>`;
}

//function saveLearnerLocally() {
// localStorage.setItem(localLearners, learnersToDisplayList);
//}
function removeLearnerFromLists() {
  for (let i = 0; i < learnersForRaffleList.length; i++) {
    if (learnersForRaffleList[i] === learnerInput.value) {
      learnersForRaffleList.splice([i], 1);
      i--
    }
  }
  for (let i = 0; i < learnersToDisplayList.length; i++) {
    if (learnersToDisplayList[i] === learnerInput.value) {
      learnersToDisplayList.splice([i], 1);
      i--
    }
  }
}
function rouletteNames(times) {
  for (let i = 0; i < learnersToDisplayList.length; i++) {
    const myTimeout1 = setTimeout(() => {
      rouletteDisplay.innerHTML = learnersToDisplayList[i];
    }, 50 * i * times);
  }
}
function runRoulette() {
  for (let i = 0; i < 50; i++) {
    const myTimeout2 = setTimeout(() => {
      rouletteNames(i);
    }, 50 * i);
  }
}
function showWinner(winner) {
  console.log(learnersToDisplayList[winner]);
  winnerDisplay.innerHTML = `${learnersToDisplayList[winner]}`;
}

function clearInput() {
  learnerInput.value = "";
}
function clearDisplayNames() {
  learnersList.innerHTML = "";
}
function getRandomNumber() {
  return Math.floor(Math.random() * learnersToDisplayList.length);
}

learnerInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") document.getElementById("submit").click;
});

submitBtn.addEventListener("click", () => {
  if (new Date() - startTime <= 600004) {
    addLearnerToRaffleList();
  }
  addLearnerToRaffleList();
  console.log(learnersForRaffleList);

  addLearnerToDisplayList();
  learnersList.innerHTML = "";
  addLearnerToPage();
  clearInput();
});
rollBtn.addEventListener("click", () => {
  runRoulette();
});
raffleBtn.addEventListener("click", () => {
  showWinner(getRandomNumber());
  rouletteDisplay.remove();
});
removeBtn.addEventListener("click", () => {
  removeLearnerFromLists();
  clearDisplayNames();
  addLearnerToPage();
  console.log(learnersForRaffleList);
});
