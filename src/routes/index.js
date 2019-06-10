const express = require('express');
const bodyParser = require('body-parser');
const validate = require('../views/helpers/validate');
const {loginValidation, signupValidation} = require('../views/helpers/validation');
const {celebrate} = require('celebrate');
const path = require('path');
const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));


router.get('/', (req, res) => {
  res.render('home');
});

router.get('/courses', (req, res) => {
  res.render('courses');
});

router.get('/signup', (req, res) => {
  res.render('signUp');
});

router.post('/signup', validate(signupValidation), (req, res) => {
console.log('my req body ', req.body);
res.send('<h1>Registration completed successfully</h1><button><a href="./courses">OK</a></button>')
});

router.post('/login', validate(loginValidation), (req, res) => {
console.log('my req body ', req.body);
res.render('courses');
});

router.post('/',(req,res)=>{
  res.json({succes: "login validation is confirmed"})
});

router.get('*', (req, res) => {
  res.sendFile('pageNotFound.html', { root: path.join(__dirname, '..', '..', 'public') });
});

module.exports = router;
