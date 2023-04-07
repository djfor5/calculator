let number1
let operator
let number2
let expressionStr = ""
let resultLength = 0

let operatorCount = 0

// set initial functionality toggles
let allowDigits = true
let allowDecimal = true
let allowBackspace = false
let allowEquals = false

let lastSelection = ""

const display = document.querySelector('#display')
const digitBtns = document.querySelectorAll('#digits-container .digit')
const decimal = document.querySelector('#decimal')
const operatorBtns = document.querySelectorAll('#operators-container button')
const addMultiplyDivideBtns = document.querySelectorAll('.operators-excluding-subtract')
const subtractBtn = document.querySelector('#subtract')
const clear = document.querySelector('#clear')
const backspace = document.querySelector('#backspace')
const equals = document.querySelector('#equals')

updateAllowedButtons()

displayValue(expressionStr)

function add(num1, num2) { return num1 + num2 }

function subtract(num1, num2) { return num1 - num2 }

function multiply(num1, num2) { return num1 * num2 }

function divide(num1, num2) { return num1 / num2 }


function operate(num1, operator, num2) {
  switch (operator){
    case 'add':
      return add(num1, num2);
    case 'subtract':
      return subtract(num1, num2);
    case 'multiply':
      return multiply(num1, num2);
    case 'divide':
      return divide(num1, num2);
    default:
      return;
  }
}


digitBtns.forEach(digitBtn => {
  digitBtn.addEventListener('click', () => {
    if (!allowDigits) return // prevent additional digits from being abitrarily added to result displayed
    
    expressionStr += digitBtn.id

    // toggle functionality
    allowBackspace = true
    if (operatorCount > 0) {
      allowEquals = true
    }

    lastSelection = "operand" // set last value input
   
    updateAllowedButtons()

    displayValue(expressionStr)
  })
})


decimal.addEventListener('click', () => {
  if (!allowDecimal) return

  // add leading zero before decimal if no other digit is before the decimal
  if (lastSelection === "" || lastSelection === "operator" || lastSelection === "negative") {
    expressionStr += "0" + decimal.textContent
  } else {
    expressionStr += decimal.textContent
  }


  // toggle functionality
  allowDecimal = false
  allowBackspace = true
  if (operatorCount > 0) {
    allowEquals = true
  }

  lastSelection = "operand" // set last value input
  
  updateAllowedButtons()

  displayValue(expressionStr)
})


operatorBtns.forEach(operatorBtn => {
  operatorBtn.addEventListener('click', ()=>{
    // if (!allowOperator) return
    if (lastSelection === "negative") return // only operand can follow a negative
    if (operatorCount !== 0 && lastSelection !== 'operator') return // only allow one operator to be used (excluding negatives)
    if ((lastSelection === "operator" || lastSelection === "") && operatorBtn.id !== 'subtract') return // don't allow double operator unless second is negative

    // add trailing zero if last character is a decimal at time of adding an operator
    if (expressionStr.slice(expressionStr.length-1) === '.'){
      expressionStr += '0'
      displayValue(expressionStr)
    }

    operator = operatorBtn.textContent
    if ((lastSelection === "operator" || lastSelection === "") && operatorBtn.id === 'subtract'){
      lastSelection = "negative" // set last value input
      expressionStr += `${operator}`
    } else if (lastSelection === "operand"){
      lastSelection = "operator" // set last value input
      expressionStr += ` ${operator} `
      operatorCount++
    } 

    // toggle functionality
    allowDigits = true
    allowDecimal = true
    allowBackspace = true
    allowEquals = false
    
    updateAllowedButtons()

    displayValue(expressionStr)
  })
})


equals.addEventListener('click', () => {
  if (!allowEquals) return
  if (lastSelection !== 'operand' || operatorCount !== 1) return // exit if expression does not contain operand operator operand
  
  let operandOperatorOperand = expressionStr.split(' ')
  
  number1 = operandOperatorOperand[0]
  number1 = Number(number1)
  const operatorSymbol = operandOperatorOperand[1]
  switch (operatorSymbol){
    case '+':
      operator = 'add'
      break;
    case '-':
      operator = 'subtract'
      break;
    case '*':
      operator = 'multiply'
      break;
    case '/':
      operator = 'divide'
      break;
  }
  number2 = operandOperatorOperand[2]
  number2 = Number(number2)

  const result = operate(number1, operator, number2)
  
  operatorCount = 0 // reset count to enable operator to be used again
  expressionStr = result.toString() // resolve the expression to show the result

  // let decimalPlaces = expressionStr.split('.')[1].length
  // if (decimalPlaces > 5){
  //   expressionStr = Number(expressionStr)
  //   expressionStr = Math.round(expressionStr * 100000) / 100000
  //   expressionStr = expressionStr.toString()
  // }
  // console.log(decimalPlaces)

  // toggle functionality
  allowDigits = false // prevent additional digits from being abitrarily added to result displayed
  allowDecimal = false
  allowBackspace = false
  allowEquals = false
  resultLength = expressionStr.length

  lastSelection = "operand" // set last value input

  updateAllowedButtons()

  displayValue(expressionStr)
  console.log(`number1: `, number1)
  console.log(`operator: `, operator)
  console.log(`number2: `, number2)
  console.log(`%cresult: ${result}`, "font-weight: bold")
  console.log('\n')
})


clear.addEventListener('click', () => {
  // toggle functionality
  allowDigits = true
  allowDecimal = true
  allowBackspace = false
  allowOperator = false
  allowEquals = false

  operatorCount = 0
  expressionStr = ""
  resultLength = 0

  lastSelection = "" // set last value input

  number1 = null
  operator = null
  number2 = null

  console.clear()
  updateAllowedButtons()

  clearDisplay()
})

backspace.addEventListener('click', ()=>{
  if (!allowBackspace) return
  if (expressionStr.length <= resultLength) return
  if (expressionStr === "") return

  if (expressionStr.slice(expressionStr.length-1) === '.') {
    expressionStr = expressionStr.slice(0,expressionStr.length-1)
    lastSelection = 'operand'
    allowDecimal = true
  } else if (expressionStr.slice(expressionStr.length-1) === ' ') {
    expressionStr = expressionStr.slice(0,expressionStr.length-3)
    lastSelection = 'operand'
    allowBackspace = true
    allowEquals = false
    operatorCount = 0
  } else if (expressionStr.slice(expressionStr.length-1) === '-'){
    expressionStr = expressionStr.slice(0,expressionStr.length-1)
    if (expressionStr.length > 0){
      lastSelection = 'operator'
      allowBackspace = true
      allowEquals = false
    } else {
      lastSelection = ""
      allowBackspace = false
      allowEquals = false
    }
  } else {
    expressionStr = expressionStr.slice(0,expressionStr.length-1)
    if (expressionStr.length === 0){
      lastSelection = ''
      allowBackspace = false
      allowEquals = false
    } else if (expressionStr.slice(expressionStr.length-1) === ' ') {
      lastSelection = 'operator'
      allowBackspace = true
      allowEquals = false
    } else if (expressionStr.slice(expressionStr.length-1) === '-'){
      lastSelection = 'negative'
      allowBackspace = true
      allowEquals = false
    }
  }

  updateAllowedButtons()

  displayValue(expressionStr)
})

function displayValue(value){ display.textContent = value }

function updateAllowedButtons() {
  if (allowDigits) {
    digitBtns.forEach(digitBtn => digitBtn.classList.remove('inactive'))
    console.log('%cDigits allowed', "color: green")
  } else {
    digitBtns.forEach(digitBtn => digitBtn.classList.add('inactive'))
    console.log('%cDigits NOT allowed', "color: red")
  }

  if (allowDecimal) {
    decimal.classList.remove('inactive')
    console.log('%cDecimal allowed', "color: green")
  } else {
    decimal.classList.add('inactive')
    console.log('%cDecimal NOT allowed', "color: red")
  }

  if (allowBackspace && expressionStr.length > resultLength) {
    backspace.classList.remove('inactive')
    console.log('%cBackspace allowed', "color: green")
  } else {
    backspace.classList.add('inactive')
    console.log('%cBackspace NOT allowed', "color: red")
  }

  // check for add, multiply, and divide button
  if (lastSelection !== "" && lastSelection !== "operator" && lastSelection !== "negative" && operatorCount === 0) {
    addMultiplyDivideBtns.forEach(addMultiplyDivideBtn => addMultiplyDivideBtn.classList.remove('inactive'))
    console.log('%cAdd, multiply, and divide allowed', "color: green")
  } else {
    addMultiplyDivideBtns.forEach(addMultiplyDivideBtn => addMultiplyDivideBtn.classList.add('inactive'))
    console.log('%cAdd, multiply, and divide NOT allowed', "color: red")
  }

  // check for subtract button
  if (lastSelection === "negative" || allowEquals) {
    subtractBtn.classList.add('inactive')
    console.log('%cSubtract (or negative) NOT allowed', "color: red")
  } else {
    subtractBtn.classList.remove('inactive')
    console.log('%cSubtract (or negative) allowed', "color: green")
  }

  if (allowEquals) {
    equals.classList.remove('inactive')
    console.log('%cEquals allowed', "color: green")
  } else {
    equals.classList.add('inactive')
    console.log('%cEquals NOT allowed', "color: red")
  }

  console.log('\n')
}

function clearDisplay() {
  display.textContent = ""
}