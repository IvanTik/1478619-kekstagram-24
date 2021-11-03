/* eslint-disable no-console */
import {getRandomPhotos} from './data.js';
import { addPictures } from './render-picture.js';
import './form.js';

addPictures(getRandomPhotos());
