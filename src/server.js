const express=require('express')
const app=express()
// const models=require('./db/models')
// const db=models.db
const {db} =require('./db/models')

db.sync()
    .then(()=>{
        app.listen(4444, () =>{
            console.log('Server started at https://localhost:4444')
        })
    }).catch((err) =>{
        console.error(new Error('Could not start database'))
        console.error(err)
    })