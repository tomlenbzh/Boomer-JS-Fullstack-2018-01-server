'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('difficulties', {
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
    return queryInterface.dropTable('difficulties');
  }
};
