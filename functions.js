/* function greet(name) {
    console.log(`Hi ${name}`);
}

greet("Arcel");
greet("Salvador");
greet("Zamora"); */

/* function multiplyTable(number) {
    let i = 1;
    while (i <= 10){
        let multiply = number * i;
        console.log(`${number} x ${i} = ${multiply}`);
        i++;
    }

}

multiplyTable(5);
multiplyTable(8); */

/* function add (num1, num2){

    return num1 + num2;
}
    let result = add(5, 10);

console.log(`${result}`);
 */



/* function isEven(number){

       return number % 2 === 0;
}
console.log(isEven(5));
console.log(isEven(8)); */

/* function findLargest(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3){
        return `${num1} is the largest`;
    } else if (num2 >= num1 && num2 >= num3) {
        return `${num2} is the largest`;
    } else if (num3 >= num1 &&  num3 >= num2) {
       return `${num3} is the largest`;
    } else {
        return`none of these is largest`;
    }
}

console.log(findLargest(16, 87, 91)); */

function countVowels(word){
    let count = 0;

    for (let i = 1; i <= count; i++) {
        
        if (word === 'a' ||
            word === 'b' ||
            word === 'c' ||
            word === 'd' ||
            word === 'e' 

        ) {
        return `${count} vowels`;
        }
        count++;
    }
}

console.log(countVowels("Hello"));
console.log(countVowels("Hi"));