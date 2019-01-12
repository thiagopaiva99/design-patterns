// object creation
let newObject = {};
let newObject = Object.create(Object.prototype);
let newObject = new Object();

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

// constructor with specific objects
function Video ({ id, title, thumbnail }) {
    this.id = id;
    this.title = title;
    this.thumbnail = thumbnail;

    this.toString = () => `The video '${this.title}' has the id '${this.id}'`
}

const video1 = new Video({ 
    id: 123,
    duration: 123,
    thumbnail: 'thumbnail',
    quality: '720p',
    title: 'video'
});

const video2 = new Video({ 
    id: 456,
    thumbnail: 'thumbnail',
    title: 'video'
});

console.log(video1); // Video { id: 123, title: 'video', thumbnail: 'thumbnail', toString: [Function] }
console.log(video2); // Video { id: 456, title: 'video', thumbnail: 'thumbnail', toString: [Function] }

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

module.exports = {
    Person,
    Video,
    Car
};