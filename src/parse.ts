// You can use the parseInt() or parseFloat() methods to convert a string to a number
const numericString = "42";
const decimalString = "3.14";

const numericValue = parseInt(numericString, 10); // 42
const decimalValue = parseFloat(decimalString);    // 3.14

console.log(numericValue); // Output: 42
console.log(decimalValue); // Output: 3.14

// You can use the parseInt() or parseFloat() methods to convert a string to a number
const newNumber = 42;
const myString = newNumber.toString(); // Converts 42 to the string "42"

// You can also use template literals (backticks) to implicitly convert a number to a string by concatenating it with an empty string.
const myNumber = 42;

const stringMethod = myNumber.toString(); // "42"
const templateLiteral = `${myNumber}`;    // "42"

console.log(stringMethod);
console.log(templateLiteral);

