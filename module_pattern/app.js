// simple module constructor
const Person = (function() {
    let firstName;
    let lastName;

    return {
        setName: (first, last) => {
            firstName = first;
            lastName = last;
        },
        getName: () => 
            `${firstName} ${lastName}`
    }
});

const person1 = new Person();
const person2 = new Person();

person1.setName('Thiago', 'Galvani');
console.log(person1.getName()); // Thiago Galvani

person2.setName('Thiago', 'Paiva');
console.log(person2.getName()); // Thiago Paiva
