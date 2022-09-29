const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputBlur);

// function onInputBlur(event) {
//   const elEvent = event.currentTarget;
//   const dataLength = Number(elEvent.dataset.length);
//   const elLength = elEvent.value.length;
//   if (elLength === dataLength) {
//     elEvent.classList.remove("invalid");
//     elEvent.classList.add("valid");
//   } else {
//     elEvent.classList.remove("valid");
//     elEvent.classList.add("invalid");
//   }
// }

// варіант оптимізації

function onInputBlur() {
  const dataLength = Number(this.dataset.length);
  const elLength = this.value.length;

  this.classList.add("invalid");

  if (elLength === dataLength) {
    this.classList.remove("invalid");
    this.classList.add("valid");
  }
}
