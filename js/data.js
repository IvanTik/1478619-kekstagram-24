import {
  getRandomInt
} from './utils/utils.js';

const descriptions = [
  'Весело',
  'Осень',
  'На учебе',
  'скучно',
  'на отдыхе',
  'Лучшие кадры',
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

const getRandomAvatar = () => getArrayPart(avatars);

const getRandomName = () => getArrayPart(names);

const getRandomIndex = () => getRandomInt(1, 25);

const getRandomDescription = () => getArrayPart(descriptions);

const getRandomLikes = () => getRandomInt(15, 250);

const getRandomComment = () => ({
  id: getRandomIndex(),
  avatar: getRandomAvatar(),
  message: getRandomMessage(),
  name: getRandomName(),
});

const getRandomComments = () => Array.from({
  length: getRandomInt(5, 10),
}, (value, index) => getRandomComment(index));

const getRandomPhoto = (index) => ({
  id: index,
  url: `photos/${(index)}.jpg`,
  description: getRandomDescription(),
  likes: getRandomLikes(),
  comments: getRandomComments(),
});

const getRandomPhotos = () => Array.from({
  length: getRandomInt(5, 20),
}, (value, index) => getRandomPhoto(index + 1));

export {
  getRandomComment,
  getRandomPhoto,
  getRandomPhotos,
  getRandomName,
  getRandomAvatar,
  getRandomMessage
};
