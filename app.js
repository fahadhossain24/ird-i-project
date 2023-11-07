const express = require('express');
const cors = require('cors');
require('dotenv').config()
const { errorHandler } = require('./middleware/errorHandler');
const CustomError = require('./middleware/utils/customError');
const categoriesRouter = require('./routes/category.route');

const app = express();

// global middlewares
app.use(cors());
app.use(express.json());

// application routes
app.use('/api/v1/categories', categoriesRouter)


app.get('/', (req, res, next) => {
    next('server running')
})

app.all('*', (req, res, next) => {
    const url = req.url || ''
    const error = new CustomError(`No route found ${url}`, 404)
    next(error);
})

// global error handler middlware
app.use(errorHandler)


module.exports = app;