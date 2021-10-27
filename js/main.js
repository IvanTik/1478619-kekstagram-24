/* eslint-disable no-console */
import {getRandomComment, getRandomPhoto, getRandomPhotos} from './data.js';
import { addPictures } from './render-picture.js';
import {uploadButton} from './form.js';
import {createMiniature} from './gallery.js';

uploadButton;

createMiniature(getRandomPhotos());

addPictures(getRandomPhotos());

console.log(getRandomComment());

console.log(getRandomPhoto());
