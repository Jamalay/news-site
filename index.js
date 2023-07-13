const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(require('./routes'));

// mongoose.connect('mongodb+srv://Mans:0987@cluster0.5dbeerg.mongodb.net/news-bd?retryWrites=true&w=majority')
mongoose.connect('mongodb+srv://Mans:0987@cluster0.5dbeerg.mongodb.net/')
    .then(() => console.log('Соединение с сервером MongoDB выполнено успешно'))
    .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))


app.listen(3000, () => {
    console.log("сервер запущен!!!!!!!!");
})