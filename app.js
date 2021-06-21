"use strict";

//Identify Dice and Roll Button
const d4 = document.querySelector("#d4-select");
const d6 = document.querySelector("#d6-select");
const d8 = document.querySelector("#d8-select");
const d10 = document.querySelector("#d10-select");
const d12 = document.querySelector("#d12-select");
const d20 = document.querySelector("#d20-select");
const rollBTN = document.querySelector("#roll-btn");
const rollList = document.querySelector("#results");
const total = document.querySelector("#total");

const diceArray = [d4, d6, d8, d10, d12, d20];
const diceValue = [4, 6, 8, 10, 12, 20];
const diceRolls = [];
let rolls = [];
let sum = 0;

//FUNCTIONALITY
const roller = function () {
  sum = 0;
  diceArray.forEach(function (el, index) {
    rolls = [];
    if (parseInt(el.value) == 0) return;
    else {
      for (let i = 0; i < el.value; i++) {
        rolls[i] = Math.trunc(Math.random() * diceValue[index] + 1);
        // console.log(`Roll #${i + 1}: ${rolls[i]}`);
        // console.log(`Rolls: ${rolls}`);
      }
      diceRolls.push(rolls);
      //Update Text Results with Rolls
      let li = document.createElement("li");
      li.append(
        `You rolled ${el.value} d${diceValue[index]}: ${rolls.join(", ")}`
      );
      rollList.appendChild(li);
    }
  });
  // console.log(diceRolls);
  sum = diceRolls.flat().reduce((acc, cur) => acc + cur);
  //console.log(sum);
  total.innerHTML = `Your Total is ${sum}`;
};

//IMPLEMENTATION
rollBTN.addEventListener("click", roller);
