function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('[type="number"]');
const btnCreateEl = document.querySelector("[data-create]");
const btnDestroyEl = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");

btnCreateEl.addEventListener("click", createBoxes);
btnDestroyEl.addEventListener("click", destroyBoxes);

function createBoxes() {
  let sizeBox = 30;

  const boxes = [];

  if (inputEl.value) {
    for (let index = 0; index < inputEl.value; index++) {
      const boxe = `<div style="width: ${sizeBox}px; height: ${sizeBox}px; background-color: ${getRandomHexColor()};"></div>`;

      boxes.push(boxe);

      sizeBox += 10;
    }
  } else {
    return alert("введіть число");
  }

  boxesEl.insertAdjacentHTML("beforeend", boxes.join(""));
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
  inputEl.value = "";
}
