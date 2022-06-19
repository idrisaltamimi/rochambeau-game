import { screenWidth } from "./styles.js"

const score = document.querySelector(".score")
const ResultsTitle = document.querySelector(".title-results")
const resultsContainer = document.querySelector(".results-container")
const gamePlay = document.querySelector(".game-play")
const cpu = document.getElementById("cpu-card")
const cpuText = document.querySelector(".cpu-text")
const winnerDiv = document.getElementById("winner")


let count = 0

function winner(desktopY, mobileY, result, notDraw, state) {
   if (notDraw) {
      score.textContent = state ? count += 1 : count === 0 ? count = 0 : count -= 1
      winnerDiv.className = "winner"
      const grid = x => {
         if (x.matches) {
            winnerDiv.style.gridColumn = desktopY
            winnerDiv.style.gridRow = 3
         } else {
            winnerDiv.style.gridColumn = mobileY
            winnerDiv.style.gridRow = 1
         }
      }

      grid(screenWidth())
      screenWidth().addListener(grid)
   }
   gamePlay.className = "game-play results"
   cpu.className = "cpu-card cpu-results"
   cpuText.className = "cpu-text cpu-text-results"
   resultsContainer.style.display = "flex"
   ResultsTitle.textContent = result
}

export function gameRules(cpuLastPick, playerPick) {
   const condition = (first, second) =>
      (cpuLastPick === first || cpuLastPick === second) ?
         setTimeout(() => winner(1, 1, "you win", true, true), 3050) :
         setTimeout(() => winner(5, 3, "you lose", true, false), 3050)

   if (playerPick === cpuLastPick) {
      setTimeout(() => winner(5, 3, "you draw", false, true), 3050)
   }
   else if (playerPick === "scissors") {
      condition("paper", "lizard")
   }
   else if (playerPick === "paper") {
      condition("rock", "spock")
   }
   else if (playerPick === "rock") {
      condition("lizard", "scissors")
   }
   else if (playerPick === "lizard") {
      condition("spock", "paper")
   }
   else if (playerPick === "spock") {
      condition("scissors", "rock")
   }
}