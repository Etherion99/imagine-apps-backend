let express = require('express');
let userController = require('../controllers/user.js');

let api = express.Router();

api.get('/users', userController.getAll);

module.exports = api;