import {
  getRandomPhotos
} from './data.js';
import {
  addPictures
} from './render-picture.js';
import './form.js';
import './editing-photo.js';

addPictures(getRandomPhotos());
