const Sequelize = require("sequelize");

const connection = new Sequelize("kibondo", "postgres", "didiernu0304", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = connection;
