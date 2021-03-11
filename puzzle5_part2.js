"use strict"

const fs = require('fs')

const input = fs.readFileSync('data.txt', 'utf8')
  .split('\n')
  .map(val => val.replace(/\r/g, ''))

const getID = (code, max) => {
  let min = 0

  for(let i = 0; i < code.length; i++) {
    const diff = Math.ceil((max - min) / 2)

    if (code[i].match(/F|L/)) {
      max -= diff
    } else if (code[i].match(/B|R/)) {
      min += diff
    }
  }

  return min
}

const seatIDs = input
  .map(code => {
    const rowID = getID(code.substring(0, 7), 127)
    const columnID = getID(code.substring(7), 7)

    return rowID * 8 + columnID
  })

seatIDs.forEach(seatID => {
  if (!seatIDs.includes(seatID - 1) && seatIDs.includes(seatID - 2)) {
    console.log(seatID - 1)
  }
})
