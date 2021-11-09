const sequelize=require('sequelize')
const db=new sequelize({
    dialect : 'mysql',
    database: 'twitter',
    username: 'mehhul',
    password: 'mehhpass',
})
