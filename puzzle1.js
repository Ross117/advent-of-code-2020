"use strict";

const fs = require('fs');

const input = fs.readFileSync('data.txt', 'utf8').split('\n');
const data = input.map(val => parseInt(val));

const checkfor2020 = (firstVal) => {
  let answerFound = false;

  data.forEach(secondVal => {
    data.forEach(thirdVal => {
      if (firstVal + secondVal + thirdVal === 2020) {
        console.log(firstVal * secondVal * thirdVal)
        answerFound = true;
      }
    });
  });

  return answerFound;
}

data.some(checkfor2020);