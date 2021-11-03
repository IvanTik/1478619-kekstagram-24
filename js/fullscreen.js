import {
  getRandomInt,
  isEscapeKey
} from './utils.js';
import {
  getRandomLikes,
  getRandomComments,
  getRandomAvatar,
  getRandomMessage,
  getRandomDescription,
  getRandomName
} from './data.js';

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImgContainer = bigPicture.querySelector('.big-picture__img');
const bigPictureLikes = bigPicture.querySelector('.likes-count');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const bigPictureCommentsCount = socialCommentCount.querySelector('.comments-count');
const socialCommentsList = bigPicture.querySelector('.social__comment');
const commentsItemImg = socialCommentsList.querySelector('.social__picture');
const commentsItemText = socialCommentsList.querySelector('.social__text');
const bigImgDescription = bigPicture.querySelector('.social__caption');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
const commentsList = bigPicture.querySelector('.social__comments');
const showMoreCommentsButton = bigPicture.querySelector('.social__comments-loader');

const clearCommentsList = () => {
  commentsList.innerHTML = '';
};

const createComments = () => {
  const createPictureFragment = document.createDocumentFragment();

  for (let i = 0; i < 5; i++) {
    commentsItemImg.src = `photos/${getRandomInt(1, 25)}.jpg`;
    commentsItemImg.alt = getRandomName();
    commentsItemText.textContent = getRandomMessage();
    bigImgDescription.textContent = getRandomDescription();
    createPictureFragment.appendChild(socialCommentsList.cloneNode(true));
    commentsList.appendChild(createPictureFragment);
  }
};

const showFullScreen = (target) => {
  body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');
  bigPictureImgContainer.replaceChild(target, bigPictureImgContainer.childNodes[1]);
  socialCommentCount.classList.add('hidden');
  bigPictureLikes.textContent = getRandomLikes(15, 200);
  bigPictureCommentsCount.textContent = getRandomComments(1, 500);
  commentsItemImg.src = getRandomAvatar();
  commentsItemText.textContent = getRandomMessage();
  bigImgDescription.textContent = getRandomDescription();
  clearCommentsList();
  createComments();
};

showMoreCommentsButton.addEventListener('click', () => {
  createComments();
});

bigPictureCancel.addEventListener('click', () => {
  body.classList.remove('modal-open');
  bigPicture.classList.add('hidden');
});

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    body.classList.remove('modal-open');
    bigPicture.classList.add('hidden');
  }
});

export {
  showFullScreen
};
