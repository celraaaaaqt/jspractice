// ? Object Methods

// ? An object doesn't just store data—it can also perform actions.

// ? What is this?
// Inside an object method, this refers to the current object.

const dog = {
    name: "Buddy",

    bark() {
        console.log("Woof!");
    }
};

dog.bark();

const calculator = {
    multiply(a, b) {
        return a * b;
    }
};

calculator.multiply(5, 3);

const student = {
    name: "Alex",

    introduce() {
        console.log(`Hi, I'm ${this.name}.`);
    }
};

student.introduce();

const bankAccount = {
    owner: "John",
    balance: 1000,

    deposit (amount) {
       this.balance += amount;
       return this.balance;
    }
}
console.log(bankAccount.deposit(500));
console.log(bankAccount.balance);