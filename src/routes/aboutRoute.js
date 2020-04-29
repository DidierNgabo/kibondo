const express = require("express");
const aboutRoute = express.Router();

aboutRoute.route("/").get((req, res) => {
  res.render("about");
});

module.exports = aboutRoute;
