const express = require('express');
const bodyParser = require('body-parser');
const validate = require('../helpers/validate');
const { loginValidation, signupValidation } = require('../helpers/validation');
const { celebrate } = require('celebrate');
const path = require('path');
const hashingPassword = require('../helpers/hashPassword');
const cookieParser = require('cookie-parser');

const router = express.Router();
router.use(cookieParser());

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));


router.get('/', (req, res) => {
  console.log("Cookies : ", req.cookies);
  res.render('home');
});

router.get('/signup', (req, res) => {
  res.render('signUp');
});

router.post('/signup', validate(signupValidation), (req, res) => {
console.log('my req body ', req.body);
const myHashPassword = hashingPassword(req.body.password);
console.log('my hashed password : ', myHashPassword);
// set cookie
res.cookie('testCookie', `${myHashPassword}`, {maxAge: 900000, httpOnly: true});
console.log("Cookies after regesteration: ", req.cookies);
res.send('<h1>Registration completed successfully</h1><button><a href="./courses">OK</a></button>')
});

router.post('/login', validate(loginValidation), (req, res) => {
console.log('my req body in login :', req.body);
res.render('courses');
});

router.post('/',(req,res)=>{
  res.json({succes: "login validation is confirmed"})
});

router.get('*', (req, res) => {
  res.sendFile('pageNotFound.html', { root: path.join(__dirname, '..', '..', 'public') });
});

module.exports = router;
