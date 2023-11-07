const express = require('express');
const cors = require('cors');
require('dotenv').config()
const { errorHandler } = require('./middleware/errorHandler');
const CustomError = require('./middleware/utils/customError');

const app = express();

app.use(cors());
app.use(express.json());

console.log(process.env)

app.get('/', (req, res, next) => {
    next('this is error created me')
})

app.all('*', (req, res, next) => {
    const url = req.url || ''
    const error = new CustomError(`No route found ${url}`, 404)
    next(error);
})

app.use(errorHandler)


module.exports = app;