"use strict";
function replaceCharacterInString(string, index, char) {
    if (typeof string !== "string" ||
        typeof index !== "number" ||
        typeof char !== "string") {
        return "Wrong Input";
    }
    if (index <= 0 || index > string.length) {
        return "Index out of bound";
    }
    const charArray = string.split("");
    charArray[--index] = char;
    const result = charArray.join("");
    return result;
}
console.log(replaceCharacterInString("test", 2, "a"));
