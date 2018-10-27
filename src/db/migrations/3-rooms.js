'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('rooms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        type: Sequelize.INTEGER,
      },
      start_time: {
        type: Sequelize.DATE,
        allowNull: false,
        trim: true,
        defaultValue: Sequelize.fn('NOW'),
      },
      background: {
        type: Sequelize.STRING,
        allowNull: false,
        trim: true,
      },
      hot_potatoe: {
        type: Sequelize.STRING,
        allowNull: false,
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
    }).then(() => {
      return queryInterface.addColumn(
        'rooms', // name of Target model
        'level', // name of the key we're adding
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'difficulties', // name of Source model
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }
      );
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('rooms');
  }
};
