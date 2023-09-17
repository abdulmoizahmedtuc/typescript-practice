/*In JavaScript, a constructor is a special type of function that is used to create and initialize objects. 
Constructors are typically used when you want to create multiple objects 
with similar properties and behaviors. They provide a blueprint for creating objects of a particular type. 
Constructors are often used in object-oriented programming to define classes.*/

// Constructor function for creating Person objects
/* function Person(name, age) {
    this.name = name; // These are properties
    this.age = age;
}

// Creating instances of Person using the constructor
const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);

// Accessing properties of the created objects
console.log(person1.name); // Output: Alice
console.log(person2.age); */  // Output: 25

/* In the example above:

We define a constructor function called Person that takes two parameters: name and age.
Inside the constructor, this refers to the object being created. We assign the name and age parameters to properties of the object.
We create two instances (person1 and person2) of the Person object using the new keyword. This invokes the constructor and initializes the object properties.
We access the properties of the created objects using dot notation (person1.name, person2.age).
Explanation:

Constructors allow you to create objects with shared characteristics or methods. In the example, both person1 and person2 are instances of the Person object. 
They have the same structure (properties name and age) but can hold different values. By using a constructor, you can create many such objects without duplicating 
the initialization code.

Constructors can also be used to define methods that are shared among instances. For example: */

/* function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    };
}

const person = new Person('Charlie', 28);
person.sayHello(); */ // Output: Hello, my name is Charlie and I'm 28 years old.

/* Constructors are a fundamental concept in JavaScript's object-oriented programming paradigm, and they provide a way to create organized and reusable code for creating and 
initializing objects. */
