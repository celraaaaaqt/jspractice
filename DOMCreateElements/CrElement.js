// ? Create element examples:

/* const paragraph = document.createElement("p");
const addButton = document.querySelector("#addButton");

paragraph.textContent = "Hello from Javascript!";
document.body.append(paragraph);

addButton.addEventListener("click", () => {
const paragraph2 = document.createElement("p");

paragraph2.textContent = "New Message";

document.body.append(paragraph2);
}); */

// todo create elements exercises:
/* const addButton = document.querySelector("#addButton");

addButton.addEventListener("click", () => {
    const paragraph = document.createElement("p");

    paragraph.textContent = "I was created with JavaScript";

    document.body.append(paragraph);
}); */

/* const addButton = document.querySelector("#addButton");

addButton.addEventListener("click", () => {
    const paragraph = document.createElement("p");

    paragraph.textContent = "Student Added!";
    paragraph.classList.add("student");
    document.body.append(paragraph);
}); */

// ? remove method
/* const message = document.querySelector("#message");
message.remove(); */

/* const addButton = document.querySelector("#addButton");

addButton.addEventListener("click", () => {
    const paragraph = document.createElement("p");

    paragraph.textContent = "Student Added!";
    paragraph.classList.add("student");
    document.body.append(paragraph);
    paragraph.remove();
    
}); */

/* const addButton = document.querySelector("#addButton");

addButton.addEventListener("click", () => {
    const paragraph = document.createElement("p");
    const removeButton = document.createElement("button");

    paragraph.textContent = "Student Added!";
    removeButton.textContent = "[Remove]";

    document.body.append(paragraph);
    paragraph.append(removeButton);

    removeButton.addEventListener("click", () => {
        paragraph.remove();
    });
}); */

const studentInput = document.querySelector("#studentInput");
const addButton = document.querySelector("#addButton");

addButton.addEventListener("click", () => {
    const paragraph = document.createElement("p");
    const removeButton = document.createElement("button");

    paragraph.textContent = studentInput.value;
    removeButton.textContent = "[Remove]";

    paragraph.append(removeButton);
    document.body.append(paragraph);

    removeButton.addEventListener("click", () => {
        paragraph.remove();
    });
});

