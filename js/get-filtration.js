import {
  showFullScreen
} from './fullscreen.js';
import {
  addPictures
} from './render-picture.js';
import {
  getRandomPositiveInteger
} from './utils/get-random-positive-integer.js';
import {
  debounce
} from './utils/debounce.js';

const filtersBlock = document.querySelector('.img-filters');
const filtersButtons = filtersBlock.querySelectorAll('.img-filters__button');
const RANDOM_PHOTO_COUNT = 10;
const RERENDER_DELAY = 500;

const removeClass = () => {
  filtersButtons.forEach((button) => {
    button.classList.remove('img-filters__button--active');
  });
};

const removePictures = () => {
  const photos = document.querySelectorAll('.picture');
  photos.forEach((photo) => photo.remove());
};

const renderFilter = (array) => {
  removePictures();
  addPictures(array);
  showFullScreen(array);
};

const createRandomIndex = () => {
  let previousArray = [];
  return function (array) {
    let itemIndex = getRandomPositiveInteger(0, array.length - 1);
    while (previousArray.includes(itemIndex)) {
      itemIndex = getRandomPositiveInteger(0, array.length - 1);
    }
    if (previousArray.length < RANDOM_PHOTO_COUNT) {
      previousArray.push(itemIndex);
    } else {
      previousArray = [];
      previousArray.push(itemIndex);
    }
    return itemIndex;
  };
};
const getRandomIndex = createRandomIndex();


const getFiltration = (pictures) => {
  filtersBlock.classList.remove('img-filters--inactive');
  filtersButtons.forEach((button) => {
    button.addEventListener('click',
      debounce((evt) => {
        removeClass();
        evt.target.classList.add('img-filters__button--active');
        if (evt.target.matches('#filter-default')) {
          const arrayToDefault = Array.from(pictures.slice());
          renderFilter(arrayToDefault);
        } else if (evt.target.matches('#filter-random')) {
          const randomArray = Array.from({
            length: RANDOM_PHOTO_COUNT,
          }, () => pictures[getRandomIndex(pictures)]);
          renderFilter(randomArray);
        } else if (evt.target.matches('#filter-discussed')) {
          const arrayToSort = Array.from(pictures.slice().sort((commentA, commentB) => commentB.comments.length - commentA.comments.length));
          renderFilter(arrayToSort);
        }
      },
      RERENDER_DELAY),
    );
  });
};

export {
  getFiltration
};
