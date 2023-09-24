/* Implement the function findLargest(numbers)| so it returns the largest number from
the [numbers| integer array.

Note: the array always contains at least one number. */

function findLargest(randomNum: any) {
  // Use the Math.max function with the spread operator to find the largest number
  return Math.max(...randomNum);
}

// Example usage:
const numbersList = [5, 2, 9, 1, 5, 6];
const largest = findLargest(numbersList);
console.log("The largest number is:", largest);
