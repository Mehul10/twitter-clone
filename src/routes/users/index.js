const{ Router }= require('express')

const route= Router()

route.get('/',(req,res)=>{
    res.send('//TODO: all users')
})
module.exports={
    usersRoute: route
}
