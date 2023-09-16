/* In TypeScript, the backtick (`) symbol is used to define template literals, also known as template strings. 
Template literals are a way to create strings that can span multiple lines and include expressions or variables within them. 
They are enclosed by backticks, unlike regular strings that are enclosed by single or double quotes.
In this example, the backticks are used to create a template literal. The ${name} part inside the template literal is an 
expression that will be evaluated, and its value will be inserted into the resulting string.

Here's a basic example of a template literal in TypeScript: */

const username = "John";
const greeting = `Hello, ${username}!`;
const xyz = "hello" + username;
console.log(greeting);

// Template literals in JavaScript can be used to interpolate and print various types of values, including strings, numbers, and even the results of expressions.
// Another example:
const a = 10;
const b = 20;
const result = `The sum of ${a} and ${b} is ${a + b}`;
