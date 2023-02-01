const mongoose = require('mongoose')


//I will remove this(below commented chunk) from here and putted it in .env file 
// const connectionString =
//     'mongodb+srv://muntasirrrr:<pass_word>7@nodeandexpress.s6igb7t.mongodb.net/03-TASK_MANAGER?retryWrites=true&w=majority'

//if we push the connectionString in github anybody can see our password we we definitely not want
//that's why we will put it in .env file and will put .env file in git ignore ... so it will not be pushed




// mongoose
//     .connect(connectionString, {
//         useNewUrlParser: true,
//         useCreateIndex: true,
//         useFindAndModify: false,
//         useUnifiedTopology: true,
//     })
//     .then(() => console.log('CONNECTED TO DB...'))
//     .catch((err) => console.log(err))

//Here our console log and db isnot syncing..alada alada kaj kortese
//what if we want aomthing like : first it will go to db ,if database works then it will console log.
//it's better for our code backup

//so we will do this:
const connectDB = (url) => {
    return mongoose
        .connect(url,{
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        })
}
module.exports = connectDB

