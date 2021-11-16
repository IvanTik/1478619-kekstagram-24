import {
  addPictures
} from './render-picture.js';
import {
  setUserFormSubmit,
  closeModal
} from './form.js';
import {
  getData
} from './api.js';
import {
  getFiltration
} from './get-filtration.js';
import {
  showUnloadMessage
} from './info-messages.js';

getData(addPictures, getFiltration, showUnloadMessage);

setUserFormSubmit(closeModal);
