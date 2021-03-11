"use strict"

const fs = require('fs')

const input = fs.readFileSync('data.txt', 'utf8')
  .split('\n')
  .map(val => val.replace(/\r/g, ''))
  .join(' ')
  .split('  ')
  
const countUniqueAnswers = (batch) => {
   const answers = []

   for(let i = 0; i < batch.length; i++) {
     if (batch[i] !== ' ' && !answers.includes(batch[i])) {
       answers.push(batch[i])
     }
   }

   return answers.length
}

let sum = 0

input.forEach(batch => {
  sum += countUniqueAnswers(batch)
})

console.log(sum)