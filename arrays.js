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

let scores = [95, 88, 76, 91, 84];
   let count = 0;

for (let i = 0; i < scores.length; i++) {
    
    if (scores[i] >= 90) {
        count++;
    } 
}
console.log(`There are ${count} passing scores.`);