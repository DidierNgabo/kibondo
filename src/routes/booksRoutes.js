const express = require('express');

const booksRoutes = express.Router();
const multer = require('../middlewares/multer-config');
const bookCtrl = require('../controllers/booksController');

booksRoutes.route('/').get(bookCtrl.getAllBooks);
booksRoutes.route('/create').get((req, res) => {
  res.render('bookForm');
});
// eslint-disable-next-line no-unused-vars
booksRoutes.route('/').post(multer, bookCtrl.createBook);

module.exports = booksRoutes;
