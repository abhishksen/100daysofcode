// Create two variables:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field
let myLeads = []
const inputEl = document.getElementById("input-el") // const can not be reassigned
const btnEl = document.getElementById("input-btn")
// Grab the unordered list and store it in a const variable called ulEl
const ulEl = document.getElementById("ul-el")
// Push the value "www.awesomelead.com" to myArray when the input button is clicked

//Store the delete button in a deleteBtn variable
const deleteEl = document.getElementById("delete-btn")

// // using local storage in javascript 
// localStorage.setItem("leads", "example.com")
// console.log(localStorage.getItem("leads"))

// Get the leads from the localStorage - PS: JSON.parse()
// Store it in a variable, leadsFromLocalStorage
// Log out the variable

// ["lead1", "lead2"] or null
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
// console.log(leadsFromLocalStorage)
// localStorage.clear()

// Grab the SAVE TAB button and store it in a tabBtn variable
const saveTabBtn = document.getElementById("tab-btn")

// Check if leadsFromLocalStorage is truthy
// If so, set myLeads to its value and call renderLeads()
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads(myLeads)
}

// const tabs = [
//     { url: "https://www.linkedin.com/in/per-harald-borgen/" }
// ]
//Listen for clicks on tabBtn. Log Per's LinkedIn URL to the console
saveTabBtn.addEventListener("click", function () {
    // chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    //     // since only one tab should be active and in the current window at once
    //     // the return variable should only have one entry
    //     let activeTab = tabs[0]
    //     let activeTabId = activeTab.id // or do whatever you need
    // })

    chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
        // console.log(tab)
        // Save the url instead of logging it out
        // console.log(tabs[0].url)
        let url = tabs[0].url
        myLeads.push(url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        renderLeads(myLeads)
    })
})

// Refector the function so that it takes a parameter, leads, that it uses
// instead of the global myLeads variable. Remember to update all invocations 
// of the function as well.

function renderLeads(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}



// Listen for double clicks on the delete button (google it!)
// When clicked, clear localStorage, myLeads, and the DOM
deleteEl.addEventListener("dblclick", function () {
    console.log("Double Clicked...")
    localStorage.clear()
    myLeads = []
    renderLeads(myLeads)
})


btnEl.addEventListener("click", function () {
    // Push the value from the inputEl into the myLeads array 
    // instead of the hard-coded "www.awesomeleads.com" value
    // Google -> "get value from input field javascript"
    let leads = inputEl.value
    // myLeads.push("www.awesomelead.com")
    myLeads.push(leads)
    inputEl.value = ""
    // console.log("Button clicked!")
    // console.log(myLeads)

    // Save the myLeads array to localStorage 
    // PS: remember JSON.stringify()
    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    renderLeads(myLeads)

    // To verify that it works:
    // console.log(localStorage.getItem("myLeads"))
})

// Create a variable, listItems, to hold all the HTML for the list items
// Assign it to an empty string to begin with



// // Wrap the code below in a renderLeads() function
// function renderLeads() {
//     let listItems = ""
//     // Log out the items in the myLeads array using a for loop
//     for (let i = 0; i < myLeads.length; i++) {
//         // Render the leads in the unordered list using ulEl.textContent
//         // ulEl.textContent += myLeads[i] + " "

//         // Replace .textContent with .innerHTML and use <li> tags
//         // ulEl.innerHTML += "<li>" + myLeads[i] + "</li> "

//         // alternate way of .innerHtml
//         // create element
//         // set text content
//         // append to ul
//         // const li = document.createElement("li")
//         // li.textContent = myLeads[i]
//         // ulEl.append(li)
//         // console.log(myLeads[i])

//         // Add the item to the listItems variable instead of the ulEl.innerHTML
//         // Wrap the lead in an anchor tag (<a>) inside the <li>
//         // Can you make the link open in a new tab?
//         listItems += `
//         <li>
//            <a href=${myLeads[i]} target="_blank">
//               ${myLeads[i]}
//             <a/>
//         </li>
//      `
//     }
//     // Render the listItems inside the unordered list using ulEl.innerHTML
//     ulEl.innerHTML = listItems

// }
