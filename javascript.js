//test
function test1() {
  return true;
}

//1. A capitalize function that takes a string and returns it
//with the first character capitalized.
function capitalize(string) {
  const array = string.split('');
  const firstCharacter = array[0].toUpperCase();
  array[0] = firstCharacter;
  const capitalisedString = array.join('');

  return capitalisedString;
}

//2. A reverseString function that takes a string and returns it reversed.
function reverse(string) {
  const array = string.split('');
  const reversedString = array.reverse().join('');

  return reversedString;
}

//3. A calculator object that contains functions for the basic operations:
//add, subtract, divide, and multiply.
//Each of these functions should take two numbers and return the correct calculation.
function createCalculator() {
  const calc = {};
  calc.add = function (num1, num2) {
    return num1 + num2;
  };
  calc.subtract = function (num1, num2) {
    return num1 - num2;
  };
  calc.multiply = function (num1, num2) {
    return num1 * num2;
  };
  calc.divide = function (num1, num2) {
    return num1 / num2;
  };
  return calc;
}

//4. A caesarCipher function that takes a string and a shift factor and
//returns it with each character “shifted”.
function caesarCipher(string, shift) {
  const alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('');

  const stringArray = string.split('');
  const newStringArray = [];

  //Iterates through every character in the string
  for (let i = 0; i < stringArray.length; i++) {
    let newLetterPosition = '';
    let ifUpperCase = false;

    let character = stringArray[i];

    //Tests if character is a letter
    if (/[a-zA-Z]/.test(character) === true) {
      //Tests if uppercase
      if (character === character.toUpperCase()) {
        ifUpperCase = true;
        let characterLower = character.toLowerCase();
        character = characterLower;
      }
      //Finds letter location in alphabet and adds the shift value
      for (let j = 0; j < alphabetArray.length; j++) {
        if (character === alphabetArray[j]) {
          const letterPosition = j;
          newLetterPosition = letterPosition + shift;
          if (newLetterPosition > 25) {
            newLetterPosition -= 26;
          }
        }
      }
      //Finds the new letter and adds to the new array
      for (let k = 0; k < alphabetArray.length; k++) {
        if (k === newLetterPosition) {
          //Checks if needing to convert to uppercase
          if (ifUpperCase === true) {
            newStringArray.push(alphabetArray[k].toUpperCase());
          } else {
            newStringArray.push(alphabetArray[k]);
          }
        }
      }
      //if character is not a letter, pushes it into the array (spaces, punctuation)
    } else {
      newStringArray.push(stringArray[i]);
    }
  }

  console.log(newStringArray);
  const result = newStringArray.join('');
  return result;
}

//5. An analyzeArray function that takes an array of numbers and
//returns an object with the following properties: average, min, max, and length.

module.exports = { test1, capitalize, reverse, createCalculator, caesarCipher };
