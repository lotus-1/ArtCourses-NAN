const dbConnection = require('../db_connection.js');

const addUser = (username, password, email, cb) => {
  dbConnection.query('INSERT INTO users (user_name, password, user_email) VALUES ($1, $2, $3)', [username, password, email], (err, res) => {
    if (err) return cb(err);
    console.log('data been inserted to users table');
    cb(null, true);
  });
};

const addParticipator = (domain, course_id, cb) => {
  console.log('am in my add par');
  dbConnection.query(`INSERT INTO participators (user_id, course_id) SELECT user_id FROM users WHERE user_email LIKE %($1)%`, [domain], (err, res) => {
    if (err) return cb(err);
    console.log('participator been added to participators table');
    cb(null, true);
  dbConnection.query(`INSERT INTO participators (course_id) VALUES ($2)`, [course_id], (err, res) => {
    if (err) return cb(err);
    console.log('course id been added to participators table');
    cb(null, true);
  })
})
};

module.exports = {
  addUser,
  addParticipator
}
