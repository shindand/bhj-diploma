/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    url: 'http://localhost:8000/',
    data: {
      mail: 'ivan@biz.pro',
      password: 'odinodin'
    },
    method: 'POST',
    callback: ( err, response ) => {
        console.log( err ); // null
        console.log( response ); // ответ
      }
};

