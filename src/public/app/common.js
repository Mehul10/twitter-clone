$(()=>{
    $('#navbar').load('../components/navbar.html',()=>{
        //console.log("NAVBAR DONE")
        login('mehhul')
    })    //login function runs only when the navbar is loaded otherwise the nav-username would be altered even before it would've been created
    $('#footer').load('../components/footer.html')
   // login(mehhul)
})

function login(username)
{

    window.currentuser= window.localStorage.user ? JSON.parse(window.localStorage.user) : null
    //console.log(currentuser)
    if(!currentuser)
    {
        $.get('/api/users/'+username,{},(user)=>{
            if(user)
            {
                console.log('Logged in as',user.username)
                window.localStorage.user=JSON.stringify(user)
                currentuser=user
                $('nav-username').text(currentuser.username)
            }
        })
    }
    else
    {
        console.log('Resuming session as',currentuser.username)
        $('nav-username').text(currentuser.username)
    }
}