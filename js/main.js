/* eslint-disable no-console */
import {getRandomComment, getRandomPhoto, getRandomPhotos} from './data.js';
import { addPictures } from './render-picture.js';
import {openUploadPopup} from './form.js';

openUploadPopup();

addPictures(getRandomPhotos());

console.log(getRandomComment());

console.log(getRandomPhoto());
