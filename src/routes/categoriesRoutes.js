const express = require('express');

const multer = require('../middlewares/multer-config');
const router = express.Router();
const categoriesCtrl = require('../controllers/categoriesController');

router.get('/', categoriesCtrl.getAllCategories);
router.get('/create', categoriesCtrl.getPostForm);
router.post('/', multer, categoriesCtrl.createCategory);

module.exports = router;
