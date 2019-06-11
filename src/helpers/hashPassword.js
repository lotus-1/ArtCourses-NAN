const bcrypt = require('bcrypt');

const hashingPassword = ((password) => {
  bcrypt.hash(password, 10, (error, hash) => {
    if(error){
      console.log('Error');
    } else {
      console.log('hash password:', hash);
      return hash;
    }
  })
});

module.exports = hashingPassword;
