import { gameRules } from "./rules.js"
import { styles } from "./styles.js"

const cardsContainer = document.querySelector(".cards-container")
const cardsContainerArray = document.querySelectorAll(".card")
const rulesPage = document.querySelector(".rules-background")
const rulesBtn = document.querySelector(".rules-btn")
const closeRulesBtn = document.querySelector(".close-btn")
const gamePlay = document.querySelector(".game-play")
const player = document.querySelector(".player-card")
const cpu = document.getElementById("cpu-card")
const winnerDiv = document.getElementById("winner")
const cpuText = document.querySelector(".cpu-text")
const resultsContainer = document.querySelector(".results-container")
const playAgainBtn = document.querySelector(".play-again-btn")

const cardsArray = Array.from(cardsContainerArray)


cardsArray.forEach(item => {
   item.addEventListener("click", () => handlClick(item))
})

function handlClick(item) {
   cardsContainer.style.display = "none"
   gamePlay.style.display = "grid"

   const playerPick = item.className.substring(5)
   styles(player, playerPick)

   let time = 0
   let cpuLastPick = ""
   for (let i = 0; i < 30; i++) {
      const getRandom = Math.floor(Math.random() * 5)
      const cpuPick = cardsArray[getRandom].className.substring(5)
      time += 100
      setTimeout(() => {
         cpu.className = "cpu-card"
         styles(cpu, cpuPick)
      }, time)
      cpuLastPick = cpuPick
   }
   gameRules(cpuLastPick, playerPick)
}


playAgainBtn.addEventListener("click", e => {
   e.target.blur()

   cardsContainer.style.display = "block"
   gamePlay.style.display = "none"
   resultsContainer.style.display = "none"

   cpu.className = "cpu-placeholder"
   gamePlay.className = "game-play"
   cpuText.className = "cpu-text"
   winnerDiv.className = ""

})


const handleRulesBtns = (display) =>
   rulesPage.style.display = display

rulesBtn.addEventListener("click", () => handleRulesBtns("flex"))

closeRulesBtn.addEventListener("click", () => handleRulesBtns("none"))

rulesPage.addEventListener("click", e => {
   if (e.target.className === "rules-background") {
      handleRulesBtns("none")
   }
})