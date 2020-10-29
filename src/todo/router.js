const express = require('express');
const router = express.Router();
const {verify} = require('./../authentication/auth');
const controller = require('./controller');

router.post('/',verify, controller.addTodo);
router.get('/',verify, controller.getAllTodo);
router.get('/:id',verify, controller.getById);
router.put('/:id',verify, controller.updateTodo);
router.delete('/:id',verify, controller.deleteTodo);

module.exports = router;