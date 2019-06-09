const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

// const router = require('./index');

const app = express();

// app.set('views', path.join(__dirname, 'views'));
app.set('port', process.env.PORT || 5000);
// app.use(router);
 
module.exports = app;
