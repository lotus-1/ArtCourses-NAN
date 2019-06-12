const express = require('express');
const bodyParser = require('body-parser');
const validate = require('../helpers/validate');
const { loginValidation, signupValidation } = require('../helpers/validation');
const { celebrate } = require('celebrate');
const path = require('path');
const hashingPassword = require('../helpers/hashPassword');
const cookieParser = require('cookie-parser');
const { addUser, addParticipator } = require('../dataBase/queries/addData');
const resultArr = require('../helpers/showCourses');
const router = express.Router();
router.use(cookieParser());

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));


router.get('/', (req, res) => {
  res.render('home');
});

router.get('/signup', (req, res) => {
  res.render('signUp');
});

router.post('/signup', validate(signupValidation), (req, res) => {
  hashingPassword(req.body.password, (error, result) => {
  if(error) return error;
  addUser(req.body.username, result, req.body.email, (err, result1)=> {
    if (err) return err;
    console.log('I added the user to db');
// set cookie
  // res.cookie('userCookies ', `${result}`, {httpOnly: true});
  // console.log("Cookies after regesteration: ", req.headers.cookie);
  res.send('<h1>Registration completed successfully</h1><button><a href="./courses">OK</a></button>');
  });
 });
});
});


router.get('/courses', (req, res) => {
  res.render('courses', {
    courses : resultArr,
  });
});

router.post('/', validate(loginValidation), (req, res) => {
  console.log('my req body ', req.body);
  // res.json({succes: "login validation is confirmed"})
  // jwt to set a cookie with the value !
  // res.cookie('userCookie', )
  res.redirect('/courses');
});


// a middle ware to check validation to authorised endpoints !
// router.use((req, res, next)=> {
//   if (!req.headers.cookie) {
//     res.redirect('/signup');
//   } else {
//     res.redirect('/courses');
//   }
// })

router.get('*', (req, res) => {
  res.sendFile('pageNotFound.html', { root: path.join(__dirname, '..', '..', 'public') });
});

module.exports = router;
