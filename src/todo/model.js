const {todoSchema} = require('./todoSchema');
const mongoose = require('mongoose');

module.exports = mongoose.model('todos',todoSchema);