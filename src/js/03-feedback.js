import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('[name="email"]');
const inputMessage = document.querySelector('[name="message"]');

form.addEventListener('input', throttle(onMessage, 500));

let formData = {};

updateOutput();

function onMessage(event) {
  event.preventDefault();
  formData = { email: inputEmail.value, message: inputMessage.value };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const savedData = localStorage.getItem('feedback-form-state');
  console.log(savedData);
  form.reset();
  localStorage.clear();
});

function updateOutput() {
  const saveData = localStorage.getItem('feedback-form-state');
  const parseData = JSON.parse(saveData);

  if (saveData) {
    inputEmail.value = parseData.email || '';
    inputMessage.value = parseData.message || '';
  }
}
