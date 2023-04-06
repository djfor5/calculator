let number1
let operator
let number2
let operatorCount = 0
let allowConcatValues = true
let allowEquals = false

const display = document.querySelector('#display')
const digitBtns = document.querySelectorAll('#digits-container > button')
const operatorBtns = document.querySelectorAll('#operators-container > button')
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
    displayValue(digitBtn.id)
  })
})

operatorBtns.forEach(operatorBtn => {
  operatorBtn.addEventListener('click', ()=>{
    if (operatorCount !== 0) return // only allow one operator to be used, count resets after equals button is clicked
    number1 = display.textContent
    operator = operatorBtn.textContent
    operatorCount++
    allowConcatValues = true

    displayValue(' ' + operator + ' ')
  })
})

equals.addEventListener('click', () => {
  let operandOperatorOperand = display.textContent.split(' ')
  const isValidExpression = operandOperatorOperand.length === 3
  if (!isValidExpression) return // prevent equals button if mathematical expression does not include operand + operator + operand 
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
  number2 = Number(operandOperatorOperand[2])

  console.log(`number1: `, number1)
  console.log(`operator: `, operator)
  console.log(`number2: `, number2)

  
  const result = operate(number1, operator, number2)
  operatorCount = 0 // reset count to enable operator to be used again
  allowConcatValues = false // prevent additional digits from being abitrarily added to result displayed
  clearDisplay()
  displayValue(result)

  console.log(`%cresult: ${result}`, "font-weight: bold")
  console.log('\n')
})


clear.addEventListener('click', () => {
  allowConcatValues = true
  operatorCount = 0
  number1 = null
  operator = null
  number2 = null

  clearDisplay()
  console.clear()
})

function displayValue(value){ display.textContent += value }

function clearDisplay() {
  display.textContent = ""
}