"use strict"

const fs = require('fs')

const input = fs.readFileSync('data.txt', 'utf8').split('\n')

const cleanedInput = input.map(val => {
  return {
    min: Number(val.split('-')[0]),
    max: Number(val.split(' ')[0].split('-')[1]),
    letter: val.match(/[a-z]/)[0],
    password: val.split(':')[1].trim(),
  }
})

let validPasswords = 0

cleanedInput.forEach(val => {
  const regExp = new RegExp(val.letter, 'g')
  const matches = val.password.match(regExp)

  if (matches === null) return

  if (matches.length >= val.min && matches.length <= val.max) {
    validPasswords ++
  }
})

console.log(validPasswords)