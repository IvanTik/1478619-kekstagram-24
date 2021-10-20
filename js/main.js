/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import {getRandomComment, getRandomPhoto, getRandomPhotos} from './data.js';
import { addPictures } from './render-picture.js';

addPictures(getRandomPhotos());

console.log(getRandomComment());

console.log(getRandomPhoto());
