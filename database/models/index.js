const mongoose = require('mongoose');

var todoSchema = mongoose.Schema({
  content: String,
  completion: Boolean
})

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo; 
