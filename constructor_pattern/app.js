// basic constructors
function Person (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.fullName = () => `${this.firstName} ${this.lastName}`;
};

const person1 = new Person('Thiago', 'Galvani');
const person2 = new Person('Thiago', 'Paiva');

console.log(person1); // Person { firstName: 'Thiago', lastName: 'Galvani', fullName: [Function] }
console.log(person2); // Person { firstName: 'Thiago', lastName: 'Paiva', fullName: [Function] }

// constructor with Prototype
function Car (model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
};

Car.prototype.toString = function() {
    return `${this.model} has done ${this.miles} miles`;
};

const car1 = new Car('C3', 2018, 20000);
const car2 = new Car('Air Cross', 2018, 30000);

console.log(car1.toString());
console.log(car2.toString());