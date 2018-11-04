'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.default = tranformTable;

var _sequelizeTransforms = require('sequelize-transforms');

var _sequelizeTransforms2 = _interopRequireDefault(_sequelizeTransforms);

var _koaSmart = require('koa-smart');

var _utils = require('../utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addFunction(Table) {
  var _this = this;

  Table.findByUuid = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(uuid) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              options.where = options.where || {};
              options.where.uuid = uuid;
              return _context.abrupt('return', Table.findOne(options));

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();

  Table.updateOne = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(values, options) {
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt('return', Table.update(values, (0, _extends4.default)({}, options, { individualHooks: true })));

            case 1:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();
  Table.updateById = function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(id, values) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return Table.addHistory({ newObj: (0, _extends4.default)({}, values, { id: id }) });

            case 2:
              options.where = options.where || {};
              options.where.id = id;
              return _context3.abrupt('return', Table.updateOne(values, options));

            case 5:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this);
    }));

    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }();
  Table.updateByUuid = function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(uuid, values) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              options.where = options.where || {};
              options.where.uuid = uuid;
              return _context4.abrupt('return', Table.updateOne(values, options));

            case 3:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, _this);
    }));

    return function (_x8, _x9) {
      return _ref4.apply(this, arguments);
    };
  }();
  Table.upsertOne = function () {
    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(values, options) {
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt('return', Table.upsert(values, (0, _extends4.default)({}, options, { individualHooks: true })));

            case 1:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, _this);
    }));

    return function (_x11, _x12) {
      return _ref5.apply(this, arguments);
    };
  }();

  Table.destroyOne = function () {
    var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(options) {
      return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              return _context6.abrupt('return', Table.destroy((0, _extends4.default)({}, options, { individualHooks: true })));

            case 1:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, _this);
    }));

    return function (_x13) {
      return _ref6.apply(this, arguments);
    };
  }();
  Table.deleteById = function () {
    var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(id, options) {
      return _regenerator2.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              options = options || {};
              options.where = options.where || {};
              options.where.id = id;
              return _context7.abrupt('return', Table.destroyOne(options));

            case 4:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, _this);
    }));

    return function (_x14, _x15) {
      return _ref7.apply(this, arguments);
    };
  }();

  Table.throw = function (status, message) {
    throw new _koaSmart.ErrorApp(status, message, true);
  };

  Table.putValidator = function (name, regex, errorMessage) {
    return _utils.validator.put({ key: Table, name: name, regex: regex, errorMessage: errorMessage }).regex;
  };
  Table.getValidator = function (name) {
    return _utils.validator.get({ key: Table, name: name });
  };

  Table.toggle = function () {
    var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8() {
      var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var field = arguments[1];
      return _regenerator2.default.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              return _context8.abrupt('return', Table.update((0, _defineProperty3.default)({}, field, global.sequelize.literal('NOT ' + field)), option));

            case 1:
            case 'end':
              return _context8.stop();
          }
        }
      }, _callee8, _this);
    }));

    return function () {
      return _ref8.apply(this, arguments);
    };
  }();
  Table.toggleById = function () {
    var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9(id, field) {
      return _regenerator2.default.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              return _context9.abrupt('return', Table.toggle({ where: { id: id }, individualHooks: true }, field));

            case 1:
            case 'end':
              return _context9.stop();
          }
        }
      }, _callee9, _this);
    }));

    return function (_x17, _x18) {
      return _ref9.apply(this, arguments);
    };
  }();

  Table.increment = function () {
    var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee10() {
      var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var field = arguments[1];
      var nb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      return _regenerator2.default.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              return _context10.abrupt('return', Table.update((0, _defineProperty3.default)({}, field, global.sequelize.literal(field + ' + ' + nb)), option));

            case 1:
            case 'end':
              return _context10.stop();
          }
        }
      }, _callee10, _this);
    }));

    return function () {
      return _ref10.apply(this, arguments);
    };
  }();
  Table.incrementById = function () {
    var _ref11 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee11(id, field) {
      var nb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      return _regenerator2.default.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              return _context11.abrupt('return', Table.increment({ where: { id: id }, individualHooks: true }, field, nb));

            case 1:
            case 'end':
              return _context11.stop();
          }
        }
      }, _callee11, _this);
    }));

    return function (_x21, _x22) {
      return _ref11.apply(this, arguments);
    };
  }();

  Table.list = function () {
    var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (option.attributes === undefined) {
      option.attributes = [];
      for (var key in Table.attributes) {
        if (!['createdAt', 'updatedAt', 'deletedAt'].includes(key)) {
          option.attributes.push(key);
        }
      }
    }
    if (option.order === undefined) {
      if ('ord' in option.attributes) {
        option.order = ['ord', 'ASC'];
      } else if ('value' in option.attributes) {
        option.order = ['value', 'ASC'];
      }
    }
    return Table.findAll(option);
  };

  Table.deleteElem = function (obj, name) {
    obj[name] = undefined;
    if (obj.dataValues) {
      obj.dataValues[name] = undefined;
    }
    obj[name] = undefined;
  };
  Table.deleteElems = function (obj, namesArray) {
    namesArray.forEach(function (name) {
      return Table.deleteElem(obj, name);
    });
  };

  if (!Table.getOpt) {
    Table.getOpt = function () {
      var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return (0, _extends4.default)({
        model: Table,
        attributes: ['id', 'name']
      }, option);
    };
  }

  if (!Table.addHistory) {
    Table.addHistory = function () {
      var _ref12 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee12(_ref13) {
        var newObj = _ref13.newObj;

        var historyOptions, tableHistory, toExcludes, oldObj, newHistory, allAttributes, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, attr;

        return _regenerator2.default.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                if (Table.options.historyOptions) {
                  _context12.next = 2;
                  break;
                }

                return _context12.abrupt('return');

              case 2:
                if (!newObj.update_user_id) {
                  Table.throw(400, 'Need update_user_id in tableHistory');
                }
                historyOptions = Table.options.historyOptions;
                tableHistory = Table.models[historyOptions.tableName];
                toExcludes = ['id', 'createdAt', 'updatedAt', 'deletedAt', 'update_user_id', historyOptions.foreignKey];

                if (newObj.id) {
                  _context12.next = 8;
                  break;
                }

                return _context12.abrupt('return', null);

              case 8:
                _context12.next = 10;
                return Table.findById(newObj.id);

              case 10:
                oldObj = _context12.sent;

                if (!oldObj) {
                  _context12.next = 36;
                  break;
                }

                newHistory = (0, _defineProperty3.default)({
                  update_user_id: newObj.update_user_id
                }, historyOptions.foreignKey, oldObj.id);
                allAttributes = (0, _keys2.default)(tableHistory.attributes).filter(function (elem) {
                  return !toExcludes.includes(elem);
                });
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context12.prev = 17;

                for (_iterator = (0, _getIterator3.default)(allAttributes); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  attr = _step.value;

                  if (newObj[attr] !== undefined && oldObj[attr] !== newObj[attr]) {
                    newHistory[attr] = newObj[attr];
                  }
                }
                _context12.next = 25;
                break;

              case 21:
                _context12.prev = 21;
                _context12.t0 = _context12['catch'](17);
                _didIteratorError = true;
                _iteratorError = _context12.t0;

              case 25:
                _context12.prev = 25;
                _context12.prev = 26;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 28:
                _context12.prev = 28;

                if (!_didIteratorError) {
                  _context12.next = 31;
                  break;
                }

                throw _iteratorError;

              case 31:
                return _context12.finish(28);

              case 32:
                return _context12.finish(25);

              case 33:
                if (!((0, _keys2.default)(newHistory).length > 2)) {
                  _context12.next = 35;
                  break;
                }

                return _context12.abrupt('return', tableHistory.create(newHistory));

              case 35:
                return _context12.abrupt('return', null);

              case 36:
                return _context12.abrupt('return', tableHistory.create((0, _extends4.default)({}, newObj, (0, _defineProperty3.default)({
                  id: undefined
                }, historyOptions.foreignKey, newObj.id))));

              case 37:
              case 'end':
                return _context12.stop();
            }
          }
        }, _callee12, _this, [[17, 21, 25, 33], [26,, 28, 32]]);
      }));

      return function (_x26) {
        return _ref12.apply(this, arguments);
      };
    }();
  }
}

function overloadFunction(Table) {
  var _this2 = this;

  var includeHasMany = function () {
    var _ref14 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee13(obj, paramIncludeHasMany) {
      var promises, _loop, name;

      return _regenerator2.default.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              promises = [];

              _loop = function _loop(name) {
                var paramSelect = paramIncludeHasMany[name];
                promises.push(obj['get' + _utils2.default.ucFirst(name)](paramSelect).then(function (data) {
                  obj[name] = data || [];
                  obj.dataValues[name] = data || [];
                }));
              };

              for (name in paramIncludeHasMany) {
                _loop(name);
              }
              _context13.next = 5;
              return _promise2.default.all(promises);

            case 5:
            case 'end':
              return _context13.stop();
          }
        }
      }, _callee13, this);
    }));

    return function includeHasMany(_x27, _x28) {
      return _ref14.apply(this, arguments);
    };
  }();

  var includeHasManyMulti = function () {
    var _ref15 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee14(objs, paramIncludeHasMany) {
      var promises, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, obj;

      return _regenerator2.default.wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              promises = [];
              _iteratorNormalCompletion2 = true;
              _didIteratorError2 = false;
              _iteratorError2 = undefined;
              _context14.prev = 4;

              for (_iterator2 = (0, _getIterator3.default)(objs); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                obj = _step2.value;

                promises.push(includeHasMany(obj, paramIncludeHasMany));
              }
              _context14.next = 12;
              break;

            case 8:
              _context14.prev = 8;
              _context14.t0 = _context14['catch'](4);
              _didIteratorError2 = true;
              _iteratorError2 = _context14.t0;

            case 12:
              _context14.prev = 12;
              _context14.prev = 13;

              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }

            case 15:
              _context14.prev = 15;

              if (!_didIteratorError2) {
                _context14.next = 18;
                break;
              }

              throw _iteratorError2;

            case 18:
              return _context14.finish(15);

            case 19:
              return _context14.finish(12);

            case 20:
              _context14.next = 22;
              return _promise2.default.all(promises);

            case 22:
            case 'end':
              return _context14.stop();
          }
        }
      }, _callee14, this, [[4, 8, 12, 20], [13,, 15, 19]]);
    }));

    return function includeHasManyMulti(_x29, _x30) {
      return _ref15.apply(this, arguments);
    };
  }();
  // OVERLOAD


  Table.originalFindOne = Table.findOne;
  Table.findOne = function () {
    var _ref16 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee15() {
      var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var result;
      return _regenerator2.default.wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              _context15.next = 2;
              return Table.originalFindOne(option);

            case 2:
              result = _context15.sent;

              if (!(result && option.include_hasMany)) {
                _context15.next = 6;
                break;
              }

              _context15.next = 6;
              return includeHasMany(result, option.include_hasMany);

            case 6:
              return _context15.abrupt('return', result);

            case 7:
            case 'end':
              return _context15.stop();
          }
        }
      }, _callee15, _this2);
    }));

    return function () {
      return _ref16.apply(this, arguments);
    };
  }();
  // OVERLOAD
  Table.originalFindAll = Table.findAll;
  Table.findAll = function () {
    var _ref17 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee16() {
      var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var results;
      return _regenerator2.default.wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              _context16.next = 2;
              return Table.originalFindAll(option);

            case 2:
              results = _context16.sent;

              if (!option.include_hasMany) {
                _context16.next = 6;
                break;
              }

              _context16.next = 6;
              return includeHasManyMulti(results, option.include_hasMany);

            case 6:
              return _context16.abrupt('return', results);

            case 7:
            case 'end':
              return _context16.stop();
          }
        }
      }, _callee16, _this2);
    }));

    return function () {
      return _ref17.apply(this, arguments);
    };
  }();
}

function tranformTable(Table) {
  addFunction(Table);
  overloadFunction(Table);

  var customSequelizeTransforms = {
    transformToNullIfEmpty: function transformToNullIfEmpty(val, definition) {
      if (definition.transformToNullIfEmpty && !val) {
        return null;
      }
      return val;
    }
  };
  (0, _sequelizeTransforms2.default)(Table, customSequelizeTransforms);
}