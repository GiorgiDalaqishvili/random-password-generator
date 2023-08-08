
let characters = ["A","B","C","D","E","F","G","H","I","J","K",
"L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c",
"d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
"u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",]

let symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",]

let textEl = document.getElementById("text-el")
let textElTwo = document.getElementById("text-elTwo")
let inputEl = document.getElementById("input")
let switchEl = document.getElementsByClassName("switch")
let sliderRound = document.getElementsByClassName("slider round")



function generate() {
    let password = "";

    for (let i = 0; i < 7; i++) {
        let randomCharacterTwo = characters[Math.floor(Math.random() * characters.length)];
        password += randomCharacterTwo;
    }
    textElTwo.textContent = password;

    for (let i = 0; i < 7; i++){
    let randomCharacters = characters[Math.floor(Math.random() * characters.length)]
    password += randomCharacters
    }
    textEl.textContent = password;
    
   
}


function slide() {
    let password = "";
    for (let i = 0; i < 7; i++){
        let randomSymbol = symbols[Math.floor(Math.random()*symbols.length)];
        password += randomSymbol;
    }
    sliderRound.textContent = password;
}