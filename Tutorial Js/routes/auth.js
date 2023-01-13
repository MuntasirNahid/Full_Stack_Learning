//Our app.js is getting busy.what's the solution?
//The solution is using express router where we can group those routes together
//and then as far as the functionality and actually set them up separate controllers

const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    const { name } = req.body;
    if (name) {
       return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please provide credentials');
 
 })
 module.exports = router