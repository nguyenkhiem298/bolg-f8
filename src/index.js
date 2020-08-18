const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');

const app = express()
const port = 3000

// set static
app.use(express.static(path.join(__dirname, 'public')));

//HTTP morgan
app.use(morgan('combined'));

//template engine
app.engine('handlebars', handlebars({
  extname: '.handlebars'
})); // app su dung engine la handlebars
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources\\views'));


app.get('/', (req, res) => {
    res.render('home');
})

app.get('/view', (req, res) => {
    res.render('views');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})