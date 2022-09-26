const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

const onListAddItems = (list, items) => {
  const itemsArr = [];

  items.map((item) => {
    const itemEl = document.createElement("li");
    itemEl.textContent = item;

    return itemsArr.push(itemEl);
  });

  list.append(...itemsArr);
};

onListAddItems(listEl, ingredients);
