"use strict"

let balance = document.querySelector(".balance");

function cookCoffee(name, price) {
  if (balanse.value >= price) {
    balance.style.backgroundColor="";
    balanse.value -= price; // balanse.value = balanse.value - price
    changedisplayText("Ваш ${name} готовится");
    startCooking(name);
  } else {
    changedisplayText("Недостаточно средств");
    balance.style.backgroundColor="rgb(255, 50, 50";
  }
}

function startCooking(name) {
  console.log(name);
}

function changeDisplayText(text) {
  if (text.length > 50) {
    text = text.slice(0, 23) + "...";
  }
  let displayText = document.querySelector(".display span");
  displayText.innerHTML = text; 
}







