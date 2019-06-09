## ArtCourses-NAN ##

team mates :   
  * @AhlamKadour  
  * @NaremanFero  
  * @Noorb7188

we are planning of building an app about Art courses and in the app we are enabling the user to choose a course to participate in.  

steps :
 - we will deploy our app to Heroku.
 - we will build our database using `postgres.sql`.
 - the user must sign up to be able to log in, which then we will add him to our users table in the database, that this table has { user_id, user_name, user_email, user_password } columns.
 ![img](/home/nareman/Lotus/week-8/ArtCourses-NAN/assets/schema.jpeg)
 - we will use `bcrypt` to save a hashed password in the databse.
 - we will we use cookies to track the user's behavior in the  website.
 - then the user will log in to see the details about each course {name, brief explanation about the course, time (date and hours), price, number of participators that already sign for this course (in it we will show number of participators for that course yet so the user can see if he can take part of that same course: like this [number of participators : 4 from 10])} and decide in which course he would like to participate , by clicking the `participate` button, which then he will be added to `participators` table that includes { par_id, par_name, par_email, course_name } columns.
 - there will be also a cancel button to cancel the participation.
 - a user that has signed for specific course will not be able to take part in another course, and we are planing to do that by checking if that user was added to `participators` table, if so the user will get a proper maessage that he can not take part of another course.
 - we will build our app using `express`.
 - we will write tests using `tape` and `supertests`.
 - we will use handlebars template in server side to render our pages threw the server.

 *Hope you'll enjoy*
