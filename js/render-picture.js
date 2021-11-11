import {
  showFullScreen
} from './fullscreen.js';

const fragment = document.createDocumentFragment();

const similarPicture = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const pictureList = document.querySelector('.pictures');

const renderPicture = function (picture) {
  const pictureItem = similarPicture.cloneNode(true);

  pictureItem.querySelector('.picture__img').id = picture.id;
  pictureItem.querySelector('.picture__img').alt = picture.description;
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

  const pictures = pictureList.querySelectorAll('.picture__img');
  for (let i = 0; i < pictures.length; i++) {
    pictures[i].addEventListener('click', (evt) => {
      const clone = evt.target.cloneNode();
      showFullScreen(clone, picturesArr[i]);
    });
  }
};

export {
  addPictures,
  renderPicture
};
