'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('difficulty', [
      {
        multiplier: 1,
        loss: 1,
        click_nbr: 100,
        hard: false
      },
      {
        multiplier: 2,
        loss: 2,
        click_nbr: 75,
        hard: false
      },
      {
        multiplier: 3,
        loss: 3,
        click_nbr: 50,
        hard: true
      },
      {
        multiplier: 4,
        loss: 4,
        click_nbr: 25,
        hard: true
      },
    ], {});
  },


  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
