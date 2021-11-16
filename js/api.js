const SERVER_URL = 'https://24.javascript.pages.academy/kekstagram';
const SERVER_URL_DATA = 'https://24.javascript.pages.academy/kekstagram/data';

const getData = (onSuccess, getFilters, onError) => {
  fetch(SERVER_URL_DATA)
    .then((response) => {
      if (response.ok) {
        return response;
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((response) => response.json())
    .then((pictures) => {
      onSuccess(pictures);
      getFilters(pictures);
    })
    .catch((err) => {
      onError(err);
    });
};

const sendData = (onSuccess, onError, body) => {
  fetch(
    SERVER_URL, {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onError();
      }
    })
    .catch(() => {
      onError();
    })
    .finally(() => onError());
};

export {
  getData,
  sendData
};
