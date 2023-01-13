const express = require('express')
const app = express()
const path = require('path')



//This was for navbar website he builted (Manual way)
// app.get('/',(req,res)=>{
// res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))

//if we copy and paste index.html to public folder and then comment out thid chunk of code
//our code will still work smothly because of app.use
//so we call it adding to static assets

//SSR


// })


//More efficient way
//Just dump everything in public folder and use appp.use and static. They will work smothly
//setup static and middleware
app.use(express.static('./public'))//public name e ekta folder khule oi forlder er moddhe shob navbar app er code rekhe dilei hoilo

//app.use is very useful. if i have 20k images at public folder app.use will take care of them all
//it will setup directory ,it will setup status code and vice versa
//server doesnot have to change the static file.so we will dump our files in static folder




app.all('*',(req,res)=>{
   res.status(404).send('resource not found')
})

app.listen(5000,()=>{
   console.log('server is listening on port 5000...');
})

