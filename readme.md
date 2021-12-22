# Twitter Clone

## Git Commands

```shell
git init
git add readme.md
git commit -m "repo initialized"
git branch -M main
git remote add origin git@github.com:Mehul10/twitter-clone.git
git push -u origin main
```
## Database Commands

```
mysql -u root -p

create database twitter;

create user mehhul indentified with mysql_native_password by 'mehhpass';

grant all privileges on twitter.* to mehhul;

flush privileges;
```
## Project Structure
```
TWT-CLONE\SRC      
├───controllers
├───db
├───public
└───routes
```
## Project Flow

### db

* Connects the db

* Defines all the tables(models) in sql using sequelize

### Controllers
 
 * Controllers define all the **functions** to be used to serve information on the frontend

 * These functions use all the database(sequelize) functions to fetch the data

 * username is fetched from the cleint. Login infrastructure not implemented(yet).

 * If the username does not exist then new user is made with that username.

### routes

* These routes are used to serve data on the front end

* They use the functions defined in the controllers to fetch/update the data

### public

* Keeps the frontend files to be served

## Business Logic

### Users
1. create users this will create a new user with a random username

### Posts
1. Create post this will create a new post, required fields are

    * username (the author of this post)
    * body
2. show all posts list all existing posts, we should have following filtering support

    * filter by username
    * filter by query contained in title (search by title)

3. edit posts [TBD]

4. delete posts [TBD]

### Comments
1. show all comments (of a user)

2. show all comments (under a post)

3. add a comment

### Likes [TBD]