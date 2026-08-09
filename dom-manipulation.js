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







