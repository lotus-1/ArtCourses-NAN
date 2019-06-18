const test = require("tape");
const runDbBuild = require('../src/dataBase/db_build');
const { addUser } = require('../src/dataBase/queries/addData');

test('Tape is working', (t) => {
  t.equals(1, 1, "one equals one");
  t.end();
})

test('Testing getData function', t => {
  runDbBuild((err, res) => {
    t.error(err, 'No Error');

    let expected = {
        user_id: 1,
        user_name: 'example',
        user_email: 'example@example.com',
        password: 'example123'
      };

    addUser('example', 'example@example.com', 'example123', (err, result) => {
      if (err) console.log(err);
      t.deepEqual(result, true, 'Returns expected data');
      t.end();
    });
  });
});
