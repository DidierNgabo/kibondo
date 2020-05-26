const express = require("express");
const booksRoutes = express.Router();
const Book = require("../models/bookModel");
const fs = require("fs");

function router(upload) {
  booksRoutes.route("/").get((req, res) => {
    Book.findAll()
      .then((books) => {
        res.render("books", { books: books });
      })
      .catch((err) => console.log(err));
  });
  booksRoutes.route("/create").get((req, res) => {
    res.render("bookForm");
  });
  booksRoutes.route("/").post((req, res) => {
    upload(req, res, (err) => {
      if (err) {
        res.render("bookForm", { msg: err });
        console.log(err);
      }
      res.redirect("/books");
      console.log("uploaded successfully");
      const { title, author, illustrator, pages } = req.body;
      const image = fs.readFileSync(req.file.path);
      console.log(req.body);
      Book.create({
        title,
        author,
        illustrator,
        pages,
        image,
      })
        .then(() => {
          console.log("book succesfully added");
        })
        .catch((err) => console.log(err));
    });
  });
  return booksRoutes;
}

module.exports = router;
