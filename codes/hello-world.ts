// here I dewclare the type of the variable "number"
let num: number = 10;
console.log(num);

// Here I declared type = number
let sales: number = 123_456;
// Here I haven't declare any type, so it automatically declare the type any
let course = 'typescript';
// you must have to declare the type in the parameters
function render(document: string) {
    console.log(document);
}
//  In Js arrays are dynamic, and its valid. But what if we pass this array that expects a list of numbers
let numbers = [1, 2, '3'];
// so we will do like this. It fine because all the elements are numbers
let numbers1: number[] = [1, 2, 3];
// or
let numbers2: number[] = []
numbers2[0] = 1;
// methods and properties (benefit of using typescript)
numbers2.forEach(n => n.valueOf)
// Tuple in typescript (elemet with different type) these are useful when we have two values
let number3: [number, string] = [1, 'Moiz'];
// we can access all the properties and methods of the element
number3[0].valueOf;
// Enumeration in typescript
// for eg clothing size
// if we directly assign value 
const small = 1;
const medium = 2;
const large = 3;
// if we use enums (automaticall assign small to 0, medium to 1 or we can assign value in number or string)
enum size {small, medium, large};
let mySize: size = size.small;
