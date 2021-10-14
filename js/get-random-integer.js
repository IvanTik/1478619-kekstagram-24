const getRandomInt = (min, max) => {
  const minCeil = Math.ceil(min);
  const maxFloor = Math.floor(max);
  if (minCeil > maxFloor) {
    return null;
  }

  return Math.floor(Math.random() * (maxFloor - minCeil + 1)) + minCeil;
};
getRandomInt(1, 10);

export {getRandomInt};
