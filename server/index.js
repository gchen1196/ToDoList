const express = require('express')
const app = express()
const port = 3000

require('../database/index.js');

app.use(express.static(`${__dirname}/../client/dist`));

//Provide an endpoint to fetch all your todos

//Provide an endpoint to enable creating new todos
//Provide an endpoint to update a todo
//Provide an endpoint to delete a todo
//Provide an endpoint to delete all todos

app.listen(port, () => console.log(`Listening on port ${port}...`))