const bcrypt = require('bcrypt');

const hashingPassword = (password) => {
  return bcrypt.hash(password, 10, (error, hash) => {
    if(error){
      console.log('Error');
    } else {
      console.log('hash password:', hash);
      return (null, hash);
    }
  })
};

module.exports = hashingPassword;
