let { people } = require('../data')//Now we are sitting in routers. I need to go two levels up to get my data. That's why ..


//I will use getPeople Method instead of get method
const getPeople = (req, res) => {
    res.status(200).json({ success: true, data: people })
}

//post method
const createPerson = (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, msg: 'please provide name value' })
    }
    res.status(201).send({ success: true, person: name })
}

const createPersonPostman = (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, msg: 'please provide name value' })
    }
    res.status(201).send({ success: true, data: [...people, name] })
}

const updatePerson = (req, res) => {
    const { id } = req.params
    const { name } = req.body
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
}

const deletePerson = (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))//looking for person whose id matches the params
    if (!person) {
        return res.status(404).json({ success: false, msg: 'ei name e keo nai bhai.' })
    }
    const newPeople = people.filter((person) => person.id !== Number(req.params.id))
    return res.status(200).json({ success: true, data: newPeople }) // oderke delete korlam na

}
module.exports = {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
}