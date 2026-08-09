// ? Spread Operator is written with the "..." three dots. ( an ES6 feature ).
// ? Its basic job is to "spread out" the contents of an array or object.

/* const numbers = [1, 2, 3];

const newNumbers = [...numbers, 4, 5];

console.log(newNumbers);

const fruit = [ "Apple", "Banana" ];
const vegetables = [ "Carrot", "Potato "];

const combinedFruitAndVegetables = [...fruit, ...vegetables];

console.log(combinedFruitAndVegetables);

const person = {
    name: "John",
    age: 21
};

const newPersonInfo = {
    ...person,
    city: "Manila"
}

console.log(newPersonInfo);

const student = {
    name: "Alex",
    age: 20,
    course: "BSIT"
};

const newStudentInfo = {
    ...student,
    age: 21,
    year: 2
};

console.log(newStudentInfo); */

// ? Spread = Expand | Rest = Collect ("Collect the rest of the values.")
// ? rest operator 

/* function sum(...numbers) {

let total = 0;

    numbers.forEach(numbers => {
        total += numbers;
    });
    return total;
}

console.log(sum(10, 20, 30));

const numbers = [10, 20, 30, 40, 50];

const destructureNumbers = [ first, second, ...remaining] = numbers;
console.log(first);
console.log(second);
console.log(remaining);

const person = {
    name: "John",
    age: 21,
    city: "Manila",
    country: "Philippines"
};

const { name, ...otherInfos} = person;
console.log(otherInfos);

function showFirst(first, ...others){
    console.log(first);
    console.log(others);
}
showFirst("Apple", "Banana", "Orange", "Mango"); */
