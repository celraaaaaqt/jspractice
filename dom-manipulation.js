// ? DOM (Document Object Model) MANIPULATION 
// ? the browser turns the HTML into a structure JavaScript can interact with.

// ? DOM PARTS

// ? document - represents the webpage currently loaded in the browser.
// ? document.querySelector() - It allows you to select an HTML element using a CSS selector.

// todo querySelector EXAMPLES    
const title = document.querySelector("#title");
title.style.color = "blue";

//? CSS uses kebab-case, while JavaScript style properties use camelCase.
title.textContent = "Hello JavaScript!";
title.style.fontSize = "50px";
title.style.backgroundColor =  "red";
title.style.textAlign = "center";

const message = document.querySelector("#message");
message.textContent = "Learning the DOM!";
message.style.color = "green";
message.style.fontSize = "25px";

const subtitle = document.querySelector(".subtitle");
subtitle.textContent = "I am learning JavaScript";
subtitle.style.backgroundColor = "blue";
subtitle.style.color = "white";

const titlee = document.querySelector("#titlee");

titlee.style.color = "purple";
titlee.style.fontSize = "45px";
titlee.style.textAlign = "center";
titlee.style.backgroundColor = "lightgray";

// ? HTML Attributes 
// ? src, href, type. link, rel

// todo ATTRIBUTES EXAMPLES

const imageProfile = document.querySelector("#profile");
imageProfile.setAttribute("src", "assetsDom/new.png");

const linkChanger = document.querySelector("#klink");
linkChanger.setAttribute("href", "https://github.com/celraaaaaqt");

const inputPlaceholder = document.querySelector("#username");
inputPlaceholder.placeholder = "Enter your name";

// ? DOM Events 
// ?An event is something that happens on the webpage:

/* 🖱️ User clicks a button
⌨️ User types
🖱️ Mouse moves
📋 A form is submitted
etc.
JavaScript can listen for these events. */

// todo DOM events EXERCISES
const button = document.querySelector("#button");

button.addEventListener("click", () => {
    alert("Button Clicked");
});

const crushName = document.querySelector("#crushName");
const crushButton = document.querySelector("#crushButton");

crushButton.addEventListener("click", () => {
crushName.textContent = "I hope I could watch your volleyball game right now:(";
});

const counter = document.querySelector("#counter");
const increase = document.querySelector("#increase");

// ? first interactivity
let count = 0;
increase.addEventListener("click", () => {  
    count++;
    counter.textContent = count;
});

decrease.addEventListener("click", () => {
    count--;
    counter.textContent = count;
});

const nameInput = document.querySelector("#nameInput");
const messagee = document.querySelector("#messagee");

nameInput.addEventListener("input", () => {
messagee.textContent = nameInput.value;
});

const nameInputt = document.querySelector("#nameInputt");
const greetButton = document.querySelector("#greetButton");
const greeting = document.querySelector("#greeting");

greetButton.addEventListener("click", () => {
greeting.textContent = `Hello, ${nameInputt.value}`;

});

const usernamee= document.querySelector("#usernamee");
const submitt = document.querySelector("#submitt");
const resultt = document.querySelector("#resultt");

submitt.addEventListener("click", () => {

if (usernamee.value === ""){
    resultt.textContent = "Please enter your name."
} else {
    resultt.textContent = `Hello, ${usernamee.value}`;
}

});









