/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let Action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during lunch",
  "while i was praying"
];

function excuseGenerator() {
  // Generate random indices for each array
  const numblame = Math.floor(Math.random() * who.length);
  const numaction = Math.floor(Math.random() * Action.length);
  const numwhat = Math.floor(Math.random() * what.length);
  const numCuando = Math.floor(Math.random() * when.length);

  // Construct and return the excuse using the random indices
  return `${who[numblame]} ${Action[numaction]} ${what[numwhat]} ${when[numCuando]}`;
}

window.onload = function() {
  // Generate a random excuse using the excuseGenerator function
  const randomExcuse = excuseGenerator();

  // Get the h1 element using document.getElementById
  const h1Element = document.getElementById("myExcuse"); // Replace 'myExcuse' with the actual ID of your h1 element

  // Set the h1 element's innerHTML to display the random excuse
  h1Element.innerHTML = randomExcuse;
};
