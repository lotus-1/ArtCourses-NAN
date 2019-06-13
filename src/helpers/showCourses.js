const { showCourses,
        showPars } = require('../dataBase/queries/showData');

const resultArr = [];
 showCourses((err, res)=> {
  if (err) return err;
  res.forEach(val=> resultArr.push(val));
});

// const pars = showPars(3, (err, res) => {
//   if (err) return err;
//   console.log('pars are ',res-1);
// });


module.exports = { resultArr };
