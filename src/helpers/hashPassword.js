const { hash } = require('bcrypt');

const hashingPassword = (password, cb) => {
   hash(password, 10, (error, hash) => {
    if (error) {
      cb(error);
    } else {
     cb(null, hash);
  }
});
};

module.exports = hashingPassword;
