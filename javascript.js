//test
function test1() {
  return true;
}

//A capitalize function that takes a string and returns it
//with the first character capitalized.
function capitalize(string) {
  const array = string.split('');
  const firstCharacter = array[0].toUpperCase();
  array[0] = firstCharacter;
  const capitalisedString = array.join('');

  return capitalisedString;
}

//A reverseString function that takes a string and returns it reversed.
function reverse(string) {
  const array = string.split('');
  const reversedString = array.reverse().join('');

  return reversedString;
}

//A calculator object that contains functions for the basic operations:
//add, subtract, divide, and multiply.
//Each of these functions should take two numbers and return the correct calculation.

module.exports = { test1, capitalize, reverse };
