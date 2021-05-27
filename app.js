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

const diceArray = [d4, d6, d8, d10, d12, d20];
const diceValue = [4, 6, 8, 10, 12, 20];
const diceRolls = [];
let rolls;
let sum;

//Functionality;

const rollDie = function (numDie, dieType) {
  console.log(numDie);
  for (let i = 0; i < numDie; i++) {
    rolls[i] = Math.trunc(Math.random() * dieType + 1);
    sum += rolls[i];
  }
};

const tabulate = function () {
  reset();
  let dieTotal = 0;
  for (let i = 0; i < 6; i++) {
    rolls = [];
    sum = 0;
    let v = parseInt(diceArray[i].value);
    console.log(v);
    if (v !== 0) {
      rollDie(v, diceValue[i]);
      dieTotal += sum;
      console.log(dieTotal);
      let li = document.createElement("li");
      let rollText = `You rolled ${v} d${diceValue[i]}: ${rolls.join(
        ", "
      )}.  Subtotal is ${sum}`;
      li.append(rollText);
      rollList.appendChild(li);
    }
  }
  document.querySelector("#total").innerHTML = `${dieTotal}`;
};

rollBTN.addEventListener("click", tabulate());

const reverseArrayInPlace = function (arr) {
  for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    let a = arr[i];
    let b = arr[j];
    arr[j] = a;
    arr[i] = b;
  }
  return arr;
};
