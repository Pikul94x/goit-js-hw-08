import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(localData, 500));

const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');

function localData() {
  const formData = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function getLocalData() {
  let localData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (localData !== null) {
    email.value = localData.email;
    message.value = localData.message;
  }
}

getLocalData();

form.addEventListener('submit', submitData);

function submitData(e) {
  e.preventDefault();
  this.reset();
  console.log(localStorage.getItem('feedback-form-state'));
  localStorage.removeItem('feedback-form-state');
}
