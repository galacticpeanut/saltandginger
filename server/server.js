const express = require("express");
const app = express();

/* CREATE TABLE user(
  user_id serial PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  mail_address VARCHAR(255) UNIQUE,
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
    last_name: "Ziegler",
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
  image_location VARCHAR(255)
  allergies VARCHAR (50)
);
*/

const menu = [
  {
    item_id: 1,
    name: "Beef wrap",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptate, reprehenderit error pariatur laudantium magni incidunt veritatis voluptatem! Eaque quos alias mollitia, pariatur et necessitatibus expedita ratione dolor aperiam odio!",
    ingredients: "Beef and cheese",
    price_min: 7,
    price_max: 12,
    image_location: "../../assets/images/mock-images/item_1.jpg",
    allergies: "None",
    diet_restriction: "Vegan",
  },
  {
    item_id: 2,
    name: "Mexican Quesadilla",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptate, reprehenderit error pariatur laudantium magni incidunt veritatis voluptatem! Eaque quos alias mollitia, pariatur et necessitatibus expedita ratione dolor aperiam odio!",
    ingredients: "Beef and cheese",
    price_min: 5,
    price_max: 10,
    image_location: "../../assets/images/mock-images/item_2.jpg",
    allergies: "None",
    diet_restriction: "Vegetarian",
  },
  {
    item_id: 3,
    name: "Human",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptate, reprehenderit error pariatur laudantium magni incidunt veritatis voluptatem! Eaque quos alias mollitia, pariatur et necessitatibus expedita ratione dolor aperiam odio!",
    ingredients: "Beef and cheese",
    price_min: 10,
    price_max: 20,
    image_location: "../../assets/images/mock-images/item_3.jpg",
    allergies: "None",
    diet_restriction: "Gluten Free"
  },
  {
    item_id: 4,
    name: "Ribeye",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptate, reprehenderit error pariatur laudantium magni incidunt veritatis voluptatem! Eaque quos alias mollitia, pariatur et necessitatibus expedita ratione dolor aperiam odio!",
    ingredients: "Beef",
    price_min: 15,
    price_max: 25,
    image_location: "../../assets/images/mock-images/item_4.jpg",
    allergies: "None",
    diet_restriction: "Gluten Free"
  },
  {
    item_id: 5,
    name: "Hamburger",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptate, reprehenderit error pariatur laudantium magni incidunt veritatis voluptatem! Eaque quos alias mollitia, pariatur et necessitatibus expedita ratione dolor aperiam odio!",
    ingredients: "Beef",
    price_min: 15,
    price_max: 25,
    image_location: "../../assets/images/mock-images/item_5.jpg",
    allergies: "None",
    diet_restriction: "Gluten Free"
  },
  {
    item_id: 6,
    name: "Brisket",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptate, reprehenderit error pariatur laudantium magni incidunt veritatis voluptatem! Eaque quos alias mollitia, pariatur et necessitatibus expedita ratione dolor aperiam odio!",
    ingredients: "Beef",
    price_min: 15,
    price_max: 25,
    image_location: "../../assets/images/mock-images/item_6.jpg",
    allergies: "None",
    diet_restriction: "Gluten Free"
  }
]

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
    items: [menu[0], menu[1], menu[2]],
    user: users[0],
  }
]
// Allow cross-origin requests
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH"); 
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

  return res.json(menu[idx]);
})

app.get("/orders", (req, res) => {
  return res.json(orders);
})

app.get("/orders/:id", (req, res) => {
  const idx = req.params.id - 1;

  if (!orders[idx]) {
    return res.status(404).json({ error: "Order not found"})
  }

  return res.json(orders[idx]);
})

app.listen(3000, () => {
  console.log("Server running on port 3000");
});