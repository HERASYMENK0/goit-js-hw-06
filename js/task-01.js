const menuItemsByTagName = document.querySelectorAll("ul#categories li.item");
console.log("Number of categories:", menuItemsByTagName.length);

menuItemsByTagName.forEach((element) => {
  const elementName = element.querySelector("h2").textContent;
  const elementItem = element.querySelectorAll("ul li");
  console.log("Category:", elementName);
  console.log("Elements:", elementItem.length);
});
