"use strict";

const fs = require("fs");

const input = fs.readFileSync("data.txt", "utf8").split("\n\n");

const inputCleaned = input.map((val) => {
  return val.replace(/\n/g, " ");
});

const splitInput = inputCleaned.map((val) => {
  return val.split(" ");
});

const passports = splitInput.map((array) => {
  const obj = {};

  array.forEach((val) => {
    const key = val.split(":")[0];
    obj[key] = val.split(":")[1];
  });

  return obj;
});

const validationLookup = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

let validPassports = 0;

passports.forEach((passport) => {
  const passportsKeys = Object.keys(passport);

  const valid = validationLookup.every((requiredField) => {
    return passportsKeys.includes(requiredField);
  });

  if (valid) validPassports++;
});

console.log(validPassports);
