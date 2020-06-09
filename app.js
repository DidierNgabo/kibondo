const express = require('express');

const app = express();
const port = process.env.Port || 3000;
const bodyParser = require('body-parser');
const path = require('path');

// routes

const booksRoutes = require('./src/routes/booksRoutes');
const servicesRoutes = require('./src/routes/servicesRoutes');
const aboutRoute = require('./src/routes/aboutRoute');
const contactRoute = require('./src/routes/contactRoute');

// db
const connection = require('./config/connection');
const Book = require('./src/models/bookModel');
const Category = require('./src/models/categoryModel');

const books = [
  {
    title: 'gakumi',
    author: 'didi',
    illustrator: 'didi',
    pages: '22',
    image: './images/didi.jpg',
  },
  {
    title: 'gasore',
    author: 'didier',
    illustrator: 'didier',
    pages: '20',
    image: './images/didi.jpg',
  },
  {
    title: 'gakumi ajya  kwishuri',
    author: 'didas',
    illustrator: 'didas',
    pages: '25',
    image: './images/didi.jpg',
  },
];
const categories = [
  {
    name: 'Board Books',
    description: 'book made of board',
    image: './images/board.jpg',
  },
  {
    name: 'Fabric Books',
    description: 'book made of clothers',
    image: './images/fabric.jpg',
  },
  {
    name: 'Read Aloud Books',
    description: 'book made for nursery students ',
    image: './images/readAloud.jpg',
  },
  {
    name: 'Reading Books',
    description: 'story books for grown kids',
    image: './images/reading.jpg',
  },
  {
    name: 'Cartoon Books',
    description: 'cartoon books for any age',
    image: './images/cartoon.jpg',
  },
];

// create a bookCategory table with bookId and CategoryID
Book.belongsToMany(Category, { as: 'category', through: 'BookCategories' });
Category.belongsToMany(Book, { as: 'book', through: 'BookCategories' });
connection
  .sync({
    logging: console.log,
    force: true,
  })
  .then(() => {
    Book.bulkCreate(books)
      .then(() => console.log('successfully added books'))
      .catch((err) => console.log(err));
  })
  .then(() => {
    Category.create(categories[0])
      .then((category) => {
        category.setBook([1, 2]);
      })
      .then(() => console.log('success adding categories'))
      .catch((err) => console.log(err));
  })
  .then(() => {
    console.log('connection to database established successfully');
  })
  .catch((err) => console.log(err, 'unable to connect to db'));

app.use(express.static('public'));

app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/books', booksRoutes);
app.use('/services', servicesRoutes);
app.use('/about', aboutRoute);
app.use('/contact', contactRoute);
app.get('/', (req, res) => {
  res.render('index');
});
app.get('*', (req, res) => {
  res.send('Page not found');
});
app.listen(port, () => {
  console.log('server listening at "http://localhost:3000"');
});
