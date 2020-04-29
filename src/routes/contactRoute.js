const express = require("express");
const contactRoute = express.Router();

contactRoute.route("/").get((req, res) => {
  res.render("contact");
});

module.exports = contactRoute;
