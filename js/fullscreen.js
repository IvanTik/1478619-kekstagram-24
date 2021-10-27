import { maxNumOfHashtags, addBodyModalOpen, isEscapeKey } from './utils.js';

const commentFragmentSize = 5;
const fullImgSize = 35;
const fullScreenImgSize = 35;

const showFullScreen = (photo) => {
  const bigPicture = document.querySelector('.big-picture');
  const socialCommentCount = document.querySelector('.social__comment-count');
  const commentsLoader = document.querySelector('.comments-loader');
  const arrayOfCommentArrays = [];

  bigPicture.classList.remove('hidden');
  addBodyModalOpen();
  socialCommentCount.classList.remove('hidden');
  if (photo.comments.length > maxNumOfHashtags) {
    commentsLoader.classList.remove('hidden');
  }

  const bigImgSource = bigPicture.querySelector('.big-picture__img img');
  bigImgSource.src = photo.url;
  const bigImgLikes = bigPicture.querySelector('.likes-count');
  bigImgLikes.textContent = photo.likes;
  const bigImgComm = bigPicture.querySelector('.comments-count');
  bigImgComm.textContent = photo.comments;
  const bigImgDescription = bigPicture.querySelector('.social__caption');
  bigImgDescription.textContent = photo.description;
  const socialCommentsList = bigPicture.querySelector('.social__comments');

  for (let com = 0; com < commentFragmentSize; com++) {
    const socialComment = document.createElement('li');
    socialComment.classList.add('social__comment');
    const socialCommentImg = document.createElement('img');
    socialCommentImg.classList.add('social__picture');
    socialCommentImg.src = photo.comments[com].avatar;
    socialCommentImg.alt = photo.comments[com].name;
    socialCommentImg.width = fullImgSize;
    socialCommentImg.height = fullImgSize;
    socialComment.appendChild(socialCommentImg);
    const socialCommentText = document.createElement('p');
    socialCommentText.classList.add('social__text');
    socialCommentText.textContent = photo.comments[com].message;
    socialComment.appendChild(socialCommentText);
    socialCommentsList.appendChild(socialComment);
  }

  let commentsDistributed = 0;
  for (let fragment = 0; fragment < Math.ceil(photo.comments.length/commentFragmentSize); fragment++) {
    const commentFragment = [];
    if ((commentFragmentSize + commentsDistributed) > photo.comments.length) {
      for (let comment = commentsDistributed; comment < photo.comments.length; comment++) {
        commentFragment.push(photo.comments[comment]);
      }
      arrayOfCommentArrays.push(commentFragment);
    }
    else {
      for (let comment = commentsDistributed; comment < (commentFragmentSize + commentsDistributed); comment++) {
        commentFragment.push(photo.comments[comment]);
      }
      arrayOfCommentArrays.push(commentFragment);
    }
    commentsDistributed += commentFragmentSize;
  }

  let fragmentsUsed= 1;
  commentsLoader.addEventListener('click', () => {
    const currentFragment = arrayOfCommentArrays[fragmentsUsed];
    for (let com = 0; com < currentFragment.length; com++) {
      const socialComment = document.createElement('li');
      socialComment.classList.add('social__comment');
      const socialCommentImg = document.createElement('img');
      socialCommentImg.classList.add('social__picture');
      socialCommentImg.src = currentFragment[com].avatar;
      socialCommentImg.alt = currentFragment[com].name;
      socialCommentImg.width = fullScreenImgSize;
      socialCommentImg.height = fullScreenImgSize;
      socialComment.appendChild(socialCommentImg);
      const socialCommentText = document.createElement('p');
      socialCommentText.classList.add('social__text');
      socialCommentText.textContent = currentFragment[com].message;
      socialComment.appendChild(socialCommentText);
      socialCommentsList.appendChild(socialComment);
    }
    fragmentsUsed++;
    socialCommentCount.textContent = `${fragmentsUsed * commentFragmentSize} из `;
  });

  const makesHidden = (element) => element.classList.add('hidden');
  const closeModalElement = document.querySelector('#picture-cancel');
  closeModalElement.addEventListener('click', () => {
    makesHidden(bigPicture);
  });

  document.addEventListener('keydown', (evt) => {
    evt.preventDefault();
    if (isEscapeKey(evt)) {
      makesHidden(bigPicture);
    }
  });
};

export {showFullScreen};
