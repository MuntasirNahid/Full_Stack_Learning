const { MongoClient } = require('mongodb')

let dbConnection

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect('mongodb://127.0.0.1:27017/bookstore')
            .then((client) => {
                dbConnection = client.db()
                return cb() //so when we connect to the database successfully then a callback function will be fired
            })
            .catch(err => {
                console.log(err);
                return cb(err) //else it will fire with a error message if there is any
            })
    }, //this will initially connect to a database
    getDb: () => dbConnection //this will return our database conncetion after we've already connected to it

}


