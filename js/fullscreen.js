import {
  isEscapeKey
} from './utils.js';
import {
  getRandomAvatar,
  getRandomMessage,
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
    commentsItemImg.src = getRandomAvatar();
    commentsItemImg.alt = getRandomName();
    commentsItemText.textContent = getRandomMessage();
    // bigImgDescription.textContent = getRandomDescription();
    createPictureFragment.appendChild(socialCommentsList.cloneNode(true));
    commentsList.appendChild(createPictureFragment);
  }
};

const showFullScreen = (target, bigPictures) => {
  body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');
  bigPictureImgContainer.replaceChild(target, bigPictureImgContainer.childNodes[1]);
  socialCommentCount.classList.remove('hidden');
  bigPictureCommentsCount.classList.remove('hidden');
  bigPictureLikes.textContent = bigPictures.likes;
  bigPictureCommentsCount.textContent = bigPictures.comments.length;
  commentsItemImg.src = bigPictures.avatar;
  // commentsItemText.textContent = bigPictures.comments;
  bigImgDescription.textContent = bigPictures.description;
  clearCommentsList();
  createComments();
};

showMoreCommentsButton.addEventListener('click', () => {
  createComments();
});

bigPictureCancel.addEventListener('click', () => {
  body.classList.remove('modal-open');
  bigPicture.classList.add('hidden');
  showMoreCommentsButton.removeEventListener('click', createComments);
});

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    body.classList.remove('modal-open');
    bigPicture.classList.add('hidden');
    showMoreCommentsButton.removeEventListener('click', createComments);
  }
});

export {
  showFullScreen
};
