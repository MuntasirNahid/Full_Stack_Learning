const express = require('express'); // looking for express library
const app = express()//invoking the module 
//or
//const app = require ('express')();

//app.get  // read data
//all browser performs this method by default 
app.get('/', (req, res) => { //path and callback function
   console.log("user hit the resource")
   res.status(200).send('<h1>Home Page</h1>')
   //res.send('Home Page')
})
app.get('/about', (req, res) => {
   res.status(200).send('<h2>About Page</h2>')// we are sending status code to have more control of what is sent back to the browser
})//res.status(200) means that our request was successful

app.all('*', (req, res) => {
   res.status(404).send('<h1>Resource not Found</h1>')
})

//app.post //Insert Data
//app.put   //Update Data
//app.delete   //Delete data
//app.all   //works with all of them // covers all http verbs
//app.use
//app.listen

app.listen(5000, () => {//localhost 5000 is listening our code and its changes
   console.log('server is listening on port 5000...');
})
