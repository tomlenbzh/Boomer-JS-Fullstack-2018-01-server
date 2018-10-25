'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('difficulty', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        type: Sequelize.INTEGER,
      },
      multiplier: {
        type: Sequelize.INTEGER,
        allowNull: false,
        trim: true,
      },
      loss: {
        type: Sequelize.INTEGER,
        allowNull: false,
        trim: true,
      },
      click_nbr: {
        type: Sequelize.INTEGER,
        allowNull: false,
        trim: true,
      },
      hard: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        default: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('difficulty');
  }
};
