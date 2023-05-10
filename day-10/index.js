// SETTING THE STAGE
const player = "Per"
const opponent = "Nick"
const game = "AmazingFighter"
let points = 0
let hasWon = false

// PLAYING THE GAME
points += 100
hasWon = true

// ANNOUNCING THE WINNER
if (hasWon) {
    console.log(`${player} got ${points} points and won the ${game} game!`)
} else {
    console.log(`The winner is ${opponent}! ${player} lost the game`)
}

// Go through all variables and decide if they should be let or const
// Change the console logs to use template strings instead of double quotes

let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

// Create a function that takes a single parameter, an array,
// and logs all the items of the array to the console.
// Call the function while passing in myCourses as an argument

function logCourses(arr){
    for(let i = 0; i<arr.length; i++){
        console.log(arr[i])
    }
}

logCourses(myCourses)

// Save a value to localStorage
// Delete your code and refresh the page
// Fetch your value from localStorage and log it out

let value = "hello from localstorage"
localStorage.setItem("listItem", value)
console.log(localStorage.getItem("listItem"))

let data = [
    {
        player: "Jane",
        score: 52
    }, 
    {
        player: "Mark",
        score: 41
    }
]

// Fetch the button from the DOM, store it in a variable
// Use addEventListener() to listen for button clicks
// Log Jane's score when the button is clicked (via data)

const btnEl = document.getElementById("btn-el")
btnEl.addEventListener("click", function(){
    console.log(data[0].score)
    btnEl.textContent = data[0].score
})

// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2: If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge

// function generateSentence(desc, arr) {
//     const length = arr.length
//     let obj = ""
//     for(let i = 0; i<length; i++){
//         obj += arr[i] + ", "
//     }
//     const statement = `The ${length} ${desc} are ${obj}`
//     console.log(statement)
// }

// generateSentence("best fruits",["Apples", "Bananas"])

function generateSentence(desc, arr) {
    let baseString = `The ${arr.length} ${desc} are `
    const lastIndex = arr.length - 1
    for (let i = 0; i < arr.length; i++) {
        if (i === lastIndex) {
            baseString += arr[i]
        } else {
            baseString += arr[i] + ", "   
        }
    }
    return baseString
}

const sentence = generateSentence("highest mountains", ["Mount Everest", "K2"])
console.log(sentence)


// Background color flipper 
const colorBtn = document.getElementById("color-btn")
const colorInput = document.getElementById("color-input")
const colorCodeText = document.getElementById("color-code")
const copyBtn = document.getElementById("copy-btn")
// const imgBackground = document.querySelector(".team-img")

colorBtn.addEventListener("click", function(){
    // console.log("Button clicked...")
    let hexString = "0123456789ABCDEF"
    let colorCode = "#"
    for(let i = 0; i< 6; i++){
        colorCode += hexString.charAt(Math.floor(Math.random()*16))
    }
    // console.log(colorCode)
    document.body.style.background = colorCode
    document.getElementById("color-btn").style.background = colorCode
    colorCodeText.textContent = colorCode
    colorCodeText.style.color = colorCode
    colorInput.value = colorCode
    copyBtn.style.color = colorCode
    copyBtn.textContent = "COPY COLOR"
})

colorInput.addEventListener("input", function(){
    let color = colorInput.value
    // console.log(color)
    document.body.style.background = color
    document.getElementById("color-btn").style.background = color
    colorCodeText.textContent = color
    colorCodeText.style.color = color
    copyBtn.style.color = color
    copyBtn.textContent = "COPY COLOR"
})

// yet to implement this feature
copyBtn.addEventListener("click", function(){
    // let copiedText = colorCodeText
    // copyBtn.textContent = "COPIED!"
    copyBtn.textContent = "NAN"
})


// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "https://e0.pxfuel.com/wallpapers/434/602/desktop-wallpaper-aesthetic-pfp-aesthetic-profile-pic.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-wzdDJl7X3B63KKd4cqszY2EAwjVzDw_s8-5mq_0W1w&usqp=CAU&ec=48665698",
    "https://cdn.statusqueen.com/dpimages/thumbnail/cute_dp_image-3100.jpg"
]
const imgContainer = document.getElementById("container")
function renderImg(){
    let imgItem = ""
    for(let i = 0; i<imgs.length; i++){
        imgItem += `
        <img class="team-img" src=${imgs[i]} alt="list-img-items">
        `
    }
    imgContainer.innerHTML = imgItem
}

renderImg()

// Challenge:
// Round the price in the button down to two decimal places.
// Don't know which method to use? Google it!

// const totalPrice = 420.68735632455

// The toFixed() method doesn't work anymore. Can you make it work?
// Google the error message if you're unsure about how to do it
let totalPrice = "420.68735632455"
const btn = document.getElementById("purchase-btn")
totalPrice = Number(totalPrice) // covert the string into number
btn.textContent = `Buy €${totalPrice.toFixed(6)}` // decimal rounded upto 6 points in case of number only
btn.addEventListener("click", function(){
    btn.textContent = `Buy €${Math.round(totalPrice*100 + Number.EPSILON)/100}`
})

