/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.test = function test() {
  //console.log("test");
  //write your code here

  let cards = ["♥", "♣", "♦", "♠"];
  let numbers = [
    "A",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  function displayCards() {}
  let singleCard = cards[Math.floor(Math.random() * cards.length)];
  let singleNumber = numbers[Math.floor(Math.random() * numbers.length)];
  let showCard = `${singleNumber} ${singleCard}`;
  let showCardDuplicada = showCard;
  document.getElementById("carta");
  document.getElementById("carta").innerHTML = showCard;

  const div = document.createElement("div");
  div.classList.add("carta");
  div.innerHTML = showCardDuplicada;
  div.style.top = "0";
  div.style.left = "0";
  div.style.width = "200px";
  div.style.height = "300px";

  div.classList.add("carta");
  div.innerHTML = showCardDuplicada;
  div.style.bottom = "0";
  div.style.right = "0";

  div.style.width = "200px";
  div.style.height = "400px";

  document.getElementById("carta").appendChild(div);
};
