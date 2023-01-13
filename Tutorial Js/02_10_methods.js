const express = require('express')
const app = express()

let { people } = require('./data')
//get - reads the data
app.get('/api/people', (req, res) => {
   res.status(200).json({ success: true, data: people })
})

//static assests
//for his file and website
app.use(express.static('./methods-public'))

//parse from data
app.use(express.urlencoded({ extended: false }))

//parse json
app.use(express.json())


app.post('/login', (req, res) => {
   console.log(req.body);
   res.send('POST')
})




//From javascript example

app.post('/api/people', (req, res) => {
   const { name } = req.body;
   if (!name) {
      return res.status(400).json({ success: false, msg: 'please provide name value' })
   }
   res.status(201).send({ success: true, person: name })
})

app.post('/api/postman/people', (req, res) => {
   const { name } = req.body;
   if (!name) {
      return res.status(400).json({ success: false, msg: 'please provide name value' })
   }
   res.status(201).send({ success: true, data: [...people, name] })
})




//For Html
app.post('/login', (req, res) => {
   const { name } = req.body;
   if (name) {
      return res.status(200).send(`Welcome ${name}`)
   }
   res.status(401).send('Please provide credentials');

})


//PUT Method: Updates Data
//Update specific order (params + send data)

app.put('/api/people/:id', (req, res) => {
   const { id } = req.params
   const { name } = req.body
   // console.log(id,name);//1 peter
   //John was holding the id 1 but we updated it to Peter using postman post method
   //now peter have id 1
   //this doesnot mean replace.this is over write.
   //now id 2 also have peter
   // res.send('Hello World!')

   const person = people.find((person) => person.id === Number(id))
   if (!person) {
      return res.status(404).json({ success: false, msg: `No Person with id ${id}` })
   }
   const newPeople = people.map((person) => {
      if (person.id === Number(id)) {
         person.name = name // this will update the name of that id with the given name
      }
      return person
   })
   res.status(200).json({ success: true, data: newPeople })
})



//DELETE Method : just delete this sucker

app.delete('/api/people/:id', (req, res) => {
   const person = people.find((person) => person.id === Number(req.params.id))//looking for person whose id matches the params
   if (!person) {
      return res.status(404).json({ success: false, msg: 'ei name e keo nai bhai.' })
   }
   const newPeople = people.filter((person) => person.id !== Number(req.params.id))
   return res.status(200).json({ success: true, data: newPeople }) // oderke delete korlam na

})

app.all('*', (req, res) => {
   res.status(404).send("<h1>Sorry.There is nothing!</h1>")
})
app.listen(5000, () => {
   console.log('Server is listening on port 5000...');
})


//Every time I setting up a front end it takes a long time for only one route. that why we will install postman
//Postman is an awesome tool to quickly testing our api

