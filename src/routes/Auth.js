const express = require('express');
const Route = express.Router();
const registerUser = require('../controllers/Auth');

Route.post('/register', registerUser.registerUser)

module.exports = Route;