// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

let firstCard = 11
let secondCard = 10

// 2. Create a variable, sum, and set it to the sum of the two cards

let sum = firstCard + secondCard
console.log(sum)

// if-else statements (conditionals in javascript)

// logic for blackjack game

if (sum < 21) {
    console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21) {
    console.log("Wohoo! You've got BlackJack! 😎")
} else {
    console.log("You've lost the game! 😥")
}

// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

let age = 21

// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"

if (age < 21) {
    console.log("You can not enter the club!")
} else {
    console.log("Welcome!")
}

// Check if the person is elegible for a birthday card from the King! (100)
let ageOfPerson = 100

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"

if (ageOfPerson < 100) {
    console.log("Not elegible")
} else if (ageOfPerson === 100) {
    console.log("Here is your birthday card from the King!")
} else {
    console.log("Not elegible, you have already gotten one")
}

// difference between "==" and "===" is
// "===" checks value as well as type strictness (100 === "100") -> false
console.log(100 === "100") // false
// "==" checks only the value i.e. (100 == "100") -> true
console.log(100 == "100") // true


// Write the conditional according to these rules:
// if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
// else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
// else -> "You're out of the game! 😭"


// booleans in javascript

let hasBlackJack = false

// 1. Create a variable called isAlive and assign it to true

let isAlive = true

// 2. Flip its value to false in the appropriate code block 

// 1. Declare a variable called message and assign its value to an empty string

let message = ""

// 2. Reassign the message variable to the string we're logging out

if (sum <= 20) {
    console.log("Do you want to draw a new card? 🙂")
    message = "Do you want to draw a new card? 🙂"
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳")
    message = "Wohoo! You've got Blackjack! 🥳"
    hasBlackJack = true
} else {
    console.log("You're out of the game! 😭")
    isAlive = false
    message = "You're out of the game! 😭"
}

// cash out!
console.log(hasBlackJack)
console.log(isAlive)
console.log(message)

console.log(4 === 3)  // false
console.log(5 > 2)    // true
console.log(12 > 12)  // false
console.log(3 < 0)    // false
console.log(3 >= 3)   // true
console.log(11 <= 11) // true
console.log(3 <= 2)   // false

// Arrays (ordered list of items) in javascript

let featuredPosts = [
    "Check out my Netflix clone",
    "Here's the code for my project",
    "I've just relaunched my portfolio"
]

console.log(featuredPosts.length) // 3 the actual length of the array or the size of the array

// Create an array that lists your i.e. experience, education, licenses, skills or similar
// The items of the array should be strings

let education = [
    "Matriculation from JAC Board",
    "Intermediate in Science from JAC Board",
    "B-Tech from JUT Ranchi",
    "JavaScript from Scrimba"
]


console.log(featuredPosts[2])

let experience = ["CEO at Scrimba", "Frontend developer at Xeneta", "People counter for Norstat"]

// Make the following appear in the console:
// Frontend developer at Xeneta
console.log(experience[1])
// People counter for Norstat
console.log(experience[2])
// CEO at Scrimba
console.log(experience[0])

// Array - ordered list of items - coposite / complex data type

// Create an array that describes yourself. Use the three primitive data types you've learned
// It should contain your name (string), your age (number), and whether you like pizza (boolean)

let myIntoroduction = ["Abhishek Sen", 21, true]
console.log(myIntoroduction)

// add and delete elements form array 
let cards = [7, 4]
cards.push(8)
console.log(cards)


// Push the newMessage to the messages array, and then log out the array

let messages = [
    "Hey, how's it going?",
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately."
]

let newMessage = "Same here!"
let newMessage1 = [230, "Take care!", true, "hello", 345, false]
let newMessage2 = "Yes, F*ck you too!"

messages.push(newMessage)
messages.push(newMessage1)
messages.push(newMessage2)
console.log(messages)

//  How can you remove the last item in an array? Try to google it!

messages.pop()
console.log("Wrong message removed...")
console.log(messages)

// loops in javascript -> for loop

// Count to ten!

// We need to specify...

// Where should we START counting?
// Where is the FINISH line?
// What's the STEP SIZE we should use?

//    START           FINISH       STEP SIZE
for (let count = 1; count < 11; count += 1) {
    console.log(count)
}


// Create a for loop that counts from 10 to 100 in steps of 10
// Use console.log to log out the numbers
console.log("Counting...")
for (let i = 10; i <= 100; i += 10) {
    console.log(i)
}

// for loops and arrays 

// DRY - Don't repeat yourself
// console.log(messages[0])
// console.log(messages[1])
// console.log(messages[2])
// console.log(messages[3])

for (let i = 0; i < messages.length; i++) {
    console.log(messages[i])
}

let cardsArray = [7, 3, 9]

// Create a for loop that logs out all the cardsArray in the array
// Use cardsArray.length to specify how long the loop should run

for (let i = 0; i < cardsArray.length; i++) {
    console.log(cardsArray[i])
}

// let sentence = ["Hello", "my", "name", "is", "Per"]
// let greetingEl = document.getElementById("greeting-el")

// Render the sentence in the greetingEl paragraph using a for loop and .textContent

// for (let i = 0; i < sentence.length; i++) {
//     // How do you keep the spaces between the words if I remve them from the array?
//     greetingEl.textContent += sentence[i] + " "
// }


// returning values in functions

let player1Time = 100
let player2Time = 170

function getFastestRaceTime() {
    if (player1Time < player2Time) {
        return player1Time
    } else {
        return player2Time
    }
}

let fastestRace = getFastestRaceTime()
console.log(fastestRace)

// Write a function that returns the total race time
// Call/invoke the function and store the returned value in a new variable
// Finally, log the variable out

function totalRaceTime() {
    let time = player1Time + player2Time
    return time
}

let totalTime = totalRaceTime()
console.log(totalTime)

// random & floored numbers in javascript
// Math.random(), Math.floor()
// What does Math.random() do?
// Your answer: it generates a random number between 0 and 1 (not inclusive of 1)

// let randomNumber = Math.random() // number ranged from 0.000 to 0.999
let randomNumber = Math.random() * 6 // number ranged from (0.000*6 ~ 0.000) to (0.999*6 ~ 5.999)
console.log(randomNumber)

// What does Math.floor() do to positive numbers?
// Your answer: it removes the decimals

let flooredNumber = Math.floor(3.45632) // 3
let flooredNumber1 = Math.floor(9.94344454) // 9
let flooredNumber2 = Math.floor(33) // 33
let flooredNumber3 = Math.floor(0.9895) // 0
console.log(flooredNumber)
console.log(flooredNumber1)
console.log(flooredNumber2)
console.log(flooredNumber3)

let randomNumberWithFloorValue = Math.floor(Math.random() * 6) // ranged from 0 to 5
console.log(randomNumberWithFloorValue) // possible values = {0,1,2,3,4,5}

// Try to modify the expression so that we get a range from 1 to 6
let randomNumbers = Math.floor(Math.random() * 6) + 1
console.log(randomNumbers)

// Create a function, rollDice(), that returns a random number between 1 and 6
function rollDice() {
    console.log("Dice rolled...")
    let randomNumber = Math.floor(Math.random() * 6) + 1
    return randomNumber
}
let dice = rollDice()
console.log(dice)

// Logical operators in javascript {AND(&&), OR(||), Not(!)}

let hasCompletedCourse = true
let givesCertificate = true

function generateCertificate() {
    console.log("Generating certificate...")
}

if (hasCompletedCourse && givesCertificate) {
    // if(hasCompletedCourse === true && givesCertificate === true){
    generateCertificate()
}

let hasSolvedChallenge = false
let hasHintsLeft = false

function showSolution() {
    console.log("Showing the solution....")
}

// Create an if statement that checks that both variables are false.
// If so, run the showSolution() function
if (!hasSolvedChallenge && !hasHintsLeft) {
    // if (hasSolvedChallenge === false && hasHintsLeft === false) {
    showSolution()
}


// Create two boolean variables, likesDocumentaries and likesStartups
let likesDocumentaries = true
let likesStartups = false

function recommendMovie() {
    console.log("Hey, check out this new film we think you will like!")
}

// Use an OR statement (||) to call recommendMovie() if either of those variables are true

if (likesDocumentaries || likesStartups) {
    recommendMovie()
}

// objects in javascript
// Objects - store data in-depth - composite / complex data type
// key-value pairs

let course = {
    title: "Learn JavaScript for free", // string
    lessons: 16, // number
    creator: "Abhishek Sen", // string
    length: 180, // number
    level: 2, // number/integer
    isFree: true, // boolean
    tags: ["html", "css", "javascript"] // array
}

console.log(course) // log the entire object
// output for the above
/** 
 {
 title: 'Learn JavaScript for free',
lessons: 16,
creator: 'Abhishek Sen',
length: 180,
level: 2,
isFree: true,
tags: [ 'html', 'css', 'javascript' ]
}
*/
console.log(course.isFree) // dot notaion -> true
console.log(course["creator"]) // bracket notation -> Abhishek Sen

// Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array
// Log out at least two of the keys using the dot notation

let airbnbCastleListing = {
    title: "Baskerville castle",
    isAvailable: true,
    price: 139,
    location: "London, UK",
    ratings: 4.5,
    dishes: ["pizza", "burger", "donuts"]
}

console.log(airbnbCastleListing)
console.log(airbnbCastleListing.isAvailable)
console.log(airbnbCastleListing.location)
console.log(airbnbCastleListing.dishes)
console.log(airbnbCastleListing.dishes[1])
