const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    const elEvent = event.currentTarget;
    const dataLength = elEvent.dataset.length;
    const elLength = elEvent.value.length;
    if (elLength >= dataLength) {
        elEvent.classList.remove('invalid')
        elEvent.classList.add('valid')
    } else {
        elEvent.classList.remove('valid')
        elEvent.classList.add('invalid')
    }
}