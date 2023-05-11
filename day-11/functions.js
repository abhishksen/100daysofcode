// export function add(a, b) {
//     return a + b
// }

// turning an object into an array

let scrimbaUsers = {
    "00": "sindre@scrimba.com",
    "01": "per@scrimba.com",
    "02": "frode@scrimba.com"
}


let keysArray = Object.keys(scrimbaUsers) // returns the keys [ '00', '01', '02' ]
let valuesArray = Object.values(scrimbaUsers) // returns the values [ 'sindre@scrimba.com', 'per@scrimba.com', 'frode@scrimba.com' ]
let entriesArray = Object.entries(scrimbaUsers) // returns keys & values as array of arrays 
                                                //[
                                                //   [ '00', 'sindre@scrimba.com' ],
                                                //   [ '01', 'per@scrimba.com' ],
                                                //   [ '02', 'frode@scrimba.com' ]
                                                // ]
console.log(keysArray) // [ '00', '01', '02' ]
console.log(valuesArray) // [ 'sindre@scrimba.com', 'per@scrimba.com', 'frode@scrimba.com' ]
console.log(entriesArray)   // [
                            //   [ '00', 'sindre@scrimba.com' ],
                            //   [ '01', 'per@scrimba.com' ],
                            //   [ '02', 'frode@scrimba.com' ]
                            // ]

// Challenge: Create a let variable called 'scrimbaUsersEmails' and use one of Object methods to set it equal to an array with the values
let scrimbaUsersEmails = Object.values(scrimbaUsers)
// Challenge: Create a let variable called 'scrimbaUsersIDs' and use one of Object methods to set it equal to an array with the keys
let scrimbaUsersIDs = Object.keys(scrimbaUsers)
// Challenge: Create a let variable called 'scrimbaUsersEntries' and use one of Object methods to set it equal to an array with the both the keys and values
let scrimbaUsersEntries = Object.entries(scrimbaUsers)

console.log(scrimbaUsersEmails)
console.log(scrimbaUsersIDs)
console.log(scrimbaUsersEntries)