//Express Middleware are functions that execute during the request to the server.
//Each middleware function has access to request and responce object.
//Middleware is the heart and soul of express js


//Main Theme: req =>middleware =>res

//if we have more route doing manually is not a good option. we have to use a function in this case

const logger = (req, res, next) => { // if we dont use next it will logged in successfully . But in browser it will spin,,because we didn't passed to the next middleware
   const method = req.method; //requesting a method ..in this case GET method
   const url = req.url;
   const time = new Date().getFullYear();
   console.log(method, url, time);//GET / 2023 or GET /about 2023
   //when you use middleware you must have to send it to the next middleware unless
   //you are terminating the cycle and sending back the response
   //res.send("Testing") //if we send after one cycle it will not need any next
   next();//now it will not buffer the cursor 

}

// app.get('/', logger, (req, res) => { //logger is working as a middleware here
//    res.send('<h1>Home Page</h1>')
// })

// app.get('/',(req,res) =>{
//just for one route ,like home route or about route
// const method = req.method; //requesting a method ..in this case GET method
// const url = req.url;
// const time  = new Date().getFullYear();
// console.log(method,url,time);//GET / 2023
// res.send('<h1>Home Page</h1>')
// })

// app.get('/about',logger, (req, res) => {
//    res.send('<h1>About</h1>')
// })


//it will work if I rename the file name as logger.js
module.exports = logger






