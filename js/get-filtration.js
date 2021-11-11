import {
  renderPicture
} from './render-picture.js';

const filtersBlock = document.querySelector('.img-filters');
const filtersButtons = filtersBlock.querySelectorAll('.img-filters__button');
const filterDefault = filtersBlock.querySelector('#filter-default');
const filterRandom = filtersBlock.querySelector('#filter-random');
const filterDiscussed = filtersBlock.querySelector('#filter-discussed');
const RANDOM_PHOTO_COUNT = 10;

const removeClass = () => {
  filtersButtons.forEach((button) => {
    button.classList.remove('img-filters__button--active');
  });
};


const getFiltration = (pictures) => {
  filtersBlock.classList.remove('img-filters--inactive');
  filtersButtons.forEach((button) => {
    button.addEventListener('click', (evt) => {
      removeClass();
      evt.target.classList.add('img-filters__button--active');
      if (evt.target === filterDefault) {
        renderPicture(pictures);
      } else if (evt.target === filterRandom) {
        renderPicture(pictures.slice(0, RANDOM_PHOTO_COUNT));
      } else if (evt.target === filterDiscussed) {
        const arrayToSort = pictures;
        renderPicture(arrayToSort.sort((commentA, commentB) => commentB.comments.length - commentA.comments.length));
      }
    });
  });
};

export {
  getFiltration
};
