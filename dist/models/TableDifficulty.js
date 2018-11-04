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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tableName = 'difficulties';

var Table = global.sequelize.define(tableName, {
  id: {
    allowNull: false,
    primaryKey: true,
    unique: true,
    type: _sequelize2.default.INTEGER
  },
  title: {
    type: _sequelize2.default.STRING,
    allowNull: false,
    trim: true
  },
  description: {
    type: _sequelize2.default.STRING,
    allowNull: false,
    trim: true
  },
  multiplier: {
    type: _sequelize2.default.INTEGER,
    allowNull: false,
    trim: true
  },
  loss: {
    type: _sequelize2.default.INTEGER,
    allowNull: false,
    trim: true
  },
  click_nbr: {
    type: _sequelize2.default.INTEGER,
    allowNull: false,
    trim: true
  },
  hard: {
    type: _sequelize2.default.BOOLEAN,
    allowNull: false,
    default: false
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

Table.associate = function (models) {};

Table.getDifficultyById = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(id) {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', Table.findById(id, {
              attributes: ['id', 'title', 'description', 'multiplier', 'loss', 'click_nbr']
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

Table.changeMultiplier = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(_ref3) {
    var id = _ref3.id,
        multiplier = _ref3.multiplier;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt('return', Table.updateOne({ multiplier: multiplier }, { where: { id: id } }));

          case 1:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
}();

Table.changeLoss = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(_ref5) {
    var id = _ref5.id,
        loss = _ref5.loss;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt('return', Table.updateOne({ loss: loss }, { where: { id: id } }));

          case 1:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function (_x3) {
    return _ref4.apply(this, arguments);
  };
}();

Table.changeHard = function () {
  var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(_ref7) {
    var id = _ref7.id,
        hard = _ref7.hard;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt('return', Table.updateOne({ hard: hard }, { where: { id: id } }));

          case 1:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, undefined);
  }));

  return function (_x4) {
    return _ref6.apply(this, arguments);
  };
}();

exports.default = Table;