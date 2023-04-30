// document.getElementById("count-el").innerText = 5;

// variables 

// let num = 5;
// let count = num + 10;
// console.log(count);

// let myAge
// myAge = 21;
// console.log(myAge);

// let myAge = 21
// let humanDogRatio = 7
// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)

// let count = 10;
// count = 5;
// count = count + 1; // 5+1
// count += 1; // 6+1
// console.log(count);

// let bonusPoints = 50;
// console.log(bonusPoints); // 50
// bonusPoints +=100; // 50+100
// console.log(bonusPoints); // 150
// bonusPoints -=25; // 150-25
// console.log(bonusPoints); // 125
// bonusPoints +=70; // 125+70
// console.log(bonusPoints) // 195


// let num = 50
// console.log(num)
// num = num + 50
// console.log(num)
// num = num -75
// console.log(num)
// num = num + 45
// console.log(num)

// what to do in the counter app 
//initialize the count as 0
// listen for clicks on the increment button 
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the change

// let count = 0

// function

// function increment(){
//     console.log('clicked')
// }

// function countdown() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }
// countdown()
// countdown()

// function display(){
//     console.log(42)
// }
// display()

// let lap1 = 34 // global scope
// let lap2 = 33
// let lap3 = 36
// function carLap() {
//     console.log(lap1+lap2+lap3)
//     let totalLap = lap1+lap2+lap3 // local to the function (local scope)
//     console.log(totalLap)
// }
// // console.log(totalLap)
// carLap()

// let lapsCompleted = 0
// function totalLaps(){
//     lapsCompleted = lapsCompleted+1
// }
// totalLaps()
// totalLaps()
// totalLaps()
// console.log(lapsCompleted)

// comments
// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let countEl = document.getElementById("count-el") // passing arguement
// console.log(countEl)
let saveEl = document.getElementById("save-el")
let count = 0;
function increment() {
    count += 1
    // countEl.innerText = count
    countEl.textContent = count
    // document.getElementById("count-el").innerText = count
    // console.log(count)
}

function decrement() {
    count -= 1
    countEl.textContent = count
    console.log(count)
}

function save() {
    // console.log(count)
    let res = count + " , "
    // saveEl.innerText += res
    saveEl.textContent += res
    count = 0
    countEl.textContent = count
    // console.log(count)
}

// strings in javascript
// let username = "abhi"
// console.log(username)
// let message = "You have three new notifications"
// console.log(message)
// console.log(username +", "+ message + " !")
// let messageToUser = message + ", " + username + "!"
// console.log(messageToUser)

// let myName = 'Abhishek Sen'
// let greeting = 'Hi, my name is '
// let myGreeting = greeting + myName
// console.log(myGreeting)

// let points = 50
// let bonusPoints = "10" // string always wins
// let total = points + bonusPoints
// console.log(total)
// // string always wins so the result will be a concatinated string with numbers
// console.log(4 + 5) // 9
// console.log("2" + "4") // 24
// console.log("5" + 1) // 51
// console.log(100 + "100") // 100100


// let welcomeEl = document.getElementById("welcome-el")
// let name = "Abhishek Sen"
// let greetingMessage = "Welcome back " 
// welcomeEl.innerText = greetingMessage + name

// welcomeEl.innerText += "👋"

// // recape variable practice
// let firstName = "Abhishek"
// let lastName = "Sen"
// let fullName = firstName +" "+ lastName
// console.log(fullName)

// let name = "Linda"
// let greeting = "Hi there"
// function Greet(){
//     let message = greeting + ", " + name + "!"
//     console.log(message)
// }
// Greet()

// let myPoints = 3
// // Create two functions, add3Points() and remove1Point(), and have them
// // add/remove points to/from the myPoints variable
// function add3Points(){
//     myPoints += 3
// }
// function remove1Point(){
//     myPoints -= 1
// }
// add3Points()
// add3Points()
// add3Points()
// remove1Point()
// remove1Point()
// // Call the functions to that the line below logs out 10
// console.log(myPoints)

// // Try to predict what each of the lines will log out
// console.log("2" + 2) // "22"
// console.log(11 + 7) // 18
// console.log(6 + "5") // "65"
// console.log("My points: " + 5 + 9) // My points: 14 (wrong: string always wins) ans = "My points: 59"
// console.log(2 + 2) // 4
// console.log("11" + "14") // "1114 "

// manipulate and display in dom
// When the user clicks the error button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".
let errorMsg = document.getElementById("error")
function showErrorMsg() {
    errorMsg.textContent = "Something went wrong, please try again"
    console.log("Button Clicked")
}
// showErrorMsg()

//calculator challenge

let num1 = 100
let num2 = 25
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let result = document.getElementById("res-el")

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"
// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

function add() {
    console.log("Adding...")
    let res = num1 + num2
    result.textContent = "Sum: " + res
}

function subtract() {
    console.log("Subtracting...")
    let res = num1 - num2
    result.textContent = "Subtraction: " + res
}

function multiply() {
    console.log("multiplying...")
    let res = num1 * num2
    result.textContent = "Multiplication: " + res
}

function divide() {
    console.log("Dividing...")
    let res = num1 / num2
    result.textContent = "Divison: " + res
}

