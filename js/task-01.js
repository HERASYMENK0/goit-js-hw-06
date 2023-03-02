const catList = document.querySelector("#categories");

const catItems = catList.children;

console.log(`Number of categories: ${catItems.length}`);

for (let i = 0; i < catItems.length; i++) {
  const category = catItems[i];
  const categoryName = category.firstElementChild.textContent;
  const categoryItems = category.lastElementChild.children;

  console.log(
    `Category: ${categoryName}. Number of items: ${categoryItems.length}`
  );
}
