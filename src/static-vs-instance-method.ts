class Student {
  // In TypeScript, you need to declare class properties before you can use them within the constructor
  // The access modifiers = private
  private name: string;
  private age: number;
  private matriculationNumber: number;

  constructor(name: string, age: number, matriculationNumber: number) {
    if (name.length < 3) {
      throw new Error("Name must not be less than 3 characters");
    }
    this.name = name;
    this.age = age;
    this.matriculationNumber = matriculationNumber;
  }

  // Instance method
  create() {
    // Data validation
    // For boolean types use this || OR operator not this |
    if (
      this.name == null ||
      this.age == null ||
      this.matriculationNumber == null
    ) {
      console.log(
        "Invalid student data. Please provide name, age and matriculation number"
      );
      return;
    }
    console.log(
      `Created student data: Name: ${this.name}, Age: ${this.age}, Matriculation number: ${this.matriculationNumber}`
    );
  }
  static deleteStudent() {}
}

try {
  // Instance methods can only be called by creating instance of a class
  const moizObj = new Student("Moiz", 27, 5455);
  moizObj.create();
} catch (error: any) {
  console.error(error.message);
}

// Static methods can be called directly from class
Student.deleteStudent();

// This interface specifies the structure that any object of type CarType should adhere to.
interface CarType {
  name: string;
  model: string;
  color: string;
  build(): void;
}

// We can also create static method for constructor function
// Here car is an object using a constructor function
let Car = function (
  this: CarType,
  name: string,
  model: string,
  color: string
): void {
  this.name = name;
  this.model = model;
  this.color = color;
};

// We add methods or properties to all instances of that constructor function by attaching them to the constructor's prototype
// A build method is added to the prototype of Car. This method is part of the CarType interface.
Car.prototype.build = function (this: CarType): void {
  console.log(`Building ${this.color} ${this.name}, ${this.model}`);
};

// The (Car as any) syntax is used because TypeScript is expecting a constructor signature, but the function Car doesn't have one. Casting it to any bypasses this issue.
let toyota: CarType = new (Car as any)("Corolla", "2023", "Black");
toyota.build();
