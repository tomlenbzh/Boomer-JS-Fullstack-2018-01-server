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
                background: "../../assets/images/Easy1.png",
                description: "This is Room n°1, it is quite easy."
              }, {
                multiplier: 2,
                loss: 2,
                click_nbr: 20,
                hard: false,
                title: "Medium",
                background: "../../assets/images/Medium1.jpg",
                description: "This is Room n°2, for a medium experience."
              }, {
                multiplier: 3,
                loss: 3,
                click_nbr: 30,
                hard: true,
                title: "Hard",
                background: "../../assets/images/Hard1.png",
                description: "This is Room n°3, the challenge begins !"
              }, {
                multiplier: 4,
                loss: 4,
                click_nbr: 25,
                hard: true,
                title: "Evil",
                background: "../../assets/images/Evil1.jpg",
                description: "This is Room n°4, you'll die after the first click !"
              }, {
                multiplier: 1,
                loss: 1,
                click_nbr: 15,
                hard: false,
                title: "Easy",
                background: "../../assets/images/Easy2.jpg",
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