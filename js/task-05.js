const inputEl = document.querySelector("#name-input");
const nameEl = document.querySelector("#name-output");

inputEl.addEventListener("input", addName);

// function addName(event) {
//      if (event.currentTarget.value) {
//         nameEl.textContent = event.currentTarget.value;
//     } else {
//         nameEl.textContent = 'Anonymous';
//     }
// }

function addName(event) {
  event.currentTarget.value
    ? (nameEl.textContent = event.currentTarget.value)
    : (nameEl.textContent = "Anonymous");
}
