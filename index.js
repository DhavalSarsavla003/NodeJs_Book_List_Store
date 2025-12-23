const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const db = require('./DB/db.js')
const routes = require('./routes/index.js');

const server = express();

server.set('view engine', 'ejs');
server.use(express.static('assets'));
server.use(bodyParser.urlencoded({ extended: true }));
server.use('/',routes);
db();

server.listen(3000, () => console.log(`server is running on http://localhost:3000`));