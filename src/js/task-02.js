const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingradientsEl = document.querySelector("#ingredients"); // el ul#ingredients

const createIngradientItem = (el) => {
  const itemEl = document.createElement("li"); // el ul#ingredients li.item
  itemEl.classList.add("item");
  itemEl.textContent = el;
  return itemEl;
};

ingradientsEl.append(...ingredients.map(createIngradientItem));
