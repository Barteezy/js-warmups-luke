// Given two numbers return the one with the least value.

var numberOne = 10;
var numberTwo = 1000;

function min() {
  if (numberOne < numberTwo) {
    console.log(numberOne);
  } else {
    console.log(numberTwo);
  }
}

min(numberOne, numberTwo);
