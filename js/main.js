// import {
//   getRandomPhotos
// } from './data.js';
import {
  addPictures
} from './render-picture.js';
import {setUserFormSubmit, closeModal} from './form.js';
import {getData} from './api.js';
import {getFiltration} from './get-filtration.js';
// import {showAlert} from './info-messages.js';
// import {showFullScreen} from './fullscreen.js';

getData(addPictures, getFiltration);

setUserFormSubmit(closeModal);
