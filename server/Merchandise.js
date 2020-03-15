const Sequelize = require('sequelize');
const database = require('./database');


const Merchandise = database.define(
  'merchandise',
    {
      merchandise_id: { 
          type: Sequelize.BIGINT, 
          primaryKey: true, 
          autoIncrement: true, 
          allowNull: false
      },

      merchandise_name: { 
            type: Sequelize.STRING(50),
            allowNull: false
      },

      merchandise_description: { 
        type: Sequelize.STRING(500),
        allowNull: false
      },

      price: {
        type: Sequelize.NUMERIC(19, 2),
        allowNull: false
      },

      image_location: { 
        type: Sequelize.STRING(255),
        allowNull: false
      },
    },
    { 
      timestamps: false,
      freezeTableName: true
     }
    
    );

Merchandise.readAll = async (req, res) => {
  try {
    const merchandise = await Merchandise.findAll();
    return res.send({ merchandise });
  } catch (error) {
    return res.send(error);
  }
};

Merchandise.readByPk = async (req, res) => {
  try {
    const merchandise = await Merchandise.findByPk(req.params.id);
    return res.send({ merchandise });
  } catch (error) {
    return res.send(error);
  }
};

module.exports = Merchandise;