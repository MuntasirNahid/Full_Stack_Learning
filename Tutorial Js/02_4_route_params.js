const express = require('express')
const app = express()

const { products } = require('./data')


app.get('/', (req, res) => {
    //  res.json([{ name: 'Muntasir' }, { name: 'Mamun Nahid'}])
    //res.json(products)

    //if we inspect our local host we will see that our content type is application.json . that means we are successfully able to send our json data

    //Now we will comment out the res.json(products) and connect it with our homepage as url
    res.send('<h1>HOME PAGE </h1><a href = "/api/products">products</a>')
})

//Lets say I dont want to show them everything about the product at first glance.. they will see only product name ,price,id but no description

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image }
    })

    res.json(newProducts)
})

//Lets say now we want to find info of a specific product whose id = 1
//like our client click on an item from the website..now we will have to display everything about that product

// app.get('/api/products/1', (req, res) => {
//    const singleProduct = products.find((product) => product.id === 1)
//    res.json(singleProduct)
// })

//in the upper chunk od code we have done it manually.. this will take a long time to if we have thousand of products

//A better and efficient way to do this:

app.get('/api/products/:productID', (req, res) => {//productID is a variable name
    // console.log(req)
    // console.log(req.param);
    const { productID } = req.params;
    const singleProduct = products.find((product) => product.id === Number(productID))//as our productID will return integer number in this case
    //if our id is setted up as strings , we dont need to typecast it

    //lets say our client do some ultapalta product id typing..how to resolve this issue

    if (!singleProduct) {
        return res.status(404).send('<h1>Product doesnot exist.</h1>')
    }
    return res.json(singleProduct)
})

//these kinds of route params can get lengthy!like:
app.get('/api/products/:productID/reviews/:reviewsID', (req, res) => {
    console.log(req.params);
    res.send("Hello Brother!Why want to see the review .Just buy the product asap or get out from the website!")
})

app.all('*', (req, res) => {
    res.status(404).send("<h1>Sorry.There is nothing!</h1>")
})
app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
})