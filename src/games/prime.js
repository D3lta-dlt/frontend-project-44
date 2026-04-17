import runGame from '../index.js'

const isPrime = num => {
  if (num < 2) return false
  if (num === 2) return true

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

const generateRound = () => {
  const number = Math.floor(Math.random() * 100) + 2
  const question = number.toString()
  const correctAnswer = isPrime(number) ? 'yes' : 'no'

  return [question, correctAnswer]
}

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const playPrimeGame = () => {
  runGame(gameDescription, generateRound)
}

export default playPrimeGame
