const { Sequelize } = require('sequelize')
const sequelize=require('sequelize')
const db=new sequelize({
    dialect : 'mysql',
    database: 'twitter',
    username: 'mehhul',
    password: 'mehhpass',
})
const colid ={
    type: Sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
}
const colusername ={
    type: Sequelize.DataTypes.STRING(15),
    unique: true,
    allowNull: false
}
const users= db.define('user',{
    id: colid,
    username: colusername
})
const posts= db.define('post',{
    id: colid,
    body: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull:false
    }
})
const comments=db.define('comment',{
    id:colid,
})
users.hasMany(posts)
posts.belongsTo(users)

posts.hasMany(comments)
comments.belongsTo(posts)

user.hasMany(comments)
comments.belongsTo(users)

module.exports= {
    db,
    posts,
    users,
    comments
}
