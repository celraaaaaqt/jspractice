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

/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

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
console.log(divisableByThree); */

/* // ? find() searches through an array and returns the first element that matches a condition.

// todo exercises for find ()

const numbers = [10, 20, 30, 40, 50];

const greaterThan25 = numbers.find( number => number > 25 );
console.log(greaterThan25);

const names = [
    "John",
    "Anna",
    "Michael",
    "Andrew"
];

const starsWithA = names.find( name => name.startsWith("A"));
console.log(starsWithA);

const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Anna" },
    { id: 3, name: "Mike" }
];

const iD = users.find( id => id.id === 3 );
console.log(iD);

const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 800 },
    { name: "Keyboard", price: 1500 }
];

const findMouse = products.find( search => search.name === "Mouse" );
console.log(findMouse); */

// ? reduce() method takes many values and reduces them to one value.

// todo reeduce() exercises

/* const numbers = [5, 10, 15, 20];

const total = numbers.reduce( (total, number) => {
    return total + number;
}, 0);
console.log(total);


const prices = [100, 250, 75, 400];

const total2 = prices.reduce( (total, sum) => {
    return total + sum;
}, 0);
console.log(total2);

const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 800 },
    { name: "Keyboard", price: 1500 }
];

const total3 = products.reduce( (total, sum) => {
    return total + sum.price;
}, 0);
console.log(total3); */

// ? some() method checks whether at least one element matches a condition.

// todo some() exercises


/* const numbers = [2, 4, 6, 7];

const isOdd = numbers.some( odd => odd % 2 === 1);
console.log(isOdd);

const names = [
    "John",
    "Anna",
    "Mike"
];

const startsWithA = names.some( name => name.startsWith("A") );
console.log(startsWithA);

const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 800 },
    { name: "Keyboard", price: 1500 }
];

const lessThan1000 = products.some( product => product.price < 1000 );
console.log(lessThan1000);

const scores = [75, 80, 90, 95];

const isLessThan70 = scores.some( score => score < 70);
console.log(isLessThan70); */

// ? every() method checks whether all elements match a condition.

// todo every() exercises

/* const numbers = [2, 4, 6, 8];


const isEven = numbers.every( number => number % 2 === 0 );
console.log(isEven);

const names = [
    "Alex",
    "Anna",
    "Andrew"
];

const isStartsA = names.every( name => name.startsWith("A") );
console.log(isStartsA);

const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 800 },
    { name: "Keyboard", price: 1500 }
];

const moreThan500 = products.every( product => product.price > 500 );
console.log(moreThan500);

const ages = [18, 21, 17, 25];

const ageEighteen = ages.every( age => age >= 18 );
console.log(ageEighteen); */

// ? sort 

// ? Unlike map() and filter(), sort() modifies the original array.

// todo sort() exercises

/* const numbers = [7, 2, 10, 5, 1];

numbers.sort( (a, b) => a - b);
console.log(numbers);

const numbers2 = [7, 2, 10, 5, 1];

numbers2.sort( (a, b) => b - a);
console.log(numbers2);

const names = [
    "John",
    "Anna",
    "Mike",
    "Ben"
];

names.sort();
console.log(names);

const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 800 },
    { name: "Keyboard", price: 1500 }
];

products.sort( (a, b) => a.price - b.price);
console.log(products); */

// ? includes() method checks if an array contains a certain element. It returns true if the element is found, and false otherwise.

// todo includes() exercises

/* const fruits = [
    "Apple",
    "Banana",
    "Orange"
];
console.log(fruits.includes("Banana"));

const numbers = [5, 10, 15, 20];

console.log(numbers.includes(8));

const colors = [
    "Red",
    "Green",
    "Blue"
];
 if (colors.includes("Green")) {
        console.log("Green Found! ");
 }

    const usernames = [
    "Alex",
    "John",
    "Anna"
];

if (!usernames.includes("Mike")) {
    console.log("User not found.");

} */

    
/* const students = [
   "Arcel",
   "Earl",
   "Clar",
   "Jam",
   "Chard"
   ]

if(!students.includes("Arcel")){
   console.log("Busy");
} else if (students.includes("Arcel")){
   console.log("Free");
} else {
    console.log("Not Found");
}


 */

// ? slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). The original array will not be modified.

// todo slice() exercises
/* const numbers = [10, 20, 30, 40, 50];

const result = numbers.slice(1, 3);
console.log(result);

const fruits = [
    "Apple",
    "Banana",
    "Orange",
    "Mango"
];

const result2 = fruits.slice (2);
console.log(result2);

const colors = [
    "Red",
    "Green",
    "Blue",
    "Yellow"
];

const result3 = colors.slice(0);
console.log(result3);
const result4 = colors.slice(0, 3);
console.log(result4);

const names = [
    "Alex",
    "John",
    "Anna",
    "Mike",
    "Ben"
];

const slicedNames = names.slice(1, 4);
console.log(slicedNames); */

// ? If slice() is the photocopier 📄,

// ? then splice() is the scissors ✂️.
// ? It cuts, adds, or replaces elements in the original array.
// ? Unlike slice(), splice() modifies the original array

// todo splice() exercises

    /* const numbers = [10, 20, 30, 40, 50];

    const removedNumbers = numbers.splice(1, 2);
    console.log(numbers);

    const colors = [
        "Red",
        "Blue"
    ];

    const addedColors = colors.splice(1, 0, "Green");
    console.log(colors);

    const fruits = [
        "Apple",
        "Banana",
        "Orange"
    ];


  Start at index 1
Remove 1 item (Banana)
Insert "Mango" 
    const modifiedFruit = fruits.splice(1, 1, "Mango");
    console.log(fruits);

    const names = [
        "Alex",
        "John",
        "Anna",
        "Mike"
    ];

    const modifiedNames = names.splice(1, 2, "Ben", "Chris");
    console.log(names);
     */

    