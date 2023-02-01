const mongoose = require('mongoose')

//This Schema things is like a structer of how we will push our data into the db 
const TaskSchema = new mongoose.Schema({
    //this is used to model or data..in which model our data will be given
    // name: String,
    // completed: Boolean
    //we will send a string((task name)) and will check whether it is completed or not
    //without these two properties(name and completed) everything will be ignored in our db
    //in upper schema setup we can sent null properties too .. but we dont want this. We want to add some validation.That's how we do it:
    name: {
        type: String,
        required: [true, 'must provide name'], //must be of string type else show this error message
        trim: true,//extra space ignore kore 
        //maxlength: 20 //max length specified or
        maxlength: [20, 'name can not be more than 20 characters']
    },
    completed: {
        type: Boolean,
        default: false //by default our task is not completed
    }
})
module.exports = mongoose.model('Task', TaskSchema)