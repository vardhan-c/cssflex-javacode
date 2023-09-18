let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");
let userInput = document.getElementById("userInput");
let resultofGame = document.getElementById("gameResult");

function restartButtonFunction() {
    let firstRandomNumber = Math.random() * 100;
    firstRandomNumber = Math.ceil(firstRandomNumber);
    firstNumber.textContent = firstRandomNumber;

    let secondRandomNumber = Math.random() * 100;
    secondRandomNumber = Math.ceil(secondRandomNumber);
    secondNumber.textContent = secondRandomNumber;

    resultofGame.textContent = "";
    userInput.value = "";
}

restartButtonFunction();

function checkButtonFunction() {
    let firstRandomNumber = parseInt(firstNumber.textContent);
    let secondRandomNumber = parseInt(secondNumber.textContent);
    let input = parseInt(userInput.value);

    let sumofNumbers = firstRandomNumber + secondRandomNumber;

    if (sumofNumbers === input) {
        resultofGame.textContent = "Congratulations! You got it right.";
        resultofGame.style.backgroundColor = "#028a0f";
    } else {
        resultofGame.textContent = "Please Try Again!";
        resultofGame.style.backgroundColor = "#1e217c";
    }
}
