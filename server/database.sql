DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users(
  user_id BIGSERIAL NOT NULL PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  mail_address VARCHAR(255),
  phone_number VARCHAR(20),
  email VARCHAR (355) UNIQUE NOT NULL,
  password VARCHAR (50) NOT NULL,
  created_on TIMESTAMP NOT NULL,
  last_login TIMESTAMP,
  super_admin BOOLEAN NOT NULL
);

DROP TABLE IF EXISTS menu CASCADE;
CREATE TABLE menu(
  menu_id BIGSERIAL NOT NULL PRIMARY KEY,
  menu_name VARCHAR (50) NOT NULL,
  menu_description VARCHAR (500) NOT NULL,
  ingredients VARCHAR (355) NOT NULL,
  price_min NUMERIC(19, 2) NOT NULL,
  price_max NUMERIC(19, 2) NOT NULL,
  image_location VARCHAR(255),
  allergies VARCHAR (50),
  diet_restriction VARCHAR(50)
);

DROP TABLE IF EXISTS quotes CASCADE;
CREATE TABLE quotes(
  quote_id BIGSERIAL NOT NULL PRIMARY KEY,
  created_on TIMESTAMP NOT NULL,
  organization VARCHAR (255),
  phone_number VARCHAR (20),
  event_address VARCHAR (255),
  event_date TIMESTAMP,
  email VARCHAR (355),
  head_count VARCHAR (255),
  additional_comment VARCHAR (500),
  contact_method VARCHAR(20)
);

DROP TABLE IF EXISTS merchandise CASCADE;
CREATE TABLE merchandise(
  merchandise_id BIGSERIAL NOT NULL PRIMARY KEY,
  merchandise_name VARCHAR(50) NOT NULL,
  merchandise_description VARCHAR (500),
  price NUMERIC(19, 2) NOT NULL,
  image_location VARCHAR(255)
);

insert into users (first_name, last_name, mail_address, phone_number, email, password, created_on, last_login, super_admin) values ('Robert', 'Ziegler', '123 Fake street, ST 12345', '123-456-7890', 'fakeeamil@gmail.com', 'omitted', 'Mon 09 Mar 2020 02:29:53 PM PDT', 'Mon 09 Mar 2020 02:29:53 PM PDT', 'true' );

insert into menu (menu_name, menu_description, ingredients, price_min, price_max, image_location, allergies, diet_restriction) values ('Beef wrap', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptate, reprehenderit error pariatur laudantium magni incidunt veritatis voluptatem! Eaque quos alias mollitia, pariatur et necessitatibus expedita ratione dolor aperiam odio!', 'Beef and cheese', 7.00, 12.00, '../../assets/images/mock-images/item_1.jpg', 'None', 'Vegan');
insert into menu (menu_name, menu_description, ingredients, price_min, price_max, image_location, allergies, diet_restriction) values ('Quesadilla', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptate, reprehenderit error pariatur laudantium magni incidunt veritatis voluptatem! Eaque quos alias mollitia, pariatur et necessitatibus expedita ratione dolor aperiam odio!', 'Beef and cheese', 5.00, 10.00, '../../assets/images/mock-images/item_2.jpg', 'None', 'Vegetarian');
/* insert into menu (menu_name, menu_description, ingredients, price_min, price_max, image_location, allergies, diet_restriction) values ('Human', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptate, reprehenderit error pariatur laudantium magni incidunt veritatis voluptatem! Eaque quos alias mollitia, pariatur et necessitatibus expedita ratione dolor aperiam odio!', 'Beef and cheese', 10.00, 20.00, '../../assets/images/mock-images/item_3.jpg', 'None', 'Gluten Free'); */
insert into menu (menu_name, menu_description, ingredients, price_min, price_max, image_location, allergies, diet_restriction) values ('Ribeye', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptate, reprehenderit error pariatur laudantium magni incidunt veritatis voluptatem! Eaque quos alias mollitia, pariatur et necessitatibus expedita ratione dolor aperiam odio!', 'Beef', 15.00, 25.00, '../../assets/images/mock-images/item_4.jpg', 'None', 'Gluten Free');
insert into menu (menu_name, menu_description, ingredients, price_min, price_max, image_location, allergies, diet_restriction) values ('Hamburger', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptate, reprehenderit error pariatur laudantium magni incidunt veritatis voluptatem! Eaque quos alias mollitia, pariatur et necessitatibus expedita ratione dolor aperiam odio!', 'Beef', 15.00, 25.00, '../../assets/images/mock-images/item_5.jpg', 'None', 'Gluten Free');
insert into menu (menu_name, menu_description, ingredients, price_min, price_max, image_location, allergies, diet_restriction) values ('Brisket', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptate, reprehenderit error pariatur laudantium magni incidunt veritatis voluptatem! Eaque quos alias mollitia, pariatur et necessitatibus expedita ratione dolor aperiam odio!', 'Beef', 15.00, 25.00, '../../assets/images/mock-images/item_6.jpg', 'None', 'Gluten Free');

insert into merchandise (merchandise_name, merchandise_description, price, image_location) values ('Fitted Hat', 'Stylish Salt and Ginger hat', 25.00, '../../assets/images/mock-images/merchandise_fitted_hat.jpg');


GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO saltandginger;