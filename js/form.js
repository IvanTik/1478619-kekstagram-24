/* eslint-disable no-unused-vars */
import {
  isEscapeKey,
  isEnterKey
} from './utils.js';

const MAX_TAGS = 5;
const textAreaMaxLength = 140;

const body = document.querySelector('body');
const formImage = document.querySelector('.img-upload__form');
const form = document.querySelector('#upload-select-image');
const uploadPopup = form.querySelector('.img-upload__overlay');
const closeButtonUpload = uploadPopup.querySelector('#upload-cancel');
const uploadButton = form.querySelector('#upload-file');
const hashtagText = document.querySelector('.text__hashtags');
const textArea = document.querySelector('.text__description');

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    // eslint-disable-next-line no-use-before-define
    closeUploadPopup();
  }
};

const onPopupEnterKeydown = (evt) => {
  if (isEnterKey(evt)) {
    evt.preventDefault();
    // eslint-disable-next-line no-use-before-define
    closeUploadPopup();
  }
};

// const openUploadPopup = function () {
//   uploadPopup.classList.remove('hidden');
//   document.addEventListener('keydown', onPopupEscKeydown);
// };

const closeUploadPopup = function () {
  uploadPopup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscKeydown);
};

closeButtonUpload.addEventListener('click', () => {
  closeUploadPopup(onPopupEnterKeydown);
  body.classList.remove('modal-open');
});

uploadButton.addEventListener('click', (evt) => {
  uploadPopup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscKeydown);
  body.classList.add('modal-open');
  evt.preventDefault();
});

hashtagText.addEventListener('input', () => {
  const value = hashtagText.value;
  const hashtagsRegExp = /(^#[A-Za-zА-Яа-яЁё0-9]{1,19})$/;
  const hashArr= value.split(' ');
  const filteredArr = [...new Set(hashArr)];


  for (let hashArrI = 0; hashArrI < hashArr.length; hashArrI++) {
    if (hashArr.length > filteredArr.length) {
      hashtagText.setCustomValidity('Один и тот же хэш-тег не может быть использован дважды');
    } else if (hashArr.length > MAX_TAGS) {
      hashtagText.setCustomValidity('Не может быть больше 5 хэштэгов');
    } else if (hashtagsRegExp.test(hashArr[hashArrI]) === false) {
      hashtagText.setCustomValidity('Хэштэг начинается с # и должен содержать не больше 20 символов');
    } else {
      hashtagText.setCustomValidity('');
    }
  }

  hashtagText.reportValidity();

});

textArea.addEventListener('input', () => {
  const valueLength = textArea.value.length;

  if (valueLength > textAreaMaxLength) {
    textArea.setCustomValidity('Введите не больше 140 символов');
  } else {
    textArea.setCustomValidity('');
  }
  textArea.reportValidity();
});
