import {
  addPictures
} from './render-picture.js';
import {
  getRandomPositiveInteger
} from './utils/get-random-positive-integer.js';
import {
  debounce
} from './utils/debounce.js';

const RANDOM_PHOTO_COUNT = 10;
const RERENDER_DELAY = 500;

const filtersBlock = document.querySelector('.img-filters');
const filtersButtons = filtersBlock.querySelectorAll('.img-filters__button');

const createRandomIndex = (pictures) => {
  let previousPictures = [];
  while (previousPictures.includes()) {
    getRandomPositiveInteger(0, pictures.length - 1);
  }
  if (previousPictures.length < RANDOM_PHOTO_COUNT) {
    previousPictures.push(getRandomPositiveInteger(0, pictures.length - 1));
  } else {
    previousPictures = [];
    previousPictures.push(getRandomPositiveInteger(0, pictures.length - 1));
  }
  return getRandomPositiveInteger(0, pictures.length - 1);
};

const getDefaultPictures = (pictures) => pictures.slice();

const getRandomPictures = (pictures) => Array.from({
  length: RANDOM_PHOTO_COUNT,
}, () => pictures[createRandomIndex(pictures)]);

const getSortedPictures = (pictures) => pictures.slice().sort((commentA, commentB) => commentB.comments.length - commentA.comments.length);

const removeClass = () => {
  filtersButtons.forEach((button) => {
    button.classList.remove('img-filters__button--active');
  });
};

const getPhotos = () => document.querySelectorAll('.picture');

const removePictures = () => {
  getPhotos().forEach((photo) => photo.remove());
};

const renderFilter = (pictures) => {
  removePictures();
  addPictures(pictures);
};

const getFiltration = (pictures) => {
  filtersBlock.classList.remove('img-filters--inactive');
  filtersButtons.forEach((button) => {
    button.addEventListener('click',
      debounce((evt) => {
        removeClass();
        evt.target.classList.add('img-filters__button--active');
        if (evt.target.matches('#filter-default')) {
          renderFilter(getDefaultPictures(pictures));
        } else if (evt.target.matches('#filter-random')) {
          renderFilter(getRandomPictures(pictures));
        } else if (evt.target.matches('#filter-discussed')) {
          renderFilter(getSortedPictures(pictures));
        }
      },
      RERENDER_DELAY),
    );
  });
};

export {
  getFiltration
};
