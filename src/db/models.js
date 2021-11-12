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


const Users= db.define('user',{
    id: colid,
    username: colusername
})
const Posts= db.define('post',{
    id: colid,
    body: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull:false
    }
})
const Comments=db.define('comment',{
    id:colid,
})
Users.hasMany(Posts)
Posts.belongsTo(Users)

Posts.hasMany(Comments)
Comments.belongsTo(Posts)

Users.hasMany(Comments)
Comments.belongsTo(Users)

module.exports= {
    db,
    Posts,
    Users,
    Comments
}
