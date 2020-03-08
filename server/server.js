const express = require("express");
const app = express();

/* CREATE TABLE user(
  user_id serial PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  mail_address VARCHAR(255),
  super_admin BOOLEAN NOT NULL,
  phone_number VARCHAR(20),
  email VARCHAR (355) UNIQUE NOT NULL,
  password VARCHAR (50) NOT NULL,
  created_on TIMESTAMP NOT NULL,
  last_login TIMESTAMP
);
*/
// Our users which will be queried by their index

date = new Date();

const users = [
  {
    user_id: 1,
    first_name: "Robert",
    last_lame: "Ziegler",
    mail_address: "123 Fake street, ST 12345",
    super_admin: false,
    phone_number: "",
    email: "fakeemail@gmail.com",
    password: "omitted",
    created_on: date.getTime(),
    last_login: date.getTime()
  }
];

/*
CREATE TABLE menu(
  item_id serial PRIMARY KEY,
  name VARCHAR (50) UNIQUE NOT NULL,
  description VARCHAR (50) NOT NULL,
  ingredients VARCHAR (355) UNIQUE NOT NULL,
  price TIMESTAMP NOT NULL,
  image_location TIMESTAMP
  allergies VARCHAR (50)
);
*/

const menu = [
  {
  item_id: 1,
  name: "Hamburger",
  description: "Has some meat has some cheese, you know the usual",
  ingredients: "Beef and cheese",
  price: 10,
  image_location: "https://en.wikipedia.org/wiki/Hamburger#/media/File:RedDot_Burger.jpg",
  allergies: "None",
  }
];

/*
CREATE TABLE orders(
  order_id serial PRIMARY KEY,
  created_on TIMESTAMP NOT NULL,
  items
  user
);
*/

const orders = [
  {
    order_id: 1,
    created_on: date.getTime(),
    items: [menu[0]],
    user: users[0],
  }
]
// Allow cross-origin requests
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/users", (req, res) => {
  return res.json(users);
});

app.get("/user/:id", (req, res) => {
  // To prevent the ID "0" we'll simply subtract by one. This way we can query for id = 2 which will serve us 1, etc.
  const idx = req.params.id - 1;

  if (!users[idx]) {
    return res.status(404).json({ error: "User not found" });
  }

  return res.json(users[idx]);
});


app.get("/menu", (req, res) => {
  return res.json(menu);
});

app.get("/menu/:id", (req, res) => {
  const idx = req.params.id - 1;

  if (!menu[idx]) {
    return res.status(404).json({ error: "Menu item not found" });
  }
})

app.get("/orders", (req, res) => {
  return res.json(orders);
})

app.get("/orders/:id", (req, res) => {
  const idx = req.params.id = 1;

  if (!oders[idx]) {
    return res.status(404).json({ error: "Order not found"})
  }
})

app.listen(3000, () => {
  console.log("Server running on port 3000");
});