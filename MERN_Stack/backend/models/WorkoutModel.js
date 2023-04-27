//for models and schemas

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    },
    user_id: {
        type: String,
        required: true
     }
}, { timestamps: true })
//second argument will tell us when last updated and vice versa
module.exports = mongoose.model('Workout', workoutSchema)
//model name = Workout and schema name = WorkoutSchema
//Here a collection named Workout is created in the database
