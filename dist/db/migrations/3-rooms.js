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
              return queryInterface.createTable('rooms', {
                id: {
                  allowNull: false,
                  autoIncrement: true,
                  primaryKey: true,
                  unique: true,
                  type: Sequelize.INTEGER
                },
                start_time: {
                  type: Sequelize.DATE,
                  allowNull: false,
                  trim: true,
                  defaultValue: Sequelize.fn('NOW')
                },
                background: {
                  type: Sequelize.STRING,
                  allowNull: false,
                  trim: true
                },
                hot_potatoe: {
                  type: Sequelize.STRING,
                  allowNull: false,
                  trim: true
                },
                count: {
                  type: Sequelize.INTEGER,
                  allowNull: false,
                  trim: true,
                  defaultValue: 0
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
              }).then(function () {
                return queryInterface.addColumn('rooms', // name of Target model
                'level', // name of the key we're adding
                {
                  type: Sequelize.INTEGER,
                  references: {
                    model: 'difficulties', // name of Source model
                    key: 'id'
                  },
                  onUpdate: 'CASCADE',
                  onDelete: 'SET NULL'
                });
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
    return queryInterface.dropTable('rooms');
  }
};