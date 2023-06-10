/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
 let xhr = new XMLHttpRequest();
 xhr.responseType = "json";
 let url = new URL('http://localhost:8000/');
 let formData = new FormData();
