/* eslint-disable no-console */
import {getRandomComment, getRandomPhoto, getRandomPhotos} from './data.js';
import { addPictures } from './render-picture.js';
import {createMiniature} from './gallery.js';
import './form.js';

createMiniature(getRandomPhotos());

addPictures(getRandomPhotos());

console.log(getRandomComment());

console.log(getRandomPhoto());
