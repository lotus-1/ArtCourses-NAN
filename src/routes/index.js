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
const { compare } = require('bcrypt');
const { courseId } = require('../helpers/stringHelpers');
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
    res.send('<h1>Registration completed successfully</h1><button><a href="/"> Log in </a></button>');
  });
 });
});

router.get('/courses', (req, res) => {
  res.render('courses', {
    courses : resultArr,
    pars : pars
  });
});



router.post('/', validate(loginValidation), (req, res) => {
  showPass(req.body.email, (error, hashinData) => {
    if (error)
    res.send(error, 'Username or password is not correct ! ');
    if (!hashinData) {
      res.status(200).send(' <h2> No user found !</h2>' );
    } else {
    compare(req.body.password, hashinData, (err, hashMatch) => {
      if (err) return err;
      if (!hashMatch) {
        res.status(200).send('<h2>Pass do not match !</h2>' );
      }
      console.log(req.body);
      res.cookie(req.body.email, hashinData, { httpOnly: true });
      res.redirect('/courses');
    });
  }
});
});

router.post('/courses', (req, res) => {
  console.log(req.cookies);
  let course_id =  courseId(Object.keys(req.body)[0]);
  console.log('my course_id : ', course_id);
  let userEmail = Object.keys(req.cookies)[0];
  console.log('my email user ', userEmail);
  addParticipator(userEmail, course_id, (err, result) => {
    if (err)  return err;
    console.log('participator been added to data !');
    res.redirect('/courses');
  })
});

// a middle ware to check validation to authorised endpoints !
// router.use((req, res, next)=> {
//   if (!req.headers.cookie) {
//     res.redirect('/signup');
//   } else {
//     res.redirect('/courses');
//   }
// })

router.get('/signout', (req, res) => {
  let cookies = req.cookies;
  res.clearCookie(cookies[0]);
  res.redirect('/');
})

router.get('*', (req, res) => {
  res.sendFile('pageNotFound.html', { root: path.join(__dirname, '..', '..', 'public') });
});

module.exports = router;
