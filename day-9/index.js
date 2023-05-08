// Log out "Button clicked!" when the user clicks the "SAVE INPUT" button

// let btnEl = document.getElementById("input-btn")
// let inputEl = document.getElementById("input-el")



// function saveLead() {
//     console.log("Button Clicked from onclick function")
// }

// btnEl.addEventListener("click", function () {
//     console.log("Button clicked from addEventlistner")
// })

// // 1. Grab the box from the DOM and store it in a variable
// // 2. Add a click event listener to the box 
// // 3. Log out "I want to open the box!" when it's clicked

// let clickBox = document.getElementById("box")
// clickBox.addEventListener("click", function () {
//     console.log("I want to open the box!")
// })

// btnEl.addEventListener("click", function () {
//     console.log("Button clicked!")
// })

// javascript let and const
// If possible, use const. If not, use let.

// Which variables below should be changed from let to const?

// The customer wants to order some stuff. Here are the details:
// let basePrice = 520 // should be a const b'coz it is the base constant price
// const basePrice = 520
// // let discount = 120 // the discount is also constant here so can also be changed
// const discount = 120
// let shippingCost = 12
// let shippingTime = "5-12 days"

// // Whops! Turns out the shipping will be a bit more complex
// shippingCost = 15
// shippingTime = "7-14 days"

// // Calculating the full price
// // let fullPrice = basePrice - discount + shippingCost 
// const fullPrice = basePrice - discount + shippingCost 

// // Finally, notifying the customer
// console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime)

// // Use .innerHTML to render a Buy! button inside the div container

// let btnContainer = document.getElementById("container")
// btnContainer.innerHTML = "<button onclick ='buy()'>BUY NOW!</button>"

// // When clicked, render a paragraph under the button (in the container)
// // that says "Thank you for buying!"

// function buy(){
// btnContainer.innerHTML += "<p>Thank you for buying!<p/>"
// }

// template strings/literals
const recipient = "James"
const sender = "Abhishek"

// Refactor the email string to use template strings
// const email = "Hey " + recipient + "! How is it going? Cheers Per"

// Create a new variable, sender, and set its value to your name
// Use your sender variable instead of "Per"
// const email = `Hey ${recipient}! How is going? Cheers Per`
const email = `Hey 
                ${recipient}! 
                    How is going? 
                      Cheers 
                        ${sender}`

console.log(email)

// local storage in javascript
// HINTS:
// localStorage.setItem(key, value)
// localStorage.getItem(key)
// localStorage.clear()
// PS: both key and value need to be strings

// // 1. Save a key-value pair in localStorage
// localStorage.setItem("key","value")
// // 2. Refresh the page. Get the value and log it to the console
// let item = localStorage.getItem("key")
// console.log(item)
// // 3. Clear localStorage
// localStorage.clear()

// let myLeads = `["www.awesomelead.com"]`

// // 1. Turn the myLeads string into an array
// myLeads = JSON.parse(myLeads)
// // 2. Push a new value to the array
// myLeads.push("www.xyx.com")
// // 3. Turn the array into a string again
// myLeads = JSON.stringify(myLeads)
// // 4. Console.log the string using typeof to verify that it's a string
// console.log(myLeads)
// console.log(typeof myLeads)


// truthy and falsy values in javascript
// truthy values examples - 12, "hello world", ["hello", 89, true], true, []
// falsy values example - 
// false
// 0
// ""

// null -> how you as a developer signalize emptiness
let currentViewers = null
currentViewers = ["jane", "nick"]
currentViewers = null
if (currentViewers) {
  // do something , e.g. notify the live streamers
  console.log("we have viewers")
}

// undefined -> how JavaScript signalizes emptiness
let viewers // undefined
console.log(viewers)

// NaN

// check if a value is truthy or falsy 
// Boolean(value) -> returns either true or false 

console.log(Boolean("")) // falsy
console.log(Boolean("0")) // truthy
console.log(Boolean(100)) // truthy
console.log(Boolean(null)) // falsy
console.log(Boolean([0])) // truthy
console.log(Boolean(-0)) // flasy


// functions with parameters 

const welcomeEl = document.getElementById("welcome-el")
// Give the function a parameter, greeting, that replaces "Welcome back"
function greetUser(greeting, name, emoji) { // function with multiple parameters 
// function greetUser(greeting, name) { // function with two parameters
  // function greetUser(greeting) { //function with single parameter
  // Rewrite the expression using template literals
  // welcomeEl.textContent = greeting + " ! " + name + " 👋"
  // welcomeEl.textContent = `${greeting}! ${name} 😁`
  welcomeEl.textContent = `${greeting}! ${name} ${emoji}`
}
greetUser("Hello there", "Abhishek Sen", "😋")

// Create a function, add(), that adds two numbers together and returns the sum
//           parameters
function add(num1, num2){
let res = num1 + num2
return res
}
//            arguments
console.log( add(3,4)    ) // should log 7
console.log( add(9, 102) ) // should log 111

// arguments vs parameters 
// arguments - outsidde of the function, when we call a function we passes arguments 
// parameters - inside of the function, when we declare and define a function body

// What are greeting and name? -> parameters 
// What are "Howdy" and "James"? -> arguments
// What are num1 and num2? -> parameters 
// What are 3 and 4? -> arguments

// Create a function, getFirst(arr), that returns the first item in the array
function getFirst(arr){
  return arr[0]
}
// Call it with an array as an argument to verify that it works
console.log(getFirst([33, "hello"]))