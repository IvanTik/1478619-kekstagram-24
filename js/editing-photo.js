const MAX_VALUE = 100;
const STEP = 25;
const MIN_VALUE = 25;
const FILTERS_CONFIG = {
  chrome: {
    options: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    },
    style: 'grayscale',
    unit: '',
  },

  sepia: {
    options: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    },
    style: 'sepia',
    unit: '',
  },

  marvin: {
    options: {
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    },
    style: 'invert',
    unit: '%',
  },

  phobos: {
    options: {
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    },
    style: 'blur',
    unit: 'px',
  },

  heat: {
    options: {
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
    },
    style: 'brightness',
    unit: '',
  },
};

const form = document.querySelector('.img-upload__form');
const scaleControlValue = form.querySelector('.scale__control--value');
const previewImg = form.querySelector('.img-upload__preview img');
const buttonPlus = form.querySelector('.scale__control--bigger');
const buttonMinus = form.querySelector('.scale__control--smaller');
const pictureUploadForm = document.querySelector('.img-upload__form');
const bigPictureImage = pictureUploadForm.querySelector('.img-upload__preview img');
const sliderElementBlock = pictureUploadForm.querySelector('.effect-level');
const sliderElement = pictureUploadForm.querySelector('.effect-level__slider');
const valueElement = pictureUploadForm.querySelector('.effect-level__value');

let value = scaleControlValue.value;
const onBiggerControlClick = () => {
  if (parseInt(value, 10) !== MAX_VALUE) {
    value = `${parseInt(value, 10) + STEP}%`;
    previewImg.style.transform = `scale(${parseInt(value, 10) / MAX_VALUE})`;
    scaleControlValue.value = value;
  }
};

function onSmallerControlClick() {
  if (parseInt(value, 10) !== MIN_VALUE) {
    value = `${parseInt(value, 10) - STEP}%`;
    previewImg.style.transform = `scale(${parseInt(value, 10) / MAX_VALUE})`;
    scaleControlValue.value = value;
  }
}

const scale = () => {
  buttonPlus.addEventListener('click', onBiggerControlClick);
  buttonMinus.addEventListener('click', onSmallerControlClick);
};

const cancelScale = () => {
  buttonPlus.removeEventListener('click', onBiggerControlClick);
  buttonMinus.removeEventListener('click', onSmallerControlClick);
  previewImg.style.transform = 'scale(1)';
  value = `${MAX_VALUE}%`;
};

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
  format: {
    to: function (slide) {
      if (Number.isInteger(slide)) {
        return slide.toFixed(0);
      }
      return slide.toFixed(1);
    },
    from: function (slide) {
      return parseFloat(slide);
    },
  },
});

const toApplyFilter = (filter) => {
  sliderElementBlock.classList.remove('hidden');
  sliderElement.noUiSlider.updateOptions(filter.options);
  sliderElement.noUiSlider.on('update', (values, handle) => {
    bigPictureImage.style.filter = `${filter.style}(${values[handle]}${filter.unit})`;
    valueElement.value = values[handle];
  });
};

const toUnsetEffect = () => {
  bigPictureImage.className = '';
  bigPictureImage.style.filter = 'none';
  valueElement.value = 'none';
  bigPictureImage.classList.add('effects__preview--none');
  sliderElementBlock.classList.add('hidden');
};

const onFiltersChange = (evt) => {
  if (evt.target.matches('input[type="radio"]')) {
    bigPictureImage.className = '';
    bigPictureImage.classList.add(`effects__preview--${evt.target.value}`);
    if (evt.target.value === 'none') {
      sliderElementBlock.classList.add('hidden');
      bigPictureImage.style.filter = 'none';
      valueElement.value = 'none';
    } else if (evt) {
      toApplyFilter(FILTERS_CONFIG[evt.target.value]);
    }
  }
};

export {
  scale,
  cancelScale,
  onFiltersChange,
  toUnsetEffect
};
