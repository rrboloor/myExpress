const express = require('express');

const app = express();

const path = require('path');

const helmet = require('helmet');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(helmet());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res, next) => {
    res.render("index")
})

app.listen(3000)