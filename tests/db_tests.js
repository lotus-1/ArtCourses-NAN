const test = require("tape");
const runDbBuild = require('../src/dataBase/db_build');

test('Tape is working', (t) => {
  t.equals(1, 1, "one equals one");
  t.end();
})

test('Testing getData function', t => {
  runDbBuild((err, res) => {
    t.error(err, 'No Error');

    let expected = [
      {
        user_id: 1,
        user_name: 'example',
        user_email: 'example@example.com',
        password: 'example123'
      }
    ];

    getData((err, result) => {
      if (err) console.log(err);
      t.deepEqual(result, expected, 'Returns expected data');
      t.end();
    });
  });
});
