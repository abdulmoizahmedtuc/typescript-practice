// 1. Both type and initial value
var employeeName: string = "Moiz";
console.log(employeeName); // output: Moiz

// 2. Without type and value
var employeeName1;
console.log(employeeName1); // output: undefined

// 3. With type and but without initial value
var employeeName2: string;
employeeName2 = "Moiz";

// Initialized it later
console.log(employeeName2); // output: Moiz

/* 
Variables declared using 'var' are available within the function.
If we declare them outside the function, then they are available everywhere i.e. they are
a global variable.
If we define them inside a code block, they are still scoped to the enclosing function
'var' can not be used before it is not assigned.
'var' variables with same name can be update or redefine.
*/

/* 
Variables declared using 'let' are available only within the code block where we declare them.
Outside the code block, they are invisible.
But if they are outside the code block, but within the function body then they become 
function scoped.
If we declare them outside the function, then they are available everywhere i.e. they are
a global variable.
'let' variables with the same name can not be updated or redeclared with the same scope.
*/

/*
Variables declared using 'const' are available only within the code block where we declare them.
Outside the code block, they are invisible. 
We must declare a 'const' variable with an initial value.
'const' variables with the same name can not be updated or redeclared with the same scope. 
*/
