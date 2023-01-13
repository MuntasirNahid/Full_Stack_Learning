const logger = require('./logger')
const authorize = require('./authorize')
app.use([logger, authorize]) //they will be executed in the order

//Main Theme: req =>middleware =>res

//1.use vs route
//2.options - our own /express/third party





app.get('/', (req, res) => { //logger is working as a middleware here
    res.send('<h1>Home Page</h1>')
})

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>')
})

app.get('/api/items', (req, res) => {
    console.log(req.user);
    res.send('<h1>Items</h1>')
})

app.get('/api/products', (req, res) => {
    res.send('<h1>Product </h1>')
})

app.all('*', (req, res) => {
    res.status(404).send("<h1>Sorry.There is nothing!</h1>")
})

//what if we want to use app.use middleware for only a few get method and not for all method.
//simple ,just use middleware in the wanted app.get method . like

// app.get('/api/products',[logger,authorize], (req, res) => {
//    res.send('<h1>Product </h1>')
// })
//here middleware will only work for api/product page
