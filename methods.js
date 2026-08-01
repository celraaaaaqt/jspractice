/* //example 1
const numbers = [2, 4, 6, 8];

const newNumber = numbers.map(number => number * 3);
console.log(newNumber);


//example 2
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