const test = require("tape");
const runDbBuild = require('../src/dataBase/db_build');
const { addUser } = require('../src/dataBase/queries/addData');
const { showPass } = require('../src/dataBase/queries/showData');
const deleteUser = require('../src/dataBase/queries/deleteData');
const { resultArr } = require('../src/helpers/showCourses');

test('Tape is working', (t) => {
  t.equals(1, 1, "one equals one");
  t.end();
})

    const expected = {
        user_id: 1,
        user_name: 'example',
        user_email: 'example@example.com',
        password: 'example123'
      };

test('Testing addUser function', t => {
  runDbBuild((err, res) => {
    t.error(err, 'No Error');

    addUser('example', 'example@example.com', 'example123', (err, result) => {
      if (err) console.log(err);
      t.deepEqual(result, true, 'Returns expected data');
      t.end();
    });
  });
});

test('testing showPass function', t => {
  runDbBuild((err, res) => {
    t.error(err, 'No Error');
    showPass('example@example.com', (err, result) => {
      if (err) console.log(err);
      t.deepEqual(result, expected.password, 'returns same password');
      t.end();
    });
  });
});

test('testing deleteUser function', t => {
  runDbBuild((err, res) => {
    t.error(err, 'No Error');
    deleteUser('example@example.com', (err, result) => {
      if (err) console.log(err);
      t.deepEqual(result, true, 'should return true');
      t.end();
    });
  });
});

test('teting show showCourses function by resultArr', t => {
  runDbBuild((err, res) => {
    t.error(err, 'No Error');
    t.deepEqual(res.length, 10, 'length should be the same');
    t.end();
  });
});
