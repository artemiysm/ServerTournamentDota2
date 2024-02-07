const express = require('express');
const app = express();
const port = 4000;

// Обработчик для корневого URL-адреса
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html'); // Отправляем файл index.html из папки public
});

// Обработчик для проверки победителя первого этапа
app.get('/checkWinner', (req, res) => {
    // Здесь должен быть ваш алгоритм определения победителя
    // и создания нового этапа с информацией о победителе

    // Пример ответа сервера с данными о победителе и новом этапе
    const winner = {
        name: "Финляндия",
        icon: "flag-icon-css-fi.svg",
        stage: "1/4 финала"
    };

    res.json(winner);
});

// Подключение статических файлов
app.use(express.static(__dirname + '/public'));


// Запуск сервера
app.listen(port, '0.0.0.0', () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});
