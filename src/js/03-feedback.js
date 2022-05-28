import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const throttledCallback = throttle(e => {
  console.log(e.currentTarget);

  const emailValue = e.currentTarget.email.value;
  const messageValue = e.currentTarget.message.value;
  const formValue = { email: emailValue, message: messageValue };

  localStorage.setItem('feedback-form-state', JSON.stringify(formValue));
}, 500);

form.addEventListener('input', throttledCallback);

const localStoreFormValue = localStorage.getItem('feedback-form-state');
const localStarageVal = JSON.parse(localStoreFormValue);

if (localStoreFormValue !== null) {
  form.email.value = localStarageVal.email;
  form.message.value = localStarageVal.message;
}

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(`Email: ${form.email.velue}, Message: ${form.message.value}`);
  form.email.value = '';
  form.message.value = '';
  localStorage.removeItem('feedback-form-state');
});
