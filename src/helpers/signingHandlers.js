const { showPass } = require('../dataBase/queries/showData');
const  hashingPassword = require('./hashPassword');
const { compare } = require('bcrypt');
const { addUser } = require('../dataBase/queries/addData');

const signInHandler = (req, res) => {
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
      res.cookie(req.body.email, hashinData, { httpOnly: true });
      res.redirect('/courses');
    });
  }
});
};

signUpHandler = (req, res) => {
  hashingPassword(req.body.password, (error, result) => {
  if(error) return error;
  addUser(req.body.username, result, req.body.email, (err, result1)=> {
  if (err) return err;
  console.log('I added the user to db');
  res.render('registrationMsg');
});
});
};

module.exports = { signInHandler,
                   signUpHandler };
