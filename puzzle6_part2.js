"use strict"

const fs = require('fs')

const input = fs.readFileSync('data.txt', 'utf8')
  .split('\n')
  .map(val => val.replace(/\r/g, ''))
  .join(' ')
  .split('  ')
  
const countUnaminousAnswers = (batch) => {
  const answers = []
  const unaminousAnswers = []

  for(let i = 0; i < batch.length; i++) {
    if (batch[i] !== ' ' && !answers.includes(batch[i])) {
      answers.push(batch[i])
    }
  }

  const splitBatch = batch.split(' ')
  
  answers.forEach(answer => {
    if (splitBatch.every(person => person.includes(answer))) {
      unaminousAnswers.push(answer)
    }
  })
   

  return unaminousAnswers.length
}

let sum = 0

input.forEach(batch => {
  sum += countUnaminousAnswers(batch)
})

console.log(sum)