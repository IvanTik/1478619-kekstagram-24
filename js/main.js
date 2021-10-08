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

const id = [getRandomInt(1, 25)];

const description = [
  'Весело',
  'Осень',
  'На учебе',
  'скучно',
];

const likes = (getRandomInt(15, 200));

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

const createPhoto = () => ({
  id: (getRandomInt(1, 250)),
  avatar: avatars[_.random(0, avatars.length - 1)],
  message: messages[_.random(0, messages.length - 1)],
  name: names[_.random(0, names.length - 1)],
});


// const photos = [];
// for (let i = 0; i < amount; i++) {
//   photos.push(createPhoto(i));
// }


console.log(createPhoto());
