const test = require('tape');
const request = require('supertest');
const app = require('../src/app');

test('Tape is working', (t) => {
  t.equal(1, 1, 'Tape is working');
  t.end();
});

test('testing home page', (t) => {
  request(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', 'text/html')
    .end((err, res) => {
      t.error(err)
      t.equal(res.statusCode, 200, 'The app should return a statusCode of 200 on / riute');
    })
    t.end();
})
