import {
  isEscapeKey
} from './utils/utils.js';

const loadingProcessMessageTemplate = document.querySelector('#messages').content.querySelector('.img-upload__message--loading');
const loadingProcessMessageContainer = loadingProcessMessageTemplate.cloneNode(true);
const successContainerTemplate = document.querySelector('#success').content.querySelector('.success');
const successContainer = successContainerTemplate.cloneNode(true);
const successCloseButton = successContainer.querySelector('.success__button');
const alertContainer = document.createElement('div');
const errorContainerTemplate = document.querySelector('#error').content.querySelector('.error');
const errorContainer = errorContainerTemplate.cloneNode(true);
const errorCloseButton = errorContainer.querySelector('.error__button');

const ALERT_SHOW_TIME = 5000;

const showUnloadMessage = (message) => {
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

const showErrorMessage = () => {
  errorContainer.style.zIndex = 100;
  document.body.append(errorContainer);

  const onPopupEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeErrorModal();
    }
  };

  const onWindowClick = (evt) => {
    if (!errorContainer.querySelector('.error__inner').contains(evt.target)) {
      evt.preventDefault();
      closeErrorModal();
    }
  };

  const onCloseButtonClick = () => {
    closeErrorModal();
  };

  function closeErrorModal() {
    errorContainer.remove();
    errorCloseButton.removeEventListener('click', onCloseButtonClick);
    document.removeEventListener('keydown', onPopupEscKeydown);
    document.removeEventListener('click', onWindowClick);
  }

  errorCloseButton.addEventListener('click', onCloseButtonClick);
  document.addEventListener('keydown', onPopupEscKeydown);
  document.addEventListener('click', onWindowClick);
};

const showSuccessMessage = () => {
  successContainer.style.zIndex = 100;
  document.body.append(successContainer);

  const onPopupEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeSuccessModal();
    }
  };

  const onWindowClick = (evt) => {
    if (!successContainer.querySelector('.success__inner').contains(evt.target)) {
      evt.preventDefault();
      closeSuccessModal();
    }
  };

  const onCloseButtonClick = () => {
    closeSuccessModal();
  };

  successCloseButton.addEventListener('click', onCloseButtonClick);
  document.addEventListener('keydown', onPopupEscKeydown);
  document.addEventListener('click', onWindowClick);

  function closeSuccessModal() {
    successContainer.remove();
    successCloseButton.removeEventListener('click', onCloseButtonClick);
    document.removeEventListener('keydown', onPopupEscKeydown);
    document.removeEventListener('click', onWindowClick);
  }
};

const showLoadingProcessMessage = () => {
  loadingProcessMessageContainer.style.zIndex = 100;
  document.body.append(loadingProcessMessageContainer);
};

const removeLoadingProcessMessage = () => {
  loadingProcessMessageContainer.remove();
};

export {
  showUnloadMessage,
  showErrorMessage,
  showSuccessMessage,
  showLoadingProcessMessage,
  removeLoadingProcessMessage
};
