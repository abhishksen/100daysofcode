// template literals
let word1 = 'hello';
let word2 = 'world';
let num1 = 3;
let num2 = 5;

const sentence = `${word1} ${word2} ${num1 + num2}`
console.log(sentence)

// object destructuring
const player = {
    name: 'MS Dhoni',
    team: 'CSk',
    matches: {
        won: 58,
        lose: 19
    }
};

const { name, team, matches: { won, lose } } = player;

console.log(`${name} plays for ${team} has won ${won} matches and lose ${lose} matches`);

/*
    **** Challenge ****
    For this challenge destruture the following object.
*/

const student = {
    name: "Kyle",
    age: 24,
    projects: {
        diceGame: "Two player dice game using JavaScript"
    }
}

const { name: studentName, age, projects: { diceGame } } = student;

console.log(`${studentName} ${age} ${diceGame}`);

// destructuring arrays

let myName = ['Abhishek', 'JavaScript Learner', 'Sen'];
let [firstName, middleName, lastName, others] = myName
console.log(firstName)
console.log(middleName)
console.log(lastName)
console.log(others) // undefined

// object literals

function addressMaker(city, state) {
    const address = { city, state };
    console.log(address)
}
addressMaker('Bokaro', 'Jharkhand')

// object destructuring and object literals
function addressMaker1(address) {
    const { city, state } = address
    const newAddress = {
        city,
        state,
        country: 'India'
    };
    console.log(newAddress)
}
addressMaker1({ city: 'Bokaro', state: 'Jharkhand' })

// for...of loop 
// iterates anything which are iterateble

let incomes = [34500, 23400, 45000];
let total = 0;

for (const income of incomes) {
    console.log(income);
    total += income;
}

console.log(total)

let fullName = 'Abhishek Awesome Coder Sen';
for (const char of fullName) {
    console.log(char)
}

// Challenge - For Of Loop

// Using the For of Loop, iterate through the array and print into the console, a message like:
// Tom lives in Lisbon

const students = [
    { name: "John", city: "New York" },
    { name: "Peter", city: "Paris" },
    { name: "Kate", city: "Sidney" }
]

for (let item of students) {
    console.log(`${item.name} lives in ${item.city}`)
}

// spread operator

let contacts = ["Abhishek", "Sen", "Abhi"];
let personalFriends = ["Dhruv", ...contacts, "Ram"];
contacts.push("Hello World");
console.log(contacts);
console.log(personalFriends);

let person = {
    name: "Adam",
    age: 25,
    city: "Manchester"
}

let employee = {
    ...person,
    salary: 50000,
    position: "Software Developer"
}

console.log(employee);

/*
    **** Challenge ****
    
    Imagine you are going out to do some grocery shopping.
    So you have an array called shoppingList with all the products you want to buy.
    
    Now that you are inside of the shop, you have a basket with all the products from your list, but you want to add a few more.
    
    Create a new array called shoppingBasket, that will be a copy of the shoppingList array, and add some new products into it. 

*/

const shoppingList = ["eggs", "milk", "butter"];

const shoppingBasket = [...shoppingList, "chicken", "rice", "almond"];

console.log(shoppingBasket)

// rest operator 
function add(...nums) {
    let sum = 0;
    for (let num of nums) {
        sum += num;
    }
    console.log(sum)
}

add(1, 3, 4, 5, 6);

// arrow functions 

// normal function declarations
//function declaration
function breakfastMenu() {
    return "I'm going to scrambled eggs for breakfast";
}

//anonymous function
const lunchMenu = function () {
    return "I'm going to eat pizza for lunch";
}

const dinnerMenu = (food) => {
    return `I am going to eat ${food} for dinner`;
}

console.log(dinnerMenu("bananannnananana"));

// default parameters

const leadSinger = (artist = "someone") => {
    console.log(`${artist} is the lead singer of Cold Play`);
}

leadSinger();
leadSinger("Chris Martin");

/*
**** Challenge *****

Create a function that receives a parameter of food.
If your parameter food is going to have a value of "milk"
the function should print into the console the following:

"I'm going to buy milk from the grocery shop"

But if you dont pass a value to your parameter food, it should print
"I'm going to buy something from the grocery shop"

*/

const foodItem = (food = "something") => {
    console.log(`I'm going to buy ${food} from the grocery shop`);
}

foodItem("Banana");
foodItem();

// includes() -> returns a boolean values

let numArray = [8, 88, 90, 9, 0]
console.log(numArray.includes(9)); // true
console.log(numArray.includes(7)); // false 

/*
    ** includes() Challenge
        * You want to make a chocolate cake
        * And you have a list of ingredients represented with an array
        * Using the JavaScript includes() function
        * Check if you have the ingredient chocolate in your list of ingredients, and print into the console "We are going to make a chocolate cake" if you have it
        * Else print into the console "We can't make a chocolate cake because we are missing the ingredient chocolate"
*/

const listIngredients = ["flour", "sugar", "eggs", "butter", "chocolate"];

if (listIngredients.includes("chocolate")) {
    console.log("We are going to make a chocolate cake");
} else {
    console.log("We can't make a chocolate cake because we are missing the ingredient chocolate");
}

// let and const

// variable hoisting

if (false) {
    var example = 9;
}
console.log(example); // undefined
// how javascript understands this -> 
// var example; // variable hoisted to the top of the code 
// if(false){
//     example = 7;
// }
// console.log(example)

if (false) {
    let exmpl = 9;
}
// console.log(exmpl); // Uncaught ReferenceError: example is not defined

// how javascript  understands this 
// if(false){
//     let example = 9;
// }
// console.log(example);

const number = 10;
// number = 7; // Assignment to constant variable.
console.log(number);

// in case of const we can modify object and array but we can't override the data types

const arr = [];
arr.push(23);
arr.push("Abhi");
// arr = 90;  // Assignment to constant variable.
console.log(arr);

const obj = {};
obj.firstName = "Abhishek";
obj.lastName = "Sen";
// obj = "Hello"; // Assignment to constant variable.
console.log(obj);

// import and export in javascript

import { data } from "./example.js";
let updatedData = [...data];
updatedData.push("Ram");
console.log(updatedData);

/*
**Challenge**

Inside of the file data.js, create a function add, that will receive 2 numbers and return the sum of them.
Make sure to export this function.

- Import the function add, into the index.js file
- Create a variable result, that will hold the result of the function add when you call it and pass 2 numbers into it.
- print into the console the value of the variable result;

*/

import { addNums } from "./data.js";

const res1 = addNums(3, 56, 78, 90);
console.log(res1);

const res2 = addNums(3, 90);
console.log(res2);


// padStart() and padEnd()

let kuchv = 'Abhi';
//length  // filler 
console.log(kuchv.padStart(12, 'A')); //AAAAAAAAAbhi
console.log(kuchv.padEnd(12, 'A')); //AbhiAAAAAAAA

let newString = 'YouTube.com/CodingTutorials360';
console.log(newString.padStart(100));
console.log(newString.padStart(100).length);
console.log(newString.padEnd(1));

// classes in javascript

import { Animal, Player, TennisPlayer } from "./classes.js";
let cat = new Animal('Mamal', 4);
let human = new Animal('Mamal', 2);
let goldfish = new Animal('Fish', 0)
console.log(cat);
console.log(human.type);
human.makeNoise('Hello there! hahahaaa ha')
console.log(goldfish.legs);

console.log(Animal.powOf(2, 8));
console.log(human.metaData)

let newPlayer = new Player('Dhoni', 'India');
console.log(newPlayer);
newPlayer.message();

let newTennisPlayer = new TennisPlayer('Rafel Nadal', 'Spain', 34);
newTennisPlayer.message();
newTennisPlayer.playTennis();

// trailing commas in javascript
const object1 = {
    name: 'Abhishek',
    surname: 'Sen',
    add: {
        vill: 'Ramdih',
        city: 'Bokaro',
        pin: 828134,
        state: 'Jharkhand', // trailing comma
    },
    age: 21, // trailing comma
}

// promises in javascript

const buyTIckets = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = true;
            if (!error) {
                resolve("Ticket bought successfully");
            } else {
                reject("Problem buying ticket");
            }
        }, 2000);
    })
}

buyTIckets().then((success) => {
    console.log(success);
}).catch((error) => {
    console.log(error);
})

/**
 * Promises - Challenge
 * Create a promise that returns some user data and throws an error when not found.
 * Log the user data when listening to the promise as well as log the error.
 * 
 * Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
*/

const userData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = false;
            if (!error) {
                resolve({ firstName: 'Abhsihek', lastName: 'Sen', age: 21 });
            } else {
                reject('User not found');
            }
        }, 3000)
    })
}

userData()
    .then((res) => { console.log(res) })
    .catch((err) => { console.log(err) });

// fetch api in javascript
/**
 * Fetch
 * 
 * RESTFul API - https://jsonplaceholder.typicode.com/
 * Docs - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 */   

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json())
// .then(data => console.log(data));

fetch('https://jsonplaceholder.typicode.com/todos',{
    method: 'POSt',
    body: JSON.stringify({
        postId:1,
        name: 'Abhishek',
        email:'abhisheksen@gmail.com',
        body: 'Hello there! This is Abhishek Sen'
    }),
})
.then(response => response.json())
.then(data => console.log(data));

/**
 * Fetch - Challenge
 * 
 * GET the first comments value 'https://jsonplaceholder.typicode.com/comments/1' and log its value.
 * POST a new comment using 'https://jsonplaceholder.typicode.com/comments' and log its value.
 * 
 * RESTFul API Guide - https://jsonplaceholder.typicode.com/guide.html
 * Docs - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 */

fetch('https://jsonplaceholder.typicode.com/comments/1')
.then(response => response.json())
.then(data => console.log(data));