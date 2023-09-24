"use strict";
class Employee {
    constructor(id, name, dName) {
        this.eId = id;
        this.eName = name;
        this.deptName = dName;
    }
    setData(id, name, dName) {
        this.eId = id;
        this.eName = name;
        this.deptName = dName;
    }
    setData2(id, name, dName) {
        return `This is id: ${id}`;
    }
    display() {
        console.log(this.eId);
        console.log(this.eName);
        console.log(this.deptName);
    }
}
let emp3 = new Employee(3, "Emp3", "CS");
emp3.display();
let employee = { id: 1, name: "" };
employee.name = "Moiz";
let employee2 = {
    id: 1,
    name: "Moiz",
};
