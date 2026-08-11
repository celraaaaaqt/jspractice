const firstHeader = document.querySelector("#firstHeader");
const firstButton = document.querySelector("#firstButton");
const output = document.querySelector("#output");

firstButton.addEventListener("click", () => {
output.classList.add("highlight");
output.textContent = "hi!";
});