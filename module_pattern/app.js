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

const BankAccount = (function() {
    let user;
    let balance = 0;

    return {
        setUser: (userThatBelongs) => {
            user = userThatBelongs;
        },
        getUser: () => {
            return `This account belongs to ${user.getName()}`;
        },
        getBalance: () => {
            return `The account have $${balance}`
        },
        deposit: (amount) => {
            balance += amount;
        },
        transfer: (amount) => {
            balance -= amount;
        }
    }
});

const account = new BankAccount();

account.setUser(person1);
console.log(account.getUser()); // This account belongs to Thiago Galvani

console.log(account.getBalance()); // The account have $0
account.deposit(20);
console.log(account.getBalance()); // The account have $20
account.transfer(10);
console.log(account.getBalance()); // The account have $10

module.exports = {
    Person,
    BankAccount
};