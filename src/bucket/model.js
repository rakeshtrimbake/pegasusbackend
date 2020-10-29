const {bucketSchema} = require('./bucketSchema');
const mongoose = require('mongoose');

module.exports = mongoose.model('buckets',bucketSchema);