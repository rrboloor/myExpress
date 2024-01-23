const express = require('express');

const app = express();

const path = require('path');

const helmet = require('helmet');
const cookieParser = require('cookie-parser')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(helmet());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

function validateUser(req, res, next) {
    res.locals.validated = true;
    next();
}




app.get('/login', (req, res, next) => {
    res.render('login');
})


app.post('/process_login', (req, res, next) => {
    // res.json(req.body)
    const password = req.body.password;
    const username = req.body.username;
    if (password === '123' && username === 'admin') {
        res.cookie('username', username);
        res.cookie('password', password);

        res.redirect('/welcome');
    }
    else {
        res.redirect('/login');
    }

})

app.get('/welcome', validateUser, (req, res, next) => {
    res.render('welcome', { username: req.cookies.username });

})
app.get('/', (req, res, next) => {
    res.redirect('/login');
}
)
app.get('/logout', (req, res, next) => {
    res.clearCookie('username');
    res.clearCookie('password');
    res.redirect('/login');
}

)

app.listen(3000)