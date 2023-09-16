const number = 42;
const str = '42';

console.log(number == str);  // true (values are equal after type coercion) == (Equality Operator): "The == operator checks for equality of values, allowing type coercion (automatic type conversion) if the types are different."
console.log(number === str); // false (types are different) === (Identity Operator): ""The === operator checks for equality of values and types. It does not perform type coercion.

const value = true;
const booleanObject = new Boolean(true);

console.log(value == booleanObject);  // true (values are equal after type coercion)
console.log(value === booleanObject); // false (types are different)
