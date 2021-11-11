import {
  isEscapeKey
} from './utils.js';

const undoDefaultAction = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    evt.stopPropagation();
  }
};

export {
  undoDefaultAction
};
