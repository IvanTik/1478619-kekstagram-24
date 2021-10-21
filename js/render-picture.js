// eslint-disable-next-line no-unused-vars
import {getRandomPhotos} from './data.js';

const fragment = document.createDocumentFragment();

const similarPicture = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const pictureList = document.querySelector('.pictures');

const renderPicture = function (picture) {
  const pictureItem = similarPicture.cloneNode(true);

  pictureItem.querySelector('.picture__img').src = picture.url;
  pictureItem.querySelector('.picture__likes').textContent = picture.likes;
  pictureItem.querySelector('.picture__comments').textContent = picture.comments.length;

  return pictureItem;
};

const addPictures = function (picturesArr) {
  for (let i = 0; i < picturesArr.length; i++) {
    fragment.appendChild(renderPicture(picturesArr[i], i));
  }

  pictureList.appendChild(fragment);
};

addPictures(getRandomPhotos());

export {addPictures};