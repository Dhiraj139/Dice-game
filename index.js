var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var img = document.querySelector(".img1");
if (randomNumber1 === 1) {
  img.setAttribute("src", "/images/dice1.png");
} else if (randomNumber1 === 2) {
  img.setAttribute("src", "/images/dice2.png");
} else if (randomNumber1 === 3) {
  img.setAttribute("src", "/images/dice3.png");
} else if (randomNumber1 === 4) {
  img.setAttribute("src", "/images/dice4.png");
} else if (randomNumber1 === 5) {
  img.setAttribute("src", "/images/dice5.png");
} else if (randomNumber1 === 6) {
  img.setAttribute("src", "/images/dice6.png");
}

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var img = document.querySelector(".img2");
if (randomNumber2 === 1) {
  img.setAttribute("src", "/images/dice1.png");
} else if (randomNumber2 === 2) {
  img.setAttribute("src", "/images/dice2.png");
} else if (randomNumber2 === 3) {
  img.setAttribute("src", "/images/dice3.png");
} else if (randomNumber2 === 4) {
  img.setAttribute("src", "/images/dice4.png");
} else if (randomNumber2 === 5) {
  img.setAttribute("src", "/images/dice5.png");
} else if (randomNumber2 === 6) {
  img.setAttribute("src", "/images/dice6.png");
}

var title = document.querySelector(".title");
if (randomNumber1 > randomNumber2) {
  title.innerHTML = "🚩 Player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
  title.innerHTML = " Player 2 wins! 🚩";
} else if (randomNumber1 == randomNumber2) {
  title.innerHTML = " Draw!";
}
