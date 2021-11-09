import { showAlert, formSuccess, formError } from './utils.js';

const getData = async () => {
  try {
    const response = await fetch('https://24.javascript.pages.academy/kekstagram/data');
    const data = await response.json();

    return data;
  } catch (error) {
    showAlert('Не удалось получить изображения. Обновите страницу');
  }

};

const sendData = (onSuccess, onFail, body) =>{
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
        formSuccess();
      } else {
        onFail('Не удалось отправить форму. Попробуйте ещё раз');
        formError();
      }
    })
    .catch(() => {
      onFail('Не удалось отправить форму. Попробуйте ещё раз');
    });
};

export {getData, sendData};
