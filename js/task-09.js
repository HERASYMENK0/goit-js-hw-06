function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBtn = document.querySelector("button");
const bodyEl = document.querySelector("body");
const colorValue = document.querySelector(".color");

("#0c0b5c");

changeBtn.addEventListener("click", onSubmitEvent);

function onSubmitEvent(event) {
  let color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;

  colorValue.textContent = color;
}
