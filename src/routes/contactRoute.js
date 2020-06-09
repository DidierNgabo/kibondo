const express = require('express');

const contactRoute = express.Router();

const Contact = require('../models/contactModel');

contactRoute.route('/').get((req, res) => {
  res.render('contact');
});
contactRoute.route('/').post((req, res) => {
  const { name, email, message } = req.body;
  Contact.create({
    name,
    email,
    message,
  })
    .then(() => {
      console.log('message successfully saved');
      res.redirect('/contact');
    })
    .catch((err) => console.log(err));
});

module.exports = contactRoute;
