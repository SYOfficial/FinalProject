const express = require('express');
const hbs = require('hbs');
const path = require('path');

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/homepage', (request, response) => {
    response.render('homepage.hbs');
});

app.get('/posts', (request, response) => {
    response.render('posts.hbs');
});

app.get('/404', (request, response) => {
    response.send({
        error: 'Page not found'
    })
});

app.listen(5000, () => {
    console.log('Server is up on the port 5000');
});