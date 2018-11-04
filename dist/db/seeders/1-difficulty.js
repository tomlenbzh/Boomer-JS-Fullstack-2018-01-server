'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  up: function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(queryInterface) {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return queryInterface.bulkInsert('difficulties', [{
                multiplier: 1,
                loss: 1,
                click_nbr: 10,
                hard: false,
                title: "Easy",
                background: "https://orig00.deviantart.net/f5b6/f/2013/292/6/9/epoch_by_caephuier-d6r3nag.png",
                description: "This is Room n°1, it is quite easy."
              }, {
                multiplier: 2,
                loss: 2,
                click_nbr: 20,
                hard: false,
                title: "Medium",
                background: "http://www.wallpapermaiden.com/wallpaper/15792/download/1280x1024/halloween-graveyard-pumpkins-vampire-abandoned.jpg",
                description: "This is Room n°2, for a medium experience."
              }, {
                multiplier: 3,
                loss: 3,
                click_nbr: 30,
                hard: true,
                title: "Hard",
                background: "https://pbs.twimg.com/media/DRd9ThiXkAAUjxX.jpg:large",
                description: "This is Room n°3, the challenge begins !"
              }, {
                multiplier: 4,
                loss: 4,
                click_nbr: 25,
                hard: true,
                title: "Evil",
                background: "https://images7.alphacoders.com/528/528418.jpg",
                description: "This is Room n°4, you'll die after the first click !"
              }, {
                multiplier: 1,
                loss: 1,
                click_nbr: 15,
                hard: false,
                title: "Easy",
                background: "https://cdna.artstation.com/p/assets/images/images/003/052/182/large/todor-hristov-2.jpg?1469028977",
                description: "This is Room n°5, it is quite easy."
              }, {
                multiplier: 2,
                loss: 2,
                click_nbr: 35,
                hard: false,
                title: "Medium",
                background: "https://steamusercontent-a.akamaihd.net/ugc/925926525727156292/1F08870D3FCA29ED959BE10348AA4CECB06879D5/",
                description: "This is Room n°6, for a medium experience."
              }, {
                multiplier: 3,
                loss: 3,
                click_nbr: 5,
                hard: true,
                title: "Hard",
                background: "https://i.gifer.com/RQnj.gif",
                description: "This is Room n°7, the challenge begins !"
              }, {
                multiplier: 4,
                loss: 4,
                click_nbr: 2,
                hard: true,
                title: "Evil",
                background: "https://media.giphy.com/media/MWL7evUUaBvzi/giphy.gif",
                description: "This is Room n°8, you'll die after the first click !"
              }], {});

            case 2:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function up(_x) {
      return _ref.apply(this, arguments);
    };
  }(),

  down: function down(queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
       Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};