const express=require('express')
const app=express()
// const models=require('./db/models')
// const db=models.db
const {db} =require('./db/models')

db.sync({force:true})   //use {force:true} to create the table again
    .then(()=>{
        app.listen(4444, () =>{
            console.log('Server started at http://localhost:4444')
        })
    }).catch((err) =>{
        console.error(new Error('Could not start database'))
        console.error(err)
    })
