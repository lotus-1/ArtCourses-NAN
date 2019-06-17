const express = require('express');
const bodyParser = require('body-parser');
const validate = require('../helpers/validate');
const { loginValidation, signupValidation } = require('../helpers/validation');
const { celebrate } = require('celebrate');
const path = require('path');
const hashingPassword = require('../helpers/hashPassword');
const cookieParser = require('cookie-parser');
const { addUser, addParticipator } = require('../dataBase/queries/addData');
const { showPars, showPass } = require('../dataBase/queries/showData');
const { resultArr, pars } = require('../helpers/showCourses');
const { courseId } = require('../helpers/stringHelpers');
const deleteUser = require('../dataBase/queries/deleteData');
const { signInHandler, signUpHandler } = require('../helpers/signingHandlers');
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
  signUpHandler(req, res);
});

router.get('/courses', (req, res) => {
  res.render('courses', {
    courses : resultArr,
    pars : pars
  });
});

router.post('/', validate(loginValidation), (req, res) => {
signInHandler(req, res);
});

router.post('/join', (req, res) => {
  let course_id =  courseId(Object.keys(req.body)[0]);
  let userEmail = Object.keys(req.cookies)[0];
  addParticipator(userEmail, course_id, (err, result) => {
    if (err)  console.log(err);
    else {
      console.log('participator been added to data !');
      res.render('joinMsg');
    }
  });
});

router.post('/cancel', (req, res) => {
  let userEmail = Object.keys(req.cookies)[0];
 deleteUser(userEmail, (err, result) => {
  if (err) console.log(err);
  else {
    console.log('participator been deleted from data !');
    res.render('cancelMsg');
  }
});
});

router.post('/signout', (req, res) => {
  let cookies = req.cookies;
  let cookieKey = Object.keys(cookies);
  res.clearCookie(`${cookieKey[0]}`, { maxAge:0, httpOnly: true});
  res.redirect('/');
});

router.get('*', (req, res) => {
  res.sendFile('pageNotFound.html', { root: path.join(__dirname, '..', '..', 'public') });
});

module.exports = router;
