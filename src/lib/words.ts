import { WORDS } from '../constants/wordlist'
import { VALID_GUESSES } from '../constants/validGuesses'
import { getGuessStatuses } from './statuses'

export const isWordInWordList = (word: string) => {
  return (
    WORDS.includes(word.toLowerCase()) ||
    VALID_GUESSES.includes(word.toLowerCase())
  )
}

export const isWinningWord = (word: string) => {
  return solution === word
}

// build a set of previously revealed letters - present and correct
// guess must use correct letters in that space and any other revealed letters
export const findFirstUnusedReveal = (word: string, guesses: string[]) => {
  const knownLetterSet = new Set<string>()
  for (const guess of guesses) {
    const statuses = getGuessStatuses(guess)

    for (let i = 0; i < guess.length; i++) {
      if (statuses[i] === 'correct' || statuses[i] === 'present') {
        knownLetterSet.add(guess[i])
      }
      if (statuses[i] === 'correct' && word[i] !== guess[i]) {
        return `Must use ${guess[i]} in position ${i + 1}`
      }
    }
  }

  for (const letter of Array.from(knownLetterSet.values())) {
    // fail fast, always return first failed letter if applicable
    if (!word.includes(letter)) {
      return `ܠܝܼܬ ${letter} ܓܵܘ ܡܹܠܵܐ ܓ̰ܪܸܒܬܵܐ`
    }
  }
  return false
}

function isDST() {
  let today = new Date()
  let jan = new Date(today.getFullYear(), 0, 1).getTimezoneOffset()
  let jul = new Date(today.getFullYear(), 6, 1).getTimezoneOffset()
  return Math.max(jan, jul) !== today.getTimezoneOffset()
}

export const getWordOfDay = () => {
  let epochMs = new Date('November 30, 2024 00:00:00').valueOf()
  if (isDST()) {
    epochMs = new Date('November 29, 2024 23:00:00').valueOf()
  }

  const now = Date.now()
  const msInDay = 86400000
  const index = Math.floor((now - epochMs) / msInDay)
  const nextday = (index + 1) * msInDay + epochMs
  console.log('dont cheat cousin')

  return {
    solution: WORDS[index % WORDS.length].toUpperCase(),
    solutionIndex: index % WORDS.length,
    tomorrow: nextday,
  }
}

export const { solution, solutionIndex, tomorrow } = getWordOfDay()
