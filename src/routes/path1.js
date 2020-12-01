const logger = require('../logger')
const express = require('express')

const path1 = express.Router()

path1
.route('/')
.get((req,res) => {
    res.json({message: 'Hello Boilerplate!'})
})

module.exports = path1