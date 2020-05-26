const Sequelize = require("sequelize");
const connection = require("../../config/connection");

const Category = connection.define("Category", {
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  image: Sequelize.STRING,
});

module.exports = Category;
