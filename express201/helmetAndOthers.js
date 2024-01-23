const express = require('express');
const helmet = require('helmet');
const app = express();
//static
//json
//urlencoded
//helmet
//cors ==> next...


app.use(helmet());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/ajax', (req, res) => {
    console.log(req.body);
    res.json(["Test "])

});




app.listen(3000)
console.log('Server on port 3000');