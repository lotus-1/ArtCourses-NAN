const express = require('express');
const bodyParser = require('body-parser');
const validate = require('../helpers/validate');
const { loginValidation, signupValidation } = require('../helpers/validation');
const { celebrate } = require('celebrate');
const path = require('path');
const hashingPassword = require('../helpers/hashPassword');
const cookieParser = require('cookie-parser');

const { showCourses } = require('../dataBase/queries/showData');
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

router.get('/showdata', (req, res) => {
  res.json(showCourses());
})

router.post('/signup', validate(signupValidation), (req, res) => {
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
  console.log('my req body ', req.body);
  console.log('my password', req.body.password);
  const myHashPassword = hashingPassword(req.body.password);
  console.log(myHashPassword);
  res.send('<h1>Registration completed successfully</h1><button><a href="./courses">OK</a></button>')
});

router.post('/login', validate(loginValidation), (req, res) => {
  console.log('my req body ', req.body);
  res.render('courses');
>>>>>>> ac29f847026be22ce0a32a9599dd67c9576279e5
=======
  console.log('my req body ', req.body);
  console.log('my password', req.body.password);
  const myHashPassword = hashingPassword(req.body.password);
  console.log(myHashPassword);
  res.send('<h1>Registration completed successfully</h1><button><a href="./courses">OK</a></button>')
});

router.post('/login', validate(loginValidation), (req, res) => {
  console.log('my req body ', req.body);
  res.render('courses');
>>>>>>> ac29f847026be22ce0a32a9599dd67c9576279e5
});

router.post('/',(req,res)=>{
  res.json({succes: "login validation is confirmed"})
});

router.get('*', (req, res) => {
  res.sendFile('pageNotFound.html', { root: path.join(__dirname, '..', '..', 'public') });
});

module.exports = router;
