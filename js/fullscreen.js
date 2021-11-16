import {
  isEscapeKey
} from './utils/utils.js';

const MIRROR_COMMENTS = 5;
const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImgContainer = bigPicture.querySelector('.big-picture__img');
const bigPictureLikes = bigPicture.querySelector('.likes-count');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const currentPictureComments = bigPicture.querySelector('.current-comments-count');
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

let sliceCommentsArray;

const createComments = (comments) => {
  const createPictureFragment = document.createDocumentFragment();
  const newCommentsArray = comments.slice();

  const splicedCommentsArray = newCommentsArray.splice(0, MIRROR_COMMENTS);
  splicedCommentsArray.forEach((element) => {
    commentsItemImg.src = element.avatar;
    commentsItemImg.alt = element.name;
    commentsItemText.textContent = element.message;
    createPictureFragment.appendChild(socialCommentsList.cloneNode(true));
    commentsList.appendChild(createPictureFragment);
  });

  sliceCommentsArray = newCommentsArray;

  currentPictureComments.textContent = commentsList.childNodes.length;

  if (sliceCommentsArray.length === 0) {
    showMoreCommentsButton.classList.add('hidden');
  }

};

const showFullScreen = (target, bigPictures) => {
  showMoreCommentsButton.classList.remove('hidden');
  body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');
  bigPictureImgContainer.replaceChild(target, bigPictureImgContainer.childNodes[1]);
  bigPictureLikes.textContent = bigPictures.likes;
  bigPictureCommentsCount.textContent = bigPictures.comments.length;
  commentsItemImg.src = bigPictures.avatar;
  bigImgDescription.textContent = bigPictures.description;
  clearCommentsList();

  createComments(bigPictures.comments);
};

showMoreCommentsButton.addEventListener('click', () => {
  createComments(sliceCommentsArray);
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
