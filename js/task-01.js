const categoriesEl = document.querySelector("#categories");

const categoriesItemsEl = categoriesEl.children;

console.log('Number of categories: ' + categoriesItemsEl.length)

const searchTitleAndLength = list => {
  const arrItems = [...list];

  arrItems.forEach(item => {
    console.log("Category: " + item.children[0].textContent);
    console.log("Elements: " + item.children[1].children.length);
  });
};

searchTitleAndLength(categoriesItemsEl);

console.log('2 варіант -------------------------')

console.log('Number of categories: ' + categoriesItemsEl.length)

const searchTitleAndLength2 = list => {
  const arrItems = [...list];

    arrItems.forEach(item => {
      
        const itemTitle = item.querySelector('h2')
        const itemList = item.querySelector('ul')

    console.log("Category: " + itemTitle.textContent);
    console.log("Elements: " + itemList.children.length);
  });
};

searchTitleAndLength2(categoriesItemsEl);


console.log('3 варіант -------------------------')

const arrItemsEl = document.querySelectorAll("#categories .item");

console.log('Number of categories: ' +arrItemsEl.length);

searchTitleAndLength2(arrItemsEl);
