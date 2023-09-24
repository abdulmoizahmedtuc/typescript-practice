"use strict";
function findLargest(randomNum) {
    return Math.max(...randomNum);
}
const numbersList = [5, 2, 9, 1, 5, 6];
const largest = findLargest(numbersList);
console.log("The largest number is:", largest);
