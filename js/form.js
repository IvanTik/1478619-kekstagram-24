import {
  isEscapeKey
} from './utils/utils.js';
import {
  undoDefaultAction
} from './utils/undo-default-action.js';
import {
  scale,
  cancelScale,
  onFiltersChange,
  toUnsetEffect
} from './editing-photo.js';
import {
  showErrorMessage,
  showSuccessMessage,
  showLoadingProcessMessage,
  removeLoadingProcessMessage
} from './info-messages.js';
import {
  sendData
} from './api.js';

const MAX_TAGS = 5;
const MIN_TAGS = 2;
const MAX_SYMBOLS = 20;
const TEXT_AREA_MAX_LENGTH = 140;
const TEXT_AREA_MIN_LENGTH = 0;

const body = document.querySelector('body');
const pictureUploadForm = body.querySelector('.img-upload__form');
const effectsList = pictureUploadForm.querySelector('.effects__list');
const uploadUserPictureInput = pictureUploadForm.querySelector('.img-upload__input');
const pictureEditModal = pictureUploadForm.querySelector('.img-upload__overlay');
const pictureEditFormCancel = pictureEditModal.querySelector('.img-upload__cancel');
const commentField = document.querySelector('.text__description');
const hashtagText = document.querySelector('.text__hashtags');

body.classList.remove('modal-open');

const onCheсkHashtags = () => {
  let neededHashtag = hashtagText.value.toLowerCase();
  const usedHashtag = new Set();
  neededHashtag = neededHashtag.split(' ');
  const newArrayHashtag = neededHashtag.filter((element) => element !== '');
  if (newArrayHashtag.length > MAX_TAGS) {
    hashtagText.style.outline = '1px solid red';
    hashtagText.setCustomValidity(`не может быть больше ${MAX_TAGS} хэштэгов`);
  } else {
    hashtagText.setCustomValidity('');
    hashtagText.style.removeProperty('outline');
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
    } else if (newArrayHashtag[i].length > MAX_SYMBOLS) {
      hashtagText.setCustomValidity(`максимальная длина одного хэш-тега ${MAX_SYMBOLS} символов, включая решётку`);
    } else if (newArrayHashtag[i].length < MIN_TAGS) {
      hashtagText.setCustomValidity('хеш-тег не может состоять только из одной решётки');
    }
    newArrayHashtag[i] = newArrayHashtag[i].substr(1);
    if (format.test(newArrayHashtag[i])) {
      hashtagText.setCustomValidity('строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.;');
    }
    if (!hashtagText.checkValidity()) {
      hashtagText.style.outline = '1px solid red';
    } else {
      hashtagText.style.outline = '';
      hashtagText.style.removeProperty('outline');
    }
  }
  hashtagText.reportValidity();
};

const onModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
};


function closeModal() {
  pictureEditModal.classList.add('hidden');
  body.classList.remove('modal-open');
  pictureUploadForm.reset();
  cancelScale();
  hashtagText.removeEventListener('input', onCheсkHashtags);
  effectsList.removeEventListener('change', onFiltersChange);
  commentField.removeEventListener('keydown', undoDefaultAction);
  hashtagText.removeEventListener('keydown', undoDefaultAction);
  document.removeEventListener('keydown', onModalEscKeydown);
  hashtagText.setCustomValidity('');
  commentField.setCustomValidity('');
  hashtagText.style.removeProperty('outline');
  commentField.style.removeProperty('outline');
}

function openModal() {
  pictureEditModal.classList.remove('hidden');
  body.classList.add('modal-open');
  toUnsetEffect();
  scale();
  effectsList.addEventListener('change', onFiltersChange);
  hashtagText.addEventListener('input', onCheсkHashtags);
  commentField.addEventListener('keydown', undoDefaultAction);
  hashtagText.addEventListener('keydown', undoDefaultAction);
  document.addEventListener('keydown', onModalEscKeydown);
}

pictureEditFormCancel.addEventListener('click', () => {
  closeModal();
});

uploadUserPictureInput.addEventListener('change', () => {
  openModal();
});

const submitOnSuccess = () =>{
  showSuccessMessage(),
  removeLoadingProcessMessage(),
  closeModal();
};

const submitOnError = () =>{
  showErrorMessage;
};

const setUserFormSubmit = () => {
  pictureUploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    showLoadingProcessMessage();
    sendData(
      submitOnSuccess,
      submitOnError,
      new FormData(evt.target),
    );
  });
};

const onCheсkComment = () => {
  const commentLength = commentField.value.length;
  if (commentLength < TEXT_AREA_MIN_LENGTH) {
    commentField.setCustomValidity(`Ещё ${TEXT_AREA_MIN_LENGTH - commentLength}симв.`);
  } else if (commentLength > TEXT_AREA_MAX_LENGTH) {
    commentField.setCustomValidity(`Удалите лишние ${commentLength - TEXT_AREA_MAX_LENGTH} симв.`);
    commentField.style.outline = '1px solid red';
  } else {
    commentField.setCustomValidity('');
    commentField.style.removeProperty('outline');
  }
  commentField.reportValidity();
};

commentField.removeEventListener('input', onCheсkComment);

commentField.addEventListener('input', onCheсkComment);

export {
  setUserFormSubmit,
  openModal,
  closeModal
};
