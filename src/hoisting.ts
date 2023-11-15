// Hoisting is a behavior in JavaScript that allows you to use variables and function declarations before they appear in the code.

// However, only the declarations are hoisted, not the assignments.
console.log(hoisting); // This allows you to use a variable before declaring it, but the value will be 'undefined' until it's assigned a value.
var hoisting = 10;

// You can call a function before it's defined in the code.
foo(); // Output: "Hello"
function foo() {
  console.log("Hello");
}

// Function expressions (using var, let, or const) are not hoisted in the same way as function declarations.
// Arrow functions are also not hoisted.
bar(); // Error: bar is not a function
var bar = function () {
  console.log("World");
};
