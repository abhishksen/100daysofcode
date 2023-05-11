// Challenge: Import 'initializeApp' from 
// "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"

// Challenge: Import the 'getDatabase' from
// "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

// import {add} from './functions.js'
// Challenge: Make sure that add is working by console logging add with two number arguments.
// console.log(add(9,90))

const appSettings = {
    databaseURL: "https://addfood-5eb29-default-rtdb.asia-southeast1.firebasedatabase.app/",
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const listItemsInDB = ref(database, "listItems")

// onValue(listItemsInDB, function (snapshot) {
//     let listItemArray = Object.values(snapshot.val())
//     listItems.innerHTML = ""
//     // Challenge: Write a for loop where you console log each list item.
//     for (let i = 0; i < listItemArray.length; i++) {
//         let currentItem = listItemArray[i]
//         // console.log(currentItem)
//         // Challenge: Use the displayItems() function 
//         //to append items instead of console logging
//         displayItems(currentItem)
//     }
// })
// console.log(app)

const inputField = document.getElementById("input-field")
const addBtn = document.getElementById("add-button")
const listItems = document.getElementById("list-items")

// function to clear the input field 
function clearInputField() {
    inputField.value = ""
}

//function to clear previous elements in dom
function clearListItems() {
    listItems.innerHTML = ""
}

// function to append new item list into the dom
function displayItems(item) {

    let itemID = item[0]
    let itemValue = item[1]
    // listItems.innerHTML += `<li>${item}</li>`
    let newEl = document.createElement("li")
    newEl.textContent = itemValue

    // Challenge: Attach an event listener to 
    // newEl and make it so you console log the id of the item when it's pressed.

    newEl.addEventListener("click", function () {
        // console.log(itemID)
        // Challenge: Make a let variable called 'exactLocationOfItemInDB' 
        //and set it equal to ref(database, something) where you substitute something with the code that will give you the exact location of the item in question.
        let exactLocationOfItemInDB = ref(database, `listItems/${itemID}`)
        // Challenge: Use the remove function to remove the item from the database
        remove(exactLocationOfItemInDB)
    })

    listItems.append(newEl)
}

/*
Challenge:
Make it so that when you click the 'Add to cart' button, whatever 
is written in the input field should be console logged.
*/

addBtn.addEventListener("click", function () {
    let inputValue = inputField.value
    // Challenge: Use the Firebase function 'push' to push inputValue to the database
    push(listItemsInDB, inputValue)
    // console.log(`${inputValue} added to database`)

    // Challenge: Clear the input field when button is pressed
    // inputField.value = ""
    // Challenge: Refactor the line above into its own function.
    clearInputField()

    // Challenge: Append a new <li> with text content inputValue to the 'shopping-list' <ul>
    // listItems.innerHTML += `<li>${inputValue}</li>`
    // Challenge: Refactor the line above into its own function.
    // displayItems(inputValue)

})

/*
Challenge:
Call the onValue function with
shoppingListInDB as the first argument and
function(snapshot) {} as the second argument
*/

onValue(listItemsInDB, function (snapshot) {

    // Challenge: Change the onValue code so that it uses snapshot.exists() to show items when there are items in the database and if there are not displays the text 'No items here... yet'.

    if (snapshot.exists()) {
        // Challenge: Console log snapshot.val() to show all the items 
        //inside of shoppingList in the database
        // console.log(snapshot.val())
        // Challenge: Use Object.values() to convert snapshot.val() from an Object to an Array. 
        //Create a variable for this.
        let itemsArray = Object.entries(snapshot.val())

        clearListItems()

        // Challenge: Write a for loop to iterate on itemsArray and console log each item
        for (let i = 0; i < itemsArray.length; i++) {
            let currentItem = itemsArray[i]

            // Challenge: Make two let variables:
            // currentItemID and currentItemValue and use currentItem to set both of
            // them equal to the correct values.

            let currentItemID = currentItem[0]
            let currentItemValue = currentItem[1]

            // Challenge: Use the displayItems(itemValue) function inside of the for loop to append item to the list element for each iteration.
            displayItems(currentItem)
            // console.log(currentItem)  
        }
    } else {
        listItems.innerHTML = "Add your first item... here"
    }

})

