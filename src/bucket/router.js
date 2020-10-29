const express = require('express');
const router = express.Router();
const {verify} = require('./../authentication/auth');
const controller = require('./controller');

router.post('/',verify, controller.addCategory);

module.exports = router;