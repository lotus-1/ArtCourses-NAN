BEGIN;

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS courses CASCADE;
DROP TABLE IF EXISTS participators CASCADE;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  user_name VARCHAR(30) NOT NULL,
  user_email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(100) NOT NULL
);

CREATE TABLE courses (
  course_id SERIAL PRIMARY KEY,
  course_name VARCHAR(100) NOT NULL,
  timewhen VARCHAR(100) NOT NULL,
  place VARCHAR(100) NOT NULL,
  age VARCHAR(50) NOT NULL,
  cost VARCHAR(50) NOT NULL,
  img_url VARCHAR(250) NOT NULL,
  alt_name VARCHAR (100) NOT NULL
);

CREATE TABLE participators (
  user_id INTEGER REFERENCES users(user_id),
  course_id INTEGER REFERENCES courses(course_id)
);

INSERT INTO users (user_name, user_email, password) VALUES
('example', 'example@example.com', 'example123');



INSERT INTO courses (course_name, timewhen, place, age, cost, img_url, alt_name)
VALUES
  ('Arabic Calligraphy', '1 July 2019, On Monday At 17:00-20:00', 'Lotus Space - Isfiya', '20-30 years old', '450 NIS', '/assets/arabic.png', 'arabic_calligraphy'),
  ('Mozaik Art', '2 July 2019, On Tuesday At 17:00-20:00', 'Lotus Space - Isfiya', '15-25 years old', '500 NIS', '/assets/mosaic.jpg', 'mozaic_art'),
  ('Charcoal Art', '3 July 2019, On Wednesday At 17:00-20:00', 'Lotus Space - Isfiya', '15-30 years old', '400 NIS', '/assets/charcoal.jpg', 'Charcoal_drawing'),
  ('Mandala Art', '4 July 2019, On Thursday At 17:00-20:00', 'Lotus Space - Isfiya', '20-30 years old', '300 NIS', '/assets/mandala.jpeg', 'mandala_art');

COMMIT;
