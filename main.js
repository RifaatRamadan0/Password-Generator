// DOM:
// Password Generated:
let input = document.querySelector(".card .password-generated input");
let copy = document.querySelector(".card .password-generated span");
let passIndicator = document.querySelector(".card .password-generated .normal");
// Password Length :
let numbersLength = document.querySelector(".card .password-length .details span")
let lengthRange = document.querySelector(".card .password-length input");
// Password Setting :
let setlowercase = document.querySelector(".card .pass-setting ul .lowercase input");
let setexcludeDuplicate = document.querySelector(".card .pass-setting .exclude-duplicate input");
let setincludeSpace = document.querySelector(".card .pass-setting ul .include-spaces input");
let setnumbers = document.querySelector(".card .pass-setting ul .numbers input");
let setuppercase = document.querySelector(".card .pass-setting ul .uppercase input");
let setsymbol = document.querySelector(".card .pass-setting ul .symbols input");
// button :
let button = document.querySelector(".card .generator-button button");

const characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "!$%&|[](){}:;.,*+-#@<>~"
}
// Default in beginning
let beginning = 
    function(){
let password = "";
for(let i = 0; i < numbersLength.textContent; i++){
    let index = parseInt(Math.random() * characters.lowercase.length);
    password += characters.lowercase[index]
}
input.value = password;
}
window.onload = beginning();

// Range password
lengthRange.oninput = function(){
    let value = lengthRange.value;
    numbersLength.textContent = value;
    if(numbersLength.textContent < 9){
        passIndicator.className = "weak";
    }
    if (numbersLength.textContent > 16){
        passIndicator.className = "strong";
    }
    if(numbersLength.textContent >= 9 && numbersLength.textContent <= 16) {
        passIndicator.className = "normal";
    }
}

// Password Generator

button.onclick = 
    
    function(length){
    length = Number(numbersLength.textContent);
    let password = "";
    for(let i = 0; i < length; i++){
        let index = parseInt(Math.random() * characters.lowercase.length);
        password += characters.lowercase[index]
    }
    input.value = password;
    if(setexcludeDuplicate.checked){
        password.split("");
        let set = new Set(password);
        let arr = Array.from(set);
        password =  arr.join("");
        input.value = password;
    }
    
    if(setincludeSpace.checked){
        if(password.length === length){
        let passIndex = parseInt(Math.random() * password.length);
        password = password.slice(1, passIndex) + " " + password.slice(passIndex);
        input.value = password;
    }
        else {
            while(password.length < length){            
            let passIndex = parseInt(Math.random() * password.length);
            password = password.slice(0, passIndex) + " " + password.slice(passIndex);
        }
        input.value = password;
        }
    }
    
    
    if(setnumbers.checked){
        if(password.length === length){
            password = password.split("").map((ele) => {
                if (Math.random() < 0.3) {
                    let numIndex = parseInt(Math.random() * characters.numbers.length);
                    return ele = characters.numbers[numIndex];
                } else {
                    return ele;
                }
            }).join("");
            input.value = password;
        }
        else {
            while(password.length < length){
                let numIndex = parseInt(Math.random() * characters.numbers.length);
                let passIndex = parseInt(Math.random() * password.length);
                password = `${password.slice(0, passIndex )}${characters.numbers[numIndex]}${password.slice(passIndex)}`;  
            }
            input.value = password;
        }
    }
    
    if(setuppercase.checked){
        if(password.length === length){
            password = password.split("").map((ele) => {
                if (Math.random() < 0.4) {
                    return ele.toUpperCase();
                } else {
                    return ele;
                }
            }).join("");
            input.value = password;
        }
        else {
            if(password.length > length){
                password.slice(0, length + 1)
                input.value = password;
            }
            if(password.length < length){
                while(password.length < length){
                        let upperIndex = parseInt(Math.random() * characters.uppercase.length);
                        let passIndex = parseInt(Math.random() * password.length);
                        password = `${password.slice(0, passIndex )}${characters.uppercase[upperIndex]}${password.slice(passIndex)}`;  
                    }
                    input.value = password;
            }
        }
    }
    
    
    if(setsymbol.checked){
        if(password.length === length){
            password = password.split("").map((ele) => {
                if (Math.random() < 0.3) {
                    let symIndex = parseInt(Math.random() * characters.symbols.length);
                    return ele = characters.symbols[symIndex];
                } else {
                    return ele;
                }
            }).join("");
            input.value = password;
        }
        else {
            while(password.length < length){
                let symIndex = parseInt(Math.random() * characters.symbols.length);
                let passIndex = parseInt(Math.random() * password.length);
                password = `${password.slice(0, passIndex )}${characters.symbols[symIndex]}${password.slice(passIndex)}`;  
            }
            input.value = password;
        }
    }
}


// Copy
copy.onclick = function(){
    navigator.clipboard.writeText(input.value);
    copy.textContent = "done";
    copy.className = "material-symbols-rounded";
    setTimeout(() => {
        copy.textContent = "copy_all";
        copy.className = "material-symbols-rounded";
    }, 1500);
}

