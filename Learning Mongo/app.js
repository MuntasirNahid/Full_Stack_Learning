const express = require('express')
const { connectToDb, getDb } = require('./db')
const { ObjectId } = require('mongodb')

//init app and middleware
const app = express()
app.use(express.json())


//db connection
let db
connectToDb((err) => { //when there is an error we accept the err argument from the db.js file . If connection is success this argument will be null
    if (!err) {
        app.listen('3000', () => {
            console.log('app is listening on port 3000');
        })
        db = getDb() // it will return us the database connection object that we need
    }
})



//routes
app.get('/books', (req, res) => {
    //there can be many document.. we will fetch them page by page(in each page 20 documents or so)

    //current page //where p = 0
    const page = req.query.p || 0 //by default 0 if dont give any parameter
    const booksPerPage = 3  //how many books in per slot






    let books = []

    db.collection('books')
        .find() //find method returns a cursor which is an object that essentially points to a set of documents outlined by our query  
        //Two methods of fetching data:    
        //toArray fetches all the documents that the cursor points to and it puts them into an array for us
        //forEach iterates the documents one at a time and the allows us to process each one individually
        //it fetches documents in batches. default batch size is 101 document
        .sort({ author: 1 })
        .skip(page * booksPerPage)
        .limit(booksPerPage)
        .forEach(book => books.push(book))
        .then(() => {
            res.status(200).json(books);
        })
        .catch(() => {
            res.status(500).json({ error: 'Could not fetch the document' })
        })
})

app.get('/books/:id', (req, res) => {

    if (ObjectId.isValid(req.params.id)) {
        db.collection('books')
            .findOne({ _id: new ObjectId(req.params.id) })
            .then(doc => {
                res.status(200).json(doc)
            })
            .catch(err => {
                res.status(500).json({ error: 'Could not fetch the desired document' })
            })
    } else {
        res.status(500).json({ error: 'Not a valid doc id' })
    }
})

app.post('/books', (req, res) => {
    const book = req.body


    db.collection('books')
        .insertOne(book)
        .then(result => {
            res.status(201).json(result)
        })
        .catch(err => {
            res.status(500).json({ err: 'Could not create a new document' })

        })

})

app.delete('/books/:id', (req, res) => {

    if (ObjectId.isValid(req.params.id)) {
        db.collection('books')
            .deleteOne({ _id: new ObjectId(req.params.id) })
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                res.status(500).json({ error: 'Could not delete the document' })
            })
    } else {
        res.status(500).json({ error: 'Not a valid doc id' })
    }
})

//we use patch request to update individual or many fields

app.patch('/books/:id', (req, res) => {
    const updates = req.body

    if (ObjectId.isValid(req.params.id)) {
        db.collection('books')
            .updateOne({ _id: new ObjectId(req.params.id) }, { $set: updates })
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                res.status(500).json({ error: 'Could not update the document' })
            })
    } else {
        res.status(500).json({ error: 'Not a valid doc id' })
    }


})