import { getRandomInt } from './utils.js';

const COMMENT_DESCRIPTIONS = [
  'Весело',
  'Осень',
  'На учебе',
  'скучно',
];

const COMMENT_AUTHORS = [
  'Иван',
  'Марк',
  'Евгений',
  'Мария',
  'Ангелина',
  'Илья',
  'Вера',
];

const COMMENT_AVATARS = [
  'img/avatar-1.svg',
  'img/avatar-2.svg',
  'img/avatar-3.svg',
  'img/avatar-4.svg',
  'img/avatar-5.svg',
  'img/avatar-6.svg',
];

const COMMENT_SUGGESTIONS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const getArrayPart = (array) => array[getRandomInt(0, array.length - 1)];

const getRandomMessage = () => getArrayPart(COMMENT_SUGGESTIONS);

const getRandomAvatar = () => getArrayPart(COMMENT_AVATARS);

const getRandomName = () => getArrayPart(COMMENT_AUTHORS);

const getRandomIndex = () => getRandomInt(1, 25);

const getRandomDescription = () => getArrayPart(COMMENT_DESCRIPTIONS);

const getRandomLikes = () => getRandomInt(15, 250);


const getRandomComment = () => ({
  id: getRandomIndex(),
  avatar: getRandomAvatar(),
  message: getRandomMessage(),
  name: getRandomName(),
});

const getRandomComments = () => Array.from({length: getRandomInt(1, 3)}, (value, index) => getRandomComment(index));

const getRandomPhoto = () => ({
  id: getRandomIndex(),
  url: `photos/${getRandomInt(1, 25)}.jpg`,
  description: getRandomDescription(),
  likes: getRandomLikes(),
  comments: getRandomComments(),
});

const getRandomPhotos = () => Array.from({length: getRandomInt(5, 20)}, (value, index) => getRandomPhoto(index));

export {getRandomComment, getRandomPhoto, getRandomPhotos};
