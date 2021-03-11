"use strict"

const fs = require('fs')

const input = fs.readFileSync('data.txt', 'utf8').split('\n\n')

const inputCleaned = input.map(val => {
  return val.replace(/\n/g, ' ')
})

const splitInput = inputCleaned.map(val => {
  return val.split(' ')
})

const passports = splitInput.map(array => {
  const passport = {}

  array.forEach(val => {
    const key = val.split(':')[0]
    passport[key] = val.split(':')[1]
  })

  return passport
})

const validationLookup = [
  "byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"
]

let validPassports = 0

passports.forEach(passport => {
  const passportsKeys = Object.keys(passport)

  const correctFields = validationLookup.every(requiredField => {          
    return passportsKeys.includes(requiredField)
  })

  if (correctFields) {
    let valid = true

    if (passport.byr.length !== 4 || passport.byr < 1920 || passport.byr > 2002) {
      valid = false
    }

    if (passport.iyr.length !== 4 || passport.iyr < 2010 || passport.iyr > 2020) {
      valid = false
    }

    if (passport.eyr.length !== 4 || passport.eyr < 2020 || passport.eyr > 2030) {
      valid = false
    }

    const hgtRegExpMatch = passport.hgt.match(/([0-9]+)(cm|in)/)

    if (hgtRegExpMatch === null) {
      valid = false
    } else if (hgtRegExpMatch[2] === "cm") {
      if (Number(hgtRegExpMatch[1]) < 150 || Number(hgtRegExpMatch[1]) > 193) valid = false
    } else if (hgtRegExpMatch[2] === "in") {
      if (Number(hgtRegExpMatch[1]) < 59 || Number(hgtRegExpMatch[1]) > 76) valid = false
    }

    if (passport.hcl.match(/^#[\w\d]{6}$/g) === null) {
      valid = false;
    }

    const validEyeColours = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"]

    if (!validEyeColours.includes(passport.ecl)) valid = false

    if (passport.pid.match(/^[0-9]{9}$/g) === null) valid = false

    if (valid) validPassports ++
  }
})

console.log(validPassports)