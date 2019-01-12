const Person = (function() {
    let firstName;
    let lastName;

    const setName = (first, last) => {
        firstName = first;
        lastName = last;
    };

    const getName = () => {
        return `${firstName} ${lastName}`;
    }

    return {
        setName,
        getName
    };
});

const person1 = new Person();

person1.setName('Thiago', 'Galvani');
console.log(person1.getName()); // Thiago Galvani