'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _crypto = require('crypto');

var _os = require('os');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tableName = 'rooms';

var Table = global.sequelize.define(tableName, {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    type: _sequelize2.default.INTEGER
  },
  start_time: {
    type: _sequelize2.default.DATE,
    allowNull: false,
    trim: true,
    defaultValue: _sequelize2.default.fn('NOW')
  },
  background: {
    type: _sequelize2.default.STRING,
    allowNull: false,
    trim: true
  },
  hot_potatoe: {
    type: _sequelize2.default.STRING,
    allowNull: false,
    trim: true
  },
  count: {
    type: _sequelize2.default.INTEGER,
    allowNull: false,
    trim: true,
    defaultValue: 0
  },
  level: {
    type: _sequelize2.default.INTEGER,
    defaultValue: 0,
    trim: true
  },
  createdAt: {
    allowNull: false,
    type: _sequelize2.default.DATE,
    defaultValue: _sequelize2.default.fn('NOW')
  },
  updatedAt: {
    allowNull: false,
    type: _sequelize2.default.DATE,
    defaultValue: _sequelize2.default.fn('NOW')
  },
  deletedAt: {
    type: _sequelize2.default.DATE
  }
});

Table.associate = function (models) {
  Table.belongsTo(models.difficulties, { targetKey: 'id', foreignKey: 'level' });
};

Table.getRooms = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(models) {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', Table.findAll({
              include: [{ model: models.difficulties, attributes: ['id', 'title', 'description', 'background', 'multiplier', 'loss', 'click_nbr'] }],
              attributes: ['id', 'start_time', 'background', 'hot_potatoe']
            }));

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

Table.getRoomById = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(models, id) {
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt('return', Table.findById(id, {
              include: [{ model: models.difficulties, attributes: ['id', 'title', 'description', 'multiplier', 'loss', 'click_nbr'] }],
              attributes: ['id', 'start_time', 'background', 'count', 'hot_potatoe']
            }));

          case 1:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function (_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

Table.increaseCount = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(_ref4) {
    var models = _ref4.models,
        id = _ref4.id;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt('return', Table.getRoomById(models, id).then(function (room) {
              return Table.updateOne({ count: room.count + 1 }, { where: { id: id } }).then(function (room) {
                return Table.checkDestroy({ models: models, id: id });
              });
            }));

          case 1:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function (_x4) {
    return _ref3.apply(this, arguments);
  };
}();

Table.checkDestroy = function () {
  var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(_ref6) {
    var models = _ref6.models,
        id = _ref6.id;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt('return', Table.getRoomById(models, id).then(function (room) {
              if (room.count < room.difficulty.click_nbr) {
                return 'alive';
              } else {
                return Table.destroy({ where: { id: id } }).then(function (room) {
                  return Table.create({ hot_potatoe: "potatoe.png", background: "back.png", level: Math.floor(Math.random() * Math.floor(7) + 1) }).then(function (room) {
                    return 'destroy';
                  });
                });
              }
            }));

          case 1:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, undefined);
  }));

  return function (_x5) {
    return _ref5.apply(this, arguments);
  };
}();

Table.changeBackground = function () {
  var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(_ref8) {
    var id = _ref8.id,
        background = _ref8.background;
    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt('return', Table.updateOne({ background: background }, { where: { id: id } }));

          case 1:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, undefined);
  }));

  return function (_x6) {
    return _ref7.apply(this, arguments);
  };
}();

Table.changeHotPotatoe = function () {
  var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(_ref10) {
    var id = _ref10.id,
        hot_potatoe = _ref10.hot_potatoe;
    return _regenerator2.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            return _context6.abrupt('return', Table.updateOne({ hot_potatoe: hot_potatoe }, { where: { id: id } }));

          case 1:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, undefined);
  }));

  return function (_x7) {
    return _ref9.apply(this, arguments);
  };
}();

Table.changeDifficulty = function () {
  var _ref11 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(_ref12) {
    var id = _ref12.id,
        level = _ref12.level;
    return _regenerator2.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            return _context7.abrupt('return', Table.updateOne({ level: level }, { where: { id: id } }));

          case 1:
          case 'end':
            return _context7.stop();
        }
      }
    }, _callee7, undefined);
  }));

  return function (_x8) {
    return _ref11.apply(this, arguments);
  };
}();

exports.default = Table;