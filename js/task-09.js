function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnEl = document.querySelector('.change-color');
const colorTextEl = document.querySelector('.color');

colorTextEl.textContent = '- #ffffff';


btnEl.addEventListener('click', onBtnClick);

function onBtnClick(event) {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  colorTextEl.textContent = `- ${color}`;
}