/* eslint-disable no-unused-vars */
import {
  isEscapeKey,
  isEnterKey
} from './utils.js';

const MAX_TAGS = 5;
const TEXT_AREA_MAX_LENGTH = 140;
const TEXT_AREA_MIN_LENGTH = 0;

const body = document.querySelector('body');
const form = document.querySelector('#upload-select-image');
const uploadPopup = form.querySelector('.img-upload__overlay');
const closeButtonUpload = uploadPopup.querySelector('#upload-cancel');
const uploadButton = form.querySelector('#upload-file');
const hashtagText = document.querySelector('.text__hashtags');
const textArea = document.querySelector('.text__description');

body.classList.remove('modal-open');

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

const cheсkHashtags = () => {
  let arrayHashtag = hashtagText.value.toLowerCase();
  const usedHashtag = new Set();
  arrayHashtag = arrayHashtag.split(' ');
  const newArrayHashtag = arrayHashtag.filter((element) => element !== '');
  if (newArrayHashtag.length > MAX_TAGS) {
    hashtagText.setCustomValidity('не может быть больше 5 хэштэгов');
  } else {
    hashtagText.setCustomValidity('');
  }
  newArrayHashtag.forEach((value) => {
    if (usedHashtag.has(value)) {
      hashtagText.setCustomValidity('хэш-теги нечувствительны к регистру: #ХэшТег и #хэштег считаются одним и тем же тегом. Oдин и тот же хэш-тег не может быть использован дважды');
    } else {
      usedHashtag.add(value);
    }
  });
  for (let i = 0; i < newArrayHashtag.length; i++) {
    const format = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
    newArrayHashtag[i].split('');
    if (!newArrayHashtag[i].startsWith('#')) {
      hashtagText.setCustomValidity('хэш-тег начинается с символа # (решётка)');
    } else if (newArrayHashtag[i].length > 20) {
      hashtagText.setCustomValidity('максимальная длина одного хэш-тега 20 символов, включая решётку');
    } else if (newArrayHashtag[i].length < 2) {
      hashtagText.setCustomValidity('хеш-тег не может состоять только из одной решётки');
    }
    newArrayHashtag[i] = newArrayHashtag[i].substr(1);
    if (format.test(newArrayHashtag[i])) {
      hashtagText.setCustomValidity('строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.;');
    }
  }
  hashtagText.reportValidity();
};

const cheсkComment = () => {
  const commentLength = textArea.value.length;
  if (commentLength < TEXT_AREA_MIN_LENGTH) {
    textArea.setCustomValidity(`Ещё ${  TEXT_AREA_MIN_LENGTH - commentLength}симв.`);
  } else if (commentLength > TEXT_AREA_MAX_LENGTH) {
    textArea.setCustomValidity(`Удалите лишние ${  commentLength - TEXT_AREA_MAX_LENGTH} симв.`);
  } else {
    textArea.setCustomValidity('');
  }
  textArea.reportValidity();
};

textArea.removeEventListener('input', cheсkComment);

textArea.addEventListener('input', cheсkComment);

hashtagText.removeEventListener('input', cheсkHashtags);

hashtagText.addEventListener('input', cheсkHashtags);
