const dbConnection = require('../db_connection.js');

const deleteUser = (user_email, cb) => {
  console.log('i am in deleteUser');
  dbConnection.query(`DELETE FROM participators WHERE user_id = (SELECT user_id FROM users WHERE user_email = ($1));`,
   [user_email], (err, res) => {
    if (err) return cb(err);
    console.log('row has been deleted');
    cb(null, true);
  });
};

module.exports = deleteUser;
