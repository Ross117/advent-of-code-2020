'use strict';

const fs = require('fs');

const input = fs.readFileSync('data.txt', 'utf8').split('\n')

const cleanedInput = input.map(val => {
  return val.replace(/[\r]/, '')
})

let trees = 0
let ind = 0

cleanedInput.forEach(val => {
  if (ind >= val.length) {
    ind = (ind - val.length)
  }

  if (val[ind] === '#') trees ++

  ind = ind + 3
})

console.log(trees)