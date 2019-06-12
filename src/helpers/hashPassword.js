const bcrypt = require('bcrypt');

const hashingPassword = (password, cb) => {
   bcrypt.hash(password, 10, (error, hash) => {
    if (error) return cb(error);
    console.log('hash password:', hash);
    return cb(null, hash);
  })
};

module.exports = hashingPassword;
