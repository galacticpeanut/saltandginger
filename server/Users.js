const Sequelize = require('sequelize');
const database = require('./database');


const Users = database.define(
  'users',
    {
      id: { 
          type: Sequelize.BIGINT, 
          primaryKey: true, 
          autoIncrement: true, 
          allowNull: false
      },

      first_name: { 
            type: Sequelize.STRING(50),
            allowNull: true
      },

      last_name: { 
        type: Sequelize.STRING(50),
        allowNull: true
      },
      
      mail_address: { 
        type: Sequelize.STRING(255),
        allowNull: true
      },
      
      phone_number: {
        type: Sequelize.STRING(20),
        allowNull: true
      },
      
      email: { 
        type: Sequelize.STRING(355),
        allowNull: false,
        unique: true
      },
      
      password: { 
        type: Sequelize.STRING(50),
        allowNull: false
      },
      
      created_on: { 
        type: Sequelize.STRING,
        allowNull: true
      },
      
      last_login: { 
        type: Sequelize.STRING,
        allowNull: true
      },
      
      super_admin: { 
        type: Sequelize.STRING,
        allowNull: false
      },
    },
    { 
      timestamps: false
     }
    );

Users.readAll = async (req, res) => {
  try {
    const users = await Users.findAll();
    return res.send({ users });
  } catch (error) {
    return res.send(error);
  }
};

Users.readByPk = async (req, res) => {
  try {
    const users = await Users.findByPk(req.params.id);
    return res.send({ users });
  } catch (error) {
    return res.send(error);
  }
};

module.exports = Users;