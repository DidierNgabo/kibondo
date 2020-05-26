const Sequelize = require("sequelize");
require("dotenv/config");

const connection = new Sequelize(process.env.DB_CONNECTION);

module.exports = connection;
