const express = require('express');
const subCategoriesController = require('../controllers/subCategories.controller');


const subCategoriesRouter = express.Router();


subCategoriesRouter.get('/:id', subCategoriesController.getSubCategories)

module.exports = subCategoriesRouter;