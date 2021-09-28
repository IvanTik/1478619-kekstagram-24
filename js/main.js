/* eslint-disable no-console */

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min > max) {
    return null;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};
getRandomInt(1, 10);

console.log(getRandomInt(1, 10));

function stringLenght(string, maxlength) {
  return (string.length < maxlength);
}
stringLenght('Hello', 7);

console.log(stringLenght('Hello', 7));
