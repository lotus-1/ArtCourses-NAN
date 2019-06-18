const test = require('tape');
const request = require('supertest');
const app = require('../src/app');
const { courseId } = require('../src/helpers/stringHelpers');

test('Tape is working', (t) => {
  t.equal(1, 1, 'Tape is working');
  t.end();
});

test('testing home page', (t) => {
  request(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', 'text/html; charset=utf-8')
    .end((err, res) => {
      t.error(err)
      t.equal(res.statusCode, 200, 'The app should return a statusCode of 200 on / route');
    })
    t.end();
});

test('testing sign up endpoint', (t) => {
  request(app)
  .get('/signup')
  .expect(200)
  .expect('Content-Type', 'text/html; charset=utf-8')
  .end((err, res) => {
    t.error(err)
    t.equal(res.statusCode, 200, 'The app should return a statusCode of 200 on / route');
  })
  t.end();
});

test('testing courseId function', (t) => {
  let expected = 't';
  let actuall = courseId('test');
  t.equal(expected, actuall, 'courseId function should return the last character');
  expected = 'string';
  actuall = typeof(courseId('string'));
  t.equal(expected, actuall, 'courseId function should take argument as string and return a string');
  t.end();
});
