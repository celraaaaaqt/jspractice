// ? CLASSLIST TOGGLE 
// ? toggle() combines those ideas:

/* element.classList.toggle("active");

It means:

If "active" isn't there → add it
If "active" is already there → remove it */

// ! Example 
const button = document.querySelector("#button");
const message = document.querySelector("#message");

button.addEventListener("click", () => {
    message.classList.toggle("active");
});
