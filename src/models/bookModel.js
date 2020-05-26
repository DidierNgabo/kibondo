const Sequelize = require("sequelize");

const connection = require("../../config/connection");

const Book = connection.define("Book", {
  title: Sequelize.STRING,
  author: Sequelize.STRING,
  illustrator: Sequelize.STRING,
  pages: Sequelize.INTEGER,
  image: Sequelize.BLOB,
});

module.exports = Book;
