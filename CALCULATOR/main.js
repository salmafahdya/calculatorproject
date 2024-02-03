class Calculator {
  constructor (previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
  }
  clear () {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
  }
  delete () {}
  appendNumber (number) {
    this.currentOperand = number
  }
  chooseOperation (operation) {}
  compute () {}
  updateDisplay () {
    this.currentOperandTextElement.innerText = this.currentOperand
  }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operator]')
const previousOperandTextElement = document.querySelectorAll('[data-previous]')
const currentOperandTextElement = document.querySelectorAll('[data-current]')
const deletionButtons = document.querySelectorAll('[data-delete]')
const equalsButtons = document.querySelectorAll('[data-equal]')
const allClearButtons = document.querySelectorAll('[data-ac]')
const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
)
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})
