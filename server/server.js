const express = require("express");
const Users = require('./Users');
const Menu = require('./Menu');
const Merchandise = require('./Merchandise');
const Quotes = require('./Quotes');

const app = express();

// Allow cross-origin requests
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/users", Users.readAll);

app.get("/users/:id", Users.readByPk)

app.get("/menu", Menu.readAll);

app.get("/menu/:id", Menu.readByPk);

app.get("/merchandise", Merchandise.readAll);

app.get("/merchandise/:id", Merchandise.readByPk);

app.get("/quotes", Quotes.readAll);

app.get("/quotes/:id", Quotes.readByPk);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});