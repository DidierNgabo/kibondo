const Category = require('../models/categoryModel');

exports.getAllCategories = (req, res) => {
  res.send('all categories ');
};
exports.getPostForm = (req, res) => {
  res.render('categories');
};
exports.createCategory = (req, res) => {
  Category.create({
    name: req.body.name,
    description: req.body.description,
    image: `${req.file.filename}`,
  })
    .then(() => {
      res.redirect('/categories');
    })
    .catch((err) => {
      console.error(err);
    });
};
