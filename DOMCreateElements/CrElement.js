const firstHeader = document.querySelector("#firstHeader");
const firstButton = document.querySelector("#firstButton");
const output = document.querySelector("#output");

const increase = document.querySelector("#increase");
const decrease = document.querySelector("#decrease");

firstButton.addEventListener("click", () => {
firstHeader.classList.add("firstHeader");
output.classList.add("highlight");
});

let increaseCount = 0;
increase.addEventListener("click", () => {
increaseCount++;
output.textContent = increaseCount;
});

decrease.addEventListener("click", () => {
increaseCount--;
output.textContent = increaseCount;
});

