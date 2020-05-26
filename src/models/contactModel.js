const Sequelize = require("sequelize");
const connection = require("../../config/connection");

const Contact = connection.define("Contact", {
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  message: Sequelize.STRING,
});

module.exports = Contact;
