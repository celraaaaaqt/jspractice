const firstHeader = document.querySelector("#firstHeader");
const firstButton = document.querySelector("#firstButton");
const output = document.querySelector("#output");

const increase = document.querySelector("#increase");
const decrease = document.querySelector("#decrease");

firstButton.addEventListener("click", () => {
firstHeader.classList.add("firstHeader");
output.classList.add("highlight");
});

let count = 0;
increase.addEventListener("click", () => {
count++;
output.textContent = count;
});
