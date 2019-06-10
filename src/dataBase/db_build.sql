BEGIN;

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS courses CASCADE;
DROP TABLE IF EXISTS participators CASCADE;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  user_name VARCHAR(30) NOT NULL,
  user_email VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL
);

CREATE TABLE courses (
  course_id SERIAL PRIMARY KEY,
  course_name VARCHAR(100) NOT NULL
);

CREATE TABLE participators (
  user_id INTEGER REFERENCES users(user_id),
  course_id INTEGER REFERENCES courses(course_id)
);

INSERT INTO users (user_name, user_email, password) VALUES
('example', 'example@example.com', 'example123');

COMMIT;
