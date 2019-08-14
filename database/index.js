const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todolist', { useNewUrlParser: true });

var db = mongoose.connection;

db.on('error', () => {
  console.log('fail to connect mongoose');
});
db.once('open', () => {
  console.log('successfully connected to mongoose');
});

module.exports = db;