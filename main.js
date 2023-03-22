let firstCard = 10
let secondCard = 10
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")

let sum = firstCard + secondCard


  function startGame(){
    if (sum <= 20) {
      message = "Do you want to draw a new card? 🙂 "
      } else if (sum === 21) {
      message ="Woohoo! You've got Blackjack! 🥳 "
      hasBlackJack = true
      } else {
      message = "You're out of the game! 😭 "
      isAlive = false
      }
      messageEl.innerHTML = message
  }

  



  
  
  
  
  

