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

var _utils = require('../base/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tableName = 'users';

var Table = global.sequelize.define(tableName, {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: _sequelize2.default.INTEGER
  },
  pseudo: {
    type: _sequelize2.default.STRING,
    allowNull: false,
    unique: true,
    trim: true
  },
  password: {
    type: _sequelize2.default.STRING,
    allowNull: false
  },
  defeat: {
    type: _sequelize2.default.INTEGER,
    defaultValue: 0,
    trim: true
  },
  score: {
    type: _sequelize2.default.INTEGER,
    defaultValue: 0,
    trim: true
  },
  rank: {
    type: _sequelize2.default.INTEGER,
    defaultValue: 0,
    trim: true
  }
}, {
  hooks: {
    beforeCreate: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(instance, options) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt('return', Table.beforeCreateUpdate(instance, options, true));

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, undefined);
      }));

      return function beforeCreate(_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }(),
    beforeUpdate: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(instance, options) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt('return', Table.beforeCreateUpdate(instance, options, false));

              case 1:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, undefined);
      }));

      return function beforeUpdate(_x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    }()
  }
});

Table.beforeCreateUpdate = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(instance, options, isCreate) {
    var fields, exist, _validator$get, args, msg;

    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            fields = options.fields;

            if (!(isCreate && fields.includes('pseudo'))) {
              _context3.next = 6;
              break;
            }

            _context3.next = 4;
            return Table.findOne({ where: { pseudo: instance.pseudo } });

          case 4:
            exist = _context3.sent;

            if (exist) {
              Table.throw(400, global.__('Pseudo is already in use'));
            }

          case 6:
            if (isCreate || fields.includes('password')) {
              _validator$get = _utils.validator.get('password'), args = _validator$get.args, msg = _validator$get.msg;

              if (!instance.password.match(args)) {
                Table.throw(400, msg);
              }
              instance.password = _utils.crypto.encryptPassword(instance.password);
            }

          case 7:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function (_x5, _x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}();

Table.associate = function (models) {};

Table.getUserById = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(id) {
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt('return', Table.findById(id, {
              attributes: ['id', 'pseudo', 'password', 'defeat', 'score', 'rank']
            }));

          case 1:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, undefined);
  }));

  return function (_x8) {
    return _ref4.apply(this, arguments);
  };
}();

Table.gainScore = function () {
  var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(_ref6) {
    var models = _ref6.models,
        roomId = _ref6.roomId,
        userId = _ref6.userId;
    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt('return', models.rooms.getRoomById(models, roomId).then(function (room) {
              var multiplier = room.difficulty.multiplier;
              return Table.getUserById(userId).then(function (user) {
                return Table.updateOne({ score: user.score + 5 * multiplier }, { where: { id: userId } }).then(function (user) {
                  return Table.getUserById(userId).then(function (user) {
                    console.log(user.score);
                    return user.score;
                  });
                });
              });
            }));

          case 1:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, undefined);
  }));

  return function (_x9) {
    return _ref5.apply(this, arguments);
  };
}();

Table.defeat = function () {
  var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(_ref8) {
    var userId = _ref8.userId;
    return _regenerator2.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            return _context6.abrupt('return', Table.getUserById(userId).then(function (user) {
              return Table.updateOne({ score: user.score / 2, defeat: user.defeat + 1 }, { where: { id: userId } }).then(function (user) {
                return Table.getUserById(userId).then(function (user) {
                  console.log("Console defeat = ", user.score);
                  return user.score;
                });
              });
            }));

          case 1:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, undefined);
  }));

  return function (_x10) {
    return _ref7.apply(this, arguments);
  };
}();

Table.changePassword = function () {
  var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(_ref10) {
    var id = _ref10.id,
        password = _ref10.password;
    return _regenerator2.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            return _context7.abrupt('return', Table.updateOne({ password: password }, { where: { id: id } }));

          case 1:
          case 'end':
            return _context7.stop();
        }
      }
    }, _callee7, undefined);
  }));

  return function (_x11) {
    return _ref9.apply(this, arguments);
  };
}();

Table.changePseudo = function () {
  var _ref11 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(_ref12) {
    var id = _ref12.id,
        pseudo = _ref12.pseudo;
    return _regenerator2.default.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            return _context8.abrupt('return', Table.updateOne({ pseudo: pseudo }, { where: { id: id } }));

          case 1:
          case 'end':
            return _context8.stop();
        }
      }
    }, _callee8, undefined);
  }));

  return function (_x12) {
    return _ref11.apply(this, arguments);
  };
}();

Table.changeDefeat = function () {
  var _ref13 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9(_ref14) {
    var id = _ref14.id,
        defeat = _ref14.defeat;
    return _regenerator2.default.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            return _context9.abrupt('return', Table.updateOne({ defeat: defeat }, { where: { id: id } }));

          case 1:
          case 'end':
            return _context9.stop();
        }
      }
    }, _callee9, undefined);
  }));

  return function (_x13) {
    return _ref13.apply(this, arguments);
  };
}();

Table.changeScore = function () {
  var _ref15 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee10(_ref16) {
    var id = _ref16.id,
        score = _ref16.score;
    return _regenerator2.default.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            return _context10.abrupt('return', Table.updateOne({ score: score }, { where: { id: id } }));

          case 1:
          case 'end':
            return _context10.stop();
        }
      }
    }, _callee10, undefined);
  }));

  return function (_x14) {
    return _ref15.apply(this, arguments);
  };
}();

Table.changeRank = function () {
  var _ref17 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee11(_ref18) {
    var id = _ref18.id,
        rank = _ref18.rank;
    return _regenerator2.default.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            return _context11.abrupt('return', Table.updateOne({ rank: rank }, { where: { id: id } }));

          case 1:
          case 'end':
            return _context11.stop();
        }
      }
    }, _callee11, undefined);
  }));

  return function (_x15) {
    return _ref17.apply(this, arguments);
  };
}();

exports.default = Table;