const Person = require('../app.js').Person;

test('should have name and name have to be "Thiago Galvani"', () => {
    const user = new Person();
    user.setName('Thiago', 'Galvani');

    expect(user.getName()).toEqual('Thiago Galvani');
});