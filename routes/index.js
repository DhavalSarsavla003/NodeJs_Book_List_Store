const express = require('express');
const bookController =require('../controllers/controller');
const routes = express.Router();

routes.get('/',bookController.defaultController)
routes.get('/addBook',bookController.addBook);
routes.post('/views',bookController.addBook);
routes.get('/viewBook/:id',bookController.viewBook)
routes.get('/editBook/:id',bookController.editBook)
routes.post('/ubdateBook/:id',bookController.updateBook)
routes.get('/deleBook/:id',bookController.deleteBook)

module.exports = routes;
