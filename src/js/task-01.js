const listCategories = document.querySelectorAll(".item"); // pseudo-array elements .item
console.log(`Number of categories: ${listCategories.length}`);

const itemInfo = function (el) {
  console.group();
  const titleText = el.firstElementChild.textContent; // text into h2
  console.log(`Category: ${titleText}`);

  const listItem = el.lastElementChild.children; // pseudo-array elements every ul into .item
  console.log(`Elements: ${listItem.length}`);
  console.groupEnd();
};

listCategories.forEach(itemInfo);
