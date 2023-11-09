const express = require('express');
const duasController = require('../controllers/duas.controller');

const duas = express.Router();

duas.get('/', duasController.allDua)
duas.get('/category/:id', duasController.getCategoriesDuas)
duas.get('/:id', duasController.getDuasById)

module.exports = duas;