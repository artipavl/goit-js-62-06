const valueEl = document.querySelector("#value");
const btnIncrement = document.querySelector('[data-action="increment"]');
const btnDecrement = document.querySelector('[data-action="decrement"]');

let counterValue = Number(valueEl.textContent);

btnIncrement.addEventListener("click", () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});

btnDecrement.addEventListener("click", () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});
