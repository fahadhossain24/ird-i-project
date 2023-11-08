const express = require('express');
const duasController = require('../controllers/duas.controller');

const duas = express.Router();


duas.get('/', duasController.getDuas)

module.exports = duas;