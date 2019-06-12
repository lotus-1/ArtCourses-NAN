const { showCourses } = require('../dataBase/queries/showData');

const resultArr = [];
 showCourses((err, res)=> {
  if (err) return err;
  res.forEach(val=> resultArr.push(val));
});

module.exports = resultArr;
