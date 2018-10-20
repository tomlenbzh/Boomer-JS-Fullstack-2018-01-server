'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      pseudo: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        trim: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      defeat: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        trim: true,
      },
      score: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        trim: true,
      },
      rank:{
        type: Sequelize.INTEGER,
        defaultValue: 0,
        trim: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      deletedAt: {
        type: Sequelize.DATE,
      },      
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
