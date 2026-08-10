
const hello = document.querySelector("#hello");
const checkButton = document.querySelector("#checkButton");
const p = document.querySelector("#p");


checkButton.addEventListener("click", () => {
if (hello.classList.contains("highlight")){
    p.classList.add("highlight");
    p.textContent = "Highlight is active!";
   
} else {
   p.textContent = "Highlight is not active!";
}
});

