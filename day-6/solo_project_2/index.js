let password = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*/<>?abcdefghijklmnopqrstuvwxyz"
let resultEl = document.getElementById("password-el")
let length = password.length

function generatePassword(ofLength){
    let res = ""
    let i = 0
    while(i < ofLength){
        res += password.charAt(Math.floor(Math.random() * length))
        i++
    }
    resultEl.innerHTML = "Password: " + res
}
