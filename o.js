// ? Object Methods

// ? An object doesn't just store data—it can also perform actions.

// ? What is this?
// Inside an object method, this refers to the current object.

/* const dog = {
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
console.log(bankAccount.balance); */

// ? array of objects 
// ? This is one of the most important JavaScript topics because it's how you'll work with 
// ? data from databases and APIs.

/* const students = [
    { name: "Alex", age: 20 },
    { name: "Anna", age: 19 },
    { name: "John", age: 21 }
];

const s = students.filter(student => student.age >= 20);
console.log(s);

const s1 = students.find(student => student.name === "Anna");
console.log(s1);

const s2 = students.map(student => student.name);
console.log(s2);

const s3 =students.reduce((total, student) => total + student.age, 0);
console.log(s3); */

/* students.filter(student => student.age >= 20);

students.find(student => student.name === "Anna");

students.map(student => student.name);

students.reduce((total, student) => total + student.age, 0);
 */
const students = [
    { name: "Alex", age: 20 },
    { name: "Anna", age: 19 },
    { name: "John", age: 21 }
];

students.forEach(student => { 
    console.log(student.name);
    console.log(student.age);
    console.log("-----");
});

const tasha = [
    { name: "Natasha", age: 20, favoriteColor: "Pink" },
    { name: "Jane", age: 20, favoriteColor: "White" },
    { name: "Discallar", age: 20, favoriteColor: "Black" }
];

/* tasha.forEach(info => { 
    console.log(info.name);
    console.log(info.age);
    console.log(info.favoriteColor);
    console.log("-----");
});
    const string = tasha.map(info => info.name);
const string2 = tasha.map(info => info.age);
const string3 = tasha.map(info => info.favoriteColor);
console.log(string);
console.log(string2);
console.log(string3); */

/* const slicedTasha = tasha.slice(1, 3);
console.log(slicedTasha);

if (slicedTasha.length > 0) {
    console.log("The sliced array is not empty.");
}

if (slicedTasha.some(student => student.name === "Jane" && student.age === 20 && student.favoriteColor === "White")) {
    console.log("Jane is in the sliced array.");
} */

    /* tasha.forEach(info => {
console.log(info.name);
console.log(info.age);
console.log(info.favoriteColor);
console.log("-----");
}); */

function reversedWord(word) {
        let reversed = "";

        for (let i = word.length - 1; i >= 0; i--){
            reversed += word[i];
        }
        return reversed;
    }
    console.log(reversedWord(tasha[0].name));
    console.log(reversedWord(tasha[1].name));