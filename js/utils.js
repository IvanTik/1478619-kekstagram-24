const successTemplate = document.querySelector('#success').content;
const errorTemplate = document.querySelector('#error').content;
const ALERT_SHOW_TIME = 5000;


const getRandomInt = (min, max) => {
  const minCeil = Math.ceil(min);
  const maxFloor = Math.floor(max);
  if (minCeil > maxFloor) {
    return null;
  }

  return Math.floor(Math.random() * (maxFloor - minCeil + 1)) + minCeil;
};
getRandomInt(1, 10);

function stringLenght(string, maxlength) {
  return (string.length < maxlength);
}
stringLenght('Hello', 7);

const isEscapeKey = (evt) => evt.key === 'Escape';

const isEnterKey = (evt) => evt.key === 'Enter';

const addBodyModalOpen = () => document.querySelector('body').classList.add('modal-open');

const removeBodyModalOpen = () => document.querySelector('body').classList.remove('modal-open');

const formSuccess = () => {
  const createformSuccessFragment = document.createDocumentFragment();

  createformSuccessFragment.appendChild(successTemplate.cloneNode(true));
  document.querySelector('body').appendChild(createformSuccessFragment);

  const successContainer = document.querySelector('.success');
  const successButton = successContainer.querySelector('.success__button');
  successButton.addEventListener('click', () => {
    successContainer.remove();
  });
};

const formError = () => {
  const createformErrorFragment = document.createDocumentFragment();

  createformErrorFragment.appendChild(errorTemplate.cloneNode(true));
  document.querySelector('body').appendChild(createformErrorFragment);

  const errorContainer = document.querySelector('.error');
  const errorButton = errorContainer.querySelector('.error__button');
  errorButton.addEventListener('click', () => {
    errorContainer.remove();
  });
};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {
  getRandomInt,
  isEscapeKey,
  isEnterKey,
  addBodyModalOpen,
  removeBodyModalOpen,
  showAlert,
  formSuccess,
  formError
};
