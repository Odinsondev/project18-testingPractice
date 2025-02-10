console.log(
  'These functions were written to practice test-driven developement using jest'
);
console.log('Syntax:');
console.log('console.log(capitalize("string"));');
console.log('console.log(reverse("string"));');
console.log('console.log(calculator().add(num1, num2));');
console.log('console.log(calculator().subtract(num1, num2));');
console.log('console.log(calculator().multiply(num1, num2));');
console.log('console.log(calculator().divide(num1, num2));');
console.log('console.log(caesarCipher("string", num1));');
console.log('console.log(analyzeArray([num1, num2, ...]));');

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
function calculator() {
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

  const result = newStringArray.join('');
  return result;
}

//5. An analyzeArray function that takes an array of numbers and
//returns an object with the following properties: average, min, max, and length.
function analyzeArray(array) {
  const object = {};

  //average
  let arraySum = 0;

  for (let i = 0; i < array.length; i++) {
    arraySum += array[i];
  }

  object.average = arraySum / array.length;

  //min
  let smallestElement = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < smallestElement) {
      smallestElement = array[i];
    }
  }

  object.min = smallestElement;

  //max
  let largestElement = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > largestElement) {
      largestElement = array[i];
    }
  }

  object.max = largestElement;

  //lenth
  object.length = array.length;

  return object;
}

module.exports = {
  test1,
  capitalize,
  reverse,
  calculator,
  caesarCipher,
  analyzeArray,
};
