const getData = (onSuccess, getFilters, onClick, onError) => {
  fetch('https://24.javascript.pages.academy/kekstagram/data')
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
      onClick(pictures);
    })
    .catch((err) => {
      onError(err);
    });
};

const sendData = (onSuccess, messageOnSuccess, messageOnFail, body) => {
  fetch(
    'https://24.javascript.pages.academy/kekstagram',
    {
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
    });
};

export {getData, sendData};
