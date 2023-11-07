const express = require('express');
const categoriesController = require('../controllers/categories.controller');

const categoriesRouter = express.Router();


categoriesRouter.get('/', categoriesController.getCategories)

module.exports = categoriesRouter;