/* 
Data types which JS and TS both has:
number
string
boolean
null
undefined
object
Data types which TypeScript has:
any
unknown
never
enum
tuple
*/

/*
Here I dewclare the type of the variable "number" but
even if you remove the annotation "number" - typescript automatically 
assign number to the variable as it has value in number 
*/
let num: number = 10;
console.log(num);

// Here I declared type = number
let sales: number = 123_456;
// Here I haven't declare any type, so ts automatically declare the type to any
let course = 'typescript';
// you must have to declare the type in the parameters to benfit with typescript
function render(document: string) {
    console.log(document);
}
//  In Js, arrays are dynamic, and its valid. But what if we pass this array that expects a list of numbers
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
// We can access all the properties and methods of the element
number3[0].valueOf;
