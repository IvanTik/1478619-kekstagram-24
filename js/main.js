/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

const getRandomInt = (min, max) => {
  const minCeil = Math.ceil(min);
  const maxFloor = Math.floor(max);
  if (minCeil > maxFloor) {
    return null;
  }

  return Math.floor(Math.random() * (maxFloor - minCeil + 1)) + minCeil;
};
getRandomInt(1, 10);

// console.log(getRandomInt(1, 10));

function stringLenght(string, maxlength) {
  return (string.length < maxlength);
}
stringLenght('Hello', 7);

// console.log(stringLenght('Hello', 7));

const description = [
  'Весело',
  'Осень',
  'На учебе',
  'скучно',
];

const names = [
  'Иван',
  'Марк',
  'Евгений',
  'Мария',
  'Ангелина',
  'Илья',
  'Вера',
];

const avatars = [
  'img/avatar-1.svg',
  'img/avatar-2.svg',
  'img/avatar-3.svg',
  'img/avatar-4.svg',
  'img/avatar-5.svg',
  'img/avatar-6.svg',
];

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const getArrayPart = (array) => array[getRandomInt(0, array.length - 1)];

const getRandomMessage = () => getArrayPart(messages);

const getRandomName = () => getArrayPart(names);

const getRandomIndex = () => getRandomInt(1, 25);

const getRandomComment = () => ({
  id: getRandomIndex(),
  avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
  message: getRandomMessage(),
  name: getRandomName(),
});

console.log(getRandomComment());

const getRandomComments = () => Array.from({length: getRandomInt(1, 3)}, (value, index) => getRandomComment(index));

const getRandomLikes = () => getRandomInt(15, 250);

const getRandomDescription = () => getArrayPart(description);

const getRandomPhoto = () => ({
  id: getRandomIndex(), // случайное число от 1-25 (index)
  url: `photos/${getRandomInt(1, 25)}.jpg`,
  description: getRandomDescription(),
  likes: getRandomLikes(),
  comments: getRandomComments(),
});

console.log(getRandomPhoto());
