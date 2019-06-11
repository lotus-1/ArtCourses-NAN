const dbConnection = require('../db_connection.js');

const addUser = (username, password, email, cb) => {
  dbConnection.query('INSERT INTO users (user_name, password, user_email) VALUES ($1, $2, $3)', [username, password, email], (err, res) => {
    if (err) return cb(err);
    console.log('data been inserted to users table');
    cb(null, true);
  });
};

const addParticipator = (user_name, course_name, cb) => {
  dbConnection.query(`INSERT INTO participators (user_id, course_id) VALUES (SELECT user_id FROM users WHERE user_name = ($1), SELECT course_id FROM Courses WHERE course_name = ($2))`, [user_name, course_name], (err, res) => {
    if (err) return cb(err);
    console.log('data been added to participators table');
    cb(null, true);
  });
};

module.exports = {
  addUser,
  addParticipator
}
