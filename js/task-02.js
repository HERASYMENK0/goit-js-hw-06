const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");
ingredients.forEach((value) => {
  const listEl = document.createElement("li");
  const listItem = listEl.classList.add("item");
  listEl.textContent = value;
  ingredientsList.append(listEl);
});
