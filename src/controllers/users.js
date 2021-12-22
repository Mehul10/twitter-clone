const {Users, db}=require('../db/models')

async function createUser(usern)
{
    const user=await Users.create({
        username: usern
    })
    return user
}

module.exports= {
    createUser
 }
// // db.sync({force:true})
// async function task()
// {
//     console.log('hello')
//     console.log(await createUser('mehhul'))
//     console.log('------------------')
//     console.log(await createUser('somebitch'))
//     console.log('------------------')
// }
// task()