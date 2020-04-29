const express = require("express");
const servicesRoutes = express.Router();

servicesRoutes.route("/").get((req, res) => {
  res.render("service");
});

module.exports = servicesRoutes;
