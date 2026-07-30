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

/* function countVowels(word){
    
    let count = 0;
    word = word.toLowerCase();
    for (let i = 0; i < word.length; i++) {
        
        if ("aeiou".includes(word[i])) {
             count++;
        }
    }
     return `${count} vowels`;
}

console.log(countVowels("Celraaaaa")); */

/* function countVowels(word) {
    let count = 0;
 word = word.toLowerCase();

    for (let i = 0; i < word.length; i++) {
        if ("aeiou".includes(word[i])){
            count++;
        }
    }
    return `${count} vowels`;
}
console.log(countVowels("Celraaaaa")); */

    /* function reversedWord(word) {
        let reversed = "";

        for (let i = word.length - 1; i >= 0; i--){
            reversed += word[i];
        }
        return reversed;
    }
    console.log(reversedWord("hello")); */

function isPalindrome(word) {
let reversed = "";

for (let i = word.length - 1; i >= 0; i--){
reversed += word[i];
}
return reversed === word;

}
console.log(isPalindrome("arcel pogi"));