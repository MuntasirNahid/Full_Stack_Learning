//Query string parameters are also called as url parameters
//This is a way for us to send small amount of information using the url
app.get('/api/v1/query', (req, res) => {//v1 is just a random version we gave just to look like posh
    console.log(req.query);//what we requested in query it will show in console log
    // res.send("Hello Brother.Thanks for coming here.")
    //we can send as many parameter as we want by just using & and at first query? then all param
 
    //if user provides some specific parameter in the query we will handle it . else we will send him  all the product
    const { search, limit } = req.query //user added search or limit in query
    //here limit is how many product our client want to see
 
    //Lets say we want to make a new array copying the products. the procedure is:
    let sortedProducts = [...products]
 
    //now evaluating query
    if (search) {//if client added something on search parameter
       sortedProducts = sortedProducts.filter((product) => {
          return product.name.startsWith(search)
       })
    }
 
    if (limit) {
       sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts.length < 1) {
       // res.status(200).send('No product Matched your search.')
 
       //but we will use more convenient way:
       return res.status(200).json({ success: true, data: [] })
    }
    res.status(200).json(sortedProducts)
    //as no code below to read, it will not cause any proble,=m
    //but in other cases we have to use return . else it will issue some error
 })