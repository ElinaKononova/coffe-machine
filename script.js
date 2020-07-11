"use strict"
let state = "waiting" // "cooking" "ready"
let balance = document.querySelector(".balance");
let cup = document.querySelector(".cup img");
//oneclick = "cookCoffee('Американо', 50, this)"
function cookCoffee(name, price, elem) {
  if (state != "waiting") {
    return;
  }
  if (balanse.value >= price) {
    state = "cooking";
    balance.style.backgroundColor="";
    balanse.value -= price; // balanse.value = balanse.value - price
    changedisplayText(`Ваш ${name} готовится`);
    
    let coffeeImg = elem.querySelector("img");
    let coffeeSrc =  coffeeImg.getAttribute("src");
    
    startCooking(name,coffeeSrc);
  } else {
    changedisplayText("Недостаточно средств");
    balance.style.backgroundColor="rgb(255, 50, 50";
  }
}
//Планирование
//setTimeout(func, ms); - отрабатывает только один раз
//setInterval(func, ms); - отрабатывает пока не отключим
//let timeout = setTimeout(func, ms);
//let interval = setInterval(func, ms);
//clearTimeout (timeout)
//clearinterval(interval)
function startCooking(name, src) {
  let progressBar = document.querySelector(".progress-bar");
  let cup = document.querySelector(".cup img");
  cup.setAttribut("src", src);
  cup.style.display = "inLine";
  let t = 0;
  let cookingInterval = setInterval(() => { // то же самое, что и function() {}
    t++
    cup.style.opacity = t + "%";
    //progressBar.style.width = t + "%";
    changeProgressPersent(t);
    console.log(t);
    if (t == 100) {
      state = "ready";
      clearInterval(cookingInterval);
      changeDisplayText(`Ваш ${name} готов!`);
      cup.style.cursor = "pointer"; 
      cup.oneclick = funktion() {
        takeCoffee;
      }
    }
  }, 50 ) 
}

function takeCoffee() {
  if (state != "ready"); {
    return;
  }
  state = "waiting";
  changeProgressPercent(0);
  cup.style.opacity = 0;
  cup.style.display = ""; // или "none" сработает одинаково
  cup.style.cursor = "";
  changeDisplayText("Выберите кофе");
  cup.oneclick = null;
}

function changeProgressPercent(persent) {
  let progressBar = document.querySelector(".progress-bar");
  progressBar.style.width = percent + "%";
}

function changeDisplayText(text) {
  if (text.length > 50) {
    text = text.slice(0, 23) + "...";
  }
  let displayText = document.querySelector(".display span");
  displayText.innerHTML = text; 
}







