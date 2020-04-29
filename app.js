const express = require("express");
const app = express();
const port = process.env.Port || 3000;
const bodyParser = require("body-parser");
const path = require("path");
const multer = require("multer");

//set Storage engine

const storage = multer.diskStorage({
  destination: "./public/uploads",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

//init upload
const upload = multer({
  storage: storage,
}).single("image");

//routes
const booksRoutes = require("./src/routes/booksRoutes")(upload);
const servicesRoutes = require("./src/routes/servicesRoutes");
const aboutRoute = require("./src/routes/aboutRoute");
const contactRoute = require("./src/routes/contactRoute");

//db
const { Client } = require("pg");
const connection = require("./config/connection");
const Book = require("./src/models/bookModel");

connection
  .sync({
    logging: console.log,
  })
  .then(() => {
    console.log("connection to database established successfully");
  })
  .catch((err) => console.log(err, "unable to connect to db"));

app.use(express.static(path.join(__dirname, "/public")));

app.set("views", path.join(__dirname, "./src/views"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/books", booksRoutes);
app.use("/services", servicesRoutes);
app.use("/about", aboutRoute);
app.use("/contact", contactRoute);
app.get("/", (req, res) => {
  res.render("index");
});
app.get("*", (req, res) => {
  res.send("Page not found");
});
app.listen(port, () => {
  console.log(`server listening at "http://localhost:3000"`);
});
