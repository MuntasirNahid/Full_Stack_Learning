const express = require('express')
const app = express()
const logger =require ('./logger')

// app.get('/', logger, (req, res) => { //logger is working as a middleware here
//    res.send('<h1>Home Page</h1>')
// })

// app.get('/about',logger, (req, res) => {
//    res.send('<h1>About</h1>')
// })

// app.get('/api/items',logger, (req, res) => {
//    res.send('<h1>Items</h1>')
// })

// app.get('/api/products',logger, (req, res) => {
//    res.send('<h1>Productst</h1>')
// })

//what if we have 50 more routes. we will not add logger function to every route manyally. Lets make a function for this job


//app.use always expects a middleware
app.use(logger) //thats it every app.get will use this as middleware
//if we only want to use logger in a specified mother route. we can do it too
//app.use('/api',logger)
//this will work only for app/work/product/items and bla bla 
 
app.get('/', (req, res) => { //logger is working as a middleware here
   res.send('<h1>Home Page</h1>')
})

app.get('/about', (req, res) => {
   res.send('<h1>About</h1>')
})

app.get('/api/items', (req, res) => {
   res.send('<h1>Items</h1>')
})

app.get('/api/products', (req, res) => {
   res.send('<h1>Product </h1>')
})

app.all('*', (req, res) => {
   res.status(404).send("<h1>Sorry.There is nothing!</h1>")
})
app.listen(5000, () => {
   console.log('Server is listening on port 5000...');
})