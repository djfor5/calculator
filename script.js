let number1
let operator
let number2
let expressionStr = ""

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
const clear = document.querySelector('#clear')
const backspace = document.querySelector('#backspace')
const equals = document.querySelector('#equals')

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

    displayValue(expressionStr)
  })
})


decimal.addEventListener('click', () => {
  if (!allowDecimal) return

  expressionStr += decimal.textContent

  // toggle functionality
  allowDecimal = false
  allowBackspace = true
  if (operatorCount > 0) {
    allowEquals = true
  }

  lastSelection = "operand" // set last value input

  displayValue(expressionStr)
})


operatorBtns.forEach(operatorBtn => {
  operatorBtn.addEventListener('click', ()=>{
    // if (!allowOperator) return
    if (lastSelection === "negative") return // only operand can follow a negative
    if (operatorCount !== 0 && lastSelection !== 'operator') return // only allow one operator to be used (excluding negatives)
    if ((lastSelection === "operator" || lastSelection === "") && operatorBtn.id !== 'subtract') return // don't allow double operator unless second is negative

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

    displayValue(expressionStr)
  })
})


equals.addEventListener('click', () => {
  if (!allowEquals) return
  if (lastSelection !== 'operand' || operatorCount !== 1) return // exit if expression does not contain operand operator operand
  
  let operandOperatorOperand = expressionStr.split(' ')
  
  number1 = Number(operandOperatorOperand[0])
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
  number2 = Number(operandOperatorOperand[2])

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

  lastSelection = "operand" // set last value input

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
  
  lastSelection = "" // set last value input

  number1 = null
  operator = null
  number2 = null

  clearDisplay()
  console.clear()
})

backspace.addEventListener('click', ()=>{
  if (!allowBackspace) return
  if (expressionStr === "") return

  if (expressionStr.slice(expressionStr.length-1) === ' ') {
    expressionStr = expressionStr.slice(0,expressionStr.length-3)
    lastSelection = 'operand'
    operatorCount = 0
  } else if (expressionStr.slice(expressionStr.length-1) === '-'){
    expressionStr = expressionStr.slice(0,expressionStr.length-1)
    if (expressionStr.length > 0){
      lastSelection = 'operator'
    } else {
      lastSelection = ""
    }
  } else {
    expressionStr = expressionStr.slice(0,expressionStr.length-1)
    if (expressionStr.length === 0){
      lastSelection = ''
    } else if (expressionStr.slice(expressionStr.length-1) === ' ') {
      lastSelection = 'operator'
    } else if (expressionStr.slice(expressionStr.length-1) === '-'){
      lastSelection = 'negative'
    }
  }

  displayValue(expressionStr)
})

function displayValue(value){ display.textContent = value }

function clearDisplay() {
  display.textContent = ""
}