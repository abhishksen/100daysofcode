let fighters = ["🐉", "🐥", "🐊", "💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷", "🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function () {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    // let index = Math.floor(Math.random()*fighters.length)
    let fighter1 = fighters[Math.floor(Math.random()*fighters.length)]
    let fighter2 = fighters[Math.floor(Math.random()*fighters.length)]
    stageEl.textContent = fighter1 + " vs " + fighter2
})


let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

function sortFruits(){
    for(let i = 0; i<fruit.length; i++){
        if(fruit[i] === "🍎"){
            appleShelf.textContent += fruit[i] + " "
        } else{
            orangeShelf.textContent += fruit[i] + " "
        }
    }
}