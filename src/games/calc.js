import runGame from '../index.js'

const operators = ['+', '-', '*']

const calculate = (a, b, operator) => {
  switch (operator) {
  case '+':
    return a + b
  case '-':
    return a - b
  case '*':
    return a * b
  default:
    throw new Error(`Unknown operator: ${operator}`)
  }
}

const generateRound = () => {
  const num1 = Math.floor(Math.random() * 30) + 1
  const num2 = Math.floor(Math.random() * 30) + 1
  const operator = operators[Math.floor(Math.random() * operators.length)]

  const question = `${num1} ${operator} ${num2}`
  const correctAnswer = calculate(num1, num2, operator).toString()

  return [question, correctAnswer]
}

const gameDescription = 'What is the result of the expression?'

const playCalcGame = () => {
  runGame(gameDescription, generateRound)
}

export default playCalcGame
