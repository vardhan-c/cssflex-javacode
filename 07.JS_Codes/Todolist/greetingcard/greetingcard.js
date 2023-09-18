let greeting = '{"greetText":"Wishing that the new year will bring joy, love, peace, and happiness to you.","from":"Rahul","to":"Varakumar"}';

let parsedVlaue = JSON.parse(greeting);

let greetingTextEl = document.getElementById("greetText");
let greetfromEl = document.getElementById("greetFrom");
let greetToEl = document.getElementById("greetTo");

greetingTextEl.textContent = parsedVlaue.greetText;
greetfromEl.textContent = "From: " + parsedVlaue.from;
greetToEl.textContent = "Top: " + parsedVlaue.to;
