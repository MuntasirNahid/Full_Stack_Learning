const Task = require('../models/Task')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')
const getAllTask = asyncWrapper(async (req, res) => {
    //res.send('get all tasks')
    //moved all of the to asyncwrapper
    // try {
    //     const tasks = await Task.find({})//keeping parameter empty means we want everything to be found
    //     //res.status(200).json({ tasks })//its equal to tasks:tasks
    //     //res.status(200).json({ tasks,amount:tasks.length })//its equal to tasks:tasks
    //     res
    //         .status(200)
    //         .json({ status: "success", data: { tasks, nbHits: tasks.length } })//its equal to tasks:tasks

    // } catch (error) {
    //     res.status(500).json({ msg: error })//500 is internal server eroor

    // }
    const tasks = await Task.find({})//keeping parameter empty means we want everything to be found
    res.status(200).json({ tasks })
})

//we are using it manually

// const createTask= (req,res)=>{
//res.json(req.body) //just checking our middleware
//     res.send('create task')
// }

//why don't we use Task from mongoose.. meeans whatever we got in ew.body we will pass it to Task.create and it will do the rest
const createTask = asyncWrapper(async (req, res) => {
    // try {
    //     //without try catch , if we post completely null our server will hanging 
    //     const task = await Task.create(req.body)
    //     res.status(201).json({ task })
    // } catch (error) {
    //     res.status(500).json({ msg: error })//500 is internal server eroor
    // }
    const task = await Task.create(req.body)
    res.status(201).json({ task })

})


const getTask = asyncWrapper(async (req, res, next) => { //using async because we use await
    //  res.send('get single task')
    // res.json({id:req.params.id})
    // try {
    //     const { id: taskID } = req.params
    //     const task = await Task.findOne({ _id: taskID });
    //     if (!task) {
    //         return res.status(404).json({ msg: `No Task with id :${taskID}` })
    //     }
    //     res.stauts(200).json({ task })
    // } catch (error) {
    //     res.status(500).json({ msg: error })//500 is internal server eroor

    // }
    const { id: taskID } = req.params
    const task = await Task.findOne({ _id: taskID });
    if (!task) {

        return next(createCustomError(`No Task with id :${taskID}`, 404))
        // const error = new Error('Not Found')
        // error.status = 404;
        // return next(error)
        // return res.status(404).json({ msg: `No Task with id :${taskID}` })
    }
    res.status(200).json({ task })


})

const deleteTask = asyncWrapper(async (req, res) => {
    // res.send('delete task')
    // try {
    //     const { id: taskID } = req.params
    //     const task = await Task.findByIdAndDelete({ _id: taskID })
    //     if (!task) {
    //         return res.status(404).json({ msg: `No Task with id :${taskID}` })
    //     }
    //     res.stauts(200).json({ task })
    //     // or res.stauts(200).send() or
    //     //   res.stauts(200).json({ task: null, status: "success" })

    // } catch (error) {
    //     res.status(500).json({ msg: error })//500 is internal server eroor
    // }
    const { id: taskID } = req.params
    const task = await Task.findByIdAndDelete({ _id: taskID })
    if (!task) {
        // return res.status(404).json({ msg: `No Task with id :${taskID}` })
        return next(createCustomError(`No Task with id :${taskID}`, 404))

    }


})

const updateTask = asyncWrapper(async (req, res) => {
    // try {
    //     const { id: taskID } = req.params
    //     const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    //         new: true,
    //         runValidators: true,
    //     })//these two lines are for postman showing updated result

    //     if (!task) {
    //         return res.status(404).json({ msg: `No Task with id :${taskID}` })
    //     }
    //     res.status(200).json({})
    // } catch (error) {
    //     res.status(500).json({ msg: error })//500 is internal server eroor
    // }
    const { id: taskID } = req.params
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
        new: true,
        runValidators: true,
    })//these two lines are for postman showing updated result

    if (!task) {
        return next(createCustomError(`No Task with id :${taskID}`, 404))

        // return res.status(404).json({ msg: `No Task with id :${taskID}` })
    }

})








module.exports = {
    getAllTask,
    createTask,
    getTask,
    updateTask,
    deleteTask

}