const passwordEL = document.getElementById('password')
const generateEL = document.getElementById('generate')
const sliderEL = document.getElementById('slider')
const passwordlengthvalueEL = document.getElementById('passwordlengthvalue')
const lowercaseEL = document.getElementById('lowercase')
const uppercaseEL = document.getElementById('uppercase')
const numbervarEL = document.getElementById('numbervar')
const symbolvarEL = document.getElementById('symbolvar')

//To-do Check for all checkboxes unchecked & alert

passwordlengthvalueEL.innerHTML = sliderEL.value;

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
}
sliderEL.addEventListener('input', () =>{
  passwordlengthvalueEL.innerHTML = sliderEL.value

})

generateEL.addEventListener('click', () =>{
    password = ''
    for (x=0;x<sliderEL.value;x++) {
      if(lowercaseEL.checked) {
        password = password + getRandomLower()
      }
      if(uppercaseEL.checked) {
        password = password + getRandomUpper()
      }
      if(numbervarEL.checked) {
        password = password + getRandomNumber()
      }
      if(symbolvarEL.checked) {
        password = password + getRandomSymbol()
      }
    }
    passwordEL.innerText = password
})

function getRandomLower(){
  return String.fromCharCode(Math.random() * 26 + 97);
}
function getRandomUpper(){
  return String.fromCharCode(Math.random() * 26 + 65);
}
function getRandomNumber(){
  return String.fromCharCode(Math.random() * 10 + 48);
}
function getRandomSymbol(){
  const symbols = '!@#$%^&*();'
  return symbols[Math.floor(Math.random() * symbols.length)]
}
console.log(getRandomSymbol());