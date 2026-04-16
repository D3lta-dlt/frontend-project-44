import runGame from '../index.js'

const generateProgression = (start, step, length) => {
  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step)
  }
  return progression
}

const generateRound = () => {
  const length = Math.floor(Math.random() * 6) + 5
  const start = Math.floor(Math.random() * 20) + 1
  const step = Math.floor(Math.random() * 8) + 2

  const progression = generateProgression(start, step, length)

  const hiddenIndex = Math.floor(Math.random() * (length - 2)) + 1

  const correctAnswer = progression[hiddenIndex].toString()

  progression[hiddenIndex] = '..'

  const question = progression.join(' ')

  return [question, correctAnswer]
}

const gameDescription = 'What number is missing in the progression?'

const playProgressionGame = () => {
  runGame(gameDescription, generateRound)
}

export default playProgressionGame
