const formImage = document.querySelector('.img-upload__form');
const scaleImage = document.querySelector('.img-upload__scale');
const sizeImg = formImage.querySelector('img');
let scaleSize = scaleImage.querySelector('.scale__control--value').value;
const littleButton = scaleImage.querySelector('.scale__control--smaller');
const bigButton = scaleImage.querySelector('.scale__control--bigger');

const updateSize = (size) => {
  scaleSize = parseFloat(scaleSize);
  scaleSize += size;
  scaleImage.querySelector('.scale__control--value').value = `${scaleSize}%`;
  sizeImg.style.transform = `scale(${scaleSize/100})`;
};
const reduceSize = () => {
  if (scaleSize !== 25) {
    updateSize(-25);
  }
};
const increaseSize = () => {
  if (scaleSize < 100) {
    updateSize(25);
  }
};

littleButton.removeEventListener('click', reduceSize);

bigButton.removeEventListener('click', increaseSize);

littleButton.addEventListener('click', reduceSize);

bigButton.addEventListener('click', increaseSize);
