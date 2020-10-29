const Todo = require("./model");
const { categoryValidate } = require("./categoryschema");
const errorCreate = require("http-errors");
const {generateTodoId} = require('./utility');
const Product = require('./../product/controller');

const addTodo = async (req, res, next) => {
  try {
    const result = await categoryValidate.validateAsync(req.body);
    const isExist = await Todo.findOne({categoryName:result.categoryName});
    if (isExist)
     throw errorCreate.BadRequest(`${result.description} is already exist`);
     result.todoId = await generateTodoId();
     result.isActive = 1;
    const todo = new Todo(result);
    const todoAdd = await todo.save();
    res.send(todoAdd);
  } catch (error) {
    if (error.isJoi == true) error.status = 422;
    next(error);
  }
};

const getAllTodo = async (req, res, next) => {
  try {
    const todos = await Todo.find({isActive:1}).sort({createdAt:-1});
    res.send(todos);
  } catch (error) {
    if (error.isJoi == true) error.status = 422;
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
      const todo = await Todo.findOne({todoId:req.params.id,isActive:1});
      if(!todo) throw errorCreate.Unauthorized();
      res.send(todo);
  } catch (error) {
      
    if (error.isJoi == true) error.status = 422;
    next(error);
  }
};

const updateTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findOne({todoId:req.params.id});
    if(!todo) throw errorCreate.Unauthorized();
    for (let data in req.query) {
      todo[data] = req.query[data];
    }
    await todo.save();
        res.send(todo);
  } catch (error) {
    if (error.isJoi == true) error.status = 422;
    next(error);
  }
};

const deleteTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findOne({todoId:req.params.id});
    if(!todo) throw errorCreate.Unauthorized();
    todo.isActive = 0;
    await todo.save();
    
    res.send(todo);
  } catch (error) {
    if (error.isJoi == true) error.status = 422;
    next(error);
  }
};

module.exports = {
  addTodo,
  getAllTodo,
  getById,
  updateTodo,
  deleteTodo,
};
