const counter = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};
const valueEl = document.querySelector("#value");

const incrementBtn = document.querySelector(`[data-action="increment"]`);
incrementBtn.addEventListener('click', function () {
  console.log("+1");
  counter.increment()
  valueEl.textContent = counter.value
});
const decrementBtn = document.querySelector(`[data-action="decrement"]`);
decrementBtn.addEventListener("click", function () {
  console.log("-1");
   counter.decrement();
   valueEl.textContent = counter.value;
});
