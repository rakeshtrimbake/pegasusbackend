const mongoose = require('mongoose');
const Joi = require('@hapi/joi');
const todoSchema = new mongoose.Schema({
    todoId:{
        type:String,
        required:true
    },
    description:{
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

const todoValidate = Joi.object({
    description:Joi.string().required(),
    isActive:Joi.boolean()
})

module.exports = {
    todoSchema,
    todoValidate
}