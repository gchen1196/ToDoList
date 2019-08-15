const Todo = require('../models/index.js');

const getAllTodos = (callback) => {
  Todo.find({}, (err, result) => {
    if (err) {
      callback(err);
    } 
    else {
      callback(null, result)
    }
  })
}

const saveTodo = (data, callback) => {
  const todo = new Todo(data);
  todo.save((err, result) => {
    if (err) {
      callback(err);
    }
    else {
      callback(null, result);
    }
  })
}

const updateTodo = (id, data, callback) => {
  Todo.findByIdAndUpdate(
    id, 
    data, 
    {new: false}, 
    (err, result) => {
      if (err) {
        callback(err);
      }
      else {
        callback(null, result);
      }
  })
}

const deleteTodo = (id, callback) => {
  Todo.findByIdAndRemove(id, (err, result) => {
    if (err) {
      callback(err);
    }
    else {
      callback(null, result);
    }
  })
}

const deleteAllTodos = (callback) => {
  Todo.remove({}, (err, result) => {
    if (err) {
      callback(err);
    }
    else {
      callback(null, result);
    }
  })
}

module.exports = {getAllTodos, saveTodo, updateTodo, deleteTodo, deleteAllTodos};