// Use getRandomCard() to set the values of firstCard and secondCard
// let firstCard = getRandomCard()
// let secondCard = getRandomCard()
// Create a new array - cards - that contains firstCard and secondCard
// let cards = [firstCard, secondCard]
let cards = []
// let sum = firstCard + secondCard
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

// let count = 0

// Store the message-el paragraph in a variable called messageEl
let messageEl = document.getElementById("message-el")

// Store the sum paragraph in a variable called sumEl
let sumEl = document.getElementById("sum-el")

// querySelector in javascript 
// let sumEl = document.querySelector("#sum-el")

// Store the cards paragraph in a variable called cardsEl
let cardsEl = document.getElementById("cards-el")

// console.log(cards)

// player object 
//  Create the player object. Give it two keys, name and chips, and set their values
let player = {
    name: "Balance",
    chips: 149
}

// Grab ahold of the player-el paragraph and store it in a variable called playerEl
let playerEl = document.getElementById("player-el")
// Render the player's name and chips in playerEl
playerEl.textContent = player.name + ": $" + player.chips

// Create a function, getRandomCard(), that always returns the number 5
function getRandomCard() {
    // Make this function return a random number between 1 and 13
    let randomCard = Math.floor(Math.random() * 13) + 1
    // if 1     -> return 11
    if (randomCard === 1) return 11
    // if 11-13 -> return 10
    else if (randomCard > 10) return 10
    // oterwise return the number 
    else return randomCard
}

// function declaraions using 
// the function keyword get hoisted at the top of the javascript code

// Create a new function called startGame() that calls renderGame()
function startGame() {
    isAlive = true
    // Generate two random numbes
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    // Re-assign the cards and sum variables so that the game can start
    // cards.push(firstCard)
    // cards.push(secondCard)
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
    document.getElementById("start-btn").innerHTML = "SUFFLE CARDS"
}

// Create a startGame() function. Move the conditional
// below (line 11-20) inside the body of the function.

function renderGame() {

    // Render the cars on the page using this format -> "Cards: 10 4"
    // Render out firstCard and secondCard
    // cardsEl.textContent = "Cards: " + firstCard + " " + secondCard

    // render all the cards we have
    // cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]

    cardsEl.textContent = "Cards: "
    // Create a for loop that renders out all the cards instead of just two
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    //  Refer to the cards array when rendering out the cards
    // cardsEl.textContent = "Cards: " + cards


    // Render the sum on the page using this format -> "Sum: 14"
    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
        player.chips *= 2
        // count++
        document.getElementById("start-btn").innerHTML = "NEW GAME"
        document.getElementById("new-card-btn").innerHTML = "JACKPOT!"
    } else {
        message = "You're out of the game!"
        player.chips -= 10
        isAlive = false
    }

    // Display the message in the messageEl using messageEl.textContent
    messageEl.textContent = message

    // 
    if(player.chips >= 0){
        playerEl.textContent = "Remaining " + player.name + ": $" + player.chips
    } else{
        playerEl.textContent = "No remaining chips! Reload page?"
    }

    // console.log(message)
}

// Create a function newCard() that logs out "Drawing a new card from the deck!"

function newCard() {
    // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    if (isAlive && !hasBlackJack) {
        // console.log("Drawing a new card...")
        // Create a card variable, and hard code its value to a number (2-11)
        // Use the getRandomCard() to set the value of card
        let newCard = getRandomCard()
        // Add the new card to the sum variable
        sum += newCard
        // Push the card to the cards array
        cards.push(newCard)
        // Call startGame()
        renderGame()
    }
}

