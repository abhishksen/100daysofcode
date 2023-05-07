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