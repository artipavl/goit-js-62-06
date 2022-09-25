const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

textEl.style.fontSize = `${inputEl.value}px`;

inputEl.addEventListener('input', onInputInput);

function onInputInput(event) {
    const inputEvent = event.currentTarget.value;
    textEl.style.fontSize = `${inputEvent}px`
}

// inputEl.addEventListener('input', event => textEl.style.fontSize = `${event.currentTarget.value}px`);

// inputEl.addEventListener('input', () => textEl.style.fontSize = `${inputEl.value}px`);