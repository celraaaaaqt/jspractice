/* let fruits = [ "Apple", "Banana", "Orange" ]; */

/* console.log(fruits);

let colors = [ "Red", "Blue", "Green"];

console.log(colors[1]);

let pets = [ "Dog", "Cat", "Rabbit" ];

pets[1] = "Hamster";

console.log(pets);

let languages = ["HTML", "CSS"];
languages.push("Javascript");
console.log(languages);

 let numbers = [10, 20, 30, 40];
numbers.pop();
console.log(numbers);

let students = ["John", "Anna", "Mark", "Lisa"];
console.log(students.length); */

/* let foods = [ "My favorite foods:", "1. Pizza", "2. Burger", "3. Fries" ];
console.log(foods[0]);
console.log(foods[1]);
console.log(foods[2]);
console.log(foods[3]); */

/* let todo = [];
todo.push("Study javaScript");
todo.push("Build Portfolio");
todo.push("Apply for Jobs");

console.log(todo);

let task = todo.length;

console.log(`You have ${task} tasks.`); */

/* let scores = [ 85, 90, 78];
scores.pop();
scores.push(95);

scores[1] = 92;


console.log(scores);
console.log(scores.length); */

/* let colors = ["Red", "Blue"];

colors.push("Green");
colors.unshift("Yellow");

console.log(colors); */

/* let movies = ["Avengers", "Batman", "Frozen"];

movies[0] = "Spider-Man";
movies.push("Inception");

console.log(movies);

console.log(`There are ${movies.length} movies in the list.`); */

/* let cities = ["Manila", "Cebu", "Davao", "Baguio"];

console.log(`First city: ${cities[0]}`);
console.log(`Last city: ${cities[cities.length - 1]}`);
console.log(`Total Cities: ${cities.length}`); */

/* let animals = ["Dog", "Cat", "Rabbit", "Bird"];

for (i = 0; i < animals.length; i++){
    console.log(animals[i]);
} */

/* let fruits = ["Apple", "Banana", "Orange"];

for (let i = 0; i < fruits.length; i++) {
console.log(`Fruit ${i + 1}: ${fruits[i]}`);
} */

/* let scores = [95, 88, 76, 91, 84];

for (let i = 0; i < scores.length; i++) {
    console.log(`Student ${i + 1} scored ${scores[i]}`);
} */

/* let scores = [95, 88, 76, 91, 84];
   let count = 0;

for (let i = 0; i < scores.length; i++) {
    
    if (scores[i] >= 90) {
        count++;
    } 
}
console.log(`There are ${count} passing scores.`); */

/* let prices = [100, 250, 75, 300];
let total = 0;
for (i = 0; i < prices.length; i++){
total = total + prices[i];
}
console.log(`Total Price: ${total}`); */

/* let scores = [95, 88, 76, 91, 84];
let total = 0;
let count = 0;

for (i = 0; i < scores.length; i++){

total = total + scores[i];
    if (scores[i] >= 90) {
    count++;
    }
}
 console.log(`Total Score: ${total}`);
 console.log(`Passing students: ${count}`); */

 // --------- ADVANCED array methods ---------

/*  let scores = [95, 88, 76, 98, 84];

 let lowest = scores[0];

for (let i = 1; i < scores.length; i++) {

    if(scores[i] <= lowest) {
        lowest = scores[i];
    }
}
console.log(`The lowest is: ${lowest}`); */

/* let fruits = ["Apple", "Banana", "Orange", "Mango"];
let found = false;

for (let i = 0; i < fruits.length; i++) {
    
   if (fruits[i] === "Orange"){
  found = true;
   }
    
}
 if (found) {
        console.log(`Fruit orange was found!`);
    } else {
        console.log(`Fruit orange was not found!`);
    } */

        /* let fruits = ["Apple", "Banana", "Orange", "Mango"];
        let position = -1;

        for (let i = 0; i < fruits.length; i++) {

            if (fruits[i] === "Orange")
{
        position = i;
        break;
}
        }
        console.log(`Orange is at index ${position}`); */

  /* Your task

Using one for loop, determine:

The highest number.
The lowest number.
The total of all numbers.
How many numbers are greater than 50.

Expected Output
Highest: 89
Lowest: 5
Total: 281
Numbers greater than 50: 2 */


        /* let numbers = [12, 45, 7, 89, 34, 89, 5];
        let highest = numbers[0];
        let lowest = numbers[0];
        let total = 0;
        let count = 0;

        for (let i = 0; i < numbers.length; i++){

            if (numbers[i] >= highest) {
            highest = numbers[i];
            } 
            
            if (numbers[i] <= lowest) {
            lowest = numbers[i];
            } 

            total = total + numbers[i];

            if (numbers[i] > 50) {
                count++;
            }
        }
        console.log(`Highest: ${highest}`);
        console.log(`Lowest: ${lowest}`);
        console.log(`Total: ${total}`);
        console.log(`Numbers greater than 50: ${count}`);
 */

            /* let colors = ["Red", "Green", "Blue", "Yellow"];

            for (let color of colors) {
                console.log(`Color: ${color}`);

            } */

/* let prices = [100, 250, 75, 300];
let total = 0;

for(let price of prices){
    total =  total + price;

}
console.log(total); */

/* let scores = [95, 88, 76, 91, 84];
let passers = 0;

for (let score of scores){

    if (score >= 90){
     passers++;
    }
}
console.log(passers); */