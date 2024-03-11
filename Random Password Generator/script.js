const inputSlider = document.getElementById("inputSlider");
const sliderValue = document.getElementById("sliderValue");
const passBox = document.getElementById("passBox");

const lowercaseEl = document.getElementById("lowercase");
const uppercaseEl = document.getElementById("uppercase");
const numberEl = document.getElementById("numbers");
const symbolEl = document.getElementById("symbols");

const generateBtn = document.getElementById("getBtn");
const copyBtn = document.getElementById("copyIcon");
const passIndicator = document.getElementById("passIndicator");

const lowercaseletters = "abcdefghijklmnopqrstuvwxyz"
const uppercaseletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "0123456789"
const symbols = "!@#$%^&*()_+-={}:\"<>?[];',./~`"

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener("input", ()=>{
    sliderValue.textContent = inputSlider.value;
    generatePassword();
});
function generatePassword(){
    const length = inputSlider.value;
    let characters = "";
    let password = "";

    characters += lowercaseEl.checked ? lowercaseletters : "";
    characters += uppercaseEl.checked ? uppercaseletters : "";
    characters += numberEl.checked ? numbers : "";
    characters += symbolEl.checked ? symbols : "";

    for(let i=0;i<length;i++){
        password +=characters.charAt(Math.floor(Math.random() *characters.length))
    }
    passBox.value = password;
    updatePasswordIndicator();
}
generateBtn.addEventListener("click",()=>generatePassword());



function updatePasswordIndicator(){
    const passwordStrength = getPasswordStrength(passBox.value);
    passIndicator.className = "pass-indicator " + passwordStrength;
    console.log(passIndicator.className);
}
function getPasswordStrength(password){
    if(password.length <=10){
        return "weak";
    }else if(password.length <=20){
        return "medium";
    }else{
        return "strong";
    }
}

copyBtn.addEventListener("click",()=>{
    if(passBox.value !=""||passBox.value.length >=1){
        navigator.clipboard.writeText(passBox.value);
        copyBtn.textContent = "check";

        setTimeout(()=>{
            copyBtn.textContent = "content_copy"
        },3000);
    }
})