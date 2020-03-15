const Sequelize = require('sequelize');
const database = require('./database');

const Quotes = database.define(
  'quotes',
  {
    quote_id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },

    created_on: {
      type: Sequelize.DATE,
      allowNull: false
    },

    organization: {
      type: Sequelize.STRING(255),
      allowNull: true
    },

    phone_number: {
      type: Sequelize.STRING(20),
      allowNull: true
    },

    event_address: {
      type: Sequelize.STRING(255),
      allowNull: true
    },

    event_date: {
      type: Sequelize.DATE,
      allowNull: true
    },

    email: {
      type: Sequelize.STRING(355),
      allowNull: true
    },

    head_count: {
      type: Sequelize.STRING(255),
      allowNull: true
    },

    additional_comment: {
      type: Sequelize.STRING(500),
      allowNull: true
    },

    contact_method: {
      type: Sequelize.STRING(20),
      allowNull: true
    },
  },
  {
    timestamps: false,
    freezeTableName: true
  }
);

Quotes.readAll = async(req, res) => {
  try {
    const quotes = await Quotes.findAll();
    return res.send({ quotes });
  } catch (error) {
    return res.send(error);
  }
};

Quotes.readByPk = async (req, res) => {
  try {
    const quotes = await Quotes.findByPk(req.params.id);
    return res.send({ quotes });
  } catch (error) {
    return res.send(error);
  }
};

module.exports = Quotes