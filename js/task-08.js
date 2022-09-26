const formEl = document.querySelector(".login-form");
const inputEmainEl = document.querySelector('[type="email"]');
const inputPasswordEl = document.querySelector('[type="password"]');
const subBtnEl = document.querySelector('[type="submit"]');

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElement = event.currentTarget.elements;

  const userData = {
    email: formElement.email.value,
    password: formElement.password.value,
  };

  // const userData = {};
  // const formData = new FormData(event.currentTarget);
  // formData.forEach((x, y) => {
  //     userData[y] = x;
  // })

  console.log(userData);

  event.currentTarget.reset();
}

subBtnEl.addEventListener("click", onBattonClick);

function onBattonClick(event) {
  if (inputEmainEl.value == false) {
    return alert("Заповніть поле email");
  }
  if (inputPasswordEl.value == false) {
    return alert("Заповніть поле password");
  }
}
