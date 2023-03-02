const inputEl = document.querySelector("#validation-input");
const minLength = inputEl.getAttribute("data-length");

inputEl.addEventListener("input", onSwitchInput);

function onSwitchInput(event) {
  if (event.currentTarget.value.length == minLength) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
  console.log(event.currentTarget.value.length);
}
