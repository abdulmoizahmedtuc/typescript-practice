"use strict";
function countSpecificAlphabet(input, targetAlphabet) {
    let count = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === targetAlphabet) {
            count++;
        }
    }
    return count;
}
const inputString = "hello world";
const target = "o";
const result = countSpecificAlphabet(inputString, target);
console.log(`The alphabet '${target}' appears ${result} times.`);
