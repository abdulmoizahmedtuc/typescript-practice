// Define two strings
const str1: string = "Hello, ";
const str2: string = "world!";

// Concatenate the strings
const result: string = str1 + str2;

// Display the result
console.log(result);

/* In programming, "concat" is short for "concatenate," which means to combine or link together. 
It is often used in the context of working with strings, arrays, or sequences of data. 
Concatenation involves joining two or more items of the same type into a single item. */
const array01 = [1, 2, 3];
const array02 = [4, 5, 6];
const concatenatedArray1 = array01.concat(array02);
console.log(concatenatedArray1); // Output: [1, 2, 3, 4, 5, 6]

// You can also use the spread operator (...) to spread the elements of multiple arrays into a new array.
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concatenatedArray2 = [...array1, ...array2];
console.log(concatenatedArray2); // Output: [1, 2, 3, 4, 5, 6]

// Using the push() Method (for Modifying an Existing Array):
// You can use the spread operator (...) to spread the elements of multiple arrays into a new array.
const array11 = [1, 2, 3];
const array22 = [4, 5, 6];
array11.push(...array22); // Modifies array1
console.log(array11); // Output: [1, 2, 3, 4, 5, 6]
