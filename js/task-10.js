function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('[type="number"]');
const btnCreateEl = document.querySelector("[data-create]");
const btnDestroyEl = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");

btnCreateEl.addEventListener("click", createBoxes);
btnDestroyEl.addEventListener("click", destroyBoxes);

function createBoxes(event, amount = inputEl.value) {
  const widthBoxe = 30;
  const heightBoxe = 30;
  const boxes = [];

  if (amount > 0) {
    for (let index = 0; index < amount; index++) {
      const boxe = document.createElement("div");
      boxe.style.width = `${widthBoxe + 10 * index}px`;
      boxe.style.height = `${heightBoxe + 10 * index}px`;
      boxe.style.backgroundColor = getRandomHexColor();

      boxes.push(boxe);
    }
  } else {
    return alert("введіть число");
  }

  boxesEl.append(...boxes);
}

function destroyBoxes() {
  [...boxesEl.children].map((child) => child.remove());
  inputEl.value = 0;
}

// btnCreateEl.addEventListener('click', ()=> {
//   const widthBoxe = 30;
//   const heightBoxe = 30;

//   const boxes = [];

//   if (inputEl.value) {
//     for (let index = 0; index < inputEl.value; index++) {
//     const boxe = document.createElement('div')
//     boxe.style.width = `${widthBoxe + (10 * index)}px`;
//     boxe.style.height = `${heightBoxe + (10 * index)}px`;
//     boxe.style.backgroundColor = getRandomHexColor();

//     boxes.push(boxe);
//   }
//   } else {
//     return alert('sadadssa');
//   }

//   console.log(boxes);
//   boxesEl.append(...boxes);

// });

// btnDestroyEl.addEventListener('click', () => {
//   [...boxesEl.children].map(child => child.remove())
//   inputEl.value = 0;
// });
