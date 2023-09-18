let checkBoxContainerEl = document.getElementById("checkboxWithLabelContainer");
let inputEl = document.createElement("input");
inputEl.type = "checkbox";
inputEl.id = "checkbox";
checkBoxContainerEl.appendChild(inputEl);

let l = document.createElement("label");
l.setAttribute("for", "checkbox");
l.textContent = "Click Me!";
l.id = "checkboxLabel";
l.classList.add("text");
checkBoxContainerEl.appendChild(l);
