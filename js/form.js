/* eslint-disable no-unused-vars */
import { isEscapeKey, isEnterKey} from './utils.js';

const MAX_CHARACTERS = 20;
const MAX_TAGS = 5;
const form = document.querySelector('#upload-select-image');
const uploadPopup = form.querySelector('.img-upload__overlay');
const closeButtonUpload = uploadPopup.querySelector('#upload-cancel');
const imagePreview = uploadPopup.querySelector('.img-upload__preview-photo');

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

const openUploadPopup = function () {
  uploadPopup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscKeydown);
};

const closeUploadPopup = function () {
  uploadPopup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscKeydown);
};

closeButtonUpload.addEventListener('click', () => {
  closeUploadPopup(onPopupEnterKeydown);
});

//Для будущих #
const showTagError = function (hashTags) {
  for (let i = 0; i < hashTags.length; i++){
    if (hashTags[i].indexOf('#') !== 0) {
      return 'Начните ваш хэштег с символа "#"';
    } else if (hashTags[i].length === 1) {
      return 'Ваш хэштег не может состоять только из одной решетки';
    } else if (hashTags[i].length > MAX_CHARACTERS) {
      return `Ваш хэштег превышает максимальную длинну на ${  hashTags[i].length - MAX_CHARACTERS  } символов`;
    } else if (hashTags.length > MAX_TAGS) {
      return 'Нельзя указывать больше пяти хэштегов';
    } else if (hashTags[i].indexOf('#', 1) > 0) {
      return 'Хэштеги должны разделяться пробелом';
    } else if (hashTags.indexOf(hashTags[i], i + 1) > 0) {
      return 'Хэштеги не должны повторяться';
    }
  }
  return '';
};

export {openUploadPopup};
