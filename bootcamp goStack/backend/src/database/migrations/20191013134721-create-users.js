'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('users', { 
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },

        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
        },

        password_hash: {
          type: Sequelize.STRING,
          allowNull: false
        },

        provider: {
          type: Sequelize.BOOLEAN,
          defaultValue: false,
          allowNull: false
        },

        create_at: {
          type: Sequelize.DATE
        },

        updated_at: {
          type: Sequelize.DATE
        }

      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('users');
  }
};
