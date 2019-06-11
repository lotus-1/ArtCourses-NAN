const dbConnection = require('../db_connection.js');

const cancelUser = (user_id, cb) => {
  dbConnection.query('DELETE FROM participators WHERE user_id = ($1)', [user_id], (err, res) => {
    if (err) return cb(err);
    console.log('row has been deleted');
    cb(null, true);
  });
};

module.exports = cancelUser;
