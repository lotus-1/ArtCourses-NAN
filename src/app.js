const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const routes = require('./routes/index.js');

const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));

app.disable('x-powered-by');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    errorsDir: path.join(__dirname, 'views', 'errors'),
    // partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main',
    defaultErrors: 'pageNotFound',
    // helpers: helpers,
  })
);
// app.use((req, res) => {
// res.status(500).sendFile(path.join(__dirname, '..', 'public', 'serverError.html'));
// });
// functionDosntExist();
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main',
    helpers: path.join(__dirname, 'views', 'helpers'),
  })
);

app.set('port', process.env.PORT || 5000);
app.use(routes);

module.exports = app;
