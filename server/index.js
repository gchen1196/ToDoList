const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')
const fn = require('../database/controllers/index.js');
require('../database/index.js');

app.use(express.static(`${__dirname}/../client/dist`));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));


//Provide an endpoint to fetch all your todos
app.get('/todos', (req, res) => {
  fn.getAllTodos((err, result) => {
    if (err) {
      res.status(400);
      res.send(err);
    }
    else {
      res.status(200);
      res.send(result);
    }
  })
})
//Provide an endpoint to enable creating new todos
app.post('/todos', (req, res) => {
  fn.saveTodo(req.body, (err, result) => {
    if (err) {
      res.status(400);
      res.send(err);
    }
    else {
      res.status(200);
      res.send(result);
    }
  })
})
//Provide an endpoint to update a todo
app.put('/todos', (req, res) => {
  const id = req.body.id;
  const data = req.body.toUpdate;
  fn.updateTodo(
    id,
    data,
    (err, result) => {
      if (err) {
        res.status(400);
        res.send(err);
      }
      else {
        res.status(200);
        res.send(result);
      }
    }
  )
})
//Provide an endpoint to delete a todo
app.delete('/todo', (req, res) => {
  const id = req.body;
  fn.deleteTodo(id, (err, result) => {
    if (err) {
      res.status(400);
      res.send(err);
    }
    else {
      res.status(200);
      res.send(result)
    }
  })
})
//Provide an endpoint to delete all todos
app.delete('/todos', (req, res) => {
  fn.deleteAllTodos((err, result) => {
    if (err) {
      res.status(400);
      res.send(err);
    }
    else {
      res.status(200);
      res.status(result);
    }
  })
})

app.listen(port, () => console.log(`Listening on port ${port}...`))