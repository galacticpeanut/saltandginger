const express = require("express");
const Users = require('./Users');
const Menu = require('./Menu');
const Merchandise = require('./Merchandise');
const Quotes = require('./Quotes');
const PORT = process.env.PORT || 3000;
const app = express();

// Allow cross-origin requests
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/api/users", Users.readAll);

app.get("/api/users/:id", Users.readByPk)

app.get("/api/menu", Menu.readAll);

app.get("/api/menu/:id", Menu.readByPk);

app.get("/api/merchandise", Merchandise.readAll);

app.get("/api/merchandise/:id", Merchandise.readByPk);

app.get("/api/quotes", Quotes.readAll);

app.get("/api/quotes/:id", Quotes.readByPk);

app.listen(PORT, () => {
  console.log("Server running on port 3000");
});