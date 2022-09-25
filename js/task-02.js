const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');

const addItemsInList = (list, items) => {
  const itemsArr = [];

  items.map(item => {
    const itemEl = document.createElement('li')
    itemEl.textContent = item;

    return itemsArr.push(itemEl)
  });

  list.append(...itemsArr);
}

addItemsInList(listEl, ingredients);

