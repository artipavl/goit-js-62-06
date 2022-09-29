const formEl = document.querySelector(".login-form");
const inputEmainEl = document.querySelector('[type="email"]');
const inputPasswordEl = document.querySelector('[type="password"]');
const subBtnEl = document.querySelector('[type="submit"]');

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElement = event.currentTarget.elements;


  if (!formElement.email.value || !formElement.password.value) {
     alert("Заповніть всі поля");
    return;
  }

  const userData = {
    email: formElement.email.value,
    password: formElement.password.value,
  };

  console.log(userData);

  event.currentTarget.reset();
}
