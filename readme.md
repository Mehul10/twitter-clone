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