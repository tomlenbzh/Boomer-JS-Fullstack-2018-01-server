'use strict';

module.exports = {
  up: async (queryInterface, Sequelize, models) => {
    await queryInterface.bulkInsert('users', [
      {
        Pseudo: 'Alexandre',
        Password: 'test'
      },
      {
        Pseudo: 'Thomas',
        Password: 'test'
      },
      {
        Pseudo: 'Benoit',
        Password: 'test'
      },
    ], {});    
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('users', null, {});
  }
};
