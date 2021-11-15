const SERVER_URL = 'https://24.javascript.pages.academy/kekstagram/data';

const getData = (onSuccess, getFilters, onError) => {
  fetch(SERVER_URL)
    .then((response) => {
      if (response.ok) {
        return response;
      } else {
        new Error(`${response.status} ${response.statusText}`);
      }
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

const sendData = (onSuccess, messageOnSuccess, messageOnFail, removeMessage, body) => {
  fetch(
    'https://24.javascript.pages.academy/kekstagram', {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
        messageOnSuccess();
      } else {
        messageOnFail();
      }
    })
    .catch(() => {
      messageOnFail();
    })
    .finally(() => removeMessage());
};

export {
  getData,
  sendData
};
