const dbConnection = require('../db_connection.js');

const showCourses = (cb) => {
  dbConnection.query('SELECT * FROM courses', (err, res) => {
    if (err) return cb(err);
    console.log(res.rows);
    cb(null, res);
  });
};

const showPass = (username, cb) => {
  dbConnection.query(`SELECT password FROM users WHERE user_name = ($1)`, [username], (err, res) => {
    if (err) return cb(err);
    if (res.rows.length > 1) throw new Error ('username does not match !');
    cb(null, res.rows[0].password);
  });
};

const showPars = (course_id) => {
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
