const Sequelize = require('sequelize');
const database = require('./database');


const Menu = database.define(
  'menu',
    {
      menu_id: { 
          type: Sequelize.BIGINT, 
          primaryKey: true, 
          autoIncrement: true, 
          allowNull: false
      },

      menu_name: { 
            type: Sequelize.STRING(50),
            allowNull: false
      },

      menu_description: { 
        type: Sequelize.STRING(500),
        allowNull: false
      },
      
      ingredients: { 
        type: Sequelize.STRING(355),
        allowNull: false
      },
      
      price_min: {
        type: Sequelize.NUMERIC(19, 2),
        allowNull: false
      },
      
      price_max: { 
        type: Sequelize.NUMERIC(19, 2),
        allowNull: false,
      },
      
      image_location: { 
        type: Sequelize.STRING(255),
        allowNull: false
      },
      
      allergies: { 
        type: Sequelize.STRING(50),
        allowNull: true
      },
      
      diet_restriction: { 
        type: Sequelize.STRING(50),
        allowNull: true
      },
    },
    { 
      timestamps: false,
      freezeTableName: true
     }
    
    );

Menu.readAll = async (req, res) => {
  try {
    const menu = await Menu.findAll();
    return res.send({ menu });
  } catch (error) {
    console.log(error);
    return res.send(error);
  }
};

Menu.readByPk = async (req, res) => {
  try {
    const menu = await Menu.findByPk(req.params.id);
    return res.send({ menu });
  } catch (error) {
    return res.send(error);
  }
};

module.exports = Menu;