const getRandomInt = (min, max) => {
  const minCeil = Math.ceil(min);
  const maxFloor = Math.floor(max);
  if (minCeil > maxFloor) {
    return null;
  }

  return Math.floor(Math.random() * (maxFloor - minCeil + 1)) + minCeil;
};
getRandomInt(1, 10);

function stringLenght(string, maxlength) {
  return (string.length < maxlength);
}
stringLenght('Hello', 7);

const isEscapeKey = (evt) => evt.key === 'Escape';

const isEnterKey = (evt) => evt.key === 'Enter';

const addBodyModalOpen = () => document.querySelector('body').classList.add('modal-open');

const removeBodyModalOpen = () => document.querySelector('body').classList.remove('modal-open');

export {
  getRandomInt,
  isEscapeKey,
  isEnterKey,
  addBodyModalOpen,
  removeBodyModalOpen
};
