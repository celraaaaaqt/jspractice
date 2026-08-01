// ? map() method creates a new array populated with the results of calling a provided function on every element in the calling array. It does not change the original array.

/* //example 1
const numbers = [2, 4, 6, 8];

const newNumber = numbers.map(number => number * 3);
console.log(newNumber);


const names = ["JOHN", "ANNA", "MIKE"];

const newNames = names.map(name => name.toLowerCase());
console.log(newNames);

//example 3
const words = ["JavaScript", "HTML", "CSS"];

const newWords = words.map(word => word.length);
console.log(newWords);

const products = [
   { name: "Laptop", price: 50000 },
   { name: "Mouse", price: 800 },
   { name: "Keyboard", price: 1500 }
]

const newProducts = products.map(product => product.name);
console.log(newProducts); */

/* const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 800 },
    { name: "Keyboard", price: 1500 }
];

const prices = products.map( prices => prices.price );
const discount = products.map( discount => discount.price - (discount.price *  0.10));
const newProducts = products.map( newProducts => `${newProducts.name} - ${newProducts.price}`);

console.log(prices);
console.log(discount);
console.log(newProducts); */

// ? filter() method creates a new array with all elements that pass the test implemented by the provided function. It does not change the original array.

// todo FILTER() METHOD exercises

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const evenNumbers = numbers.filter( evenNumber => evenNumber % 2 === 0);
console.log(evenNumbers);

const scores = [35, 60, 80, 45, 90, 50];
const greaterThanFifty = scores.filter( score => score > 50);

console.log(greaterThanFifty);

const names = [
    "Alex",
    "Jo",
    "Michael",
    "Ana",
    "Christopher"
];

const longNames = names.filter( name => name.length > 4);
console.log(longNames);

const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 800 },
    { name: "Keyboard", price: 1500 },
    { name: "USB", price: 400 }
];

const priceMoreThanOnethousand = products.filter( product => product.price > 1000);
console.log(priceMoreThanOnethousand);

const students = [
    "Alex",
    "John",
    "Anna",
    "Michael",
    "Andrew",
    "Ben"
];

const startsWithA = students.filter( student => student.startsWith("A") );
console.log(startsWithA);  

const numberss = [3, 5, 6, 8, 9, 10, 12, 15];

const divisableByThree = numberss.filter( number => number % 3 === 0 );
console.log(divisableByThree);