'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  up: function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(queryInterface, Sequelize) {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return queryInterface.createTable('difficulties', {
                id: {
                  allowNull: false,
                  autoIncrement: true,
                  primaryKey: true,
                  unique: true,
                  type: Sequelize.INTEGER
                },
                title: {
                  type: Sequelize.STRING,
                  allowNull: false,
                  trim: true
                },
                description: {
                  type: Sequelize.STRING,
                  allowNull: false,
                  trim: true
                },
                background: {
                  type: Sequelize.STRING,
                  allowNull: false,
                  trim: true,
                },
                multiplier: {
                  type: Sequelize.INTEGER,
                  allowNull: false,
                  trim: true
                },
                loss: {
                  type: Sequelize.INTEGER,
                  allowNull: false,
                  trim: true
                },
                click_nbr: {
                  type: Sequelize.INTEGER,
                  allowNull: false,
                  trim: true
                },
                hard: {
                  type: Sequelize.BOOLEAN,
                  allowNull: false,
                  default: false
                },
                createdAt: {
                  allowNull: false,
                  type: Sequelize.DATE,
                  defaultValue: Sequelize.fn('NOW')
                },
                updatedAt: {
                  allowNull: false,
                  type: Sequelize.DATE,
                  defaultValue: Sequelize.fn('NOW')
                },
                deletedAt: {
                  type: Sequelize.DATE
                }
              });

            case 2:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function up(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }(),

  down: function down(queryInterface, Sequelize) {
    return queryInterface.dropTable('difficulties');
  }
};