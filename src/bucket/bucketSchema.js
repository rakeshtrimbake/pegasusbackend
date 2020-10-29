const mongoose = require('mongoose');
const Joi = require('@hapi/joi');
const bucketSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    isActive:{
        type:Number
    }
},
{
    timestamps:true
})

const bucketValidate = Joi.object({
    name:Joi.string().required(),
    isActive:Joi.boolean()
})

module.exports = {
    bucketSchema,
    bucketValidate
}