let number1
let operator
let number2
let expressionStr = ""

let operatorCount = 0
let allowConcatValues = true

let activeNumber = ""
let lastSelection = ""

const display = document.querySelector('#display')
const digitBtns = document.querySelectorAll('#digits-container button')
const operatorBtns = document.querySelectorAll('#operators-container button')
const clear = document.querySelector('#clear')
const equals = document.querySelector('#equals')

display.textContent = ""


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
    if (!allowConcatValues) return // prevent additional digits from being abitrarily added to result displayed
    
    expressionStr += digitBtn.id
    lastSelection = "operand"

    displayValue(`${expressionStr}`)
  })
})


operatorBtns.forEach(operatorBtn => {
  operatorBtn.addEventListener('click', ()=>{
    if (operatorCount !== 0 && lastSelection !== 'operator') return // only allow one operator to be used (excluding negatives)
    if ((lastSelection === "operator" || lastSelection === "") && operatorBtn.id !== 'subtract') return // don't allow double operator unless second is negative
    if (lastSelection === "negative") return // only operand can follow a negative

    operator = operatorBtn.textContent
    if (lastSelection === "operand"){
      operatorCount++
    }
    if ((lastSelection === "operator" || lastSelection === "") && operatorBtn.id === 'subtract'){
      lastSelection = "negative"
      expressionStr += `${operator}`
    } else {
      lastSelection = "operator"
      expressionStr += ` ${operator} `
    }
    allowConcatValues = true

    displayValue(`${expressionStr}`)
  })
})


equals.addEventListener('click', () => {
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
  expressionStr = result // resolve the expression to show the result
  allowConcatValues = false // prevent additional digits from being abitrarily added to result displayed
  lastSelection = "operand"
  
  displayValue(result)
  console.log(`number1: `, number1)
  console.log(`operator: `, operator)
  console.log(`number2: `, number2)
  console.log(`%cresult: ${result}`, "font-weight: bold")
  console.log('\n')
})


clear.addEventListener('click', () => {
  allowConcatValues = true
  operatorCount = 0
  expressionStr = ""
  lastSelection = ""
  number1 = null
  operator = null
  number2 = null

  clearDisplay()
  console.clear()
})

function displayValue(value){ display.textContent = value }

function clearDisplay() {
  display.textContent = ""
}