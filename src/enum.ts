/* 
Enumeration is a data type that represents a set of named values or symbolic constants. 
Enums are a way to define a collection of related values that have a clear and 
meaningful relationship to each other. 
*/
// For eg: clothing size
// We can directly assign value 
const Small = 1;
const Medium = 2;
const Large = 3;

// But if we use enums (it automatically assign small to 0, medium to 1 or we can assign value in number or string)
// Or if we set small = 1, ts assigns the rest e.g. medium = 2, large = 3
enum Size {Small = 1, Medium, Large};
let mySize: Size = Size.Small;
console.log(mySize);