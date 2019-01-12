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