let firstCard = 10
let secondCard = 10
let card = 2
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


let sum = firstCard + secondCard


function startGame() {
  renderGame()
}

  function renderGame(){
    sumEl.innerText = "Sum :" + sum
    cardsEl.textContent = "Cards :" + firstCard +" "+ secondCard
    if (sum <= 20) {
      message = "Do you want to draw a new card? "
      } else if (sum === 21) {
      message =" You've got Blackjack!  "
      hasBlackJack = true
      } else {
      message = "You're out of the game! "
      isAlive = false
      }
      messageEl.innerHTML = message
  }

  function newCard() {
    messageEl.textContent = " Drawing a new card !"
    sum += card
    startGame()
  }

  



  
  
  
  
  

