const dbConnection = require('../db_connection.js');

const showCourses = (cb) => {
  dbConnection.query('SELECT * FROM courses', (err, res) => {
    if (err) return cb(err);
    cb(null, res.rows);
  });
};

const showPass = (email, cb) => {
  dbConnection.query(`SELECT password FROM users WHERE user_email = ($1)`, [email], (err, res) => {
    if (err) return cb(err);
    if (res.rows.length < 1) return cb(err);
    cb(null, res.rows[0].password);
  });
};

const showPars = (course_id, cb) => {
  dbConnection.query(`SELECT * FROM courses WHERE course_id = ($1)`, [course_id], (err, res) => {
    if (err) return cb(err);
    cb(null, res.rows.length);
  });
};

module.exports = {
  showCourses,
  showPars,
  showPass
}
