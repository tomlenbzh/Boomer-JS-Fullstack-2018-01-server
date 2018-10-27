'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('difficulties', [
      {
        multiplier: 1,
        loss: 1,
        click_nbr: 100,
        hard: false,
        title: "Easy",
        description: "This is Room n°1, it is quite easy."
      },
      {
        multiplier: 2,
        loss: 2,
        click_nbr: 75,
        hard: false,
        title: "Medium",
        description: "This is Room n°2, for a medium experience."
      },
      {
        multiplier: 3,
        loss: 3,
        click_nbr: 50,
        hard: true,
        title: "Hard",
        description: "This is Room n°3, the challenge begins !"
      },
      {
        multiplier: 4,
        loss: 4,
        click_nbr: 25,
        hard: true,
        title: "Evil",
        description: "This is Room n°4, you'll die after the first click !"
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
