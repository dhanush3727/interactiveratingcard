const card = document.querySelector(".card");
const num1 = document.querySelector("#box1");
const num2 = document.querySelector("#box2");
const num3 = document.querySelector("#box3");
const num4 = document.querySelector("#box4");
const num5 = document.querySelector("#box5");
const empty = document.querySelector(".empty");
const btn = document.querySelector(".btn");
const cardTwo = document.querySelector(".card2");

num1.addEventListener("click", function () {
  num1.classList.add("active");
  num2.classList.remove("active");
  num3.classList.remove("active");
  num4.classList.remove("active");
  num5.classList.remove("active");
  empty.textContent = "You Selected 1 out of 5";
});
num2.addEventListener("click", addNum2);
num3.addEventListener("click", addNum3);
num4.addEventListener("click", addNum4);
num5.addEventListener("click", addNum5);
btn.addEventListener("click", function () {
  cardTwo.style.display = "inline";
  card.style.display = "none";
});

function addNum2() {
  num2.classList.add("active");
  num1.classList.remove("active");
  num3.classList.remove("active");
  num4.classList.remove("active");
  num5.classList.remove("active");
  empty.textContent = "You Selected 2 out of 5";
}

function addNum3() {
  num3.classList.add("active");
  num2.classList.remove("active");
  num1.classList.remove("active");
  num4.classList.remove("active");
  num5.classList.remove("active");
  empty.textContent = "You Selected 3 out of 5";
}

function addNum4() {
  num3.classList.remove("active");
  num4.classList.add("active");
  num2.classList.remove("active");
  num1.classList.remove("active");
  num5.classList.remove("active");
  empty.textContent = "You Selected 4 out of 5";
}

function addNum5() {
  num5.classList.add("active");
  num1.classList.remove("active");
  num2.classList.remove("active");
  num3.classList.remove("active");
  num4.classList.remove("active");
  empty.textContent = "You Selected 5 out of 5";
}
