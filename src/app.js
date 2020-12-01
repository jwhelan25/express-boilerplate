require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')

const { NODE_ENV } = require('./config')
//const validateBearerToken = require('./validate-bearer-token')
const errorHandler = require('./errorHandler')

const path1 = require('./routes/path1')

const app = express()

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption))
app.use(express.json())
app.use(cors())
app.use(helmet())

//app.use(validateBearerToken)

app.use(path1)

app.use(errorHandler)

module.exports = app