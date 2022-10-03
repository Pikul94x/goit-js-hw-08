import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('[name="email"]');
const messageInput = document.querySelector('[name="message"]');
// const submitBtn = document.querySelector('[type="submit"]');

form.addEventListener('input', throttle(saveToLocaleStorage, 500));

function saveToLocaleStorage() {
  const inputsValue = {
    emailInput: emailInput.value,
    messageInput: messageInput.value,
  };

  const inputValueJSON = JSON.stringify(inputsValue);
  localStorage.setItem('feedback-form-state', inputValueJSON);
}

function loadFromLocaleStorage() {
  const dataFromLocalStorage = localStorage.getItem('feedback-form-state');
  if (dataFromLocalStorage === null) {
    return;
  } else {
    try {
      const parsedDataFromLocalStorage = JSON.parse(dataFromLocalStorage);
      emailInput.value = parsedDataFromLocalStorage.emailInput;
      messageInput.value = parsedDataFromLocalStorage.messageInput;
    } catch (error) {
      console.log(error.name);
    }
  }
}

loadFromLocaleStorage();

form.addEventListener('submit', submitDate);

function submitDate(e) {
  e.preventDefault();

  console.log(localStorage.getItem('feedback-form-state'));
  localStorage.removeItem('feedback-form-state');
  form.reset();
}
