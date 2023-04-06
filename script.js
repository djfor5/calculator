

function add(num1, num2) {
  return num1 + num2
}


function subtract(num1, num2) {
  return num1 - num2
}


function multiply(num1, num2) {
  return num1 * num2
}


function divide(num1, num2) {
  return num1 / num2
}


let num1
let operator
let num2

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

console.log(`%coperate function, with 'add' operator`, "font-weight: bold")
console.log(`operate(1,'add',2): ${operate(1,'add',2)}`)
console.log('\n')

console.log(`%coperate function, with 'subtract' operator`, "font-weight: bold")
console.log(`operate(1,'subtract',2): ${operate(1,'subtract',2)}`)
console.log('\n')

console.log(`%coperate function, with 'multiply' operator`, "font-weight: bold")
console.log(`operate(1,'multiply',2): ${operate(1,'multiply',2)}`)
console.log('\n')

console.log(`%coperate function, with 'divide' operator`, "font-weight: bold")
console.log(`operate(1,'divide',2): ${operate(1,'divide',2)}`)
console.log('\n')





console.log(`%cadd function`, "font-weight: bold")
console.log(`add(3,2): ${add(3,2)}`)
console.log('\n')

console.log(`%csubtract function`, "font-weight: bold")
console.log(`subtract(7,3): ${subtract(7,3)}`)
console.log('\n')

console.log(`%cmultiply function`, "font-weight: bold")
console.log(`multiply(2,5): ${multiply(2,5)}`)
console.log('\n')

console.log(`%cdivide function`, "font-weight: bold")
console.log(`divide(12,3): ${divide(12,3)}`)
console.log('\n')