'use strict';

module.exports = {
  up: async (queryInterface) => {
    var sequelize = queryInterface.sequelize; 
    var Rooms = [];
    await sequelize.query('SELECT id FROM difficulty', { type: sequelize.QueryTypes.SELECT})
    .then((difficultyRow) => {
      difficultyRow.forEach(difficulty =>{ 
        Rooms.push({ 
          hot_potatoe: "potatoe.png",
          background: "back.png",
          level: difficulty.id,
        }) 
      });
      queryInterface.bulkInsert('Rooms', Rooms, {});
    })
},


  down: (queryInterface, Sequelize) => {
  }
};
