let bikes = ["Hero", "Honda", "Bajaj", "Suzuki", "Yamaha"];
let person = {
    name: "Rahul",
    age: 25,
    gender: "Male",
};
let todos = [{
        todo: "Attending CCBP sessions",
        todoStatus: "Completed",
    },
    {
        todo: "Completing practice sets",
        todoStatus: "Not Completed",
    },
    {
        todo: "Asking doubts",
        todoStatus: "Completed",
    },
];

let valuesToStingify = [bikes, person, todos];

let jsonContainerEl = document.getElementById("jsonContainer");

function createAndAppendValue(stringfiedValue) {
    let valueContainerEl = document.createElement("div");
    valueContainerEl.classList.add("value-container");
    jsonContainerEl.appendChild(valueContainerEl);

    let valueEl = document.createElement("span");
    valueEl.textContent = stringfiedValue;
    valueEl.classList.add("value");
    valueContainerEl.appendChild(valueEl);
}

function convertToJSONString(value) {
    let stringfiedValue = JSON.stringify(value);
    createAndAppendValue(stringfiedValue);
}

for (let value of valuesToStingify) {
    convertToJSONString(value);
}
