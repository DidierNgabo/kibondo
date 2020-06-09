const multer = require('multer');

const MIME_TYPES = {
  'images/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png',
};
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, './public/uploads');
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_');
    const extension = MIME_TYPES[file.mimetype];
    callback(null, `${name}${Date.now()}.${extension}`);
  },
});
module.exports = multer({ storage }).single('image');
