const Sequelize = require('sequelize');

const database = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  logging: true
});

module.exports = database;

