const passwordEL = document.getElementById('password')
const generateEL = document.getElementById('generate')


const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
}

generateEL.addEventListener('click', () =>{
    password = getRandomLower() + getRandomUpper() + getRandomNumber() + getRandomSymbol() +getRandomLower() + getRandomUpper() + getRandomNumber() + getRandomSymbol() +getRandomLower() + getRandomUpper() + getRandomNumber() + getRandomSymbol() + getRandomLower() + getRandomUpper() + getRandomNumber() + getRandomSymbol() + getRandomLower() + getRandomUpper() + getRandomNumber() + getRandomSymbol() +getRandomLower() + getRandomUpper() + getRandomNumber() + getRandomSymbol() +getRandomLower() + getRandomUpper() + getRandomNumber() + getRandomSymbol() + getRandomLower() + getRandomUpper() + getRandomNumber() + getRandomSymbol()
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