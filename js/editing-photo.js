import '../nouislider/nouislider.js';

const formImage = document.querySelector('.img-upload__form');
const scaleImage = document.querySelector('.img-upload__scale');
const sizeImg = formImage.querySelector('img');
let scaleSize = scaleImage.querySelector('.scale__control--value').value;
const littleButton = scaleImage.querySelector('.scale__control--smaller');
const bigButton = scaleImage.querySelector('.scale__control--bigger');
const sliderElement = document.querySelector('.img-upload__effect-level');
// const sliderElement = document.querySelector('.effect-level__slider');
const effectsList = document.querySelector('.effects__list');
const imgUpload = scaleImage.querySelector('.scale');
const sliderElementValue = document.querySelector('.effect-level__value');
const effectNone = document.querySelector('#effect-none');
const effectChrome = document.querySelector('#effect-chrome');
const effectSepia = document.querySelector('#effect-sepia');
const effectMarvin = document.querySelector('#effect-marvin');
const effectPhobos = document.querySelector('#effect-phobos');
const effectHeat = document.querySelector('#effect-heat');

const updateSize = (size) => {
  scaleSize = parseFloat(scaleSize);
  scaleSize += size;
  scaleImage.querySelector('.scale__control--value').value = `${scaleSize}%`;
  sizeImg.style.transform = `scale(${scaleSize/100})`;
};
const reduceSize = () => {
  if (scaleSize !== 25) {
    updateSize(-25);
  }
};
const increaseSize = () => {
  if (scaleSize < 100) {
    updateSize(25);
  }
};

littleButton.removeEventListener('click', reduceSize);

bigButton.removeEventListener('click', increaseSize);

littleButton.addEventListener('click', reduceSize);

bigButton.addEventListener('click', increaseSize);

document.querySelector('.img-filters').classList.remove('img-filters--inactive');

// fieldsetForRange.classList.add('hidden');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 0,
  step: 1,
  connect: 'lower',
});


sliderElement.noUiSlider.on('update', (__, handle, unencoded) => {
  sliderElementValue.value = unencoded[handle];
  sliderElementValue.setAttribute('value', unencoded);
  if (effectNone.checked) {
    // sliderElement.classList.add('hidden');
  }
  if (effectChrome.checked) {
    sliderElement.classList.remove('hidden');
    imgUpload.style.filter = `grayscale(${sliderElementValue.value})`;
  }
  if (effectSepia.checked) {
    sliderElement.classList.remove('hidden');
    imgUpload.style.filter = `sepia(${sliderElementValue.value})`;
  }
  if (effectMarvin.checked) {
    sliderElement.classList.remove('hidden');
    imgUpload.style.filter = `invert(${sliderElementValue.value / 100})`;
  }
  if (effectPhobos.checked) {
    sliderElement.classList.remove('hidden');
    imgUpload.style.filter = `blur(${sliderElementValue.value}px)`;
  }
  if (effectHeat.checked) {
    sliderElement.classList.remove('hidden');
    imgUpload.style.filter = `brightness(${sliderElementValue.value})`;
  }
});


effectsList.addEventListener('click', (event) => {
  if (event.target.classList.contains('effect-none')) {
    sliderElement.classList.add('hidden');
    imgUpload.className = '';
    imgUpload.style.filter = '';
  }
  if (event.target.classList.contains('effect-chrome')) {
    imgUpload.className = '';
    imgUpload.classList.add('effects__preview--chrome');
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 0.5,
      step: 0.1,
    });
  }

  if (event.target.classList.contains('effect-sepia')) {
    imgUpload.className = '';
    imgUpload.classList.add('effects__preview--sepia');
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 0.5,
      step: 0.1,
    });
  }

  if (event.target.classList.contains('effect-marvin')) {
    imgUpload.className = '';
    imgUpload.classList.add('effects__preview--marvin');

    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      start: 60,
      step: 1,
    });
  }

  if (event.target.classList.contains('effect-phobos')) {
    imgUpload.className = '';
    imgUpload.classList.add('effects__preview--phobos');

    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      start: 1.5,
      step: 0.1,
    });
  }

  if (event.target.classList.contains('effect-heat')) {
    imgUpload.className = '';
    imgUpload.classList.add('effects__preview--heat');
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 1,
        max: 3,
      },
      start: 2,
      step: 0.1,
    });
  }
});
