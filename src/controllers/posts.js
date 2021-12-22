const {Posts, Users}=require('../db/models')

async function createNewPost(userId,title,body) {
    const post=await Posts.create({
        title,
        body,
        userId
    })
    return post
}
// pass an object inside showAllPosts
// 1. {username: ''}
// 2. {title: ''}
async function showAllPosts(query){

}
async function task(){
    console.log(await createNewPost(1,'First Post','Hello wannabe twitter'))
    console.log(await createNewPost(3,'Second Post','Hello twt'))

}
task()