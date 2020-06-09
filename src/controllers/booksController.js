const Book = require('../models/bookModel');

exports.createBook = (req, res) => {
  Book.create({
    title: req.body.title,
    author: req.body.author,
    illustrator: req.body.illustrator,
    pages: req.body.pages,
    image: `${req.file.filename}`,
  })
    .then(() => {
      console.log('book succesfully added');
      res.redirect('/books');
    })
    .catch((err) => console.error(err));
};

exports.getAllBooks = (req, res) => {
  Book.findAll()
    .then((books) => {
      res.render('books', { books });
    })
    .catch((err) => console.log(err));
};
