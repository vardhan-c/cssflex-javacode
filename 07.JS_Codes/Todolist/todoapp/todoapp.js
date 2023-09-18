let todoList = [{
        text: "Learn HTML"
    },
    {
        text: "Learn CSS"
    },
    {
        text: "Learn JavaScript"
    }
];
let listContainerEl = document.getElementById("todoItemsContainer");
let inputEl = document.createElement("input");
inputEl.type = "checkbox";
listContainerEl.appendChild(inputEl);

let labelEl = document.createElement("label");
labelEl.textContent = "Learn HTML";
labelEl.classList.add("label-container");
listContainerEl.appendChild(labelEl);
