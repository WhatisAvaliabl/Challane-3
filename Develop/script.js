// Assignment Code
const generateBtn = document.querySelector("#generate")
const characterSlider = document.getElementById('characterSlider')
const characterNumber = document.getElementById('characterNumber')
const includeUppercaseElement = document.getElementById('includeUppercase')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSymbolsElement = document.getElementById('includeSymbols')
characterNumber.addEventListener('input', syncCharacterAmount)
characterSlider.addEventListener('input', syncCharacterAmount)
const form  = document.getElementById('passwordGen')
const passwordD = document.getElementById('passwordD')

const LowCaseChar = arrayFromLowToHigh(97, 122)
const UpperCaseChar = arrayFromLowToHigh(65, 90)
const NumberChar = arrayFromLowToHigh(48, 57)
const SymbolChar = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126))


// Add event listener to generate button
form.addEventListener('submit', e =>{
  e.preventDefault()
  const characterAmount =  characterNumber.value
  const includeUppercase = includeUppercaseElement.checked
  const includeNumbers = includeNumbersElement.checked
  const includeSymbols = includeSymbolsElement.checked
  const password = generatePasword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
  passwordD.innerText = password
})


function syncCharacterAmount(e){
  const value = e.target.value
  characterNumber.value = value
  characterSlider.value = value
}

// Write password to the #password input
function generatePasword(characterAmount, includeNumbers, includeUppercase, includeSymbols){
  let charCodes = LowCaseChar
  if (includeUppercase) charCodes = charCodes.concat(UpperCaseChar)
  if (includeNumbers) charCodes = charCodes.concat(NumberChar)
  if (includeSymbols) charCodes = charCodes.concat(SymbolChar)


  const passwordCharacters = []
  for (let i = 0; i < characterAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))

  }
  return passwordCharacters.join('')
}

function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}


