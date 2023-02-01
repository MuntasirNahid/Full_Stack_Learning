const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandlerMidlleware = require('./middleware/error-handler')

//middleware
app.use(express.json())
app.use(express.static('./public'))




//routes

app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandlerMidlleware)

// app.get('api/v1/tasks')      --get all the tasks
// app.post('api/v1/tasks')      --create a new tasks
// app.get('api/v1/tasks/:id')    -- get single task
// app.patch('api/v1/tasks/:id')   --update task
// app.delete('api/v1/tasks/:id')    -- delete task

//put method is for replacing ,but patch method is for partial update.
//patch just updates the item we want to update, rest properties remains the same
//But put updates the item we want and removes rest of the item wew havenot mentioned



const port = process.env.PORT || 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI) //if database connects then we will spin our server and it will console log
        app.listen(port, console.log(`server is listening on port ${port}...`))

    } catch (error) {
        console.log(error);
    }
}
start()
