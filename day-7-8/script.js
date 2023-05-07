// Create two variables:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field
let myLeads = []
const inputEl = document.getElementById("input-el") // const can not be reassigned
const btnEl = document.getElementById("input-btn")
// Grab the unordered list and store it in a const variable called ulEl
const ulEl = document.getElementById("ul-el")
// Push the value "www.awesomelead.com" to myArray when the input button is clicked


btnEl.addEventListener("click", function () {
    // Push the value from the inputEl into the myLeads array 
    // instead of the hard-coded "www.awesomeleads.com" value
    // Google -> "get value from input field javascript"
    let leads = inputEl.value
    // myLeads.push("www.awesomelead.com")
    myLeads.push(leads)
    // console.log("Button clicked!")
    // console.log(myLeads)
    renderLeads()
    inputEl.value = ""
})

// Create a variable, listItems, to hold all the HTML for the list items
// Assign it to an empty string to begin with


// Wrap the code below in a renderLeads() function
function renderLeads() {
    let listItems = ""
    // Log out the items in the myLeads array using a for loop 
    for (let i = 0; i < myLeads.length; i++) {
        // Render the leads in the unordered list using ulEl.textContent
        // ulEl.textContent += myLeads[i] + " "

        // Replace .textContent with .innerHTML and use <li> tags
        // ulEl.innerHTML += "<li>" + myLeads[i] + "</li> "

        // alternate way of .innerHtml
        // create element
        // set text content
        // append to ul
        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li)
        // console.log(myLeads[i])

        // Add the item to the listItems variable instead of the ulEl.innerHTML
        // Wrap the lead in an anchor tag (<a>) inside the <li>
        // Can you make the link open in a new tab?
        listItems += `
        <li>
           <a href=${myLeads[i]} target="_blank">
              ${myLeads[i]}
            <a/>
        </li>
     `
    }
    // Render the listItems inside the unordered list using ulEl.innerHTML
    ulEl.innerHTML = listItems

}
