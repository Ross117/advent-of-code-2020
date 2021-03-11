"use strict";

const fs = require("fs");

const input = fs.readFileSync("data.txt", "utf8").split("\n");

const cleanedInput = input.map((val) => {
  return val.replace(/[\r]/, "");
});

const slopes = [
  {
    right: 1,
    down: 1,
  },
  {
    right: 3,
    down: 1,
  },
  {
    right: 5,
    down: 1,
  },
  {
    right: 7,
    down: 1,
  },
  {
    right: 1,
    down: 2,
  },
];

let treesArr = [];

slopes.forEach((slope) => {
  let trees = 0;
  let position = 0;

  cleanedInput.forEach((arr, index) => {

    if (index % slope.down !== 0) return

    if (position >= arr.length) {
      position = position - arr.length;
    }

    if (arr[position] === "#") trees++;

    position = position + slope.right;
  });

  treesArr.push(trees)
});

console.log(treesArr);

console.log(treesArr[0] * treesArr[1] * treesArr[2] * treesArr[3] * treesArr[4])
